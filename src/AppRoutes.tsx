import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/servicos" element={<ServicesPage />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
    <Route path="/politica-de-cookies" element={<CookiesPolicy />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
