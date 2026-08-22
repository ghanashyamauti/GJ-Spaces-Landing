import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-3 border px-6 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        atelier: "border-primary bg-primary text-primary-foreground hover:border-accent hover:bg-accent",
        pearl: "border-primary-foreground/25 bg-primary-foreground text-primary hover:border-accent hover:bg-accent hover:text-accent-foreground",
        glass: "border-primary-foreground/25 bg-primary/35 text-primary-foreground backdrop-blur-xl hover:bg-primary-foreground hover:text-primary",
        outline: "border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
        default: "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "border-destructive bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary: "border-secondary bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "border-transparent bg-transparent text-current hover:bg-accent/10",
        link: "min-h-0 border-transparent bg-transparent px-0 text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6",
        sm: "h-9 min-h-9 px-3",
        lg: "h-14 px-8",
        icon: "size-10 min-h-10 p-0",
        "icon-sm": "size-8 min-h-8 p-0",
        "icon-lg": "size-12 min-h-12 p-0",
      },
    },
    defaultVariants: { variant: "atelier", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };