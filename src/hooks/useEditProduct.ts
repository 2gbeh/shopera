import { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { zzz } from "@/utils";
import {
  TProductEntity_withBrand,
  TProductResponse,
} from "@/server/entities/product.entity";
import { TBrandEntity, TBrandResponse } from "@/server/entities/brand.entity";
import {
  TProductFormData,
  productFormDataDto,
  productFormData_defaultValues,
} from "@/server/requests/product.dto";

//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import mockBrands from "@/data/mock-brands";
import mockProducts from "@/data/mock-products";

export default function useEditProduct<T>(
  productId: number,
  showSnackbar: () => void
) {
  const router = useRouter();
  const {
    control,
    formState: { errors, isSubmitting },
    register,
    setValue,
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: productFormData_defaultValues,
    resolver: zodResolver(productFormDataDto),
  });
  const [formActive, setFormActive] = useState(false);
  const [formErrorBag, setFormErrorBag] = useState<string | null>(null);
  const [brands, setBrands] = useState<TBrandResponse[] | null>(null);
  const [product, setProduct] = useState<TProductResponse | null>(null);
  const brandsPipe = useMemo(() => {
    if (brands && brands.length > 0) {
      return brands.map(({ id, name }) => ({
        value: id,
        label: name,
      }));
    }
  }, [brands]);
  //
  const goBack = () => router.push(PATH.home);
  const onSubmit: SubmitHandler<TProductFormData> = async (formData) => {
    let body = JSON.stringify({
      ...formData,
      brand_id: formData.brand_id?.value,
    });
    // console.log(
    //   "🚀 ~ constonSubmit:SubmitHandler<TProductFormData>= ~ formData:",
    //   formData
    // );
    // console.log(
    //   "🚀 ~ constonSubmit:SubmitHandler<TProductFormData>= ~ body:",
    //   body
    // );
    let raw = await fetch(`/api/products/${productId}`, {
      method: "PUT",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res = await raw.json();
    //
    if (res.success) {
      showSnackbar();
      await zzz();
      goBack();
    } else {
      setFormErrorBag(res.message);
    }
  };
  async function fetchBrands() {
    let raw = await fetch("/api/brands");
    return raw.json();
  }
  async function fetchProduct() {
    let raw = await fetch("/api/products/" + productId);
    return raw.json();
  }
  async function mockOnMount() {
    await zzz();
    setBrands(mockBrands.data);
    setProduct(mockProducts.data[0]);
  }
  async function onMount() {
    let [brandsResponse, productResponse] = await Promise.all([
      fetchBrands(),
      fetchProduct(),
    ]);
    //
    setBrands(brandsResponse.success ? brandsResponse.data : []);
    setProduct(productResponse.success ? productResponse.data : {});
  }
  //
  useEffect(() => {
    M.edit_product ? mockOnMount() : onMount();
  }, []);

  useEffect(() => {
    if (product && Object.keys(product).length > 0) {
      setValue("brand_id", {
        value: product.brand.id,
        label: product.brand.name,
      });
      setValue("name", product.name);
      setValue("price", product.price);
      setValue("barcode", product.barcode);
      setFormActive(true);
    }
  }, [product]);

  return {
    goBack,
    brandsPipe,
    product,
    //
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    reset,
    onSubmit,
    //
    formActive,
    formErrorBag,
  };
}
