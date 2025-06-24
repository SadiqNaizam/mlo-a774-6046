import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  className?: string;
  rightElement?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = false,
  onBackClick,
  className,
  rightElement,
}) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60',
        className
      )}
    >
      <div className="flex items-center" style={{ minWidth: '60px' }}>
        {showBackButton && (
          <Button variant="ghost" size="icon" onClick={onBackClick} className="-ml-2">
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Go back</span>
          </Button>
        )}
      </div>

      <div className="flex-1 text-center">
        <h1 className="truncate text-lg font-semibold text-foreground">{title}</h1>
      </div>

      <div className="flex items-center justify-end" style={{ minWidth: '60px' }}>
        {rightElement}
      </div>
    </header>
  );
};

export default Header;
