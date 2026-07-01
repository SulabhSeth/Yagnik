import { cn } from "../../lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: Props) {
  return (
    <div className={cn("container-custom", className)}>
      {children}
    </div>
  );
}