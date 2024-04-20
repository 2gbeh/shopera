import { ChevronUp } from "lucide-react";

export const Fab = () => {
  return (
    <a href="#top" className="fab btn-brand">
      <button type="button">
        <ChevronUp strokeWidth={3} />
      </button>
    </a>
  );
};
