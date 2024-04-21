"use client";

import { useState } from "react";
import { QrCode, PlusCircle } from "lucide-react";
import { Icon } from "@/components/icon";
import { useRouter } from "next/navigation";
import PATH from "@/constants/PATH";

export const QuickAccessBar = () => {
  const router = useRouter()
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => setShowOffcanvas((prev) => !prev);
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal((prev) => !prev);
  //
  return (
    <ul className="hidden sm:flex flex-center gap-16 pt-5 text-sm text-accent underline_">
      <li className="border_ cursor-pointer" onClick={()=>router.push(PATH.create_product)}>
        <Icon as={<PlusCircle />} text="Add Product" />
      </li>
      <li className="border_ cursor-not-allowed" onClick={toggleShowModal}>
        <Icon as={<QrCode />} text="Validate UPC12 Barcode" />
      </li>
    </ul>
  );
};
