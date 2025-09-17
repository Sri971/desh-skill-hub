import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VoiceCommand = () => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if browser supports speech recognition
    setIsSupported('webkitSpeechRecognition' in window || 'SpeechRecognition' in window);
  }, []);

  const startListening = () => {
    if (!isSupported) {
      toast({
        title: "Voice Recognition Not Supported",
        description: "Your browser doesn't support voice recognition. Please use a modern browser.",
        variant: "destructive",
      });
      return;
    }

    const SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setIsListening(true);
      toast({
        title: "Voice Recognition Active",
        description: "Listening... Please speak your command.",
      });
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript.toLowerCase();
      
      toast({
        title: "Command Recognized",
        description: `You said: "${transcript}"`,
      });

      // Process voice commands
      processVoiceCommand(transcript);
    };

    recognition.onerror = (event) => {
      setIsListening(false);
      toast({
        title: "Voice Recognition Error",
        description: "Sorry, there was an error with voice recognition. Please try again.",
        variant: "destructive",
      });
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const processVoiceCommand = (command: string) => {
    // Navigation commands
    if (command.includes('home') || command.includes('homepage')) {
      window.location.href = '/';
    } else if (command.includes('gallery')) {
      window.location.href = '/gallery';
    } else if (command.includes('eligibility')) {
      window.location.href = '/eligibility';
    } else if (command.includes('mobile app') || command.includes('app')) {
      window.location.href = '/mobile-app';
    } else if (command.includes('register') || command.includes('sign up')) {
      window.location.href = '/register';
    } else if (command.includes('login') || command.includes('sign in')) {
      window.location.href = '/login';
    }
    // Accessibility commands
    else if (command.includes('help') || command.includes('assistance')) {
      toast({
        title: "Help Available",
        description: "You can navigate using voice commands like 'go to home', 'show gallery', 'open login', etc.",
      });
    } else if (command.includes('scroll up')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (command.includes('scroll down')) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      toast({
        title: "Command Not Recognized",
        description: "Try commands like 'go to home', 'show gallery', 'open login', or 'help' for assistance.",
      });
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  if (!isSupported) {
    return null; // Don't render if not supported
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
      {/* Status Badge */}
      {isListening && (
        <Badge variant="secondary" className="animate-pulse bg-accent text-accent-foreground">
          <Volume2 className="h-3 w-3 mr-1" />
          Listening...
        </Badge>
      )}

      {/* Voice Command Button */}
      <Button
        onClick={startListening}
        disabled={isListening}
        className={`voice-btn ${isListening ? 'animate-pulse-slow' : ''}`}
        aria-label="Voice Commands"
        title="Click to use voice commands"
      >
        {isListening ? (
          <MicOff className="h-6 w-6" />
        ) : (
          <Mic className="h-6 w-6" />
        )}
      </Button>

      {/* Help Text */}
      <div className="text-xs text-muted-foreground text-right max-w-32">
        <p>Voice commands available</p>
        <p className="text-[10px]">Try: "Go to home", "Show gallery"</p>
      </div>
    </div>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

export default VoiceCommand;