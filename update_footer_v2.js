const fs = require('fs');
const path = require('path');

const files = [
  'index.html', 'index_es.html', 
  'pricing.html', 'pricing_es.html', 
  'about.html', 'about_es.html', 
  'work.html', 'work_es.html', 
  'contact.html', 'contact_es.html'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Remove Interweb Menu
  // Regex to match the Interweb menu block
  html = html.replace(/<!-- Interweb Menu -->[\s\S]*?<div class="footer__menu">[\s\S]*?<h4 class="footer__menu-title">(Interweb:|Interweb)<\/h4>[\s\S]*?<\/div>[\s\S]*?<\/div>/, '</div>');
  
  // Alternative regex if comments aren't exactly like that
  html = html.replace(/<div class="footer__menu">[\s\S]*?<h4 class="footer__menu-title">(Interweb:|Interweb)<\/h4>[\s\S]*?<\/div>/g, '');

  // 2. Make Logo Bigger (Navbar and Footer)
  // Look for the span with H&L and increase font-size
  html = html.replace(/font-size: 24px;/g, 'font-size: 42px;');
  html = html.replace(/font-size: 25px;/g, 'font-size: 42px;'); // just in case

  // 3. Update Credit Bar
  // Change "Created by HAP–Studio 20—25" or similar to "H&L Studio"
  html = html.replace(/<span class="footer__base-credit">([\s\S]*?)<\/span>/, '<span class="footer__base-credit">H&L Studio</span>');

  fs.writeFileSync(filePath, html);
  console.log('Updated', file);
});
