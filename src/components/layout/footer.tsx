```tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Home, Search, CreditCard, User } from 'lucide-react';

interface FooterNavItemProps {
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const FooterNavItem: React.FC<FooterNavItemProps> = ({ icon: Icon, label, isActive = false, onClick }) => {
  return (
    <Button
      variant="ghost"
      onClick={onClick}
      className={cn(
        'flex h-full flex-1 flex-col items-center justify-center space-y-1 rounded-none px-2',
        isActive ? 'text-primary' : 'text-muted-foreground'
      )}
    >
      <Icon className="h-6 w-6" />
      <span className="text-xs font-medium">{label}</span>
    </Button>
  );
};

interface FooterProps {
  className?: string;
  navActions?: { [key: string]: () => void };
  activeView?: string;
}

const Footer: React.FC<FooterProps> = ({ className, navActions, activeView }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, actionKey: 'home' },
    { id: 'cards', label: 'Cards', icon: CreditCard },
    { id: 'search', label: 'Search', icon: Search },
    { id: 'profile', label: 'Profile', icon: User, actionKey: 'profile' },
  ] as const;

  // Map the current application view to the corresponding footer tab ID for highlighting.
  const activeTabId = activeView === 'dashboard' ? 'home' : activeView;

  return (
    <footer
      className={cn(
        'fixed bottom-0 z-50 flex h-16 w-full items-center justify-around border-t bg-background',
        className
      )}
    >
      {navItems.map((item) => (
        <FooterNavItem
          key={item.id}
          icon={item.icon}
          label={item.label}
          isActive={activeTabId === item.id}
          onClick={() => {
            if ('actionKey' in item && navActions && navActions[item.actionKey]) {
              navActions[item.actionKey]();
            }
          }}
        />
      ))}
    </footer>
  );
};

export default Footer;
```