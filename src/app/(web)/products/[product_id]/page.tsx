import { redirect } from "next/navigation";
import PATH from "@/constants/PATH";
import { f } from "@/utils";

export default function Product({
  params,
}: {
  params: { product_id: string };
}) {
  redirect(f(PATH.edit_product, params.product_id));
}
