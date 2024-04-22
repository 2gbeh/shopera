import { useEffect, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { iMatch, zzz } from "@/utils";
import {
  TProductResponse,
  TProductEntity_withBrand,
} from "@/server/entities/product.entity";
//
import { PAGINATION } from "@/constants/APP";
import M from "@/constants/MOCK";
import mockProducts from "@/data/mock-products";
import PATH from "@/constants/PATH";

export default function useProducts() {
  const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const [perPage, setPerPage] = useState(PAGINATION);
  const [sortProductDesc, setSortProductDesc] = useState(false);
  const [sortBrandDesc, setSortBrandDesc] = useState(false);
  const [products, setProducts] = useState<TProductResponse[] | null>(null);
  const resetSearchResults = () => router.push(PATH.home);
  //
  async function searchProductsOrBrands(like: string) {
    if (M.products) {
      await zzz();
      let raw = mockProducts.data;
      let res = raw.filter(
        (e) => iMatch(e.name, like) || iMatch(e.brand.name, like)
      );
      // @ts-ignore
      setProducts(res);
    } else {
      let raw = await fetch("/api/products?like=" + like);
      let res = await raw.json();
      setProducts(res.success ? res.data : []);
    }
  }
  // https://www.scaler.com/topics/javascript-sort-an-array-of-objects/
  function sortByProductName() {
    setSortProductDesc((prev) => !prev);
    let res = sortProductDesc
      ? products?.toSorted((objX, objY) =>
          objX.name < objY.name ? 1 : objX.name > objY.name ? -1 : 0
        )
      : products?.toSorted((objX, objY) =>
          objX.name > objY.name ? 1 : objX.name < objY.name ? -1 : 0
        );
    //
    if (res) setProducts(res);
  }
  function sortByBrandName() {
    setSortBrandDesc((prev) => !prev);
    let res = sortBrandDesc
      ? products?.toSorted((objX, objY) =>
          objX.brand.name < objY.brand.name
            ? 1
            : objX.brand.name > objY.brand.name
              ? -1
              : 0
        )
      : products?.toSorted((objX, objY) =>
          objX.brand.name > objY.brand.name
            ? 1
            : objX.brand.name < objY.brand.name
              ? -1
              : 0
        );
    //
    if (res) setProducts(res);
  }
  async function mockOnMount() {
    await zzz();
    setProducts(mockProducts.data);
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

  return {
    perPage,
    setPerPage,
    //
    products,
    resetSearchResults,
    sortByProductName,
    sortByBrandName,
    sortProductDesc,
    sortBrandDesc,
  };
}
