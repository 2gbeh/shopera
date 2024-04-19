import { useEffect, useState } from "react";

export default function useHasInternet() {
  const [status, setStatus] = useState(false);
  useEffect(() => {
    setStatus(window?.navigator?.onLine);
  });
  //
  return status;
}
