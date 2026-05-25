import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="py-16 md:py-24 px-6 md:px-10 border-t border-border bg-background">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1">
          <Link to="/" className="font-display text-5xl md:text-7xl font-extrabold tracking-tighter">
            VESSEL<sup className="text-[0.35em]">®</sup>
          </Link>
          <p className="mt-6 max-w-sm text-muted-foreground text-sm leading-relaxed">
            Premium custom packaging on architectural-grade bottles. From 50 units to 50,000 — your brand, bottled with intention.
          </p>
        </div>
        <div className="flex gap-16 md:gap-24">
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Inquiries</p>
            <p className="font-bold text-sm">hello@vessel.studio</p>
            <p className="font-bold text-sm">+1 (888) 000-0000</p>
            <p className="text-sm text-muted-foreground">128 Industrial Way, NY</p>
          </div>
          <div className="space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">Navigate</p>
            <Link to="/catalog" className="block font-bold text-sm uppercase">Catalog</Link>
            <Link to="/customize" className="block font-bold text-sm uppercase">The Lab</Link>
            <Link to="/order" className="block font-bold text-sm uppercase">Order</Link>
            <Link to="/about" className="block font-bold text-sm uppercase">Studio</Link>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-6 border-t border-border flex justify-between text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>© 2026 Vessel Systems Inc.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  );
}
