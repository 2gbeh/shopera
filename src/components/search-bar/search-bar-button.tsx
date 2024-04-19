"use client";

export const SearchBarButton = ({
  handleSubmit,
}: {
  handleSubmit: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="btn-accent flex-center-center w-[60px] h-[60px] rounded-full ml-5  mr-2.5"
      title="Search"
    >
      <i>#</i>
    </button>
  );
};
