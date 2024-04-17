import { redirect } from "next/navigation";
import PATH from "@/constants/PATH";

export default function Products() {
  redirect(PATH.home);
}
