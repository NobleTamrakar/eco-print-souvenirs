
import { Button } from "@/components/ui/button";
import { ArrowLeft, Camera, QrCode, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const QRScan = () => {
  const navigate = useNavigate();
  const [isScanning, setIsScanning] = useState(false);

  const handleScan = () => {
    setIsScanning(true);
    // Simulate scan process
    setTimeout(() => {
      setIsScanning(false);
      // Navigate to printing status after successful scan
      navigate('/printing');
    }, 2000);
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
          <h1 className="text-lg font-semibold">Add Waste Materials</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-8 text-center">
        <div className="max-w-sm mx-auto space-y-8">
          {/* Scan Frame */}
          <div className="relative">
            <div className="w-64 h-64 mx-auto border-2 border-dashed border-primary/30 rounded-2xl flex items-center justify-center bg-secondary/20">
              {isScanning ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-primary font-medium">Scanning...</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <QrCode className="w-20 h-20 text-primary/60 mx-auto" />
                  <p className="text-muted-foreground">
                    Position QR code within frame
                  </p>
                </div>
              )}
            </div>
            
            {/* Corner brackets */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-primary"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-primary"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-primary"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-primary"></div>
          </div>

          {/* Instructions */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              Scan Waste Container
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Scan the QR code on your waste container to add materials for 3D printing
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-3">
            <div className="eco-card bg-primary/5 border-primary/20 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">Instant Processing</p>
                  <p className="text-xs text-muted-foreground">Your waste is converted immediately</p>
                </div>
              </div>
            </div>

            <div className="eco-card text-left">
              <h3 className="font-medium text-foreground mb-2">Accepted Materials</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Plastic bottles (PET)</div>
                <div>• Food containers</div>
                <div>• Paper cups</div>
                <div>• Aluminum cans</div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            onClick={handleScan}
            disabled={isScanning}
            className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-medium flex items-center justify-center space-x-2"
          >
            <Camera className="w-5 h-5" />
            <span>{isScanning ? 'Scanning...' : 'Start Scanning'}</span>
          </Button>

          {/* Help */}
          <div className="text-center">
            <Button variant="ghost" className="text-muted-foreground">
              Need help finding the QR code?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRScan;
