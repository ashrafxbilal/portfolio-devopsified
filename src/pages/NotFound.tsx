
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="mb-8 inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-mono rounded">
          Error 404
        </div>
        <h1 className="text-6xl md:text-9xl font-mono font-bold text-highlight mb-4">404</h1>
        <p className="text-2xl font-mono mb-8">Page Not Found</p>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition">
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
