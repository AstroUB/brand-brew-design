import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const links = [
  { to: "/catalog", label: "Catalog" },
  { to: "/customize", label: "The Lab" },
  { to: "/order", label: "Order" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference px-6 md:px-10 py-6 md:py-8 flex justify-between items-center">
        <Link to="/" className="font-display text-xl md:text-2xl font-extrabold tracking-tighter text-white">
          VESSEL<sup className="text-[0.5em]">®</sup>
        </Link>
        <div className="hidden md:flex gap-10 text-[11px] uppercase tracking-[0.22em] font-medium text-white">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:opacity-60 transition-opacity"
              activeProps={{ className: "opacity-60" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white text-xs uppercase tracking-widest font-bold"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <div className="fixed inset-0 z-40 bg-foreground text-background md:hidden flex flex-col items-start justify-center px-8 gap-6 animate-fade-in">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="font-display text-5xl font-extrabold uppercase tracking-tighter"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
