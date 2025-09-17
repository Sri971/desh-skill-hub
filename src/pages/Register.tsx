import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Building,
  Shield,
  FileText,
  Calendar,
  Upload,
  Check
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();

  const handleRegister = () => {
    toast({
      title: "Registration Requires Backend",
      description: "Please connect to Supabase to enable user registration functionality.",
      variant: "destructive",
    });
  };

  const userTypes = [
    {
      id: "student",
      label: "Student Registration",
      icon: User,
      description: "For students seeking internship opportunities"
    },
    {
      id: "institution",
      label: "Institution Registration", 
      icon: Building,
      description: "For educational institutions joining the program"
    },
    {
      id: "government",
      label: "Government Official",
      icon: Shield,
      description: "For government officials and program coordinators"
    }
  ];

  const steps = [
    { number: 1, title: "Basic Information", icon: User },
    { number: 2, title: "Personal Details", icon: FileText },
    { number: 3, title: "Documents Upload", icon: Upload },
    { number: 4, title: "Verification", icon: Check }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="w-16 h-16 bg-gradient-to-br from-gov-saffron to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-xl">MIR</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Join the Program</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Register now to access thousands of internship opportunities across India
          </p>
          <Badge className="mt-2 bg-primary text-primary-foreground">
            Government Certified Registration
          </Badge>
        </div>

        <Card className="animate-scale-in">
          <CardHeader>
            <CardTitle className="text-center">Create Your Account</CardTitle>
          </CardHeader>
          
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              {/* User Type Selection */}
              <TabsList className="grid w-full grid-cols-3 mb-8">
                {userTypes.map((type) => (
                  <TabsTrigger 
                    key={type.id} 
                    value={type.id}
                    className="flex flex-col items-center p-4 text-xs"
                  >
                    <type.icon className="h-5 w-5 mb-2" />
                    <span className="font-medium">{type.label.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Progress Steps */}
              <div className="flex justify-between items-center mb-8 px-4">
                {steps.map((step, index) => (
                  <div key={step.number} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step.number 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentStep > step.number ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-12 h-1 mx-2 ${
                        currentStep > step.number ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>

              {/* Student Registration */}
              <TabsContent value="student">
                <div className="space-y-6">
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-fade-in">
                      <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="Enter first name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Enter last name" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="email" type="email" placeholder="your.email@example.com" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number *</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="phone" type="tel" placeholder="+91 98765 43210" className="pl-10" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dob">Date of Birth *</Label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                          <Input id="dob" type="date" className="pl-10" />
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-4 animate-fade-in">
                      <h3 className="text-lg font-semibold mb-4">Education & Address</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="education">Current Education Level *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="12th">12th Standard</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="postgraduate">Postgraduate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="institution">Institution Name *</Label>
                        <Input id="institution" placeholder="Enter your institution name" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">Address *</Label>
                        <Textarea id="address" placeholder="Enter your complete address" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ap">Andhra Pradesh</SelectItem>
                              <SelectItem value="ka">Karnataka</SelectItem>
                              <SelectItem value="tn">Tamil Nadu</SelectItem>
                              <SelectItem value="tg">Telangana</SelectItem>
                              <SelectItem value="mh">Maharashtra</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="pincode">PIN Code *</Label>
                          <Input id="pincode" placeholder="Enter PIN code" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="skills">Skills & Interests</Label>
                        <Textarea 
                          id="skills" 
                          placeholder="List your skills, programming languages, interests..." 
                        />
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fade-in">
                      <h3 className="text-lg font-semibold mb-4">Document Upload</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-dashed border-2 p-6 text-center hover:border-primary transition-colors">
                          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="font-medium mb-2">Photo ID Proof</p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Aadhaar, PAN Card, or Passport
                          </p>
                          <Button variant="outline" size="sm">
                            Upload File
                          </Button>
                        </Card>

                        <Card className="border-dashed border-2 p-6 text-center hover:border-primary transition-colors">
                          <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                          <p className="font-medium mb-2">Education Certificate</p>
                          <p className="text-sm text-muted-foreground mb-4">
                            Latest marksheet or degree
                          </p>
                          <Button variant="outline" size="sm">
                            Upload File
                          </Button>
                        </Card>
                      </div>

                      <Card className="border-dashed border-2 p-6 text-center hover:border-primary transition-colors">
                        <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                        <p className="font-medium mb-2">Resume/CV (Optional)</p>
                        <p className="text-sm text-muted-foreground mb-4">
                          PDF format, max 2MB
                        </p>
                        <Button variant="outline" size="sm">
                          Upload Resume
                        </Button>
                      </Card>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div className="text-center space-y-6 animate-fade-in">
                      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <Check className="h-10 w-10 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold">Review & Submit</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Please review all the information you've provided before submitting your registration.
                      </p>
                      
                      <div className="flex items-center space-x-2 justify-center">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms" className="text-sm">
                          I agree to the <a href="/terms" className="text-primary hover:underline">Terms & Conditions</a> and <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                        </Label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                      disabled={currentStep === 1}
                    >
                      Previous
                    </Button>
                    
                    {currentStep < 4 ? (
                      <Button onClick={() => setCurrentStep(currentStep + 1)}>
                        Next Step
                      </Button>
                    ) : (
                      <Button onClick={handleRegister} className="bg-green-600 hover:bg-green-700">
                        Submit Registration
                      </Button>
                    )}
                  </div>
                </div>
              </TabsContent>

              {/* Institution Registration */}
              <TabsContent value="institution">
                <div className="text-center py-8">
                  <Building className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Institution Registration</h3>
                  <p className="text-muted-foreground mb-6">
                    For educational institutions wanting to partner with the MIR program
                  </p>
                  <Button onClick={handleRegister}>
                    Start Institution Registration
                  </Button>
                </div>
              </TabsContent>

              {/* Government Registration */}
              <TabsContent value="government">
                <div className="text-center py-8">
                  <Shield className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">Government Official Access</h3>
                  <p className="text-muted-foreground mb-6">
                    For government officials and program coordinators
                  </p>
                  <Button onClick={handleRegister}>
                    Request Official Access
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Help Section */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground text-sm mb-4">
            Already have an account? <a href="/login" className="text-primary hover:underline">Sign in here</a>
          </p>
          <p className="text-muted-foreground text-xs">
            Need help? Call our support helpline: <strong>1800-123-4567</strong> (Toll Free)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;