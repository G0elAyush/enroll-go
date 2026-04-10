import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, CheckCircle, Shield, Zap } from "lucide-react";

const features = [
  { icon: GraduationCap, title: "Expert-Led Courses", description: "Learn from industry professionals with real-world experience" },
  { icon: Shield, title: "Verified Certificates", description: "Earn certificates recognized by top employers" },
  { icon: Zap, title: "Instant Access", description: "Start learning immediately after enrollment" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground font-heading mb-6 animate-fade-in">
            Unlock Your Potential
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Join thousands of students advancing their careers with our industry-recognized courses. Enroll today and start your journey.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg px-10 py-6 font-semibold animate-fade-in"
            style={{ animationDelay: "0.2s" }}
            onClick={() => navigate("/enroll")}
          >
            Enroll Now
          </Button>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-heading">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((f, i) => (
            <div key={f.title} className="bg-card border border-border rounded-lg p-8 text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-3">{f.title}</h3>
              <p className="text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 font-heading">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Take the first step toward your future. Enrollment is quick and easy.
          </p>
          <Button size="lg" onClick={() => navigate("/enroll")}>
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} EduEnroll. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
