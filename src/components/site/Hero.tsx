import { Link } from "@tanstack/react-router";
import { useGsap, gsap } from "@/hooks/useGsap";
import heroBottle from "@/assets/hero-bottle.jpg";

export function Hero() {
  const scope = useGsap((ctx) => {
    void ctx;
    gsap.from(".hero-line", {
      yPercent: 110,
      duration: 1.2,
      ease: "expo.out",
      stagger: 0.08,
    });
    gsap.from(".hero-fade", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.4,
      ease: "power3.out",
      stagger: 0.1,
    });
    gsap.from(".hero-bottle", {
      opacity: 0,
      scale: 0.9,
      duration: 1.6,
      ease: "expo.out",
    });
    gsap.to(".hero-bottle", {
      yPercent: -8,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
    gsap.to(".hero-bottle", {
      yPercent: 30,
      rotate: 6,
      scale: 1.05,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    gsap.to(".hero-headline", {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  return (
    <section
      ref={scope}
      className="hero-section relative min-h-[100svh] flex flex-col justify-center items-center px-6 md:px-10 pt-32 pb-20 overflow-hidden"
    >
      <h1 className="hero-headline font-display font-extrabold uppercase tracking-tighter text-center leading-[0.82] text-[18vw] md:text-[15vw]">
        <span className="block overflow-hidden">
          <span className="hero-line block">Bottled</span>
        </span>
        <span className="block overflow-hidden">
          <span className="hero-line text-outline block">Identity</span>
        </span>
      </h1>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[34vw] max-w-md -z-0 pointer-events-none">
        <img
          src={heroBottle}
          alt="Matte black architectural water bottle"
          width={1080}
          height={1600}
          className="hero-bottle w-full h-auto object-contain drop-shadow-2xl"
        />
      </div>

      <div className="hero-fade absolute bottom-10 md:bottom-16 left-6 md:left-10 max-w-[18ch] text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="block w-10 h-px bg-foreground mb-3" />
        Custom packaging for brands that refuse to blend in.
      </div>

      <div className="hero-fade absolute bottom-10 md:bottom-16 right-6 md:right-10 max-w-[24ch] flex flex-col gap-5 items-end">
        <p className="text-right text-sm md:text-base font-medium leading-snug max-w-[28ch]">
          High-definition printing on architectural-grade bottles, engineered for your brand's DNA.
        </p>
        <Link
          to="/customize"
          className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.22em] hover:bg-brand-accent transition-colors"
        >
          Start Customizing
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
