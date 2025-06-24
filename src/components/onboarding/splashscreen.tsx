import React from 'react';
import { Button } from '@/components/ui/button';
import { Banknote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SplashScreenProps {
  onGetStarted: () => void;
  className?: string;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onGetStarted, className }) => {
  return (
    <div className={cn("flex flex-col items-center justify-between h-screen bg-background p-8 text-center", className)}>
      <div className="flex-grow flex flex-col items-center justify-center space-y-6">
        {/* Placeholder for illustration */}
        <div className="bg-primary/10 p-8 rounded-full">
            <Banknote className="h-20 w-20 text-primary" strokeWidth={1.5} />
        </div>
        
        <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground">BankEase</h1>
            <p className="text-muted-foreground">Your banking, simplified.</p>
        </div>
      </div>
      
      <div className="w-full max-w-sm">
        <Button onClick={onGetStarted} size="lg" className="w-full">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default SplashScreen;
