import Link from "next/link";
import PATH from "@/constants/PATH";
import { f } from "@/utils";

export const metadata = { title: "All Products" };

export default function Home() {
  return (
    <main>
      <Link href={f(PATH.edit_product, "0fd2652c-fb03-4be4-8e80-819a856ef95a")}>
        Edit
      </Link>
    </main>
  );
}
