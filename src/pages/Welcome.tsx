
import { Button } from "@/components/ui/button";
import { Leaf, Recycle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="text-center space-y-8 max-w-sm">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 eco-shadow">
            <div className="relative">
              <Leaf className="w-10 h-10 text-primary" />
              <Recycle className="w-6 h-6 text-primary/60 absolute -bottom-1 -right-1" />
            </div>
          </div>
        </div>

        {/* App Name & Tagline */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-foreground tracking-tight">
            Re-Eco
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Transform your waste into meaningful souvenirs from your travels
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 pt-8">
          <Button 
            onClick={() => navigate('/home')}
            className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl font-medium"
          >
            Get Started
          </Button>
          
          <Button 
            onClick={() => navigate('/home')}
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground py-4 text-base"
          >
            Continue as Guest
          </Button>
        </div>

        {/* Subtle indicator */}
        <div className="pt-6">
          <div className="w-12 h-1 bg-primary/30 rounded-full mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
