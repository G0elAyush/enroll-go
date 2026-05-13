import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { generateOtp, verifyOtp, type EnrollFormData, EnrollFormError } from "@/lib/api";
import { ArrowLeft, Loader2, Mail, CheckCircle, Target, Rocket, GraduationCap } from "lucide-react";
import logo from "../assets/VyomiraDarkLogo.png";

const Enroll = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [errors, setErrors] = useState<EnrollFormError>({
    name: "",
    email: "",
    phone: "",
    college: "",
  });
  const [step, setStep] = useState<"form" | "otp">("form");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState<EnrollFormData>({
    name: "",
    email: "",
    phone: "",
    college: "",
  });

  const handleInputChange = (field: keyof EnrollFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (!/^[A-Za-z ]{2,}$/.test(value))
          error = "Only letters, min 2 characters";
        break;

      case "email":
        if (!value.trim()) error = "Email is required";
        else if (
          !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(value)
        )
          error = "Enter a valid email (example@gmail.com)";
        break;

      case "phone":
        if (!value.trim()) error = "Phone number is required";
        else if (!/^\d{10}$/.test(value))
          error = "Phone number must be exactly 10 digits";
        break;

      case "college":
        if (!value.trim()) error = "College name is required";
        break;

      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const isFormValid =
    /^[A-Za-z ]{2,}$/.test(formData.name.trim()) &&
    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(formData.email) &&
    formData.phone.trim().length === 10 &&
    formData.college.trim().length > 0;

  const handleContinue = async () => {
    if (!isFormValid) return;
    setLoading(true);
    try {
      await generateOtp(formData);
      setStep("otp");
      toast({ title: "OTP Sent!", description: "Check your email for the verification code." });
    } catch (e) {
      toast({ title: "Error", description: (e as Error).message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (otp.length < 6) return;
    setLoading(true);
    try {
      await verifyOtp(formData.email, otp);
      toast({ title: "Verified!", description: "Redirecting to checkout..." });
      navigate("/checkout", { state: { enrollData: formData } });
    } catch (e) {
      toast({ title: "Verification Failed", description: (e as Error).message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
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
                <Target className="w-4 h-4" /> Your Career Transformation Starts Here
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-heading mb-6 text-foreground leading-tight animate-fade-in" style={{ animationDelay: "100ms" }}>
                Take the Final Step Towards <span className="gradient-text">Your Engineering Goal</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: "200ms" }}>
                Join the elite cohort of DevOps and Cloud practitioners. You are moments away from unlocking a curriculum built by industry experts.
              </p>
              
              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Accelerate Your Career</h3>
                    <p className="text-muted-foreground leading-relaxed">Gain skills that top tech companies are actively hiring for right now. Go from beginner to production-ready.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Hands-on Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">Work on real production workflows, setting up AWS, CI/CD, Kubernetes, and secure pipelines.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 shadow-sm">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Placement Assistance</h3>
                    <p className="text-muted-foreground leading-relaxed">Get interview-ready for the ₹3–7 LPA target salary range with dedicated mentorship and mock rounds.</p>
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
                  <Target className="w-3.5 h-3.5" /> Start Your Journey
                </div>
                <h1 className="text-3xl font-bold font-heading mb-3 text-foreground leading-tight">
                  Step Towards <br/><span className="gradient-text">Your Goal</span>
                </h1>
                <p className="text-sm text-muted-foreground px-4">
                  Join our upcoming cohort of DevOps and Cloud practitioners.
                </p>
              </div>

              <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                <button onClick={() => (step === "otp" ? setStep("form") : navigate("/"))} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors text-sm font-medium">
                  <ArrowLeft className="w-4 h-4" /> {step === "otp" ? "Back to form" : "Back to home"}
                </button>

                {step === "form" ? (
                  <Card className="border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm bg-card/95">
                    <CardHeader>
                      <CardTitle className="font-heading text-2xl">Enroll Now</CardTitle>
                      <CardDescription>Fill in your details to secure your spot</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} className="bg-background" />
                        {errors.name && (<span className="text-xs text-destructive mt-1 block">{errors.name}</span>)}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} className="bg-background" />
                        {errors.email && (<span className="text-xs text-destructive mt-1 block">{errors.email}</span>)}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="9876543210" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} className="bg-background" />
                        {errors.phone && (<span className="text-xs text-destructive mt-1 block">{errors.phone}</span>)}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="college">College / Institution</Label>
                        <Input id="college" placeholder="Your college name" value={formData.college} onChange={(e) => handleInputChange("college", e.target.value)} className="bg-background" />
                        {errors.college && (<span className="text-xs text-destructive mt-1 block">{errors.college}</span>)}
                      </div>
                      <Button className="w-full mt-4 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" size="lg" disabled={!isFormValid || loading} onClick={handleContinue}>
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Continue to Next Step
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="border-border/50 shadow-xl shadow-primary/5 backdrop-blur-sm bg-card/95">
                    <CardHeader className="text-center pb-2">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                        <Mail className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="font-heading text-2xl">Verify Your Email</CardTitle>
                      <CardDescription className="text-base mt-2">
                        We've sent a 6-digit code to <br/>
                        <span className="font-medium text-foreground">{formData.email}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 pt-4">
                      <div className="flex justify-center">
                        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                          <InputOTPGroup className="gap-2">
                            <InputOTPSlot index={0} className="w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl rounded-md border-border bg-background" />
                            <InputOTPSlot index={1} className="w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl rounded-md border-border bg-background" />
                            <InputOTPSlot index={2} className="w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl rounded-md border-border bg-background" />
                            <InputOTPSlot index={3} className="w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl rounded-md border-border bg-background" />
                            <InputOTPSlot index={4} className="w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl rounded-md border-border bg-background" />
                            <InputOTPSlot index={5} className="w-10 h-12 text-lg sm:w-12 sm:h-14 sm:text-xl rounded-md border-border bg-background" />
                          </InputOTPGroup>
                        </InputOTP>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity" size="lg" disabled={otp.length < 6 || loading} onClick={handleVerify}>
                        {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                        Verify & Complete Enrollment
                      </Button>
                      <p className="text-center text-sm text-muted-foreground">
                        Didn't receive the code?{" "}
                        <button className="text-primary hover:underline font-medium" onClick={handleContinue} disabled={loading}>
                          Resend Code
                        </button>
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
