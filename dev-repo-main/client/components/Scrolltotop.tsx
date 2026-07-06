import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router (in library mode, without a data router) does not reset
 * scroll position between route changes, and it never auto-scrolls to a
 * "#hash" target on client-side navigation (browsers only do that on a
 * hard page load). Without this component, nav links like "Home" or
 * "Experience" would either keep the previous scroll offset or land on
 * the right page/hash without ever scrolling into view — i.e. "stuck".
 *
 * Mounted once inside <BrowserRouter>, above <Routes>.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      return;
    }

    const id = hash.replace("#", "");

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      }
      return false;
    };

    // The target page (e.g. Index) may still be mounting its sections,
    // so try immediately, then retry briefly if the element isn't there yet.
    if (!scrollToTarget()) {
      const timeout = setTimeout(scrollToTarget, 120);
      return () => clearTimeout(timeout);
    }
  }, [pathname, hash]);

  return null;
}