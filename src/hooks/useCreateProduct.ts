import { useEffect, useMemo, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { zzz } from "@/utils";
import { TProductResponse } from "@/server/entities/product.entity";
import { TBrandResponse } from "@/server/entities/brand.entity";
import {
  TProductFormData,
  productFormDataDto,
  productFormData_defaultValues,
} from "@/server/requests/product.dto";

//
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";
import mockBrands from "@/data/mock-brands";

export default function useCreateProduct(showSnackbar: () => void) {
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
  const [formHydrated, setFormHydrated] = useState(true);
  const [formErrorBag, setFormErrorBag] = useState<string | null>(null);
  const [brands, setBrands] = useState<TBrandResponse[] | null>(null);
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
  const handleCreateProduct: SubmitHandler<TProductFormData> = async (
    formData
  ) => {
    let body = JSON.stringify({
      ...formData,
      brand_id: formData.brand_id?.value,
    });
    // console.log(
    //   "🚀 ~ consthandleCreateProduct:SubmitHandler<TProductFormData>= ~ formData:",
    //   formData
    // );
    // console.log(
    //   "🚀 ~ consthandleCreateProduct:SubmitHandler<TProductFormData>= ~ body:",
    //   body
    // );
    let raw = await fetch(`/api/products`, {
      method: "POST",
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
      // goBack();
    } else {
      setFormErrorBag(res.message);
    }
  };
  async function mockOnMount() {
    await zzz();
    setBrands(mockBrands.data);
  }
  async function onMount() {
    let raw = await fetch("/api/brands");
    let res = await raw.json();
    setBrands(res.success ? res.data : []);
  }
  //
  useEffect(() => {
    M.create_product ? mockOnMount() : onMount();
  }, []);

  return {
    goBack,
    brandsPipe,
    //
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    reset,
    handleCreateProduct,
    //
    formHydrated,
    formErrorBag,
  };
}
