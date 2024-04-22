import Link from "next/link";
import { QrCode, PlusCircle } from "lucide-react";
import { Icon } from "@/components/icon";
import { Button } from "@/components/shadcn/ui/button";
import { Dialog, DialogTrigger } from "@/components/shadcn/ui/dialog";
import { ValidateBarcodeForm } from "../validate-barcode";
import PATH from "@/constants/PATH";

export const QuickAccessBar = () => {
  return (
    <>
      <div className="hidden sm:flex flex-center gap-10 pt-5 text-sm text-accent underline_">
        <Link href={PATH.create_product}>
          <Icon as={<PlusCircle />} text="Add Product" />
        </Link>
        {/*  */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <Icon as={<QrCode />} text="Validate Barcode" />
            </Button>
          </DialogTrigger>
          <ValidateBarcodeForm />
        </Dialog>
      </div>
    </>
  );
};
