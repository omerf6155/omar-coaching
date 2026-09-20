const fs = require('fs');
const path = require('path');

const dir = __dirname;
let html = fs.readFileSync(path.join(dir, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(dir, 'style.css'), 'utf8');
const js = fs.readFileSync(path.join(dir, 'app.js'), 'utf8');

html = html.replace(/<link\s+rel=["']stylesheet["']\s+href=["']style\.css[^"']*["']\s*\/?>/i, '<style>\n' + css + '\n</style>');
html = html.replace(/<script\s+src=["']app\.js[^"']*["']>\s*<\/script>/i, '<script>\n' + js + '\n</script>');

const target = path.join('c:', 'Users', 'Victus', 'OneDrive', 'Desktop', 'Omar_Coaching.html');
fs.writeFileSync(target, html, 'utf8');
console.log('Successfully bundled Omar_Coaching.html! Size:', fs.statSync(target).size, 'bytes');
