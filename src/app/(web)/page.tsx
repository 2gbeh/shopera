import { Suspense } from "react";
import ProductsContent from "@/components/products/products-content";
//

export const metadata = { title: "All Products" };

export default function Home() {
  return (
    <main>
      <Suspense>
        <ProductsContent />
      </Suspense>
    </main>
  );
}
