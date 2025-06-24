import React from 'react';
import { Bell } from 'lucide-react';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  headerTitle: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  rightElement?: React.ReactNode;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  children,
  className,
  headerTitle,
  showBackButton,
  onBackClick,
  rightElement,
}) => {

  const defaultHeaderRightElement = (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" className="h-8 w-8">
        <Bell className="h-5 w-5" />
        <span className="sr-only">Notifications</span>
      </Button>
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://i.pravatar.cc/40?u=alexthompson" alt="Alex Thompson" />
        <AvatarFallback>AT</AvatarFallback>
      </Avatar>
    </div>
  );

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background">
      <Header
        title={headerTitle}
        showBackButton={showBackButton}
        onBackClick={onBackClick}
        rightElement={rightElement !== undefined ? rightElement : defaultHeaderRightElement}
      />
      <main className={cn('flex-1 overflow-y-auto pb-20', className)}>
        {/* pb-20 adds padding for the h-16 footer + extra space */}
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainAppLayout;