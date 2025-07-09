
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PrintingStatus = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeRemaining(0);
          return 100;
        }
        return prev + 2;
      });
      
      setTimeRemaining(prev => {
        if (prev <= 0) return 0;
        return prev - 0.3;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

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
          <h1 className="text-lg font-semibold">
            {isComplete ? 'Print Complete!' : 'Printing in Progress'}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-12 text-center">
        <div className="max-w-sm mx-auto space-y-8">
          {/* Progress Circle */}
          <div className="relative">
            <div className="w-48 h-48 mx-auto">
              {isComplete ? (
                <div className="w-full h-full bg-primary/10 rounded-full flex items-center justify-center eco-shadow">
                  <CheckCircle className="w-16 h-16 text-primary" />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-muted/30"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 45}`}
                      strokeDashoffset={`${2 * Math.PI * 45 * (1 - progress / 100)}`}
                      className="text-primary transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground">
                        {Math.round(progress)}%
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Status Text */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {isComplete ? 'Your Temple Miniature is Ready!' : 'Creating Your Temple Miniature'}
            </h2>
            
            {!isComplete && (
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{Math.ceil(timeRemaining)} minutes remaining</span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          {!isComplete && (
            <div className="space-y-2">
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground">
                Layer {Math.floor(progress / 5) + 1} of 20
              </p>
            </div>
          )}

          {/* Instructions */}
          <div className="eco-card bg-secondary/30 text-left">
            <h3 className="font-medium text-foreground mb-2">
              {isComplete ? 'Collection Instructions' : 'What\'s Happening?'}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {isComplete 
                ? 'Your souvenir is cooling down. You can collect it from slot A3 in the vending machine.'
                : 'Your recycled plastic bottles are being melted and formed into a beautiful temple replica using precision 3D printing technology.'
              }
            </p>
          </div>

          {/* Action Button */}
          {isComplete && (
            <Button 
              onClick={() => navigate('/home')}
              className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-medium"
            >
              Back to Home
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrintingStatus;
