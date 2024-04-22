import React, { useState } from "react";
import { zzz } from "@/utils";

export default function useValidateBarcode() {
  const [barcode, setBarcode] = useState("85626000279333");
  const [validated, setValidated] = useState<-1 | 0 | 1>(-1);
  const [validating, setValidating] = useState(false);
  //
  function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
    let value = ev.currentTarget?.value?.trim();
    // console.log("🚀 ~ handleChange ~ value:", value);
    if (!isNaN(Number(value)) && value.length <= 12) {
      value.length === 12
        ? setBarcode(() => {
            let arr = value.split("");
            let top = arr.shift();
            let checkDigit = arr.pop();
            return `${top}-${arr.join("")}-${checkDigit}`;
          })
        : setBarcode(value);
    }
  }
  async function handleValidate() {
    setValidating(true);
    let raw = await fetch(`/api/products/validate-barcode/${barcode}`);
    let res = await raw.json();
    //
    setValidated(res.success ? 1 : 0);
    await zzz();
    setValidating(false);
    setValidated(-1);
  }
  //
  return {
    barcode,
    setBarcode,
    validated,
    setValidated,
    validating,
    setValidating,
    handleChange,
    handleValidate,
  };
}
