export type NavLink = {
  label: string;
  path: string;
};

// Every entry here must resolve to something real:
// - a dedicated page route ("/about-us", "/portfolio", "/contact"), or
// - the home route + a section id that only exists inside Index.tsx ("/#experience")
//
// This is what ScrollToTop.tsx reads the hash from to scroll into view,
// so these links work correctly from ANY page, not just when already on Home.
export const NAV_LINKS: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  { label: "Experience", path: "/#experience" },
  { label: "Portfolio", path: "/portfolio" },
];

export const CONTACT_LINK: NavLink = { label: "Contact", path: "/contact" };