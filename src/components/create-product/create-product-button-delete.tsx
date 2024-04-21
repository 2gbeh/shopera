"use client";

import React from "react";
import { Trash2Icon, CheckCheck, BanIcon } from "lucide-react";
import { Icon } from "../icon";
import clsx from "clsx";
import useDeleteProduct from "@/hooks/useDeleteProduct";

const tw = {
  icon: "text-white min-w-[42px] max-w-[42px] min-h-[40px] max-h-[40px] rounded-md flex-center-center cursor-pointer",
};

const CreateProductButtonDelete = ({ productId }: { productId: number }) => {
  const {
    showConfirmDelete,
    setShowConfirmDelete,
    deleting,
    setDeleting,
    toggleConfirmDelete,
    handleDeleteProduct,
  } = useDeleteProduct(productId);
  //
  return (
    <section className="flex-end">
      {!showConfirmDelete ? (
        <button
          disabled={deleting}
          onClick={toggleConfirmDelete}
          className="btn-delete border border-300 py-2 px-3 rounded-lg"
        >
          <Icon
            as={<Trash2Icon size={"18px"} />}
            text={deleting ? "Delete..." : "Delete"}
          />
        </button>
      ) : (
        <div className="flex gap-4">
          <i
            onClick={toggleConfirmDelete}
            className={clsx(tw.icon, "bg-red-500")}
            title="Cancel"
          >
            <BanIcon size={"20px"} />
          </i>
          {/*  */}
          <i
            onClick={handleDeleteProduct}
            className={clsx(tw.icon, "bg-green-500")}
            title="OK"
          >
            <CheckCheck size={"22px"} />
          </i>
        </div>
      )}
    </section>
  );
};

export default React.memo(CreateProductButtonDelete);
