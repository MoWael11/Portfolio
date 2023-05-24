import { FC, InputHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { TypeOf, input } from "zod";

export const inputVariants = cva(
  "flex outline-none border-[1px] text-[16px] rounded-sm transition-colors duration-500 placeholder:transition-opacity placeholder:duration-500 focus:placeholder:opacity-0",
  {
    variants: {
      variant: {
        default:
          "bg-dark border-dark-border focus:border-white placeholder:text-secondary-text text-primary-text",
      },
      dimension: {
        default: "px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      dimension: "default",
    },
  }
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input: FC<InputProps> = ({ className, variant, dimension, ...props }) => {
  return (
    <input
      className={cn(inputVariants({ variant, dimension, className }))}
      {...props}
    />
  );
};

export default Input;
