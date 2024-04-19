import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { FormLabel } from "./form-label";

export const FormInputImage = ({
  label,
  name,
}: {
  label?: string;
  name: string;
}) => {
  //
  return (
    <div className="col-span-full">
      <FormLabel self={{ label, name }} />
      {/*  */}
      <div className="bg-white mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-6">
        <div className="text-center">
          <PhotoIcon
            className="mx-auto h-12 w-12 text-gray-300"
            aria-hidden="true"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
              htmlFor={name}
              className="relative cursor-pointer rounded-md bg-white font-semibold text-brand focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
              <span>Upload a file</span>
              <input
                type="file"
                name={name}
                id={name}
                className="sr-only"
                disabled
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
    </div>
  );
};
