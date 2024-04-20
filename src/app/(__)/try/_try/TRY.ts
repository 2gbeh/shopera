export interface IFormInput {
  brand_id?: { value: number; label: string };
  name: string;
  barcode: number;
}

export const defaultValues = {
  brand_id: undefined,
  name: "",
  barcode: 0,
};

export const tw = {
  form: "text-sm border inline-block px-5 py-4",
  fieldset: "w-full sm:w-[400px] mx-auto",
  label: "whitespace-nowrap font-bold min-w-[120px] bg-blue-50 mt-2",
  input_group: "flex-start-between my-2 p-0 border bg-red-50",
  input:
    "py-2 rounded focus:border-brand outline-none border-300 w-full bg-transparent",
  input_alt:
    "rounded focus:border-brand outline-none border-300 w-full bg-transparent",
  error_group: "flex flex-col flex-1 gap-1",
  error: "text-xs text-red-500 block px-1",
  button_group: "flex-end mt-4",
  button: "btn-brand py-2.5 px-5 rounded",
};
