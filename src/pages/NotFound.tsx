import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageMeta } from "@/seo/PageMeta";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <PageMeta
        title="Page Not Found - Ecoescape Mukteshwar"
        description="The page you're looking for doesn't exist. Explore our boutique homestay in Mukteshwar with sunrise views, garden, and in-house restaurant."
        canonical="https://ecoescapemukteshwar.com/404"
        noindex={true}
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
