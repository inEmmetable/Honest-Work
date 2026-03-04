const fs = require('fs');
const yaml = require('./node_modules/js-yaml');
const TOML = require('./node_modules/@iarna/toml');
const content = fs.readFileSync('content/nav-homepage/_index.md', 'utf8');
const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
if (!match) { console.error('No match found'); process.exit(1); }
const data = yaml.load(match[1]);
const body = match[2];
const tomlContent = TOML.stringify(data);
fs.writeFileSync('content/nav-homepage/_index.md', '+++\n' + tomlContent + '+++\n' + body, 'utf8');
console.log('Done!');
