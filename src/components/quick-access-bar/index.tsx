"use client";

import { useState } from "react";

export const QuickAccessBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const toggleOffcanvas = () => setShowOffcanvas((prev) => !prev);
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => setShowModal((prev) => !prev);
  //
  return (
    <ul className="flex-center gap-16 pt-5 text-sm text-accent underline">
      <li className="border_" onClick={toggleOffcanvas}>
        # Add Product
      </li>
      <li className="border_" onClick={toggleShowModal}>
        # Validate UPC12 Barcode
      </li>
    </ul>
  );
};
