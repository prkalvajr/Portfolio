import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const candidates = [
  join('dist', 'portfolio', 'browser'),
  join('dist', 'portfolio'),
];

const outputDir = candidates.find((candidate) =>
  existsSync(join(candidate, 'index.html')),
);

if (!outputDir) {
  throw new Error('Could not find Angular build output with index.html.');
}

copyFileSync(join(outputDir, 'index.html'), join(outputDir, '404.html'));
console.log(`Created ${join(outputDir, '404.html')} for GitHub Pages routing.`);

