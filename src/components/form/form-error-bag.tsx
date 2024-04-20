import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/shadcn/ui/alert";

export const FormErrorBag = ({ message }: { message: string }) => {
  return (
    <Alert variant="destructive">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <AlertTitle>Internal Server Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
