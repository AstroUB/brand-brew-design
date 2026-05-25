import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Required").max(80),
  company: z.string().trim().min(1, "Required").max(120),
  email: z.string().trim().email("Invalid email").max(200),
  bottle: z.enum(["monolith", "nomad", "slim", "grand"]),
  quantity: z.coerce.number().int().min(50, "Min 50 units").max(50000, "Max 50,000"),
  notes: z.string().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

export function OrderForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { bottle: "monolith", quantity: 500 },
  });

  async function onSubmit(values: FormValues) {
    await new Promise((r) => setTimeout(r, 700));
    console.log("Order request:", values);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20">
        <h3 className="font-display text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-6">
          Received.
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          Your request is in. Our studio will reach out within one business day with a production timeline and a quote.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs uppercase tracking-[0.25em] font-bold border-b border-foreground pb-1"
        >
          Submit another →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl mx-auto">
      <Field label="Full Name" error={errors.name?.message}>
        <input {...register("name")} type="text" placeholder="Alex Rivers" className={inputCls} />
      </Field>
      <Field label="Company" error={errors.company?.message}>
        <input {...register("company")} type="text" placeholder="Brand Co." className={inputCls} />
      </Field>
      <Field label="Company Email" error={errors.email?.message}>
        <input {...register("email")} type="email" placeholder="you@brand.com" className={inputCls} />
      </Field>
      <Field label="Order Quantity" error={errors.quantity?.message}>
        <input {...register("quantity")} type="number" min={50} max={50000} className={inputCls} />
      </Field>
      <Field label="Bottle Model" error={errors.bottle?.message} className="md:col-span-2">
        <select {...register("bottle")} className={`${inputCls} appearance-none cursor-pointer`}>
          <option value="monolith">The Monolith — 750ml</option>
          <option value="nomad">The Nomad — 1000ml</option>
          <option value="slim">The Slim — 500ml</option>
          <option value="grand">The Grand — 1500ml</option>
        </select>
      </Field>
      <Field label="Project Notes" error={errors.notes?.message} className="md:col-span-2">
        <textarea {...register("notes")} rows={3} placeholder="Tell us about your brand…" className={`${inputCls} resize-none`} />
      </Field>
      <div className="md:col-span-2 mt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-foreground text-background py-7 md:py-9 font-display text-2xl md:text-4xl font-extrabold uppercase tracking-tighter hover:bg-brand-accent transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Sending…" : "Submit Request →"}
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "w-full border-b-2 border-border py-3 bg-transparent focus:border-brand-accent outline-none font-display text-xl md:text-2xl uppercase tracking-tight transition-colors";

function Field({
  label,
  error,
  children,
  className = "",
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-[10px] font-bold uppercase tracking-[0.22em] mb-3 block text-muted-foreground">{label}</label>
      {children}
      {error && <p className="text-destructive text-xs mt-2">{error}</p>}
    </div>
  );
}
