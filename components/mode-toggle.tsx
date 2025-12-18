import { SunIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function ModeToggle() {
  return (
    <Button variant="ghost" size="icon" className="h-9 w-9">
      <SunIcon className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  );
}
