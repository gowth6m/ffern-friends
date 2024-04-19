import * as React from "react";

import { cn } from "@/lib/utils";

// ------------------------------------------------------------

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string | boolean;
  helperText?: string | boolean;
  fullWidth?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, fullWidth, name, ...props }, ref) => {
    return (
      <div className={`relative ${fullWidth && "w-full"}`}>
        <div className={`relative ${fullWidth && "w-full"}`}>
          <input
            id={props.id + "-input-" + name}
            type={type}
            onChange={props.onChange}
            className={cn(
              "peer flex h-[3.125rem] w-full rounded-md border border-transparent bg-inputBackground px-[0.625rem] py-[0.5rem] text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover:border hover:border-solid hover:border-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
              "peer appearance-none overflow-ellipsis pt-[1.25rem]",
              props.error ? "border-error bg-error/30" : "border-transparent",
              className,
            )}
            ref={ref}
            placeholder={props.label ? " " : undefined}
            {...props}
          />
          {props.label && (
            <label
              htmlFor={props.id + "-input-" + name}
              className={cn(
                "absolute start-1 top-3 z-10 origin-[0] -translate-y-2 scale-75 transform bg-transparent px-2 text-sm text-gray-500 outline-none duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:bg-background peer-focus:top-5 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:bg-transparent peer-focus:px-2 peer-focus:text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:bg-transparent peer-disabled:opacity-50 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4",
                props.error && "text-error !bg-transparent",
              )}
            >
              {props.label}
            </label>
          )}
        </div>
        <p
          className={`mt-1 text-xs ${props.error ? "text-error" : "text-foreground/60"}`}
        >
          {props.error || props.helperText}
        </p>
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
