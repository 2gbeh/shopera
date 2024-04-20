import { useEffect, useState } from "react";
import { zzz } from "@/utils";
import { TProductEntity_withBrand } from "@/server/entities/product.entity";
//
import M from "@/constants/MOCK";
import mockProducts from "@/data/mock-products";

export default function useProducts() {
  const [products, setProducts] = useState<TProductEntity_withBrand[] | null>(
    null
  );
  //
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
    M.products ? mockOnMount() : onMount();
  }, []);

  return { products };
}
