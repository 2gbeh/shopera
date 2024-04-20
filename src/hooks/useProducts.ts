import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { zzz } from "@/utils";
import { TProductEntity_withBrand } from "@/server/entities/product.entity";
//
import M from "@/constants/MOCK";
import mockProducts from "@/data/mock-products";
import PATH from "@/constants/PATH";

export default function useProducts() {
  const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<TProductEntity_withBrand[] | null>(
    null
  );
  const resetSearchResults = () => router.push(PATH.home);
  //
  async function searchProductsOrBrands(like: string) {
    let raw = await fetch("/api/products?like=" + like);
    let res = await raw.json();
    //
    setProducts(res.success ? res.data : []);
  }
  async function mockOnMount() {
    await zzz();
    let raw = mockProducts.data;
    let res = raw.map((e) => {
      return {
        ...e,
        brand: {
          ...e.brand,
          created_at: new Date(e.created_at),
          updated_at: new Date(e.updated_at),
        },
        created_at: new Date(e.created_at),
        updated_at: new Date(e.updated_at),
      };
    });
    //
    setProducts(res);
  }
  async function onMount() {
    let raw = await fetch("/api/products");
    let res = await raw.json();
    //
    setProducts(res.success ? res.data : []);
  }
  //
  useEffect(() => {
    const like = searchParams.get("like");
    if (like) {
      searchProductsOrBrands(like);
    } else {
      M.products ? mockOnMount() : onMount();
    }
  }, []);

  return { products, resetSearchResults };
}
