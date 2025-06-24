import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CreditCard, ChevronRight, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AccountOverviewProps {
  className?: string;
}

const paymentCardsData = [
    { id: 'card1', type: 'Business Card', last4: '1234', isPrimary: true },
    { id: 'card2', type: 'Personal Card', last4: '5678', isPrimary: false },
];

const recentTransactionsData = [
    { id: 'txn1', name: 'Jena', date: '2024-07-20', amount: -120.00, type: 'debit' as const, avatarUrl: 'https://i.pravatar.cc/40?u=jena' },
    { id: 'txn2', name: 'Brida', date: '2024-07-19', amount: 450.00, type: 'credit' as const, avatarUrl: 'https://i.pravatar.cc/40?u=brida' },
    { id: 'txn3', name: 'Michael', date: '2024-07-18', amount: -59.99, type: 'debit' as const, avatarUrl: 'https://i.pravatar.cc/40?u=michael' },
];

const AccountOverview: React.FC<AccountOverviewProps> = ({ className }) => {
  return (
    <div className={cn("space-y-6 bg-background p-4", className)}>
        <Card>
            <CardHeader>
                <CardDescription>Available balance</CardDescription>
                <CardTitle className="text-4xl font-bold tracking-tight">$8,250.75</CardTitle>
            </CardHeader>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Payment Cards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {paymentCardsData.map((card, index) => (
                    <React.Fragment key={card.id}>
                        <div className="flex items-center justify-between hover:bg-muted/50 rounded-md p-2 -m-2 cursor-pointer">
                            <div className="flex items-center gap-4">
                                <CreditCard className="h-6 w-6 text-muted-foreground" />
                                <div>
                                    <p className="font-medium text-sm">{card.type}</p>
                                    <p className="text-xs text-muted-foreground">**** {card.last4}</p>
                                </div>
                            </div>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                        {card.isPrimary && (
                            <div className="pl-12 -mt-2">
                                <Button variant="link" size="sm" className="text-primary text-xs h-auto p-0">UPGRADE PLAN</Button>
                            </div>
                        )}
                        {index < paymentCardsData.length - 1 && <Separator className="mt-2"/>}
                    </React.Fragment>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-4">
                <CardTitle>Recent Transactions</CardTitle>
                <Button variant="link" className="text-primary h-auto p-0 text-sm">Sort by date</Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {recentTransactionsData.map(txn => (
                        <div key={txn.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={txn.avatarUrl} alt={txn.name} />
                                    <AvatarFallback>{txn.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold text-sm">{txn.name}</p>
                                    <p className="text-xs text-muted-foreground">{new Date(txn.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                </div>
                            </div>
                            <div className={cn("font-semibold text-sm", txn.type === 'credit' ? 'text-green-600' : 'text-foreground')}>
                                {txn.type === 'credit' ? '+' : '-'}${Math.abs(txn.amount).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  );
};

export default AccountOverview;
