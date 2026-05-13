import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, ShieldCheck, Rocket, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { EnrollFormData, OtpVerifyResponse } from "@/lib/api";
import { load } from "@cashfreepayments/cashfree-js";
import logo from "../assets/VyomiraDarkLogo.png";

const Checkout = () => {
  let cashfree: any;
  var initializeSDK = async function () {
    cashfree = await load({
      mode: "production"
    });
  }
  initializeSDK();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const enrollData = location.state?.enrollData as EnrollFormData | undefined;
  const otpResponse = location.state?.otpResponse as OtpVerifyResponse | undefined;

  if (!enrollData) {
    return <Navigate to="/enroll" replace />;
  }

  const handlePayment = async () => {
     let checkoutOptions = {
      paymentSessionId: otpResponse?.data?.session_id || "",
      redirectTarget: "_self",
    };
    if (cashfree) {
      cashfree.checkout(checkoutOptions);
    }
    toast({
      title: "Payment Gateway",
      description: "Cashfree integration will be connected here.",
    });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Premium top banner */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground text-center text-xs sm:text-sm py-2 px-4 font-medium">
        <span className="opacity-90">Not a Coaching Center. A Live Technical Firm.</span>
        <span className="hidden sm:inline opacity-80"> — Learn from the people who actually build the tech.</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center h-16">
          <button onClick={() => navigate("/")} className="w-[160px] cursor-pointer hover:opacity-90 transition-opacity">
            <img src={logo} alt="Vyomira Educate" />
          </button>
        </div>
      </nav>

      <div className="flex-1 flex w-full">
        <div className="w-full grid lg:grid-cols-2">
          {/* Left Side - Motivational / Info */}
          <div className="hidden lg:flex flex-col justify-center p-12 lg:p-20 relative overflow-hidden bg-card border-r border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            <div className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }} />
            
            <div className="relative z-10 max-w-lg mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6 animate-fade-in">
                <ShieldCheck className="w-4 h-4" /> Secure Enrollment Process
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
                Complete Your <span className="gradient-text">Registration</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
                You're just one step away from joining our Advanced Cloud & DevOps program. Secure your seat today.
              </p>
              
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Instant Access</h3>
                    <p className="text-muted-foreground leading-relaxed">Get immediate access to course materials, learning paths, and our exclusive community upon successful payment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">100% Satisfaction</h3>
                    <p className="text-muted-foreground leading-relaxed">Learn from top industry practitioners. We focus on real-world implementations that actually matter.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Secure Payment</h3>
                    <p className="text-muted-foreground leading-relaxed">Your payment is processed securely via Cashfree with enterprise-grade encryption.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex items-center justify-center p-6 lg:p-12 relative bg-background">
            <div className="absolute inset-0 lg:hidden bg-gradient-to-br from-primary/5 via-background to-accent/5" />
            <div className="absolute inset-0 lg:hidden opacity-[0.02]"
              style={{
                backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }} />

            <div className="w-full max-w-md relative z-10">
              {/* Mobile Only Motivation Header */}
              <div className="lg:hidden mb-10 text-center animate-fade-in">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                  <ShieldCheck className="w-3.5 h-3.5" /> Secure Checkout
                </div>
                <h1 className="text-3xl font-bold font-heading mb-3 text-foreground leading-tight">
                  Complete <br/><span className="gradient-text">Registration</span>
                </h1>
                <p className="text-sm text-muted-foreground px-4">
                  You're just one step away from joining.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" /> Back to details
                </button>

                <Card className="border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm bg-card/95">
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl flex items-center gap-2">
                      <CreditCard className="w-6 h-6 text-primary" /> Checkout
                    </CardTitle>
                    <CardDescription>Complete your enrollment payment</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Enrollment Summary */}
                    <div className="bg-muted/50 rounded-lg p-4 border border-border/50 space-y-3">
                      <h3 className="font-semibold text-foreground text-sm">Enrollment Details</h3>
                      <div className="grid grid-cols-1 gap-y-2 text-sm">
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">Name</span>
                          <span className="font-medium text-foreground">{enrollData.name}</span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">Email</span>
                          <span className="font-medium text-foreground text-right break-all ml-4">{enrollData.email}</span>
                        </div>
                        <div className="flex justify-between border-b border-border/50 pb-2">
                          <span className="text-muted-foreground">Phone</span>
                          <span className="font-medium text-foreground">{enrollData.phone}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">College</span>
                          <span className="font-medium text-foreground text-right break-words ml-4">{enrollData.college}</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-border/50" />

                    {/* Price Summary */}
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Course Enrollment Fee</span>
                        <span className="text-foreground">₹{otpResponse.data.course_amount}</span>
                      </div>
                      {otpResponse.data.gst_amount === 0?(""):(
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">GST (18%)</span>
                        <span className="text-foreground">₹{otpResponse.data.gst_amount}</span>
                      </div>
                      )}
                      <Separator className="bg-border/50 my-2" />
                      <div className="flex justify-between font-semibold text-lg items-center">
                        <span className="text-foreground">Total</span>
                        <span className="text-primary">₹{otpResponse.data.total_amount}</span>
                      </div>
                    </div>
                      
                    <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity mt-4" size="lg" onClick={handlePayment}>
                      Pay with Cashfree
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground font-medium bg-muted/50 p-2 rounded-md">
                      <ShieldCheck className="w-4 h-4 text-green-500" />
                      Secured by Cashfree Payment Gateway
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
