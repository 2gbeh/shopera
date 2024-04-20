export const ProductCardBarcode = ({
  barcode,
}: {
  barcode: string | number;
}) => {
  //
  return (
    <div className="bg-gray-100 min-w-[140px] max-w-[140px] min-h-[75px]">
      <img src="/images/barcode-blank.png" width="100%" alt="" />
      <b className="bg-white px-2 tracking-wider">{barcode}</b>
    </div>
  );
};
