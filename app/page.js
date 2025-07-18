import { Button } from "../components/ui/button";
import { Divide } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <div>
      <Button variant="default">Hello from Shadcn</Button>
      <UserButton />
    </div>
  );
}
