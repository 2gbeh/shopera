import ProductsContent from "@/components/products/products-content";
import { Fab } from "@/components/fab";
//

export const metadata = { title: "All Products" };

export default function Home() {
  return (
    <main>
      <ProductsContent />
      <Fab />
    </main>
  );
}
