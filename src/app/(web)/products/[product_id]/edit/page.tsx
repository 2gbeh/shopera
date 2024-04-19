export const metadata = { title: "Edit Product" };

export default function EditProduct({
  params,
}: {
  params: { product_id: string };
}) {
  return <main className="tent-half">{params.product_id}</main>;
}
