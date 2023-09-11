import type { PropsWithChildren } from "react";
import { cn } from "@/utils/helper";
import experience from "@/data/experience.json";

interface Props {
  isActive: boolean;
  isFirst?: boolean;
  experience?: (typeof experience)[number];
}

export default function ExperienceList({
  children,
  isFirst,
  isActive,
  experience,
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
      {experience && (
        <>
          <h4 className="text-lg font-semibold">{experience.company}</h4>
          <div className="flex items-center gap-2">
            <div className="font-semibold text-gray-400 text-sm">
              <span>{experience.from}</span>-<span>{experience.to}</span>
            </div>
            <span className="font-bold">~</span>
            <span>{experience.position}</span>
          </div>
          <p>{experience.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {experience.technology.map((tech) => (
              <span
                className="px-4 bg-rose-50 text-rose-400 border-[1px] border-rose-100 font-semibold rounded-full text-sm"
                key={tech}
              >
                {tech}
              </span>
            ))}
          </div>
        </>
      )}
      {children}
    </li>
  );
}
