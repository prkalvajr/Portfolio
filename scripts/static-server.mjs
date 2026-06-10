import { createServer } from 'node:http';
import { existsSync, readFile } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';

const args = new Map();
for (let index = 2; index < process.argv.length; index += 2) {
  args.set(process.argv[index], process.argv[index + 1]);
}

const root = resolve(args.get('--root') ?? 'dist/portfolio/browser');
const port = Number(args.get('--port') ?? 4300);
const host = args.get('--host') ?? '127.0.0.1';

if (!existsSync(join(root, 'index.html'))) {
  throw new Error(`Missing index.html in ${root}. Run npm run build first.`);
}

const contentTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const server = createServer((request, response) => {
  const url = new URL(request.url ?? '/', `http://${host}`);
  let pathname = decodeURIComponent(url.pathname);
  if (pathname === '/' || !extname(pathname)) {
    pathname = '/index.html';
  }

  const filePath = normalize(join(root, pathname));
  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }

  readFile(filePath, (error, data) => {
    if (error) {
      readFile(join(root, 'index.html'), (fallbackError, fallback) => {
        if (fallbackError) {
          response.writeHead(404);
          response.end('Not found');
          return;
        }

        response.writeHead(200, { 'content-type': contentTypes['.html'] });
        response.end(fallback);
      });
      return;
    }

    response.writeHead(200, {
      'content-type': contentTypes[extname(filePath)] ?? 'application/octet-stream',
    });
    response.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Serving ${root} at http://${host}:${port}`);
});

