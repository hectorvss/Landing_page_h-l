/**
 * H&L Studio - Lead Capture Logic
 * Directly integrates with Google Sheets via Apps Script
 */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lead-capture-form');
    const input = document.getElementById('lead-contact');
    const button = document.getElementById('lead-submit');
    const status = document.getElementById('lead-status');

    // CONFIGURATION
    // Replace this with your Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3cqTJF5SmyrYSmCPt5F5Y6PjBE0sEZDCfgY1zw0YogLv_Y5Er2LZhjr9l9Hw4MHoK/exec';

    if (!form) return;

    // Detect language from HTML lang attribute
    const lang = document.documentElement.lang || 'en';

    const messages = {
        es: {
            loading: 'Enviando...',
            success: '¡Recibido! Nos pondremos en contacto pronto.',
            error: 'Hubo un error. Por favor, inténtalo de nuevo.',
            missingUrl: 'Error de configuración: Falta la URL del Webhook.'
        },
        en: {
            loading: 'Sending...',
            success: 'Received! We will reach out soon.',
            error: 'There was an error. Please try again.',
            missingUrl: 'Config Error: Webhook URL is missing.'
        }
    };

    const t = messages[lang] || messages.en;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const contactValue = input.value.trim();
        if (!contactValue) return;

        // Reset UI
        status.textContent = t.loading;
        status.className = 'lead-capture__status is-visible lead-capture__status--loading';
        button.disabled = true;

        if (SCRIPT_URL.includes('YOUR_SCRIPT_ID')) {
            console.warn(t.missingUrl);
            status.textContent = t.missingUrl;
            status.className = 'lead-capture__status is-visible lead-capture__status--error';
            button.disabled = false;
            return;
        }

        try {
            // Using a hidden iframe or fetch with no-cors for Apps Script compatibility
            // This is the most robust way to avoid CORS issues with static sites
            const formData = new FormData();
            formData.append('contact', contactValue);
            formData.append('page', window.location.pathname);
            formData.append('timestamp', new Date().toISOString());

            await fetch(SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Essential for Google Apps Script redirects
                body: formData
            });

            // Since mode is no-cors, we assume success if no exception was thrown
            status.textContent = t.success;
            status.className = 'lead-capture__status is-visible lead-capture__status--success';
            input.value = ''; // Clear input
            
            // Re-enable button after 5 seconds
            setTimeout(() => {
                button.disabled = false;
                status.className = 'lead-capture__status'; // Hide message
            }, 5000);

        } catch (error) {
            console.error('Submission error:', error);
            status.textContent = t.error;
            status.className = 'lead-capture__status is-visible lead-capture__status--error';
            button.disabled = false;
        }
    });
});
