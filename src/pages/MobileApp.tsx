import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Smartphone, 
  Download, 
  Star, 
  Shield, 
  Bell, 
  MapPin, 
  Globe, 
  Zap,
  QrCode,
  Play,
  Apple,
  Chrome,
  CheckCircle,
  Users,
  Award
} from "lucide-react";

const MobileApp = () => {
  const features = [
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Get instant alerts for new internship opportunities matching your profile"
    },
    {
      icon: MapPin,
      title: "Location-based Search",
      description: "Find internships near you with GPS-enabled smart search"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Interface available in 22+ Indian languages for better accessibility"
    },
    {
      icon: Shield,
      title: "Secure Authentication",
      description: "Government-grade security with OTP and Aadhaar verification"
    },
    {
      icon: Zap,
      title: "One-click Apply",
      description: "Apply to multiple internships with your saved profile and documents"
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Track your application status and internship progress in real-time"
    }
  ];

  const screenshots = [
    {
      title: "Home Dashboard",
      description: "Personalized recommendations",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Search & Filters",
      description: "Advanced search options",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Application Tracking",
      description: "Monitor your progress",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Profile Management",
      description: "Complete profile setup",
      image: "/api/placeholder/300/600"
    }
  ];

  const appStats = [
    { value: "50K+", label: "Downloads", icon: Download },
    { value: "4.8", label: "Rating", icon: Star },
    { value: "10K+", label: "Active Users", icon: Users },
    { value: "500+", label: "Success Stories", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                Available Now
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                MIR Mobile App
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Take your internship search on the go. Available for Android and iOS with 
                offline support and multilingual interface.
              </p>
              
              {/* App Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {appStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-black hover:bg-gray-800 text-white">
                  <Play className="h-5 w-5 mr-2" />
                  Google Play Store
                </Button>
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                  <Apple className="h-5 w-5 mr-2" />
                  App Store
                </Button>
              </div>
            </div>

            {/* QR Code Section */}
            <div className="text-center animate-scale-in">
              <Card className="bg-white p-8 max-w-sm mx-auto">
                <CardContent className="text-center">
                  <QrCode className="h-48 w-48 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Quick Download
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Scan this QR code with your phone to download the app directly
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to find, apply, and manage your internship journey - 
              all in the palm of your hand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="text-center animate-scale-in hover:shadow-lg transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">App Screenshots</h2>
            <p className="text-muted-foreground">
              Take a look at the intuitive and user-friendly interface
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {screenshots.map((screenshot, index) => (
              <div 
                key={index} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-4 group">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="mx-auto rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 rounded-2xl transition-colors duration-300" />
                </div>
                <h3 className="font-semibold mb-2">{screenshot.title}</h3>
                <p className="text-sm text-muted-foreground">{screenshot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Support</h2>
            <p className="text-muted-foreground">
              Available on all major platforms and devices
            </p>
          </div>

          <Tabs defaultValue="android" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="android" className="flex items-center">
                <Play className="h-4 w-4 mr-2" />
                Android
              </TabsTrigger>
              <TabsTrigger value="ios" className="flex items-center">
                <Apple className="h-4 w-4 mr-2" />
                iOS
              </TabsTrigger>
              <TabsTrigger value="web" className="flex items-center">
                <Chrome className="h-4 w-4 mr-2" />
                Web App
              </TabsTrigger>
            </TabsList>

            <TabsContent value="android" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Play className="h-6 w-6 mr-2 text-green-600" />
                    Android App
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">System Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Android 6.0 or higher</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">2GB RAM minimum</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">100MB storage space</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Internet connection required</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Offline document storage</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Push notifications</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Biometric authentication</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Dark mode support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button size="lg" className="mt-6 bg-green-600 hover:bg-green-700">
                    <Play className="h-5 w-5 mr-2" />
                    Download from Play Store
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ios" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Apple className="h-6 w-6 mr-2 text-gray-800" />
                    iOS App
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">System Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">iOS 12.0 or later</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">iPhone 6S or newer</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">iPad supported</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">100MB storage space</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">iOS Exclusive Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Face ID / Touch ID support</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Siri Shortcuts integration</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Apple Wallet integration</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Handoff continuity</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button size="lg" className="mt-6 bg-gray-900 hover:bg-gray-800">
                    <Apple className="h-5 w-5 mr-2" />
                    Download from App Store
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="web" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Chrome className="h-6 w-6 mr-2 text-blue-600" />
                    Progressive Web App
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-semibold mb-4">Browser Support</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Chrome, Firefox, Safari</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Works on desktop & mobile</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">No installation required</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Auto-updates</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Web App Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Add to home screen</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Offline functionality</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Push notifications</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Cross-device sync</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Button size="lg" className="mt-6 bg-blue-600 hover:bg-blue-700">
                    <Chrome className="h-5 w-5 mr-2" />
                    Launch Web App
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Download the MIR app now and join thousands of students who have already 
            found their dream internships through our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-black hover:bg-gray-800">
              <Play className="h-5 w-5 mr-2" />
              Download for Android
            </Button>
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              <Apple className="h-5 w-5 mr-2" />
              Download for iOS
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Free download • No subscription required • Government certified
          </p>
        </div>
      </section>
    </div>
  );
};

export default MobileApp;