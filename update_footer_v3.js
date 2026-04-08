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

  // Change large SVG 'KI' to 'H&L' text
  // We'll target the div class and the svg opening tag, then replace until the closing div
  const kiSvgStart = '<div class="footer__logo-large">';
  const kiSvgEnd = '</div>';
  const svgTarget = '<svg viewBox="0 0 186 107"';
  
  if (html.includes(kiSvgStart)) {
    const startIndex = html.indexOf(kiSvgStart);
    const endIndex = html.indexOf(kiSvgEnd, startIndex + kiSvgStart.length);
    const block = html.substring(startIndex, endIndex + kiSvgEnd.length);
    
    if (block.includes(svgTarget)) {
      html = html.substring(0, startIndex) + 
             `        <div class="footer__logo-large">
          <span style="font-family: var(--font-heading); font-weight: 700; font-size: 100px; color: var(--color-primary); letter-spacing: -4px; line-height: 1;">H&L</span>
        </div>` + 
             html.substring(endIndex + kiSvgEnd.length);
    }
  }

  // Change huge 'H&L' to 'H&L-studio' and adjust size
  // Target specifically the h2 with 25vw
  html = html.replace(/font-size: 25vw;([^>]*?)>H&L<\/h2>/g, 'font-size: 18vw;$1>H&L-studio</h2>');

  // Update F&Q link
  const isSpanish = file.includes('_es');
  const faqUrl = isSpanish ? 'pricing_es.html#faq' : 'pricing.html#faq';
  html = html.replace(/<a href="#" class="footer__menu-link" id="footer-faq">/g, `<a href="${faqUrl}" class="footer__menu-link" id="footer-faq">`);

  fs.writeFileSync(filePath, html);
  console.log('Finalized update for', file);
});
