import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Users, 
  FileText, 
  CheckCircle, 
  XCircle,
  AlertCircle,
  Download,
  ExternalLink,
  Star,
  Award
} from "lucide-react";

const Eligibility = () => {
  const eligibilityCategories = [
    {
      id: "student",
      title: "Student Eligibility",
      icon: GraduationCap,
      color: "text-blue-600"
    },
    {
      id: "institution",
      title: "Institution Criteria",
      icon: Users,
      color: "text-green-600"
    },
    {
      id: "company",
      title: "Company Requirements",
      icon: FileText,
      color: "text-orange-600"
    }
  ];

  const studentCriteria = [
    {
      category: "Age Requirements",
      requirements: [
        { text: "Must be between 18-25 years of age", eligible: true },
        { text: "Age calculated as on application date", eligible: true },
        { text: "Valid age proof documents required", eligible: true }
      ]
    },
    {
      category: "Educational Qualifications",
      requirements: [
        { text: "Minimum 12th standard or equivalent", eligible: true },
        { text: "Currently enrolled in graduation/post-graduation", eligible: true },
        { text: "Diploma holders from recognized institutions", eligible: true },
        { text: "ITI certificate holders", eligible: true },
        { text: "Below 12th standard", eligible: false }
      ]
    },
    {
      category: "Income Criteria",
      requirements: [
        { text: "Annual family income below ₹8 lakhs", eligible: true },
        { text: "Income certificate from competent authority", eligible: true },
        { text: "Annual family income above ₹8 lakhs", eligible: false }
      ]
    },
    {
      category: "Language Requirements",
      requirements: [
        { text: "Basic proficiency in English OR Hindi", eligible: true },
        { text: "Regional language proficiency (preferred)", eligible: true },
        { text: "Multilingual candidates get preference", eligible: true }
      ]
    }
  ];

  const requiredDocuments = [
    {
      document: "Identity Proof",
      details: "Aadhaar Card / PAN Card / Passport / Voter ID",
      mandatory: true
    },
    {
      document: "Educational Certificates",
      details: "10th, 12th marksheets and degree certificates",
      mandatory: true
    },
    {
      document: "Income Certificate",
      details: "From Tehsildar/District Collector (within 6 months)",
      mandatory: true
    },
    {
      document: "Caste Certificate",
      details: "For SC/ST/OBC candidates (if applicable)",
      mandatory: false
    },
    {
      document: "Disability Certificate",
      details: "For differently-abled candidates (if applicable)",
      mandatory: false
    },
    {
      document: "Bank Account Details",
      details: "Passbook copy with IFSC code",
      mandatory: true
    },
    {
      document: "Recent Photograph",
      details: "Passport size photograph (digital format)",
      mandatory: true
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Online Registration",
      description: "Complete registration on the official portal",
      duration: "15-20 minutes"
    },
    {
      step: 2,
      title: "Document Upload",
      description: "Upload all required documents in specified format",
      duration: "10-15 minutes"
    },
    {
      step: 3,
      title: "Application Review",
      description: "Initial screening by government officials",
      duration: "3-5 working days"
    },
    {
      step: 4,
      title: "Eligibility Verification",
      description: "Document verification and background check",
      duration: "7-10 working days"
    },
    {
      step: 5,
      title: "Internship Matching",
      description: "AI-powered matching with suitable opportunities",
      duration: "1-2 working days"
    },
    {
      step: 6,
      title: "Final Selection",
      description: "Company interview and final placement",
      duration: "5-7 working days"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              Government Guidelines
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Eligibility Criteria
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive guide to understand qualification requirements for the 
              Multilingual Internship Recommendation Scheme
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="student" className="w-full">
            {/* Category Tabs */}
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {eligibilityCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2"
                >
                  <category.icon className={`h-5 w-5 ${category.color}`} />
                  <span>{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Student Eligibility */}
            <TabsContent value="student" className="space-y-8">
              {/* Quick Eligibility Check */}
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-800">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    Quick Eligibility Checker
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="text-center">
                      <Calendar className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-medium">Age: 18-25</p>
                    </div>
                    <div className="text-center">
                      <GraduationCap className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-medium">Min: 12th Pass</p>
                    </div>
                    <div className="text-center">
                      <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-medium">Indian Citizen</p>
                    </div>
                    <div className="text-center">
                      <Star className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <p className="font-medium">Income ≤ ₹8L</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Criteria */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {studentCriteria.map((criteria, index) => (
                  <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardHeader>
                      <CardTitle className="text-lg">{criteria.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {criteria.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start space-x-3">
                            {req.eligible ? (
                              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            )}
                            <span className={`text-sm ${req.eligible ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                              {req.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Required Documents */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2" />
                    Required Documents
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {requiredDocuments.map((doc, index) => (
                      <div key={index} className="flex items-start space-x-3 p-4 border rounded-lg">
                        <div className="flex-shrink-0">
                          {doc.mandatory ? (
                            <Badge className="bg-red-100 text-red-800">Mandatory</Badge>
                          ) : (
                            <Badge variant="secondary">Optional</Badge>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{doc.document}</h4>
                          <p className="text-sm text-muted-foreground">{doc.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Application Process */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-6 w-6 mr-2" />
                    Application Process Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applicationProcess.map((step, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <h4 className="font-medium">{step.title}</h4>
                              <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                            <Badge variant="outline" className="mt-2 md:mt-0">
                              {step.duration}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Institution Criteria */}
            <TabsContent value="institution">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    Institution Partnership Criteria
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Recognition</h3>
                      <p className="text-sm text-muted-foreground">
                        Recognized by UGC/AICTE/State Government
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Student Strength</h3>
                      <p className="text-sm text-muted-foreground">
                        Minimum 500+ enrolled students
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-orange-600" />
                      </div>
                      <h3 className="font-semibold mb-2">Accreditation</h3>
                      <p className="text-sm text-muted-foreground">
                        NAAC/NBA accredited (preferred)
                      </p>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full md:w-auto">
                    Apply for Partnership
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Company Requirements */}
            <TabsContent value="company">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 mr-2" />
                    Company Partnership Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Eligibility Criteria</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Registered company/organization</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Minimum 3 years in operation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">GST registration mandatory</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                          <span className="text-sm">Minimum 50 employees</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Benefits Offered</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Government subsidies available</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Tax benefits for participating companies</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Access to skilled talent pool</span>
                        </li>
                        <li className="flex items-center">
                          <Star className="h-4 w-4 text-orange-500 mr-2" />
                          <span className="text-sm">Government recognition certificate</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <Button size="lg" className="w-full md:w-auto">
                    Register Your Company
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Important Notice */}
          <Card className="mt-8 bg-yellow-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                  <p className="text-sm text-yellow-700 mb-4">
                    All eligibility criteria are subject to verification. False information may lead to 
                    disqualification from the program. For detailed guidelines and updates, please refer 
                    to the official government notification.
                  </p>
                  <Button variant="outline" size="sm" className="border-yellow-300 text-yellow-700">
                    <Download className="h-4 w-4 mr-2" />
                    Download Official Guidelines
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you meet all the eligibility criteria, start your application process now and 
              join thousands of students already benefiting from this program.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/register">Start Application</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eligibility;