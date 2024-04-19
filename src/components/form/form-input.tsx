import { TCollection } from "@/types/common.type";
import { FormLabel } from "./form-label";

const tw = {
  input:
    "w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
};

interface IFormInputProps {
  label?: string;
  prefix?: string;
  type?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  options?: TCollection;
}

export const FormInput = ({
  label,
  prefix,
  type = "text",
  name,
  defaultValue,
  placeholder,
  options,
}: IFormInputProps) => {
  const inputAttributes = {
    type,
    id: name,
    name,
    value: defaultValue ?? "",
    placeholder:
      placeholder ?? type === "email" ? "Ex. example.domain.com" : "",
    required: true,
  };
  //
  return (
    <div className="">
      <FormLabel self={{ label, name }} />
      {/*  */}
      <div className="mt-2">
        {prefix ? (
          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 bg-white focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm text-brand font-bold">
              {prefix}
            </span>
            <input
              {...inputAttributes}
              className="flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            />
          </div>
        ) : type == "select" ? (
          <select id={name} name={name} className={tw.input}>
            <option hidden>Choose one</option>
            {options?.map((e, i) => (
              <option key={i} value={e?.id as string}>
                {e?.name as string}
              </option>
            ))}
          </select>
        ) : (
          <input {...inputAttributes} className={tw.input} />
        )}
      </div>
    </div>
  );
};
