import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to handle scrolling to a section when a hash is present in the URL.
 * Especially useful for navigating from other pages to specific sections on the home page.
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash && typeof document !== 'undefined') {
      // Small delay to ensure the DOM and any lazy-loaded components are rendered
      const timer = setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // 500ms delay to account for layout shifts and lazy loading

      return () => clearTimeout(timer);
    }
  }, [hash, pathname]);
}
