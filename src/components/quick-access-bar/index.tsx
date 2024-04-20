"use client";

import { useState } from "react";
import { Icon } from "@/components/icon";
import { QrCode, PlusCircle } from "lucide-react";

export const QuickAccessBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => setShowOffcanvas((prev) => !prev);
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal((prev) => !prev);
  //
  return (
    <ul className="hidden sm:flex flex-center gap-16 pt-5 text-sm text-accent underline_">
      <li className="border_ cursor-pointer" onClick={toggleOffcanvas}>
        <Icon as={<PlusCircle />} text="Add Product" />
      </li>
      <li className="border_ cursor-pointer" onClick={toggleShowModal}>
        <Icon as={<QrCode />} text="Validate UPC12 Barcode" />
      </li>
    </ul>
  );
};
