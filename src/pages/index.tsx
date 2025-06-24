```tsx
import React, { useState, useCallback } from 'react';
import { Settings, Plus } from 'lucide-react';

// Import project components using the specified alias
import SplashScreen from '@/components/Onboarding/SplashScreen';
import FeaturePicker from '@/components/Onboarding/FeaturePicker';
import AccountOverview from '@/components/Dashboard/AccountOverview';
import PaymentScreen from '@/components/Payments/PaymentScreen';
import TransactionStatus from '@/components/Transactions/TransactionStatus';
import SettingsPage from '@/components/Settings/SettingsPage';
import MainAppLayout from '@/components/layout/MainAppLayout';
import { Button } from '@/components/ui/button';
import ProfilePage from '@/components/profile/profilepage';

// Type definition for the different views in the application flow.
// This acts as a simple state machine for navigating the prototype.
type AppView = 'splash' | 'features' | 'dashboard' | 'payment' | 'payment-status' | 'settings' | 'profile';

const IndexPage: React.FC = () => {
  const [view, setView] = useState<AppView>('splash');

  // --- Navigation Callbacks ---\
  const handleGetStarted = useCallback(() => setView('features'), []);
  const handleFeaturesSelected = useCallback(() => setView('dashboard'), []);
  const handleGoToPayment = useCallback(() => setView('payment'), []);
  const handleProceedPayment = useCallback(() => setView('payment-status'), []);
  const handleFinishTransaction = useCallback(() => setView('dashboard'), []);
  const handleGoToSettings = useCallback(() => setView('settings'), []);
  const handleGoToDashboard = useCallback(() => setView('dashboard'), []);
  const handleLogout = useCallback(() => setView('splash'), []);
  const handleGoToProfile = useCallback(() => setView('profile'), []);

  // --- Footer Navigation Actions ---
  const navActions = {
    home: handleGoToDashboard,
    profile: handleGoToProfile,
  };

  // --- Render Logic ---\
  const renderCurrentView = () => {
    switch (view) {
      case 'splash':
        // The splash screen is a full-page component, rendered outside the main app layout.
        return <SplashScreen onGetStarted={handleGetStarted} className="h-full" />;

      case 'features':
        // The feature picker is also part of the full-page onboarding flow.
        return <FeaturePicker onNext={handleFeaturesSelected} className="h-full" />;

      case 'dashboard':
        return (
          <MainAppLayout
            headerTitle="My Account"
            // The right element in the header is used for primary actions like navigating to settings.
            rightElement={
              <Button variant="ghost" size="icon" onClick={handleGoToSettings} className="h-8 w-8">
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Button>
            }
            navActions={navActions}
            activeView={view}
          >
            <div className="relative">
              <AccountOverview />
              {/* A Floating Action Button (FAB) is a common mobile pattern to initiate a primary action. */}
              <div className="fixed bottom-24 right-6 z-40">
                <Button size="icon" className="h-16 w-16 rounded-full shadow-xl" onClick={handleGoToPayment}>
                  <Plus className="h-8 w-8" />
                  <span className="sr-only">Make a Payment</span>
                </Button>
              </div>
            </div>
          </MainAppLayout>
        );

      case 'payment':
        return (
          <MainAppLayout
            headerTitle="Make a Payment"
            showBackButton={true}
            onBackClick={handleGoToDashboard}
            navActions={navActions}
            activeView={view}
          >
             <div className="flex h-full flex-col">
                <div className="flex-grow overflow-y-auto">
                    <PaymentScreen />
                </div>
                {/* Since the provided PaymentScreen has a non-functional 'Proceed' button,
                    we add a functional one here to ensure the prototype flow works without modification. */}
                <div className="p-4 border-t bg-background/95 backdrop-blur-sm">
                    <Button size="lg" className="w-full" onClick={handleProceedPayment}>
                        Proceed
                    </Button>
                </div>
             </div>
          </MainAppLayout>
        );

      case 'payment-status':
        return (
          <MainAppLayout 
            headerTitle="Transaction Status"
            navActions={navActions} 
            activeView={view}
          >
            <div className="flex h-full flex-col">
                <div className="flex-grow overflow-y-auto">
                    <TransactionStatus />
                </div>
              {/* A 'Done' button to complete the flow and return to the dashboard. */}
              <div className="p-4 border-t bg-background/95 backdrop-blur-sm">
                <Button size="lg" className="w-full" variant="secondary" onClick={handleFinishTransaction}>
                  Done
                </Button>
              </div>
            </div>
          </MainAppLayout>
        );

      case 'settings':
        return (
          <MainAppLayout
            headerTitle="Settings"
            showBackButton={true}
            onBackClick={handleGoToDashboard}
            navActions={navActions}
            activeView={view}
          >
            <SettingsPage onLogout={handleLogout} />
          </MainAppLayout>
        );
      
      case 'profile':
        return (
          <MainAppLayout
            headerTitle="Profile"
            showBackButton={false}
            navActions={navActions}
            activeView={view}
          >
            <ProfilePage />
          </MainAppLayout>
        );

      default:
        // Default to splash screen in case of an invalid state.
        return <SplashScreen onGetStarted={handleGetStarted} className="h-full" />;
    }
  };

  return (
    // This outer container simulates a mobile device viewport for better presentation.
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-800 p-4 font-sans">
      <div className="relative h-[844px] w-full max-w-[390px] overflow-hidden rounded-[48px] border-[10px] border-black bg-background shadow-2xl">
        {/* Notch simulation */}
        <div className="absolute top-0 left-1/2 z-50 h-7 w-36 -translate-x-1/2 rounded-b-xl bg-black"></div>
        <div className="h-full w-full">
          {renderCurrentView()}
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
```