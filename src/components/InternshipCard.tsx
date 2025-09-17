import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Clock, 
  Users, 
  GraduationCap, 
  Building, 
  Calendar,
  ExternalLink 
} from "lucide-react";

interface InternshipCardProps {
  internship: {
    id: string;
    title: string;
    company: string;
    location: string;
    duration: string;
    stipend: string;
    requirements: string[];
    skills: string[];
    sector: string;
    deadline: string;
    positions: number;
    isRecommended?: boolean;
  };
  onApply: (id: string) => void;
}

const InternshipCard = ({ internship, onApply }: InternshipCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300 animate-scale-in">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-foreground line-clamp-2">
              {internship.title}
            </CardTitle>
            <div className="flex items-center mt-2 text-muted-foreground">
              <Building className="h-4 w-4 mr-1" />
              <span className="text-sm font-medium">{internship.company}</span>
            </div>
          </div>
          {internship.isRecommended && (
            <Badge className="bg-accent text-accent-foreground">
              Recommended
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Location & Duration */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 text-primary" />
            <span>{internship.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2 text-primary" />
            <span>{internship.duration}</span>
          </div>
        </div>

        {/* Positions & Stipend */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="h-4 w-4 mr-2 text-primary" />
            <span>{internship.positions} positions</span>
          </div>
          <div className="flex items-center text-sm font-semibold text-foreground">
            <span>₹{internship.stipend}</span>
          </div>
        </div>

        {/* Sector Badge */}
        <div>
          <Badge variant="secondary" className="text-xs">
            {internship.sector}
          </Badge>
        </div>

        {/* Skills */}
        <div>
          <p className="text-sm font-medium text-foreground mb-2">Required Skills:</p>
          <div className="flex flex-wrap gap-1">
            {internship.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {internship.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{internship.skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Requirements */}
        <div>
          <p className="text-sm font-medium text-foreground mb-2">Education:</p>
          <div className="flex items-center text-sm text-muted-foreground">
            <GraduationCap className="h-4 w-4 mr-2 text-primary" />
            <span>{internship.requirements[0]}</span>
          </div>
        </div>

        {/* Deadline */}
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2 text-destructive" />
          <span>Apply by: <span className="font-medium">{internship.deadline}</span></span>
        </div>

        {/* Apply Button */}
        <Button 
          onClick={() => onApply(internship.id)}
          className="w-full"
          size="sm"
        >
          Apply Now
          <ExternalLink className="h-4 w-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default InternshipCard;