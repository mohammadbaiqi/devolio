export const ROUTES = {
  home: "/",
  about: "/about-us",
  portfolio: "/portfolio",
  contact: "/contact",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
} as const;

export const NAV_LINKS = [
  { label: "Home", to: ROUTES.home },
  { label: "About", to: ROUTES.about },
  { label: "Portfolio", to: ROUTES.portfolio },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "Twitter", href: "https://x.com" },
] as const;

export const CONTACT_EMAIL = "hello@example.com";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
export const CONTACT_PHONE = "+1 (555) 000-0000";
export const CONTACT_PHONE_HREF = "tel:+15550000000";

export const LEGAL_LINKS = [
  { label: "Privacy Policy", to: ROUTES.privacyPolicy },
  { label: "Terms of Service", to: ROUTES.termsOfService },
] as const;
