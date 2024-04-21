import EditProductButtonDelete from "@/components/edit-product/edit-product-button-delete";
import EditProductForm from "@/components/edit-product/edit-product-form";

export const metadata = { title: "Edit Product" };

export default function EditProduct({
  params,
}: {
  params: { product_id: string };
}) {
  const productId = Number(params.product_id.split("-").pop());
  //
  return (
    <main className="container-640 py-10 bg-red-50_">
      <div className="flex-end">
        <EditProductButtonDelete productId={productId} />
      </div>
      {/*  */}
      <EditProductForm productId={productId} />
    </main>
  );
}
