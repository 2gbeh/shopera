import { ProductCard } from "@/components/product-card";
import { Pagination } from "@/components/pagination";
import fakeProducts from "@/data/fake-products";

export const metadata = { title: "All Products" };

export default function Home() {
  return (
    <main className="bg-gray-100_ p-10">
      <ul className="flex-center-center flex-wrap gap-10">
        {fakeProducts.map(
          (e, i) => i < 8 && <ProductCard key={i} index={i} item={e} />
        )}
      </ul>
      {/*  */}
      <Pagination />
    </main>
  );
}
