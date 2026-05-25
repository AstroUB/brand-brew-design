import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { OrderSection } from "@/components/site/OrderSection";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Place an Order — Vessel®" },
      { name: "description", content: "Request a quote and production timeline for your custom packaging order. From 50 to 50,000 units." },
      { property: "og:title", content: "Place an Order — Vessel®" },
      { property: "og:description", content: "Get a quote in one business day. 50 to 50,000 units." },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main className="pt-24">
        <OrderSection />
      </main>
      <Footer />
    </div>
  );
}
