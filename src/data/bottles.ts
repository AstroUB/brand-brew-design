import monolith from "@/assets/bottle-monolith.jpg";
import nomad from "@/assets/bottle-nomad.jpg";
import slim from "@/assets/bottle-slim.jpg";
import grand from "@/assets/bottle-grand.jpg";

export type Bottle = {
  id: string;
  name: string;
  spec: string;
  price: string;
  image: string;
};

export const bottles: Bottle[] = [
  { id: "monolith", name: "The Monolith", spec: "750ml • Satin Porcelain", price: "$32", image: monolith },
  { id: "nomad", name: "The Nomad", spec: "1000ml • Matte Steel", price: "$38", image: nomad },
  { id: "slim", name: "The Slim", spec: "500ml • Borosilicate Glass", price: "$28", image: slim },
  { id: "grand", name: "The Grand", spec: "1500ml • Recycled Composite", price: "$44", image: grand },
];
