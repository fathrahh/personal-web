import type { PropsWithChildren } from "react";
import { cn } from "@/utils/helper";

interface Props {
  isActive: boolean;
  isFirst?: boolean;
}

export default function ExperienceList({
  children,
  isFirst,
  isActive,
}: PropsWithChildren<Props>) {
  return (
    <li
      className={cn("relative border-gray-200 border-l-2 pl-8 pb-8", {
        "after:content-[''] after:w-4 after:h-[2px] after:absolute after:bg-gray-200 after:left-0 after:bottom-0 after:-translate-x-1/2":
          isFirst,
      })}
    >
      <div
        className={cn(
          "w-4 h-4 rounded-full bg-gray-200 top-0 left-0 absolute -translate-x-1/2",
          {
            "bg-rose-400 [&_>_span]:bg-rose-300": isActive,
            "outline-none outline-gray-200 outline-1": !isActive,
          }
        )}
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" />
      </div>
      {children}
    </li>
  );
}
