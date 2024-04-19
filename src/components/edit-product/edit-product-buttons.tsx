export const EditProductButtons = () => {
  return (
    <section className="mt-6 flex items-center justify-end gap-x-6 border-t pt-5">
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="rounded-md btn-brand px-3 py-2 text-sm font-semibold shadow-sm"
      >
        Save
      </button>
    </section>
  );
};
