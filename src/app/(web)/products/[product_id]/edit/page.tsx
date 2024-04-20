import EditProductForm from "@/components/edit-product/edit-product-form";

export const metadata = { title: "Edit Product" };

export default function EditProduct({
  params,
}: {
  params: { product_id: string };
}) {
  return (
    <main className="container-640 py-10 bg-red-50_">
      <EditProductForm
        productId={Number(params.product_id.split("-").pop())}
      />
    </main>
  );
}
