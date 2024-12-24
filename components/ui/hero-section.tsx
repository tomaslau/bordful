import { Badge } from "@/components/ui/badge";

interface HeroSectionProps {
  badge: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export function HeroSection({
  badge,
  title,
  description,
  children,
}: HeroSectionProps) {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-[640px] space-y-6">
          <div className="space-y-4">
            <Badge variant="outline" className="mb-2">
              {badge}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h1>
            <p className="text-sm text-muted-foreground md:text-base max-w-[540px]">
              {description}
            </p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}