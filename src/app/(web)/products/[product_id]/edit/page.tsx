import { FormHeading } from "@/components/form/form-heading";
import { FormInputImage } from "@/components/form/form-input-image";
import { FormInput } from "@/components/form/form-input";
import { EditProductButtons } from "@/components/edit-product/edit-product-buttons";
import fakeBrands from "@/data/fake-brands";

export const metadata = { title: "Edit Product" };

export default function EditProduct({
  params,
}: {
  params: { product_id: string };
}) {
  return (
    <main className="container-640 py-10 bg-red-50_">
      {/* {params.product_id} */}
      <form action="" className="flex flex-col gap-5">
        <FormHeading
          h1="Edit Product"
          p="Kindly fill the form below to update the product information. Required fields are marked with asteriks(*)."
        />
        {/*  */}
        <FormInputImage label="Upload Thumbnail" name="thumbnail" />
        {/*  */}
        <FormInput
          label="Select Brand*"
          type="select"
          name="brand_id"
          options={fakeBrands}
        />
        {/*  */}
        <FormInput label="Product Name*" name="name" />
        {/*  */}
        <FormInput
          label="Product Price"
          type="number"
          name="price"
          defaultValue="0.00"
        />
        {/*  */}
        <FormInput
          label="Product Barcode*"
          prefix="UPC-12"
          type="number"
          name="barcode"
        />
        {/*  */}
        <EditProductButtons />
      </form>
    </main>
  );
}
