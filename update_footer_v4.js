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

  // 1. Update the giant footer text (H&L-studio)
  // Adjusted font size to 14vw for a safe maximum on one line
  html = html.replace(/font-size: 18vw;([^>]*?)>H&L-studio<\/h2>/g, 'font-size: 14vw;$1>H&L-studio</h2>');

  // 2. Update the "Book a Call" phrase (only for contact pages usually, but checked in case)
  if (file === 'contact.html') {
    const oldPhraseEn = 'Transform your company with elite AI and automation.<br>Leave your contact info and we\'ll design a custom plan<br>to scale your business without limits starting today.';
    html = html.replace(oldPhraseEn, 'Leave your contact and let’s explore the right setup together.');
  }

  if (file === 'contact_es.html') {
    const oldPhraseEs = 'Transforma tu empresa con IA y automatización de élite.<br>Déjanos tu contacto y diseñaremos un plan a medida<br>para que tu negocio escale sin límites desde hoy mismo.';
    html = html.replace(oldPhraseEs, 'Déjanos tu contacto y exploremos juntos la configuración ideal para tu empresa.');
  }

  fs.writeFileSync(filePath, html);
  console.log('Updated', file);
});
