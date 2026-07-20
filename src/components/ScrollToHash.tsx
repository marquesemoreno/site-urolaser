import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolla para a âncora (#sobre, #pricing, #contact) quando a rota tem hash.
// Também rola pro topo quando não tem hash (navegação normal entre páginas).
const ScrollToHash: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToHash;
