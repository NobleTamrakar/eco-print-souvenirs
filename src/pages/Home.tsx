
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Leaf, Clock, QrCode, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SouvenirCard from "@/components/SouvenirCard";

const Home = () => {
  const navigate = useNavigate();
  
  const souvenirs = [
    {
      id: '1',
      name: 'Temple Miniature',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=300&h=300&fit=crop',
      printTime: '15 min',
      material: 'Recycled Plastic'
    },
    {
      id: '2', 
      name: 'Sacred Elephant',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop',
      printTime: '20 min',
      material: 'Eco Resin'
    },
    {
      id: '3',
      name: 'Heritage Keychain',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&h=300&fit=crop',
      printTime: '8 min',
      material: 'Recycled Metal'
    },
    {
      id: '4',
      name: 'Lotus Sculpture',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300&h=300&fit=crop',
      printTime: '12 min',
      material: 'Bio Plastic'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 pt-12 pb-6 bg-gradient-to-b from-secondary/20 to-background">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">You are at Hampi</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <Leaf className="w-3 h-3 mr-1" />
              248 pts
            </Badge>
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/profile')}
              className="p-2"
            >
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Available Souvenirs
        </h1>
        <p className="text-muted-foreground text-sm">
          Choose what to create from your recycled materials
        </p>
      </div>

      {/* Souvenirs Grid */}
      <div className="px-6 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {souvenirs.map((souvenir) => (
            <SouvenirCard 
              key={souvenir.id} 
              souvenir={souvenir}
              onClick={() => navigate(`/souvenir/${souvenir.id}`)}
            />
          ))}
        </div>
      </div>

      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border px-6 py-4">
        <Button 
          onClick={() => navigate('/scan')}
          className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2"
        >
          <QrCode className="w-5 h-5" />
          <span>Add Waste to Print</span>
        </Button>
      </div>
    </div>
  );
};

export default Home;
