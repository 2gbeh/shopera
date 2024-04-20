import Products from "@/components/products";
import { Fab } from "@/components/fab";
//

export const metadata = { title: "All Products" };

export default function Home() {
  return (
    <main>
      <Products />
      <Fab />
    </main>
  );
}
