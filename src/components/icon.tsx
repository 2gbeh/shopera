export const Icon = ({
  as,
  text,
  textWrap,
}: {
  as: React.ReactNode;
  text: string | React.ReactNode;
  textWrap?: boolean;
}) => {
  const [text1, text2] = textWrap ? (text as string).split(" ") : ["", ""];
  //
  return (
    <div className="flex-center gap-1">
      <i className="mr-2">{as}</i>
      {textWrap ? (
        <div className="flex items-start flex-col text-xs">
          <b>{text1}</b>
          <b className="-mt-0">{text2}</b>
        </div>
      ) : (
        <b>{text}</b>
      )}
    </div>
  );
};
