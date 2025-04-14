import * as Icons from "lucide-react";

export const ComponentIcon = ({
  icon,
  className,
}: {
  icon: keyof typeof Icons | undefined;
  className?: string;
}) => {
  if (!icon) return null;
  const Icon = Icons[icon] as React.ElementType;
  return <Icon className={className} />;
};
