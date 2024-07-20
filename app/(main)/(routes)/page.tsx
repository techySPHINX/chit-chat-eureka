
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSwitchSessionUrl="/"/>

      <ModeToggle />
    </div>

  );
}
