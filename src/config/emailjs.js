// EmailJS Configuration
// Get these values from https://www.emailjs.com/

export const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_indiegate',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_access_request', 
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_EMAILJS_PUBLIC_KEY',
  // Multiple recipients for FBFMH team
  adminEmails: {
    primary: import.meta.env.VITE_ADMIN_EMAIL || 'joe@fbfmh.com',
    secondary: import.meta.env.VITE_ADMIN_EMAIL_2 || 'Jourdain@fbfmh.com',
    partnerships: import.meta.env.VITE_ADMIN_EMAIL_3 || 'partnerships@fbfmh.com'
  }
}

// Development mode check
export const isEmailJSConfigured = () => {
  return EMAILJS_CONFIG.publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY' && 
         EMAILJS_CONFIG.serviceId && 
         EMAILJS_CONFIG.templateId
} 