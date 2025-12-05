import { ArrowUpRight, Wifi, Menu, X } from "lucide-react";
import { NavLink } from "../molecules/NavLink";
import { Link } from "react-router";
import { Button } from "../atoms/Button";
import { Card } from "../atoms/Card";
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  menuItems: Array<{
    linkTo: string;
    label: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
  userName?: string;
}

export const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleTouchStart);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(11,152,223,0.178)] border border-white/20">
        <div className="relative w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
            <div className="flex items-center justify-between w-full gap-4 min-h-[48px]">
              <Link
                to="/"
                className="flex items-center gap-2 sm:gap-3 shrink-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br from-[#0891d3] to-[#0577bb] flex items-center justify-center signal-glow shrink-0">
                  <Wifi className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex flex-col min-w-0">
                  <h1 className="text-base sm:text-lg lg:text-xl font-bold text-[#0b2536] leading-tight whitespace-nowrap">
                    LoRaWAN
                  </h1>
                  <p className="text-xs sm:text-sm text-[#415a6b] leading-tight hidden sm:block whitespace-nowrap">
                    Command Center
                  </p>
                </div>
              </Link>

              <div className="hidden lg:flex flex-1 justify-center">
                <NavLink menuItems={menuItems} />
              </div>

              <div className="hidden lg:flex items-center gap-3 shrink-0">
                <Link to="/signup">
                  <Button className="btn-primary hover:from-[#0577bb] hover:to-[#045a8a] px-5 sm:px-6 py-2.5 transition-all hover:shadow-[0_18px_40px_rgba(11,152,223,0.25)]">
                    Comenzar ahora
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="w-10 h-10 rounded-full bg-[#0b2536] text-white hover:bg-[#0a1f2d] flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 rounded-lg bg-white/60 hover:bg-white/80 flex items-center justify-center transition-colors border border-white/20 shrink-0"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-[#0b2536]" />
                ) : (
                  <Menu className="w-5 h-5 text-[#0b2536]" />
                )}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <>
              <div
                className="lg:hidden fixed inset-0 z-40"
                onClick={() => setMobileMenuOpen(false)}
                onTouchStart={() => setMobileMenuOpen(false)}
              />

              <div
                ref={menuRef}
                className="lg:hidden absolute top-full left-4 right-4 mt-2 z-50"
              >
                <Card
                  typeCard="default"
                  className="bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_30px_rgba(11,152,223,0.178)] border border-white/20 px-4 py-4 space-y-3 max-h-[calc(100vh-120px)] overflow-y-auto"
                >
                  <Card typeCard="content" className="space-y-3">
                    <NavLink menuItems={menuItems} />
                    <div className="flex flex-col gap-2 pt-2">
                      <Link
                        to="/signup"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button className="w-full btn-primary hover:from-[#0577bb] hover:to-[#045a8a] px-6 py-2.5 transition-all">
                          Comenzar ahora
                        </Button>
                      </Link>
                      <Link
                        to="/login"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Button className="w-full bg-[#0b2536] hover:bg-[#0a1f2d] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors">
                          Iniciar sesión
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </Card>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
};
