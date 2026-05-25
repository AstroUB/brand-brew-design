import { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { useGsap, gsap } from "@/hooks/useGsap";
import { BottleViewer } from "./BottleViewer";

const MAX_SIZE = 5 * 1024 * 1024;
const ALLOWED = ["image/png", "image/jpeg", "image/svg+xml", "image/webp"];

export function PreviewLab() {
  const [artwork, setArtwork] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const scope = useGsap((ctx) => {
    void ctx;
    gsap.from(".lab-title", {
      yPercent: 110,
      duration: 1,
      ease: "expo.out",
      scrollTrigger: { trigger: ".lab-section", start: "top 75%" },
    });
    gsap.from(".lab-step", {
      opacity: 0,
      x: 30,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.15,
      scrollTrigger: { trigger: ".lab-steps", start: "top 80%" },
    });
  });

  function handleFile(file?: File | null) {
    setError(null);
    if (!file) return;
    if (!ALLOWED.includes(file.type)) {
      setError("Use PNG, JPG, SVG or WEBP.");
      return;
    }
    if (file.size > MAX_SIZE) {
      setError("Max file size is 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setArtwork(reader.result as string);
    reader.readAsDataURL(file);
  }

  return (
    <section ref={scope} className="lab-section py-24 md:py-40 px-6 md:px-10 bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-[1600px] mx-auto">
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="relative bg-surface outline outline-1 -outline-offset-1 outline-border aspect-square overflow-hidden">
            <BottleViewer artwork={artwork} />
            <div className="absolute top-6 left-6 bg-background/85 backdrop-blur-md p-4 md:p-5 rounded-2xl shadow-xl border border-border max-w-[14rem]">
              <p className="font-display text-[10px] uppercase tracking-[0.25em] mb-1 text-muted-foreground">Current Rendering</p>
              <p className="font-bold text-sm">{artwork ? "Your Brand Mark" : "UV Digital Print v2.0"}</p>
            </div>
            <div className="absolute bottom-6 right-6 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Live 3D Preview
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <div className="overflow-hidden">
            <h2 className="lab-title font-display text-5xl md:text-7xl font-extrabold uppercase leading-[0.9] mb-10">
              The Preview Lab
            </h2>
          </div>

          <div className="lab-steps space-y-8">
            <div className="lab-step border-b border-border pb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-3 block">Step 01</span>
              <p className="text-lg md:text-xl font-bold leading-snug">Choose your vessel material and finish from our curated selection.</p>
            </div>

            <div className="lab-step border-b border-border pb-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-3 block">Step 02</span>
              <p className="text-lg md:text-xl font-bold leading-snug mb-4">Upload your brand assets and watch them wrap our real-time 3D engine.</p>
              <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml,image/webp"
                className="hidden"
                onChange={(e) => handleFile(e.target.files?.[0])}
              />
              <button
                onClick={() => fileRef.current?.click()}
                className="w-full bg-foreground text-background py-5 font-bold uppercase text-xs tracking-[0.25em] hover:bg-brand-accent transition-colors"
              >
                {artwork ? "Replace Artwork" : "Upload Artwork"}
              </button>
              {error && <p className="text-destructive text-xs mt-2">{error}</p>}
              {artwork && (
                <button
                  onClick={() => setArtwork(null)}
                  className="text-xs uppercase tracking-widest text-muted-foreground mt-3 hover:text-foreground transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="lab-step">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent mb-3 block">Step 03</span>
              <p className="text-lg md:text-xl font-bold leading-snug mb-4">Verify placement and finalize your premium packaging specs.</p>
              <Link
                to="/order"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.22em] border-b border-foreground pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors"
              >
                Place an order →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
