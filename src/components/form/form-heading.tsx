export const FormHeading = ({ h1, p }: { h1?: string; p?: string }) => {
  //
  return (
    <hgroup>
      {h1 && (
        <h1 className="text-base font-semibold leading-7 text-gray-900">
          {h1}
        </h1>
      )}
      {/*  */}
      {p && <p className="mt-1 text-sm leading-6 text-gray-600">{p}</p>}
    </hgroup>
  );
};
