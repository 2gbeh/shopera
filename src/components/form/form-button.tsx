import { Buffer } from "../loaders/buffer";

export const FormButton = ({
  text,
  handleSubmit,
  submitting,
}: {
  text: string;
  handleSubmit?: () => void;
  submitting?: boolean;
}) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      disabled={submitting}
      className="rounded-md btn-brand px-5 py-2.5 min-h-[40px] max-h-[40px] text-sm font-semibold shadow-sm flex-center gap-2"
    >
      {submitting && <Buffer />}
      {text}
    </button>
  );
};
