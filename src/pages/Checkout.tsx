import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, ShieldCheck } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { EnrollFormData } from "@/lib/api";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const enrollData = location.state?.enrollData as EnrollFormData | undefined;

  if (!enrollData) {
    return <Navigate to="/enroll" replace />;
  }

  const handlePayment = () => {
    // TODO: Integrate Cashfree payment gateway here
    // 1. Call your backend to create a Cashfree order
    // 2. Open Cashfree checkout with the order token
    toast({
      title: "Payment Gateway",
      description: "Cashfree integration will be connected here. Please provide your Cashfree credentials.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-lg animate-fade-in">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back
        </button>

        <Card>
          <CardHeader>
            <CardTitle className="font-heading text-2xl flex items-center gap-2">
              <CreditCard className="w-6 h-6" /> Checkout
            </CardTitle>
            <CardDescription>Complete your enrollment payment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Enrollment Summary */}
            <div className="bg-muted rounded-lg p-4 space-y-2">
              <h3 className="font-semibold text-foreground">Enrollment Details</h3>
              <div className="grid grid-cols-2 gap-y-1 text-sm">
                <span className="text-muted-foreground">Name</span>
                <span className="text-foreground">{enrollData.name}</span>
                <span className="text-muted-foreground">Email</span>
                <span className="text-foreground">{enrollData.email}</span>
                <span className="text-muted-foreground">Phone</span>
                <span className="text-foreground">{enrollData.phone}</span>
                <span className="text-muted-foreground">College</span>
                <span className="text-foreground">{enrollData.college}</span>
              </div>
            </div>

            <Separator />

            {/* Price Summary */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Course Enrollment Fee</span>
                <span className="text-foreground">₹999.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">GST (18%)</span>
                <span className="text-foreground">₹179.82</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold text-lg">
                <span className="text-foreground">Total</span>
                <span className="text-primary">₹1,178.82</span>
              </div>
            </div>

            <Button className="w-full" size="lg" onClick={handlePayment}>
              Pay with Cashfree
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4" />
              Secured by Cashfree Payment Gateway
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
