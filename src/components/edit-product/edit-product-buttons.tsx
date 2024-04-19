import { FormButton } from "../form/form-button";

export const EditProductButtons = () => {
  return (
    <section className="mt-6 flex items-center justify-end gap-8 border-t pt-5  px-5">
      <button
        type="button"
        className="text-sm font-semibold leading-6 text-gray-600"
      >
        Cancel
      </button>
      <FormButton text="Save" />
    </section>
  );
};
