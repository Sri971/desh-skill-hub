import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  TrendingUp, 
  Users, 
  Building2, 
  Award, 
  Search, 
  Filter,
  MapPin,
  BookOpen,
  Briefcase,
  Star,
  ArrowRight,
  CheckCircle,
  Globe,
  Target
} from "lucide-react";
import InternshipCard from "@/components/InternshipCard";
import { useToast } from "@/hooks/use-toast";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const { toast } = useToast();
  const [showFilters, setShowFilters] = useState(false);
  const [filteredInternships, setFilteredInternships] = useState(mockInternships);
  const [filterForm, setFilterForm] = useState({
    education: "",
    skills: "",
    sector: "",
    location: ""
  });

  const handleApply = (internshipId: string) => {
    toast({
      title: "Login Required",
      description: "Please login to apply for internships.",
    });
    // Redirect to login page
    window.location.href = '/login';
  };

  const handleFilter = () => {
    let filtered = mockInternships;
    
    if (filterForm.education) {
      filtered = filtered.filter(internship => 
        internship.requirements.some(req => 
          req.toLowerCase().includes(filterForm.education.toLowerCase())
        )
      );
    }
    
    if (filterForm.sector) {
      filtered = filtered.filter(internship => 
        internship.sector.toLowerCase().includes(filterForm.sector.toLowerCase())
      );
    }
    
    if (filterForm.location) {
      filtered = filtered.filter(internship => 
        internship.location.toLowerCase().includes(filterForm.location.toLowerCase())
      );
    }
    
    // Mark top 3-5 as recommended
    const recommended = filtered.slice(0, Math.min(5, filtered.length)).map(internship => ({
      ...internship,
      isRecommended: true
    }));
    
    const others = filtered.slice(Math.min(5, filtered.length));
    
    setFilteredInternships([...recommended, ...others]);
    setShowFilters(false);
    
    toast({
      title: "Filters Applied",
      description: `Found ${filtered.length} matching internships. Top ${Math.min(5, filtered.length)} recommended for you.`,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative hero-bg text-white py-16 md:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 58, 117, 0.8), rgba(0, 102, 204, 0.8)), url(${heroBanner})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-accent text-accent-foreground">
              Government of India Initiative
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Multilingual Internship
              <span className="block text-accent">Recommendation Scheme</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Bridging skills, languages, and opportunities for India's youth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Search className="h-5 w-5 mr-2" />
                Find Internships
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <BookOpen className="h-5 w-5 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl font-bold mb-4">Program Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empowering youth across India with meaningful internship opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Active Interns", value: "45,678", color: "text-blue-600" },
              { icon: Building2, label: "Partner Organizations", value: "2,340", color: "text-green-600" },
              { icon: Award, label: "Completed Programs", value: "12,456", color: "text-orange-600" },
              { icon: Globe, label: "Languages Supported", value: "22", color: "text-purple-600" }
            ].map((stat, index) => (
              <Card key={index} className="text-center animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News & Updates Iframe */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-muted-foreground">Stay updated with the latest internship opportunities and government initiatives</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <iframe
                  src="https://www.pib.gov.in/indexd.aspx"
                  className="w-full h-96 rounded-lg"
                  title="Government News and Updates"
                  frameBorder="0"
                  sandbox="allow-scripts allow-same-origin"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Internship Listings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Available Internships Near You</h2>
              <p className="text-muted-foreground">Discover opportunities that match your skills and interests</p>
            </div>
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="flex items-center"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter Results
            </Button>
          </div>

          {/* Filter Form */}
          {showFilters && (
            <Card className="mb-8 animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="h-5 w-5 mr-2" />
                  Find Your Perfect Internship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div>
                    <Label htmlFor="education">Education Level *</Label>
                    <Select onValueChange={(value) => setFilterForm({...filterForm, education: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="diploma">Diploma</SelectItem>
                        <SelectItem value="12th">12th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="skills">Skills *</Label>
                    <Input
                      placeholder="e.g., Programming, Design"
                      value={filterForm.skills}
                      onChange={(e) => setFilterForm({...filterForm, skills: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="sector">Sector Interest *</Label>
                    <Select onValueChange={(value) => setFilterForm({...filterForm, sector: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="location">Location (Optional)</Label>
                    <Input
                      placeholder="City or State"
                      value={filterForm.location}
                      onChange={(e) => setFilterForm({...filterForm, location: e.target.value})}
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button onClick={handleFilter} className="flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    Apply Filters
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setFilterForm({ education: "", skills: "", sector: "", location: "" });
                      setFilteredInternships(mockInternships);
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Internship Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInternships.map((internship) => (
              <InternshipCard
                key={internship.id}
                internship={internship}
                onApply={handleApply}
              />
            ))}
          </div>

          {filteredInternships.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No internships match your criteria. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose MIR Scheme?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Designed to bridge the gap between academic learning and industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Multilingual Support",
                description: "Available in 22+ Indian languages for inclusive access"
              },
              {
                icon: Award,
                title: "Government Certified",
                description: "Official certification recognized by government and industry"
              },
              {
                icon: Target,
                title: "AI-Powered Matching",
                description: "Smart recommendations based on your skills and interests"
              }
            ].map((highlight, index) => (
              <Card key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <highlight.icon className="h-16 w-16 mx-auto mb-6 text-primary" />
                  <h3 className="text-xl font-semibold mb-4">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Mock data for internships
const mockInternships = [
  {
    id: "1",
    title: "Software Development Intern",
    company: "Tech Mahindra",
    location: "Hyderabad, Telangana",
    duration: "6 months",
    stipend: "25,000/month",
    requirements: ["Bachelor's in Computer Science", "Programming knowledge"],
    skills: ["Java", "Python", "React", "SQL"],
    sector: "Technology",
    deadline: "Jan 15, 2025",
    positions: 15
  },
  {
    id: "2",
    title: "Digital Marketing Intern",
    company: "Wipro Limited",
    location: "Bangalore, Karnataka",
    duration: "4 months",
    stipend: "20,000/month",
    requirements: ["Bachelor's in Marketing/Commerce", "Basic digital skills"],
    skills: ["SEO", "Social Media", "Content Writing", "Analytics"],
    sector: "Technology",
    deadline: "Jan 20, 2025",
    positions: 8
  },
  {
    id: "3",
    title: "Healthcare Analytics Intern",
    company: "Apollo Hospitals",
    location: "Chennai, Tamil Nadu",
    duration: "6 months",
    stipend: "22,000/month",
    requirements: ["Bachelor's in Life Sciences/Statistics", "Data analysis"],
    skills: ["Excel", "R/Python", "Healthcare Domain", "Statistics"],
    sector: "Healthcare",
    deadline: "Jan 25, 2025",
    positions: 5
  },
  {
    id: "4",
    title: "Financial Analyst Intern",
    company: "ICICI Bank",
    location: "Mumbai, Maharashtra",
    duration: "5 months",
    stipend: "28,000/month",
    requirements: ["Bachelor's in Finance/Commerce", "Financial modeling"],
    skills: ["Excel", "Financial Analysis", "PowerBI", "Communication"],
    sector: "Finance",
    deadline: "Feb 1, 2025",
    positions: 12
  },
  {
    id: "5",
    title: "Manufacturing Process Intern",
    company: "Tata Steel",
    location: "Jamshedpur, Jharkhand",
    duration: "6 months",
    stipend: "30,000/month",
    requirements: ["Bachelor's in Mechanical/Chemical Engineering", "Industrial knowledge"],
    skills: ["CAD", "Process Optimization", "Quality Control", "Safety"],
    sector: "Manufacturing",
    deadline: "Feb 5, 2025",
    positions: 10
  },
  {
    id: "6",
    title: "Education Technology Intern",
    company: "BYJU'S",
    location: "Bangalore, Karnataka",
    duration: "4 months",
    stipend: "18,000/month",
    requirements: ["Bachelor's in Education/Subject expertise", "Teaching interest"],
    skills: ["Content Creation", "Video Editing", "Communication", "Subject Knowledge"],
    sector: "Education",
    deadline: "Feb 10, 2025",
    positions: 20
  }
];

export default Home;