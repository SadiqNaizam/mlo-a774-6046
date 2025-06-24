```tsx
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  User,
  ShieldCheck,
  CreditCard,
  ChevronRight,
  FileText,
  Gift,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ProfilePageProps {
  className?: string;
}

const profileItems = [
  { id: 'details', label: 'Personal Details', sub: "Manage your name, email, phone", icon: User },
  { id: 'security', label: 'Login & Security', sub: "Password, 2FA", icon: ShieldCheck },
  { id: 'methods', label: 'Payment Methods', sub: "Connected cards & accounts", icon: CreditCard },
  { id: 'statements', label: 'Statements', sub: "Download monthly statements", icon: FileText },
  { id: 'referrals', label: 'Refer a Friend', sub: "Get rewards", icon: Gift },
];

const ProfilePage: React.FC<ProfilePageProps> = ({ className }) => {
  return (
    <div className={cn("p-4 bg-background h-full flex flex-col", className)}>
      <div className="flex flex-col items-center space-y-3 mb-8">
        <Avatar className="h-24 w-24 border-2 border-primary">
          <AvatarImage src="https://i.pravatar.cc/150?u=alexthompson" alt="Alex Thompson" />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>
        <div className="text-center">
          <h2 className="text-xl font-bold">Alex Thompson</h2>
          <p className="text-sm text-muted-foreground">alex.thompson@email.com</p>
        </div>
        <Button variant="outline" size="sm">Edit Profile</Button>
      </div>

      <Card>
        <CardContent className="p-0">
          <div className="flex flex-col">
            {profileItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <button className="flex w-full items-center p-4 text-left hover:bg-muted/50 cursor-pointer">
                  <item.icon className="h-5 w-5 mr-4 text-muted-foreground" />
                  <div className="flex-grow">
                      <p className="font-medium text-sm">{item.label}</p>
                      {item.sub && <p className="text-xs text-muted-foreground">{item.sub}</p>}
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </button>
                {index < profileItems.length - 1 && <Separator />}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="flex-grow" />
    </div>
  );
};

export default ProfilePage;
```