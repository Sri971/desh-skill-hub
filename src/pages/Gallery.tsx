import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Image as ImageIcon, 
  Play, 
  Calendar, 
  MapPin, 
  Users,
  Award,
  Briefcase,
  GraduationCap
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "PM Internship Scheme Launch Event",
      description: "Prime Minister launching the nationwide internship program",
      date: "December 2024",
      location: "New Delhi",
      category: "events",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 2,
      type: "video",
      title: "Success Story: Rural Youth in Tech",
      description: "Journey of students from rural areas excelling in technology internships",
      date: "November 2024",
      location: "Across India",
      category: "success",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 3,
      type: "image",
      title: "Skill Development Workshop",
      description: "Industry experts conducting hands-on training sessions",
      date: "October 2024",
      location: "Mumbai, Maharashtra",
      category: "training",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 4,
      type: "image",
      title: "Certificate Distribution Ceremony",
      description: "Successful completion of internship programs by 500+ students",
      date: "September 2024",
      location: "Bangalore, Karnataka",
      category: "achievements",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 5,
      type: "video",
      title: "Multilingual Platform Demo",
      description: "Platform accessibility in 22 Indian languages",
      date: "August 2024",
      location: "Online",
      category: "initiatives",
      imageUrl: "/api/placeholder/400/300"
    },
    {
      id: 6,
      type: "image",
      title: "Industry Partnership Summit",
      description: "Leading companies joining the internship ecosystem",
      date: "July 2024",
      location: "Hyderabad, Telangana",
      category: "events",
      imageUrl: "/api/placeholder/400/300"
    }
  ];

  const categories = [
    { id: "all", label: "All Media", icon: ImageIcon },
    { id: "events", label: "Events", icon: Calendar },
    { id: "success", label: "Success Stories", icon: Award },
    { id: "training", label: "Training", icon: GraduationCap },
    { id: "achievements", label: "Achievements", icon: Award },
    { id: "initiatives", label: "Initiatives", icon: Briefcase }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Gallery
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Capturing moments of transformation, success, and empowerment through our internship programs
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Tabs */}
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center space-x-2"
                >
                  <category.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{category.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory} className="mt-8">
              {/* Stats Bar */}
              <div className="flex items-center justify-between mb-8 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <ImageIcon className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm font-medium">
                      {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Featuring 1000+ participants
                    </span>
                  </div>
                </div>
                <Badge variant="secondary">
                  Updated Monthly
                </Badge>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item, index) => (
                  <Card 
                    key={item.id} 
                    className="group hover:shadow-lg transition-all duration-300 animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-0">
                      {/* Media Container */}
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        
                        {/* Media Type Indicator */}
                        <div className="absolute top-3 left-3">
                          <Badge 
                            className={`${
                              item.type === 'video' 
                                ? 'bg-red-500 text-white' 
                                : 'bg-blue-500 text-white'
                            }`}
                          >
                            {item.type === 'video' ? (
                              <Play className="h-3 w-3 mr-1" />
                            ) : (
                              <ImageIcon className="h-3 w-3 mr-1" />
                            )}
                            {item.type.toUpperCase()}
                          </Badge>
                        </div>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Button size="sm" className="bg-white text-black hover:bg-gray-100">
                            {item.type === 'video' ? 'Play Video' : 'View Image'}
                          </Button>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        
                        {/* Meta Information */}
                        <div className="space-y-2">
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3 mr-2" />
                            {item.date}
                          </div>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-2" />
                            {item.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Empty State */}
              {filteredItems.length === 0 && (
                <div className="text-center py-16">
                  <ImageIcon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No media found</h3>
                  <p className="text-muted-foreground">
                    No content available for the selected category.
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-none">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Share Your Success Story</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Have you completed an internship through our program? We'd love to feature your journey 
                  and inspire other students across India.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Submit Your Story
                  </Button>
                  <Button size="lg" variant="outline">
                    View Submission Guidelines
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;