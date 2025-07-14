import { Card, CardContent } from '@/components/ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
}

export const ServiceCard = ({ title, description, price, duration }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-border/50">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <span className="text-lg font-bold text-primary">{price}</span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-2">
          {description}
        </p>
        <p className="text-xs text-muted-foreground font-medium">
          Duration: {duration}
        </p>
      </CardContent>
    </Card>
  );
};