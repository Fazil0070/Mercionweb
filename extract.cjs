const fs = require('fs');
const html = fs.readFileSync('temp_assets/mercion-website-enhanced.html', 'utf8');
const match = html.match(/data:image\/(png|jpeg);base64,([a-zA-Z0-9+/=]+)/);
if (match) {
  fs.writeFileSync('public/logo.' + match[1], Buffer.from(match[2], 'base64'));
  console.log('Saved public/logo.' + match[1]);
} else {
  console.log('Not found');
}
