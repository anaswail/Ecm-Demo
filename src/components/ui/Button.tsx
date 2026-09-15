import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg" | "icon";

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "className"
> {
  variant?: Variant;
  size?: Size;
  /** If provided, renders as a router Link instead of a <button>. */
  href?: string;
  className?: string;
  children?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2";

const variantStyles: Record<Variant, string> = {
  // Solid gold fill. Ink text (--on-primary), not white — reads better on this gold.
  primary: "bg-primary text-on-primary hover:bg-primary-hover",
  // Hairline outline, no fill. Border darkens to ink on hover.
  secondary: "border border-border text-ink bg-transparent hover:border-ink",
  // Subtle tinted outline that fills solid on hover — for utility/icon actions
  // (language toggle, theme toggle), not primary calls to action.
  ghost:
    "text-primary bg-primary/5 border border-primary/20 hover:bg-primary hover:text-on-primary hover:border-primary",
};

const sizeStyles: Record<Size, string> = {
  sm: "rounded-md py-2 px-4 text-sm",
  md: "rounded-lg py-3 px-5 text-[15px]",
  lg: "rounded-lg py-3.5 px-6 text-base",
  // Square, for icon-only buttons (e.g. the light/dark toggle).
  icon: "rounded-full p-1.5",
};

const Button = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps) => {
  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
