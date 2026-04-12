import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { useToast } from "@/hooks/use-toast";
import { generateOtp, verifyOtp, type EnrollFormData } from "@/lib/api";
import { ArrowLeft, Loader2, Mail } from "lucide-react";

const Enroll = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
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
  };

  const isFormValid =
    formData.name.trim().length > 0 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.phone.trim().length >= 10 &&
    formData.college.trim().length > 0;

  const handleContinue = async () => {
    if (!isFormValid) return;
    setLoading(true);
    try {
      await generateOtp(formData);
      setStep("otp");
      toast({ title: "OTP Sent!", description: "Check your email for the verification code." });
    } catch {
      toast({ title: "Error", description: "Failed to send OTP. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    if (otp.length < 6) return;
    setLoading(true);
    try {
      await verifyOtp(formData, otp);
      toast({ title: "Verified!", description: "Redirecting to checkout..." });
      navigate("/checkout", { state: { enrollData: formData } });
    } catch {
      toast({ title: "Verification Failed", description: "Invalid OTP. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-fade-in">
        <button onClick={() => (step === "otp" ? setStep("form") : navigate("/"))} className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> {step === "otp" ? "Back to form" : "Back to home"}
        </button>

        {step === "form" ? (
          <Card>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Enroll Now</CardTitle>
              <CardDescription>Fill in your details to get started</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+91 9876543210" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="college">College / Institution</Label>
                <Input id="college" placeholder="Your college name" value={formData.college} onChange={(e) => handleInputChange("college", e.target.value)} />
              </div>
              <Button className="w-full mt-2" size="lg" disabled={!isFormValid || loading} onClick={handleContinue}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Continue
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-heading text-2xl">Verify Your Email</CardTitle>
              <CardDescription>
                We've sent a 6-digit code to <span className="font-medium text-foreground">{formData.email}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <InputOTP maxLength={6} value={otp} onChange={setOtp}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button className="w-full" size="lg" disabled={otp.length < 6 || loading} onClick={handleVerify}>
                {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                Verify & Continue
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                Didn't receive the code?{" "}
                <button className="text-primary hover:underline font-medium" onClick={handleContinue} disabled={loading}>
                  Resend
                </button>
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Enroll;
