import { MouseEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { zzz } from "@/utils";

export const useSearchBar = () => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  // 
  const toggleShowInput = () => setShowInput((prev) => !prev);
  async function resetShowInput(ev: MouseEvent<HTMLInputElement>) {
    let value = ev.currentTarget?.value;
    // 
    if (!value || value.trim().length < 1) {
      await zzz(1);
      toggleShowInput();
    }
  }
  function handleSubmit(ev: React.SyntheticEvent) {
    ev.preventDefault();
    let value = inputRef.current?.value;
    // 
    if (value && value.trim().length > 0) {
      let path = `?like=${inputRef.current?.value}`;
      router.push(path, {
        scroll: false,
      });
    }
  }
  //
  return {
    inputRef,
    showInput,
    setShowInput,
    submitting,
    setSubmitting,
    toggleShowInput,
    resetShowInput,
    handleSubmit,
  };
};
