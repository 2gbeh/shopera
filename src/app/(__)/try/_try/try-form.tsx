"use client";

import Select from "react-select";
//
import { tw } from "./TRY";
import useTryForm from "./useTryForm";
import { Controller } from "react-hook-form";

export const TryForm = () => {
  const {
    selectBrandOptions,
    control,
    errors,
    isSubmitting,
    register,
    setValue,
    handleSubmit,
    onSubmit,
  } = useTryForm();
  //
  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST" className={tw.form}>
      <fieldset disabled={isSubmitting}>
        <div className={tw.fieldset}>
          <div className={tw.input_group}>
            <label className={tw.label}>Select Brand :</label>
            <div className={tw.error_group}>
              <Controller
                name="brand_id"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    options={selectBrandOptions}
                    placeholder="Choose one"
                    className={tw.input_alt}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        backgroundColor: "transparent",
                        paddingTop: 4,
                        paddingBottom: 4,
                      }),
                    }}
                  />
                )}
                // defaultValue={selectedOption}
              />
              {errors?.brand_id && (
                <p className={tw.error}>A Brand must be selected</p>
              )}
            </div>
          </div>
          {/*  */}
          <div className={tw.input_group}>
            <label className={tw.label}>Product Name :</label>
            <div className={tw.error_group}>
              <input {...register("name")} className={tw.input} />
              {errors?.name && (
                <p className={tw.error}>{errors.name.message}</p>
              )}
            </div>
          </div>
          {/*  */}
          <div className={tw.input_group}>
            <label className={tw.label}>UPC-12 Barcode :</label>
            <div className={tw.error_group}>
              <input
                {...register("barcode")}
                type="number"
                className={tw.input}
              />
              {errors?.barcode && (
                <p className={tw.error}>{errors.barcode.message}</p>
              )}
            </div>
          </div>
        </div>
        {/*  */}
        <div className={tw.button_group}>
          <button className={tw.button}>Save{isSubmitting && "..."}</button>
        </div>
      </fieldset>
    </form>
  );
};
