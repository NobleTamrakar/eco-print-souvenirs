
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Leaf, Recycle, Gift, Award, History } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const stats = [
    { label: 'Waste Recycled', value: '2.4 kg', icon: Recycle, color: 'text-blue-600' },
    { label: 'Items Printed', value: '7', icon: Gift, color: 'text-green-600' },
    { label: 'Eco Points', value: '248', icon: Leaf, color: 'text-primary' },
    { label: 'Days Active', value: '12', icon: Award, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { item: 'Temple Miniature', date: 'Today', points: '+15 pts' },
    { item: 'Sacred Elephant', date: 'Yesterday', points: '+20 pts' },
    { item: 'Lotus Keychain', date: '2 days ago', points: '+8 pts' },
    { item: 'Heritage Coin', date: '3 days ago', points: '+12 pts' }
  ];

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
          <h1 className="text-lg font-semibold">Your Eco Profile</h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-8">
        {/* Profile Header */}
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto eco-shadow">
            <Leaf className="w-10 h-10 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Eco Traveler</h2>
            <p className="text-muted-foreground">Making a difference since Dec 2024</p>
          </div>
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
            Green Champion
          </Badge>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="eco-card text-center">
              <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Environmental Impact */}
        <div className="eco-card bg-primary/5 border-primary/20">
          <div className="flex items-center space-x-2 mb-4">
            <Leaf className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">Your Environmental Impact</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">CO₂ Saved</span>
              <span className="font-semibold text-foreground">4.2 kg</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Energy Saved</span>
              <span className="font-semibold text-foreground">12.8 kWh</span>
            </div>
            <div className="flex justify-between items-center border-t pt-3">
              <span className="text-foreground font-medium">Equivalent to</span>
              <span className="text-primary font-semibold">18 trees planted</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <History className="w-5 h-5 text-muted-foreground" />
            <h3 className="font-semibold text-foreground">Recent Activity</h3>
          </div>
          
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-b-0">
                <div>
                  <div className="font-medium text-foreground text-sm">
                    {activity.item}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {activity.date}
                  </div>
                </div>
                <Badge variant="outline" className="text-primary border-primary/30">
                  {activity.points}
                </Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="eco-card">
          <h3 className="font-semibold text-foreground mb-4">Achievements</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-xs text-muted-foreground">First Print</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Recycle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-xs text-muted-foreground">Eco Warrior</div>
            </div>
            <div className="text-center opacity-50">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-2">
                <Gift className="w-6 h-6 text-muted-foreground" />
              </div>
              <div className="text-xs text-muted-foreground">Collector</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
