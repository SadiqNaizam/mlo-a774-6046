import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PaymentScreenProps {
  className?: string;
}

const paymentCardsData = [
    { id: 'card1', name: 'Business Card **** 1234' },
    { id: 'card2', name: 'Personal Card **** 5678' },
];

const PaymentScreen: React.FC<PaymentScreenProps> = ({ className }) => {
    const [amount, setAmount] = useState('390.81');
    const [selectedCard, setSelectedCard] = useState('card1');
    const [payee, setPayee] = useState('');

    const handleProceed = useCallback(() => {
        console.log({ amount, selectedCard, payee });
    }, [amount, selectedCard, payee]);

    return (
        <div className={cn("p-4 bg-background", className)}>
            <Card className="w-full max-w-md mx-auto">
                <CardHeader className="text-center space-y-2">
                    <p className="text-sm text-muted-foreground">Total Amount Due</p>
                    <div className="relative w-full">
                        <span className="absolute left-1/2 -translate-x-full -ml-3 top-1/2 -translate-y-1/2 text-3xl font-medium text-muted-foreground">$</span>
                        <Input
                            type="text"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value.replace(/[^\d.]/g, ''))}
                            className="text-5xl font-bold text-center border-none shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0 bg-transparent tracking-tighter"
                        />
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 pt-4">
                    <div className="space-y-2">
                        <Label htmlFor="payee">Payee Account</Label>
                        <Input 
                            id="payee" 
                            placeholder="e.g., Electric Company"
                            value={payee}
                            onChange={(e) => setPayee(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="card">Card Information</Label>
                        <Select value={selectedCard} onValueChange={setSelectedCard}>
                            <SelectTrigger id="card">
                                <SelectValue placeholder="Select a card" />
                            </SelectTrigger>
                            <SelectContent>
                                {paymentCardsData.map(card => (
                                    <SelectItem key={card.id} value={card.id}>{card.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {selectedCard === 'card1' && (
                            <div className="pt-1">
                                <Button variant="link" className="p-0 h-auto text-xs text-primary">UPGRADE PLAN</Button>
                            </div>
                        )}
                    </div>

                    <Separator />

                    <div className="flex items-start space-x-3">
                        <ShieldCheck className="h-5 w-5 text-primary mt-0.5 flex-shrink-0"/>
                        <div>
                             <p className="text-sm font-medium">Personalize a secure and private payment</p>
                             <p className="text-xs text-muted-foreground">Your data is always end-to-end encrypted.</p>
                        </div>
                    </div>
                    
                    <Button onClick={handleProceed} size="lg" className="w-full">
                        Proceed
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

export default PaymentScreen;
