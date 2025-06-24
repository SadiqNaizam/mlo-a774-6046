import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  User,
  Bell,
  ChevronRight,
  LogOut,
  Languages,
  HelpCircle,
  Settings as SettingsIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface SettingsPageProps {
  className?: string;
  onLogout: () => void;
}

const settingsItems = [
  { id: 'account', label: 'Account Holder', sub: "Manage your profile", icon: User },
  { id: 'language', label: 'Preferred Language', sub: "English", icon: Languages },
  { id: 'alerts', label: 'Transaction Alerts', sub: "On", icon: Bell },
  { id: 'preferences', label: 'App Preferences', sub: "Manage notifications", icon: SettingsIcon },
  { id: 'support', label: 'Customer Service', sub: "Contact support", icon: HelpCircle },
];

const SettingsPage: React.FC<SettingsPageProps> = ({ className, onLogout }) => {
  return (
    <div className={cn("p-4 bg-background h-full flex flex-col", className)}>
      <div className="flex flex-col items-center space-y-3 mb-8">
        <Avatar className="h-24 w-24 border-2 border-primary">
          <AvatarImage src="https://i.pravatar.cc/150?u=alexthompson" alt="Alex Thompson" />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-bold">Alex Thompson</h2>
          <p className="text-sm text-muted-foreground">Member since June 2022</p>
        </div>
        <Button variant="link" size="sm" className="text-primary">UPGRADE PLAN</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="flex flex-col">
            {settingsItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <button className="flex w-full items-center p-4 text-left hover:bg-muted/50 cursor-pointer">
                  <item.icon className="h-5 w-5 mr-4 text-muted-foreground" />
                  <div className="flex-grow">
                      <p className="font-medium text-sm">{item.label}</p>
                      {item.sub && <p className="text-xs text-muted-foreground">{item.sub}</p>}
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
                {index < settingsItems.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex-grow" />

      <div className="mt-8">
        <Button variant="secondary" className="w-full" onClick={onLogout}>
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
