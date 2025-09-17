import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Youtube, 
  Instagram,
  ExternalLink,
  Shield,
  FileText,
  Accessibility
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gov-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-1 text-gov-saffron flex-shrink-0" />
                <div>
                  <p className="font-medium">Helpline</p>
                  <p className="text-sm text-gray-300">1800-123-4567</p>
                  <p className="text-sm text-gray-300">Mon-Fri: 9 AM - 6 PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-1 text-gov-saffron flex-shrink-0" />
                <div>
                  <p className="font-medium">Email Support</p>
                  <p className="text-sm text-gray-300">support@mir.gov.in</p>
                  <p className="text-sm text-gray-300">info@mir.gov.in</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 text-gov-saffron flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-sm text-gray-300">
                    Ministry of Skill Development<br />
                    Shram Shakti Bhawan<br />
                    New Delhi - 110001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About the Scheme
              </a>
              <a href="/faq" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Frequently Asked Questions
              </a>
              <a href="/guidelines" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Application Guidelines
              </a>
              <a href="/downloads" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Downloads & Forms
              </a>
              <a href="/feedback" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Feedback & Grievances
              </a>
              <a href="/statistics" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Statistics & Reports
              </a>
            </div>
          </div>

          {/* Government Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Government Portals</h3>
            <div className="space-y-2">
              <a 
                href="https://www.india.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                India.gov.in
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a 
                href="https://www.digitalindia.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                Digital India
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a 
                href="https://www.mygov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                MyGov.in
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <a 
                href="https://www.msde.gov.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                MSDE Portal
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Social Media & Accessibility */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            
            {/* Social Media */}
            <div className="flex space-x-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="#" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-white hover:bg-white/10"
                asChild
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {/* Accessibility & Legal */}
            <div className="space-y-2 mt-6">
              <a 
                href="/accessibility" 
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Accessibility className="h-4 w-4 mr-2" />
                Accessibility Statement
              </a>
              <a 
                href="/privacy" 
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                <Shield className="h-4 w-4 mr-2" />
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
              >
                <FileText className="h-4 w-4 mr-2" />
                Terms of Use
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-gov-saffron to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold">MIR</span>
            </div>
            <div>
              <p className="text-sm font-medium">
                © {currentYear} Government of India
              </p>
              <p className="text-xs text-gray-400">
                Ministry of Skill Development & Entrepreneurship
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              Last Updated: December 2024
            </p>
            <p className="text-xs text-gray-400">
              Version 2.1.0 | Best viewed in Chrome, Firefox, Safari
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;