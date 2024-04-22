export const ProductCardBarcode = ({
  barcode,
}: {
  barcode: string | number;
}) => {
  let arr = barcode.toString().split("");
  let top = arr.shift();
  let end = arr.pop();
  //
  return (
    <div className="bg-gray-100 min-w-[140px] max-w-[140px] min-h-[75px]">
      <img src="/images/barcode-blank.png" width="100%" alt="" />
      <b className="bg-white px-2 tracking-wider text-xs">{`${top}-${arr.join("")}-${end}`}</b>
    </div>
  );
};
