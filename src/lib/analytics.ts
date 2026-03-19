// Google Analytics event tracking helpers

// Track page views (automatically handled by gtag config, but useful for SPA routes)
export const trackPageView = (page: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: title || document.title,
      page_location: window.location.href,
      page_path: page,
    });
  }
};

// Track booking form submission
export const trackBookingSubmit = (data: { roomType: string; guests: string }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'INR',
      value: 0, // Can be enhanced with estimated value
      items: [{
        item_id: data.roomType,
        item_name: data.roomType,
        quantity: 1,
      }]
    });
  }
};

// Track WhatsApp button click
export const trackWhatsAppClick = (context: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact', {
      method: 'whatsapp',
      context: context,
    });
  }
};

// Track phone call button click
export const trackPhoneClick = (context: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact', {
      method: 'phone',
      context: context,
    });
  }
};

// Track email link click
export const trackEmailClick = (email: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'contact', {
      method: 'email',
      email: email,
    });
  }
};
