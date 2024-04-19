"use client";

export const FilterBar = () => {
  function handleSortProduct() {}
  function handleSortBrand() {}
  //
  return (
    <section className="flex-end bg-blue-50 px-10 py-5 border-b">
      <ul className="flex-center gap-10 text-sm">
        <li>
          <button onClick={handleSortProduct}>
            <b>#</b>
            <p className="mt-1">Products A-Z</p>
          </button>
        </li>
        <li>
          <button onClick={handleSortBrand}>
            <b>#</b>
            <p className="mt-1">Brands A-Z</p>
          </button>
        </li>
      </ul>
    </section>
  );
};
