import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";

const API_BASE_URL = "https://your-api-base-url.com";

type Status = "loading" | "SUCCESS" | "FAIL";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id") || "";
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    if (!orderId) {
      setStatus("FAIL");
      return;
    }

    const checkStatus = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/payment-status?order_id=${encodeURIComponent(orderId)}`);
        if (!res.ok) throw new Error();
        const data = await res.json();
        setStatus(data.status === "SUCCESS" ? "SUCCESS" : "FAIL");
      } catch {
        setStatus("FAIL");
      }
    };

    checkStatus();
  }, [orderId]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md animate-fade-in">
        {status === "loading" ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-16 space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-primary" />
              <p className="text-muted-foreground text-lg">Verifying your payment...</p>
            </CardContent>
          </Card>
        ) : status === "SUCCESS" ? (
          <Card className="border-green-500/30">
            <CardHeader className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-500" />
              </div>
              <CardTitle className="font-heading text-2xl text-green-600">Payment Successful!</CardTitle>
              <CardDescription className="text-base mt-2">
                Login credentials for the dashboard have been shared on your email.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-sm text-muted-foreground mb-6">Order ID: <span className="font-mono font-medium text-foreground">{orderId}</span></p>
              <Link to="/">
                <Button className="w-full" size="lg">Go to Home</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-destructive/30">
            <CardHeader className="text-center">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <XCircle className="w-10 h-10 text-destructive" />
              </div>
              <CardTitle className="font-heading text-2xl text-destructive">Payment Failed</CardTitle>
              <CardDescription className="text-base mt-2">
                Unfortunately your payment could not be processed. Please retry your enrollment.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              {orderId && <p className="text-sm text-muted-foreground">Order ID: <span className="font-mono font-medium text-foreground">{orderId}</span></p>}
              <Link to="/enroll">
                <Button className="w-full" size="lg">Retry Enrollment</Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default PaymentStatus;
