import { cn } from "@/utils/helper";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  text: string;
  isActive: boolean;
}

export default function NavLink(props: NavLinkProps) {
  return (
    <Link href={props.href} passHref>
      <div
        className={cn(
          "px-8 py-4 flex items-center justify-center border-x-[1px] [&>*]:transition-all [&>*]:duration-500 border-lines relative group"
        )}
      >
        <span
          className={cn("text-secondary-1 group-hover:text-white", {
            "text-white": props.isActive,
          })}
        >
          {props.text}
        </span>
        <div
          className={cn(
            "active-indicator absolute bottom-0 w-full group-hover:scale-x-100  h-1 bg-accent-1  origin-left scale-x-0",
            {
              "scale-x-100": props.isActive,
            }
          )}
        />
      </div>
    </Link>
  );
}
