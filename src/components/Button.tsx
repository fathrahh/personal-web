import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(
  "border-transparent inline-flex items-center justify-center text-white w-max rounded-md",
  {
    variants: {
      variant: {
        primary: ["bg-custom-dark"],
        secondary: ["bg-custom-blue-accent"],
        orange: ["bg-custom-orange"],
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"],
      },
      width: {
        fill: ["w-full"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={button({ variant, size, className })} {...props}>
      {children}
    </button>
  );
}
