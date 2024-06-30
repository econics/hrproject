// lib/gtag.ts
export const GA_TRACKING_ID = "G-NR96J6EX3V"; // Replace with your Measurement ID

// Log the pageview with the given URL
export const pageview = (url: string) => {
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events happening.
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
