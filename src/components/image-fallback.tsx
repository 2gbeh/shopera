"use client";

import { useEffect, useState } from "react";

export const ImageFallback = ({
  as,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement> & {
  as: [string | undefined, string];
}) => {
  const [status, setStatus] = useState(false);
  const [image, fallback] = as;
  useEffect(() => {
    setStatus(window?.navigator?.onLine);
  });
  //
  return <img {...props} src={status && image ? image : fallback} />;
};
