const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'work.html');
let html = fs.readFileSync(filePath, 'utf8');

// Extract the top (before the body content begins)
const navRegex = /([\s\S]*?)<!-- ========== WORK HERO ========== -->/;
const navMatch = html.match(navRegex);
const topPart = navMatch ? navMatch[1] : '';

// Extract the footer
const footerRegex = /<!-- ========== 9\. FOOTER ========== -->([\s\S]*)/;
// Wait, work.html doesn't have "9. FOOTER". It has the actual footer class.
// Let's use a simpler regex
function getPreNav() {
  const match = html.match(/([\s\S]*?)<!-- ========== WORK HERO ========== -->/);
  return match[1];
}

function getFooter() {
    // work.html has a footer somewhere
    const match = html.match(/(<footer class="footer"[\s\S]*)/);
    if (match) return match[1];
    return '';
}

const preNavHtml = getPreNav();
const footerHtml = getFooter();

const tagList = ["Automation", "AI Agent", "Voice", "CRM", "Support", "Internal Ops", "SaaS"];
function rTag() {
    return tagList[Math.floor(Math.random() * tagList.length)];
}

function t(title, desc, items) {
   let itemHtml = items.map(p => `
      <div class="pricing-item">
        <div class="pricing-item__info">
          <span class="pricing-item__name">${p}</span>
          <span class="pricing-item__desc"></span>
        </div>
        <div class="pricing-item__price-group" style="min-width: unset; text-align: left; align-items: flex-start;">
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--color-primary); border: 1px solid rgba(0, 102, 255, 0.2); padding: 4px 10px; border-radius: 20px; transition: all 0.3s; cursor: default;" onmouseover="this.style.background='var(--color-primary)'; this.style.color='var(--color-white)'" onmouseout="this.style.background='transparent'; this.style.color='var(--color-primary)'">
            ${rTag()}
          </span>
        </div>
      </div>
   `).join('');

   return `
  <!-- CATEGORY: ${title} -->
  <section class="pricing-category" style="padding-top: 80px; padding-bottom: 20px;">
    <div class="pricing-category__header">
      <h2 class="pricing-category__title">${title}</h2>
      <p class="pricing-category__desc" style="max-width: 600px;">${desc}</p>
    </div>
    <div class="pricing-list">
      ${itemHtml}
    </div>
  </section>`;
}

const bodyContent = `
  <!-- ========== 1. PAGE HERO ========== -->
  <section class="pricing-hero" id="solutions-hero" style="min-height: 70vh; padding-top: 150px; display: flex; flex-direction: column; justify-content: center;">
    <div class="pricing-hero__label" style="font-family: var(--font-heading); font-size: 19px; font-weight: var(--fw-semibold); margin-bottom: 24px; color: var(--color-primary);">Solutions</div>
    <h1 class="pricing-hero__heading" style="max-width: 1000px;">Systems built to automate, assist and operate.</h1>
    <p class="pricing-hero__desc" style="font-family: var(--font-heading); font-size: 24px; letter-spacing: -1px; max-width: 700px; margin-top: 24px;">From simple workflows and AI assistants to voice agents, operational systems and custom software, we build tailored solutions that reduce manual work and help businesses move faster.</p>
    <div style="display: flex; gap: 20px; margin-top: 40px; padding: 0 var(--page-padding);">
        <a href="contact.html" class="video-header__cta" style="border-color: var(--color-primary); background: transparent;">
          <span class="video-header__cta-text" style="color: var(--color-primary);">Book a Call</span>
        </a>
        <a href="pricing.html" class="video-header__cta" style="border-color: transparent; background: transparent;">
          <span class="video-header__cta-text" style="color: var(--color-primary);">View Pricing</span>
        </a>
    </div>
  </section>

  <!-- ========== 2. INTRO ========== -->
  <section style="padding: 100px var(--page-padding); padding-bottom: 40px; border-top: var(--border-thin);">
      <h2 style="font-family: var(--font-heading); font-weight: var(--fw-semibold); font-size: 32px; line-height: 1.2; letter-spacing: -1px; color: var(--color-primary); max-width: 900px;">Our work spans multiple layers — from quick automations and AI assistants to voice systems, internal operations and tailored software products.</h2>
  </section>

  <!-- ========== 3. CATEGORIES ========== -->
${t('Quick Automations', 'High-impact workflow automations that remove repetitive work and improve speed across daily operations.', [
  'Form Notifications', 'Lead Capture Flows', 'CRM Sync', 'Reminder Workflows', 'Internal Task Creation', 'Reporting Automations', 'Lead Routing', 'Basic Document Generation', 'Missed Inquiry Recovery', 'Small Admin Workflows'
])}
${t('AI Assistants', 'Smart assistants that answer, guide, classify, support and automate repetitive communication across business channels.', [
  'Website Chatbot', 'FAQ Assistant', 'WhatsApp Assistant', 'Email Assistant', 'Support Triage Assistant', 'Lead Qualification Assistant', 'Internal Knowledge Assistant', 'AI Response Drafting', 'Multi-channel Assistant'
])}
${t('Voice & Call Agents', 'AI-powered voice systems that answer calls, capture intent, support bookings and route conversations more efficiently.', [
  'AI Receptionist', 'Booking by Phone', 'Call Qualification Agent', 'Voice FAQ Agent', 'Missed Call Recovery', 'Follow-up Call Workflows', 'Call Routing Agent', 'Frontline Phone Support Agent'
])}
${t('Business Systems', 'Larger operational systems that connect workflows, communication, approvals, data and team processes into one coordinated setup.', [
  'Sales Workflow System', 'Support Workflow System', 'Client Onboarding System', 'Booking & Reminder System', 'Reporting & Approval System', 'Ecommerce Operations Flow', 'Internal Ops System', 'Multi-tool Workflow Architecture', 'Department-Level Automation Layer'
])}
${t('Custom Systems / Tailored SaaS', 'For businesses that need more than workflows: tailored software, internal tools and operational products designed around their specific business model.', [
  'Internal Tools', 'Client Portals', 'Operational Dashboards', 'Workflow-heavy Platforms', 'AI-powered Service Software', 'Vertical SaaS MVPs', 'Multi-user Custom Systems'
])}

  <!-- ========== 4. INDUSTRIES ========== -->
  <section class="about-talks" id="target-industries" style="border-top: var(--border-thin);">
    <div class="about-talks__left">
      <h3 class="about-talks__label">Built for businesses with repetitive work, lead flow, support, bookings or operational complexity.</h3>
    </div>
    <div class="about-talks__right" style="display: flex; gap: 40px; padding-top: 60px;">
      <div style="flex:1;">
        <div class="about-talk"><span class="about-talk__name">Clinics</span></div>
        <div class="about-talk"><span class="about-talk__name">Ecommerce</span></div>
        <div class="about-talk"><span class="about-talk__name">Agencies</span></div>
        <div class="about-talk"><span class="about-talk__name">Real Estate</span></div>
      </div>
      <div style="flex:1;">
        <div class="about-talk"><span class="about-talk__name">SaaS</span></div>
        <div class="about-talk"><span class="about-talk__name">Education</span></div>
        <div class="about-talk"><span class="about-talk__name">Professional Services</span></div>
        <div class="about-talk"><span class="about-talk__name">Local Businesses</span></div>
      </div>
    </div>
  </section>

  <!-- ========== 5. HOW WE BUILD ========== -->
  <section class="about-recognition" id="process" style="padding-bottom: 120px;">
    <div class="about-recognition__left">
      <h3 class="about-recognition__label">Our Approach:</h3>
    </div>
    <div class="about-recognition__right">
      <div class="about-award">
        <span class="about-award__title">01. Audit</span>
        <span class="about-award__source">Identify repetitive work, bottlenecks and missed opportunities.</span>
      </div>
      <div class="about-award">
        <span class="about-award__title">02. Design</span>
        <span class="about-award__source">Define logic, tools, channels and system structure.</span>
      </div>
      <div class="about-award">
        <span class="about-award__title">03. Build</span>
        <span class="about-award__source">Implement the workflow, assistant, voice agent or custom system.</span>
      </div>
      <div class="about-award">
        <span class="about-award__title">04. Refine</span>
        <span class="about-award__source">Improve prompts, flows, routing, maintenance and future iterations.</span>
      </div>
    </div>
  </section>

  <!-- ========== 6. CLOSING CTA ========== -->
  <section class="pricing-cta" style="border-top: var(--border-thin); display: flex; flex-direction: column; align-items: flex-start; justify-content: center; min-height: 60vh;">
    <div style="max-width: 900px; padding: 0 var(--page-padding);">
        <h2 class="pricing-cta__heading" style="margin-bottom: 24px; line-height: 1;">Need the right automation, assistant or system for your business?</h2>
        <p class="pricing-cta__text">We build everything from simple workflows to tailored operational systems. Let's map the right solution for your team.</p>
        
        <div style="display: flex; gap: 20px; margin-top: 40px;">
            <a href="contact.html" class="video-header__cta" style="background: transparent; border-color: var(--color-primary);">
              <span class="video-header__cta-text" style="color: var(--color-primary);">Book a Call</span>
            </a>
            <a href="pricing.html" class="video-header__cta" style="background: transparent; border-color: transparent;">
              <span class="video-header__cta-text" style="color: var(--color-primary);">View Pricing</span>
            </a>
        </div>
    </div>
  </section>
`;

const finalHtml = preNavHtml + bodyContent + '\n\n' + footerHtml;

fs.writeFileSync(filePath, finalHtml);
console.log('Successfully rebuilt work.html');
