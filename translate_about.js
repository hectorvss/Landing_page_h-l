const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'about_es.html');
let html = fs.readFileSync(filePath, 'utf8');

const dict = {
  "We build AI-powered systems for businesses that want to move faster.": "Construimos sistemas de IA para empresas que buscan máxima agilidad.",
  "We help businesses turn repetitive work, fragmented tools and operational friction into structured systems using automation, AI assistants, voice agents and custom software.": "Ayudamos a las empresas a transformar el trabajo manual, las herramientas desconectadas y la fricción del día a día en sistemas operativos fluidos mediante automatizaciones y software a medida.",
  
  "Our Vision:": "Nuestra Visión:",
  "We believe automation and AI only matter when they are actually useful.": "Creemos que la IA y automatización solo valen la pena si ahorran tiempo o dinero.",
  
  "Repetitive Work": "Trabajo Repetitivo",
  "Many businesses still lose countless hours to manual tasks that constrain their growth.": "Muchas empresas siguen perdiendo incontables horas en tareas manuales que limitan su capacidad de crecer.",
  
  "Disconnected Tools": "Herramientas Desconectadas",
  "Data sits in silos, forcing teams to manually bridge systems that should talk to each other naturally.": "Los datos aisaldos obligan a los equipos a mover información a mano entre sistemas que deberían integrarse solos.",
  
  "Operational Mess": "Fricción Operativa",
  "As businesses scale, operations become messy. What worked at stage one creates friction at stage two.": "Al escalar, las operaciones se colapsan. Lo que funcionó en la primera etapa, crea caos durante la segunda.",
  
  "Utility Over Hype": "Utilidad Real > Moda",
  "We ignore empty AI buzzwords. We focus strictly on implementation that yields measurable time and cost savings.": "Ignoramos la moda vacía de la Inteligencia Artificial. Nos centramos en código que devuelve el tiempo al equipo directivo.",
  
  "Friction Into Systems": "De Caos a Sistemas",
  "Our job is to turn operational bottlenecks into resilient systems that improve response and support real growth.": "Convertimos cuellos de botella en máquinas robustas corporativas que impulsan una escalabilidad ilimitada.",
  
  "Premium Infrastructure": "Infraestructura Premium",
  "We build systems that are robust, secure, and thoughtfully designed to perform reliably over the long term.": "Diseñamos bases de código limpias, fiables y hechas para un funcionamiento seguro de años.",
  
  "Who It's For:": "Para Quién Es:",
  "We are best suited for businesses that deal with repetitive communication, manage leads, rely on several disconnected tools, and want better operations without building everything internally.": "Somos el equipo ideal de directivos que lidian con comunicación masiva, capturan leads, operan con demasiadas plataformas, o sienten que se necesita mejorar las automatizaciones diarias urgentemente.",
  
  "Target Industries:": "Industrias Clave:",
  "Clinics & Health": "Clínicas y Salud",
  "Lead Capture, Routing": "Pasaje y Enrutamiento",
  "Real Estate": "Inmobiliarias",
  "CRM Automations": "Embudos CRM",
  "Agencies": "Agencias",
  "Internal Workflows": "Lógica Interna",
  
  "Ecommerce": "Tiendas Online",
  "Support Agents": "Agentes Soporte",
  "B2B SaaS": "Plataformas B2B SaaS",
  "Custom Architecture": "Arquitectura Privada",
  "Professional Services": "Consultorios Profesionales",
  "Voice Agents": "IA de Voz Telefónica",
  
  "Not generic AI hype. Not random disconnected automations. We build tailored systems, operational clarity, and premium business infrastructure.": "No hacemos IA genérica. Tampoco vendemos bots inútiles que empeoran el problema. Construimos claridad táctica bajo infraestructura ultra-premium y escalable.",
  
  "Our Process:": "Nuestro Proceso:",
  "01. Audit": "01. Auditoría",
  "Identify repetitive work & bottlenecks": "Hallamos puntos ciegos",
  "02. Design": "02. Diseño",
  "Map system logic, tools & user flow": "Arquitectura y plano de software",
  "03. Build": "03. Desarrollo",
  "Implement tailored workflows & agents": "Codificación y testeo total",
  "04. Refine": "04. Mantenimiento",
  "Optimize logic & ensure maintenance": "Iteración de sistemas en activo",
  
  "What We Build:": "Qué Construimos:",
  "Workflows & Automations": "Workflows y Automatizado",
  "Chatbots & AI Assistants": "Asistentes Semánticos",
  "Voice & Call Agents": "Sistemas de Voz",
  "Internal Business Systems": "Paneles de Control",
  "Custom Software / Tailored SaaS": "Aplicaciones a Medida",
  
  "Workflows": "Procesos",
  "Automation": "Sistemas",
  "SaaS": "Digital",
  "Agents": "Operar",
  "Internal": "Interno",
  "Utility": "Delegar",
  "Chatbots": "Soporte",
  "Logic": "Lógica",
  "Routing": "Crecer",
  
  "Let's Build It.": "Construyámoslo.",
  "Need an automation, assistant or tailored system? Let's talk.": "¿Necesitas agentes, IA corporativa o producto interno? Habla con nuestro equipo y empezamos.",
  "Talk to Us": "Escríbenos",
  "Book a Call": "Llámanos"
};

for (const en in dict) {
  const es = dict[en];
  // global replace
  html = html.split(en).join(es);
}

// Translations already handled by header/footer scripts or common bits
html = html.replace("Kus © 2025", "Kus © 2025");
html = html.replace("Need an automation, AI assistant or custom system? Let's map the right one for your business.", "Arquitectura de procesos, IA, e Ingeniería Informática premium directos para tu facturación.");
html = html.replace("Solutions", "Soluciones");
html = html.replace("About", "Nosotros");
html = html.replace("Pricing", "Precios");

fs.writeFileSync(filePath, html);
console.log('Successfully translated about_es.html');
