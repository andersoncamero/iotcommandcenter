import type React from "react";
import { Link, useLocation } from "react-router";

interface NavLinkProps {
  menuItems: Array<{ linkTo: string; label: string; icon?: React.ComponentType<{ className?: string }> }>;
}

export const NavLink: React.FC<NavLinkProps> = ({ menuItems }) => {
  const location = useLocation();

  return (
    <nav className="flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
      {menuItems &&
        menuItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.linkTo;
          
          return (
            <Link
              key={idx}
              to={item.linkTo}
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive
                  ? "bg-[#0b2536] text-white shadow-sm"
                  : "bg-white/60 text-[#415a6b] hover:bg-white/80 hover:text-[#0b2536] border border-white/20"
              }`}
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{item.label}</span>
            </Link>
          );
        })}
    </nav>
  );
};
