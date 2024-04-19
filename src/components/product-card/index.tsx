import { Package } from "lucide-react";
import { Icon } from "../icon";
import { TDocument } from "@/types/common.type";
import PATH from "@/constants/PATH";
import { $, f } from "@/utils";
import fakeBrands from "@/data/fake-brands";
//
import { ProductCardImage } from "./product-card-image";
import { ProductCardBarcode } from "./product-card-barcode";

const getBrandName = (id: number, trim = false) => {
  let brand = fakeBrands.find((e) => e.id == id);
  return brand ? (trim ? brand.name.slice(0, 6) : brand.name) : "N/A";
};

export const ProductCard = ({
  index,
  item,
}: {
  index: number;
  item: TDocument;
}) => {
  return (
    <li className="shadow-md hover:shadow-xl transition min-w-[310px] max-w-[310px] max-h-[410px] min-h-[410px] bg-white rounded-xl flex flex-col">
      {/*  */}
      <ProductCardImage
        src={item?.thumbnail as string}
        href={f(PATH.edit_product, item?.id as string)}
      />
      {/*  */}
      <article className="py-2.5 px-5 flex-col-between flex-1">
        <hgroup>
          <b className="text-sm text-accent font-normal_">
            <Icon
              as={<Package />}
              text={getBrandName(item?.brand_id as number, true)}
            />
          </b>
          <h1 className="py-1 truncate_">
            {item?.name + " - " + getBrandName(item.brand_id as number)}
          </h1>
        </hgroup>
        <section className="flex-start-between mb-2">
          <h2
            className="mt-2 font-bold text-[24px] text-brand-dark"
            style={{ whiteSpace: "nowrap" }}
          >
            ₦ {$(item?.price as number)}
          </h2>
          {/*  */}
          <ProductCardBarcode barcode={item?.barcode as string} />
        </section>
      </article>
    </li>
  );
};
