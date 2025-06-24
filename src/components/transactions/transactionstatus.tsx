import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { MessageSquare, XCircle, History, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TransactionStatusProps {
  className?: string;
}

const TransactionStatus: React.FC<TransactionStatusProps> = ({ className }) => {
  return (
    <div className={cn("p-4 bg-background", className)}>
      <Card className="w-full max-w-md mx-auto overflow-hidden border-none shadow-none bg-transparent">
        <div className="w-full rounded-lg overflow-hidden">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                 <div className="flex h-full w-full items-center justify-center bg-gray-200">
                    <Smartphone className="h-24 w-24 text-gray-400"/>
                 </div>
            </AspectRatio>
        </div>
        <CardContent className="p-0 pt-6 space-y-6">
            <div className="text-center space-y-1">
                <h2 className="text-2xl font-bold">Your payment is processing!</h2>
                <p className="text-sm text-muted-foreground">
                    To: <span className="font-medium text-foreground">Alex Johnson, Savings Account</span>
                </p>
            </div>

            <div>
                <p className="text-xs uppercase text-muted-foreground font-semibold mb-2 text-center">Options</p>
                <div className="grid grid-cols-3 gap-3">
                    <Button variant="secondary" className="flex flex-col h-20 p-2 justify-center">
                        <MessageSquare className="h-6 w-6 mb-1" />
                        <span className="text-xs text-center">Contact Support</span>
                    </Button>
                    <Button variant="secondary" className="flex flex-col h-20 p-2 justify-center">
                        <XCircle className="h-6 w-6 mb-1" />
                        <span className="text-xs text-center">Cancel Transaction</span>
                    </Button>
                    <Button variant="secondary" className="flex flex-col h-20 p-2 justify-center">
                        <History className="h-6 w-6 mb-1" />
                        <span className="text-xs text-center">View History</span>
                    </Button>
                </div>
            </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransactionStatus;
