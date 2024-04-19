export const FormLabel = ({
  self,
}: {
  self: {
    label?: string;
    name: string;
  };
}) => {
  const isRequired = self.label?.endsWith("*");
  //
  return (
    self.label && (
      <label
        htmlFor={self.name}
        className="block text-sm font-bold leading-6 text-brand-dark"
      >
        {isRequired ? self.label.slice(0,-1) : self.label}
        {/*  */}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
    )
  );
};
