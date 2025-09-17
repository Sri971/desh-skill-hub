import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  Users, 
  Building,
  Phone,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("student");
  const { toast } = useToast();

  const handleLogin = (userType: string) => {
    toast({
      title: "Authentication Required",
      description: "Please connect to Supabase to enable authentication functionality.",
      variant: "destructive",
    });
  };

  const userTypes = [
    {
      id: "student",
      label: "Student",
      icon: Users,
      description: "Apply for internships and track your progress"
    },
    {
      id: "institution",
      label: "Institution",
      icon: Building,
      description: "Manage student registrations and partnerships"
    },
    {
      id: "government",
      label: "Government Official",
      icon: Shield,
      description: "Monitor program implementation and analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center py-8">
      <div className="container mx-auto px-4 max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-br from-gov-saffron to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">MIR</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">
            Sign in to access your internship dashboard
          </p>
          <Badge className="mt-2 bg-primary text-primary-foreground">
            Government Secure Portal
          </Badge>
        </div>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="text-center">Choose Your Role</CardTitle>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                {userTypes.map((type) => (
                  <TabsTrigger 
                    key={type.id} 
                    value={type.id}
                    className="flex flex-col items-center p-3 text-xs"
                  >
                    <type.icon className="h-4 w-4 mb-1" />
                    <span>{type.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {userTypes.map((type) => (
                <TabsContent key={type.id} value={type.id}>
                  <div className="text-center mb-6">
                    <type.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">
                      {type.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Email/Phone Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email or Mobile Number</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="email"
                          type="text"
                          placeholder="Enter email or mobile number"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="pl-10 pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4 text-muted-foreground" />
                          ) : (
                            <Eye className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Login Button */}
                    <Button 
                      className="w-full" 
                      size="lg"
                      onClick={() => handleLogin(type.id)}
                    >
                      Sign In as {type.label}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>

                    {/* Forgot Password */}
                    <div className="text-center">
                      <Button variant="link" size="sm" className="text-primary">
                        Forgot your password?
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <Separator className="my-6" />

            {/* Alternative Login Methods */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Login with OTP
              </Button>
              
              <Button variant="outline" className="w-full" size="lg">
                <Shield className="h-4 w-4 mr-2" />
                Login with Aadhaar
              </Button>
            </div>

            <Separator className="my-6" />

            {/* Register Link */}
            <div className="text-center">
              <p className="text-muted-foreground text-sm mb-3">
                Don't have an account?
              </p>
              <Button variant="outline" className="w-full" asChild>
                <a href="/register">
                  Create New Account
                </a>
              </Button>
            </div>

            {/* Security Notice */}
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Secure Government Portal</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Your data is protected with government-grade security measures. 
                    This portal is SSL encrypted and complies with IT Act 2000.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Links */}
        <div className="text-center mt-6 space-y-2">
          <div className="flex justify-center space-x-4 text-sm">
            <a href="/help" className="text-muted-foreground hover:text-primary">
              Help Center
            </a>
            <span className="text-muted-foreground">•</span>
            <a href="/contact" className="text-muted-foreground hover:text-primary">
              Contact Support
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Technical Support: 1800-123-4567 (Toll Free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;