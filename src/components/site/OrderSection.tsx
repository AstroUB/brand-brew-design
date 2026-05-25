import { useGsap, gsap } from "@/hooks/useGsap";
import { OrderForm } from "./OrderForm";

export function OrderSection() {
  const scope = useGsap((ctx) => {
    void ctx;
    gsap.from(".order-title", {
      yPercent: 110,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: { trigger: ".order-section", start: "top 75%" },
    });
  });

  return (
    <section ref={scope} id="order" className="order-section py-24 md:py-40 px-6 md:px-10 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">04 / Place an Order</span>
          <div className="overflow-hidden mt-4">
            <h2 className="order-title font-display text-[16vw] md:text-[10vw] font-extrabold uppercase leading-none tracking-tighter italic">
              Order Now
            </h2>
          </div>
        </div>
        <OrderForm />
      </div>
    </section>
  );
}
