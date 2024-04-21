import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { zzz } from "@/utils";
import PATH from "@/constants/PATH";
import M from "@/constants/MOCK";

export default function useDeleteProduct(productId: number) {
  const router = useRouter();
  const [deleting, setDeleting] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const toggleConfirmDelete = () => setShowConfirmDelete((prev) => !prev);
  //
  async function handleDeleteProduct() {
    toggleConfirmDelete();
    setDeleting(true);
    //
    if (M.edit_product_delete) {
      await zzz();
      router.push(PATH.home);
    } else {
      let raw = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let res = await raw.json();
      //
      if (res.success) {
        await zzz();
        router.push(PATH.home);
      }
      setDeleting(false);
    }
  }

  return {
    showConfirmDelete,
    setShowConfirmDelete,
    deleting,
    setDeleting,
    toggleConfirmDelete,
    handleDeleteProduct,
  };
}
