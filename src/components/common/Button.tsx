import { cn } from "../../lib/utils";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className,
}: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-7 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:-translate-y-1 hover:bg-[var(--accent-hover)]",

    secondary:
      "border border-[var(--border)] hover:bg-white",
  };

  return (
    <Link
      href={href}
      className={cn(base, variants[variant], className)}
    >
      {children}
    </Link>
  );
}