import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput, defaultValues } from "./TRY";
import fakeBrands from "@/data/fake-brands";
import { productFormDto } from "@/server/requests/product.dto";
import { zodResolver } from "@hookform/resolvers/zod";

export default function useTryForm() {
  const {
    control,
    formState: { errors, isSubmitting },
    register,
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues,
    resolver: zodResolver(productFormDto),
  });
  const selectBrandOptions = fakeBrands.map(({ id, name }) => ({
    value: id,
    label: name,
  }));

  //
  const onSubmit: SubmitHandler<IFormInput> = async (formData) => {  
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<IFormInput>= ~ formData:",
      formData
    );
    try {
      const rawResponse = await fetch("/api/1", {
        headers: {
          accept: "application/json",
          method: "POST",
        },
      });
      //
      if (rawResponse) {
        const jsonResponse = await rawResponse.json();
        console.log(
          "🚀 ~ constonSubmit:SubmitHandler<IFormInput>= ~ jsonResponse:",
          jsonResponse
        );
      }
      console.log(
        "🚀 ~ constonSubmit:SubmitHandler<IFormInput>= ~ rawResponse:",
        rawResponse
      );
    } catch (error) {
      console.log(
        "🚀 ~ constonSubmit:SubmitHandler<IFormInput>= ~ error:",
        error
      );
    }
  };

  return {
    selectBrandOptions,
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    onSubmit,
  };
}
