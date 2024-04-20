"use client";

import { Search } from "lucide-react";
import { SearchBarPlaceholder } from "./search-bar-placeholder";
import { useSearchBar } from "@/hooks/useSearchBar";

export const SearchBarMobile = () => {
  const {
    inputRef,
    showInput,
    setShowInput,
    submitting,
    setSubmitting,
    toggleShowInput,
    resetShowInput,
    handleSubmit,
  } = useSearchBar();
  //
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-5 shadow-lg shadow-black bg-white border border-brand w-full rounded-full min-h-[60px] max-h-[60px] flex-col-center"
    >
      <fieldset disabled={submitting} className="flex-center-between">
        <input
          ref={inputRef}
          type="search"
          id="search"
          name="search"
          placeholder="Search product, brand or barcode"
          className="ml-6 flex-1 border_ bg-transparent text-600"
          style={{
            outline: "none",
            outlineColor: "#fff",
            border: "none",
            borderColor: "#fff",
          }}
          onMouseLeave={resetShowInput}
          autoFocus
          required
        />
        <button
          className="btn-accent-white flex-center-center w-[50px] h-[50px] rounded-full ml-2 mr-2"
          title="Search"
        >
          <Search strokeWidth={3} />
        </button>
      </fieldset>
    </form>
  );
};
