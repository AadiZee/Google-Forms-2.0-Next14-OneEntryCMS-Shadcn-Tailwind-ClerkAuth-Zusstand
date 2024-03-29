"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant={"brand"}
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      Submit
    </Button>
  );
};

export default SubmitButton;
