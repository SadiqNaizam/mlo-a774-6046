import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface FeaturePickerProps {
  onNext: (selectedFeatures: string[]) => void;
  className?: string;
}

const featuresData: { id: string; name: string; special?: boolean }[] = [
  { id: 'apps', name: 'Apps' },
  { id: 'spend', name: 'Spend' },
  { id: 'invest', name: 'Invest' },
  { id: 'payment', name: 'Payment' },
  { id: 'savings', name: 'Savings' },
  { id: 'fx', name: 'FX' },
  { id: 'transfers', name: 'Transfers' },
  { id: 'security', name: 'Security' },
  { id: 'free', name: 'Free' },
  { id: 'loans', name: 'Loans' },
  { id: 'upgrade', name: 'UPGRADE PLAN', special: true },
  { id: 'mobile', name: 'Mobile' },
];

const FeaturePicker: React.FC<FeaturePickerProps> = ({ onNext, className }) => {
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['payment', 'savings']);

  const toggleFeature = useCallback((featureId: string) => {
    setSelectedFeatures(prev =>
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  }, []);

  const handleNext = useCallback(() => {
    onNext(selectedFeatures);
  }, [onNext, selectedFeatures]);

  return (
    <div className={cn("flex flex-col h-full bg-background p-6", className)}>
       <div className="flex justify-end mb-4">
        <Button variant="ghost" size="sm">Skip</Button>
      </div>
      <div className="text-left space-y-2 mb-8">
        <h1 className="text-2xl font-semibold text-foreground">Choose your banking features</h1>
      </div>

      <div className="grid grid-cols-3 gap-3 flex-grow content-start">
        {featuresData.map(feature => {
          if (feature.special) {
            return (
              <Button
                key={feature.id}
                variant="outline"
                className="h-20 border-primary text-primary font-semibold hover:bg-primary/10 hover:text-primary"
                onClick={() => console.log('Upgrade plan clicked')}
              >
                {feature.name}
              </Button>
            );
          }
          return (
            <Button
              key={feature.id}
              variant={selectedFeatures.includes(feature.id) ? 'default' : 'secondary'}
              onClick={() => toggleFeature(feature.id)}
              className="h-20 text-sm font-medium"
            >
              {feature.name}
            </Button>
          );
        })}
      </div>
      
      <div className="mt-8">
        <Button onClick={handleNext} size="lg" className="w-full">
          <span>Next</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default FeaturePicker;
