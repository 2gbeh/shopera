"use client";

import { MouseEvent, useState } from "react";
import { SearchBarPlaceholder } from "./search-bar-placeholder";
import { SearchBarButton } from "./search-bar-button";
import { zzz } from "@/utils";

export const SearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const toggleShowInput = () => setShowInput((prev) => !prev);
  async function resetShowInput(ev: MouseEvent<HTMLInputElement>) {
    if (ev.currentTarget.value.trim().length < 1) {
      await zzz(1);
      toggleShowInput();
    }
  }
  async function handleSubmit() {
    toggleShowInput();
  }
  //
  return (
    <form className="shadow-lg shadow-black bg-white border border-brand w-full rounded-full min-h-[80px] max-h-[80px] flex-col-center">
      <fieldset disabled={submitting} className="flex-center-between">
        {showInput ? (
          <input
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
        <SearchBarButton handleSubmit={handleSubmit} />
      </fieldset>
    </form>
  );
};
