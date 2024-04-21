import CreateProductForm from "@/components/create-product/create-product-form";

export const metadata = { title: "Add Product" };

export default function CreateProduct() {
  return (
    <main className="container-640 py-10 bg-red-50_">
      <CreateProductForm />
    </main>
  );
}
