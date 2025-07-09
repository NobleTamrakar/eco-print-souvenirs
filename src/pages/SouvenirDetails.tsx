
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Leaf, Recycle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const SouvenirDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app would fetch based on id
  const souvenir = {
    name: 'Temple Miniature',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=600&fit=crop',
    printTime: '15 minutes',
    material: 'Recycled Plastic',
    description: 'A detailed miniature replica of the ancient Hampi temple architecture, crafted from your recycled waste materials.',
    ecoImpact: '2 plastic bottles recycled',
    dimensions: '8cm x 6cm x 4cm'
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 z-10">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate('/home')}
            className="p-2"
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-lg font-semibold">Souvenir Details</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pb-24">
        {/* Image */}
        <div className="aspect-square rounded-2xl overflow-hidden mb-6 eco-shadow">
          <img 
            src={souvenir.image} 
            alt={souvenir.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {souvenir.name}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {souvenir.description}
            </p>
          </div>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-4">
            <div className="eco-card">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Print Time</span>
              </div>
              <p className="text-lg font-semibold text-foreground">
                {souvenir.printTime}
              </p>
            </div>

            <div className="eco-card">
              <div className="flex items-center space-x-2 mb-2">
                <Recycle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Material</span>
              </div>
              <p className="text-lg font-semibold text-foreground">
                {souvenir.material}
              </p>
            </div>
          </div>

          {/* Eco Impact */}
          <div className="eco-card bg-primary/5 border-primary/20">
            <div className="flex items-center space-x-2 mb-3">
              <Leaf className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Environmental Impact</span>
            </div>
            <p className="text-foreground mb-2">{souvenir.ecoImpact}</p>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              +15 Eco Points
            </Badge>
          </div>

          {/* Additional Info */}
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Dimensions</span>
              <span className="font-medium">{souvenir.dimensions}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Origin</span>
              <span className="font-medium">Hampi, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border px-6 py-4">
        <Button 
          onClick={() => navigate('/printing')}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-medium text-lg"
        >
          Start 3D Printing
        </Button>
      </div>
    </div>
  );
};

export default SouvenirDetails;
