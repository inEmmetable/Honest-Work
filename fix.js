const fs = require('fs');
const yaml = require('./node_modules/js-yaml');
const TOML = require('./node_modules/@iarna/toml');

const files = [
  'content/about/about-honest-work.md',
  'content/about/contact-us.md',
  'content/about/faq.md',
  'content/the-risks/how-to-change.md',
  'content/the-risks/how-to-protect-yourself.md'
];

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8').replace(/\r\n/g, '\n');
  const parts = content.split('+++\n');
  const tomlData = TOML.parse(parts[1].trim());
  const rest = parts[2];
  const yamlParts = rest.split('---\n');
  const yamlData = yaml.load(yamlParts[1]);
  const body = yamlParts.slice(2).join('---\n');
  const merged = Object.assign({}, tomlData, yamlData);
  const newContent = '+++\n' + TOML.stringify(merged) + '+++\n' + body;
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Fixed: ' + filePath);
});
