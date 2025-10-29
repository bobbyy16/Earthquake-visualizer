import { Alert, AlertDescription } from "./ui/alert";
import { AlertTriangle } from "lucide-react";

const ErrorAlert = ({ message }) => {
  if (!message) return null;

  return (
    <Alert className="mb-4 bg-red-950 border-red-800">
      <AlertTriangle className="h-4 w-4" />
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};

export default ErrorAlert;
