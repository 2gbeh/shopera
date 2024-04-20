"use client";

import { Search } from "lucide-react";
import { SearchBarPlaceholder } from "./search-bar-placeholder";
import { useSearchBar } from "@/hooks/useSearchBar";

export const SearchBar = () => {
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
      className="hidden sm:flex shadow-lg shadow-black bg-white border border-brand w-full rounded-full min-h-[80px] max-h-[80px] flex-col-center"
    >
      <fieldset disabled={submitting} className="flex-center-between">
        {showInput ? (
          <input
            ref={inputRef}
            type="search"
            id="search"
            name="search"
            placeholder="Search ( / )"
            className="ml-8 flex-1 border_ bg-transparent text-600"
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
        ) : (
          <SearchBarPlaceholder handleClick={toggleShowInput} />
        )}
        {/*  */}
        <button
          className="btn-accent-white flex-center-center w-[60px] h-[60px] rounded-full ml-5  mr-2.5"
          title="Search"
        >
          <Search strokeWidth={3} />
        </button>
      </fieldset>
    </form>
  );
};
