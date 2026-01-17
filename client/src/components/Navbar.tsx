import { Link, useLocation } from "wouter";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [location] = useLocation();

  const isHome = location === "/";

  const handleAboutClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-muted border border-border group-hover:border-foreground/20 transition-colors">
             {/* Use a simple distinct avatar SVG or placeholder */}
             <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-foreground/80">
               <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1"/>
               <circle cx="12" cy="9" r="3" fill="currentColor"/>
               <path d="M17.9999 19C17.9999 15.6863 15.3136 13 11.9999 13C8.68623 13 5.99994 15.6863 5.99994 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
             </svg>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors ${isHome ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            onClick={handleAboutClick}
          >
            About
          </Link>
          <Link 
            href="/blog" 
            className={`text-sm font-medium transition-colors ${location.startsWith('/blog') ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Blogs
          </Link>
          <div className="w-px h-4 bg-border/60 mx-1" />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
