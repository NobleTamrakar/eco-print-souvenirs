
import { Clock } from "lucide-react";

interface Souvenir {
  id: string;
  name: string;
  image: string;
  printTime: string;
  material: string;
}

interface SouvenirCardProps {
  souvenir: Souvenir;
  onClick: () => void;
}

const SouvenirCard = ({ souvenir, onClick }: SouvenirCardProps) => {
  return (
    <div 
      onClick={onClick}
      className="eco-card hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-muted/30">
        <img 
          src={souvenir.image} 
          alt={souvenir.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-2">
        <h3 className="font-medium text-foreground text-sm leading-tight">
          {souvenir.name}
        </h3>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock className="w-3 h-3 mr-1" />
          <span>{souvenir.printTime}</span>
        </div>
        
        <div className="text-xs text-primary font-medium">
          {souvenir.material}
        </div>
      </div>
    </div>
  );
};

export default SouvenirCard;
