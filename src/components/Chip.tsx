import { cva, type VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const chip = cva("font-semibold rounded-full ", {
  variants: {
    variant: {
      rose: ["bg-rose-50", "text-rose-400", "border-rose-100 "],
    },
    size: {
      sm: ["border-[1px]", "text-sm", "px-3"],
      md: ["border-[1px]", "text-md", "px-4", "py-1"],
    },
  },
  defaultVariants: {
    variant: "rose",
    size: "sm",
  },
});

interface ChipProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chip> {}

export default function Chip({ className, variant, size, ...rest }: ChipProps) {
  return (
    <div
      className={chip({
        className,
        variant,
        size,
      })}
      {...rest}
    />
  );
}
