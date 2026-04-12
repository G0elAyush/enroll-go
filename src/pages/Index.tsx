import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cloud, Settings, Bot, BookOpen, Shield, Zap, Users, Award,
  CheckCircle, Briefcase, CreditCard, Monitor, Rocket, Code,
  Server, GitBranch, Database, Layout, Mail, Phone, MapPin
} from "lucide-react";

const navLinks = ["About", "Enrollment", "Challenges", "Program", "Learning", "Placement", "Pricing", "Features", "Contact"];

const enrollmentSteps = [
  { step: "01", title: "Registration", desc: "A registration fee of ₹500 is required to secure your place in the program. This confirms your interest and reserves your seat." },
  { step: "02", title: "Verify & Finalize", desc: "Complete your full enrollment by 30th April. Use our secure portal to finalize your payment—with No-Cost EMI options available—to unlock your official Student ID and automated tax invoice." },
  { step: "03", title: "Access Dashboard", desc: "Get immediate access to the Vyomira Educate Dashboard. Your credentials will be generated automatically, giving you instant access to the Sunday Live Room and prebatch resources." },
];

const challenges = [
  { icon: Shield, text: "Lack of Production Exposure" },
  { icon: BookOpen, text: "The Theoretical Knowledge Gap" },
  { icon: GitBranch, text: "No production-grade CI/CD Portfolios" },
  { icon: Users, text: "Low confidence in interviews" },
];

const solutions = [
  { icon: Monitor, text: "Live Production-Grade Labs" },
  { icon: Settings, text: "Enterprise DevOps Frameworks" },
  { icon: Rocket, text: "Live project building" },
  { icon: Award, text: "Interview preparation support" },
];

const learningTopics = [
  { icon: Cloud, title: "Cloud Architecture", desc: "Master AWS, GCP & Azure ecosystems. Learn to architect highly available, secure, and cost-effective cloud environments for enterprise-scale applications." },
  { icon: GitBranch, title: "Automated Delivery", desc: "Build production-ready CI/CD pipelines. Automate the entire software lifecycle from code commit to production with zero-downtime deployment strategies." },
  { icon: Code, title: "Infrastructure as Code", desc: "Stop manual provisioning. Use Terraform and Ansible to deploy and manage immutable infrastructure efficiently across multiple environments." },
  { icon: Server, title: "Scalable Orchestration", desc: "Deploy and manage Kubernetes clusters. Learn to scale containerized workloads in real-world production environments with high availability." },
  { icon: Database, title: "Enterprise SRE Workflows", desc: "Implement Site Reliability Engineering (SRE) practices. Master the exact monitoring, logging, and incident response workflows used by top tech firms." },
  { icon: Layout, title: "Capstone Project", desc: "Ship a complete real-world DevOps project from code to cloud deployment." },
];

const placementSupport = [
  { icon: Briefcase, title: "Technical Interview Bootcamps", desc: "Master the specific DevOps interview landscape. We provide deep-dive guidance on system design, automated testing protocols, and the behavioural expectations of top-tier cloud engineering firms." },
  { icon: Users, title: "Industry Alignment Guidance", desc: "Understand the exact benchmarks and production standards expected by recruiters today. We align your skills with current enterprise requirements to ensure you are day-one ready." },
  { icon: Award, title: "Production-Grade Portfolios", desc: "Move beyond Hello World tutorials. Document your experience building real-world, high-availability projects that prove your technical competence to potential employers." },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <span className="text-xl font-bold text-primary font-heading">Vyomira Educate</span>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>
          <Button onClick={() => navigate("/enroll")} size="sm">Enroll Now</Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(270 60% 96%), hsl(330 60% 96%), hsl(210 60% 98%))" }}>
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading mb-6 animate-fade-in">
                The Future of <span className="text-primary">DevOps Learning</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Build real-world skills with hands-on projects and get industry-ready.
              </p>
              <Button size="lg" className="text-lg px-10 py-6 animate-fade-in" style={{ animationDelay: "0.2s" }} onClick={() => navigate("/enroll")}>
                Enroll Now
              </Button>
            </div>
            <div className="hidden md:flex flex-col items-end gap-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              {[{ icon: Cloud, label: "Cloud" }, { icon: Settings, label: "CI/CD" }, { icon: Bot, label: "Automation" }].map((item, i) => (
                <div key={item.label} className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 shadow-sm" style={{ marginRight: `${i * 40}px` }}>
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-8">Who We Are</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Vyomira Tech Solutions is an engineering-first firm. We don't just teach DevOps; we build scalable cloud infrastructure every day. Our mission is to bridge the gap between academic theory and high-stakes industry requirements by providing freshers with the exact technical workflows used in top-tier tech companies.
          </p>
          <h3 className="text-lg font-semibold text-primary mb-4">INTRODUCTION</h3>
          <p className="text-muted-foreground leading-relaxed">
            Degrees get you interviews. Hands-on expertise gets you the offer. While traditional education lags behind the cloud revolution, Vyomira Educate puts you in the driver's seat of real CI/CD pipelines and production-grade automation from Day 1.
          </p>
        </div>
      </section>

      {/* Enrollment Process */}
      <section id="enrollment" className="py-20" style={{ background: "linear-gradient(180deg, hsl(270 60% 97%), hsl(330 50% 97%))" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading text-center mb-14">Enrollment Process</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {enrollmentSteps.map((s) => (
              <div key={s.step} className="bg-card border border-border rounded-xl p-8 text-center animate-fade-in">
                <div className="text-4xl font-bold text-primary/20 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section id="challenges" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-foreground font-heading mb-8">Challenges Students Face</h2>
              <div className="space-y-5">
                {challenges.map((c) => (
                  <div key={c.text} className="flex items-center gap-4 bg-destructive/5 border border-destructive/10 rounded-lg p-4">
                    <c.icon className="w-6 h-6 text-destructive shrink-0" />
                    <span className="text-foreground font-medium">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground font-heading mb-8">How We Solve It</h2>
              <div className="space-y-5">
                {solutions.map((s) => (
                  <div key={s.text} className="flex items-center gap-4 bg-accent/5 border border-accent/10 rounded-lg p-4">
                    <s.icon className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-foreground font-medium">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program" className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">Industry DevOps Training Program</h2>
          <p className="text-muted-foreground mb-12">
            Vyomira Tech Educate is a 3-month industry training program designed for students interested in building careers in Cloud and DevOps technologies.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Upcoming Batch", value: "03rd May 2026" },
              { label: "Duration", value: "3 Months – 15 Weeks" },
              { label: "Schedule", value: "Sunday 10:00 AM - 1:00 PM IST" },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="text-lg font-bold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">This schedule allows students to learn alongside their college commitments.</p>
        </div>
      </section>

      {/* What You Will Learn */}
      <section id="learning" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-4">What You Will Learn</h2>
          <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">Industry-Standard DevOps Mastery</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningTopics.map((topic) => (
              <div key={topic.title} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <topic.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{topic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Support */}
      <section id="placement" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-14">Placement Support</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {placementSupport.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">Simple & Flexible Payment Plan</h2>
          <p className="text-muted-foreground mb-12">The total cost of the Vyomira Tech Educate Program is:</p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-5xl font-bold text-primary mb-2">₹15,000</p>
              <p className="text-muted-foreground mb-6">Complete Program Fee</p>
              <h4 className="font-semibold text-card-foreground mb-4 flex items-center justify-center gap-2"><CreditCard className="w-5 h-5" /> Payment & Billing</h4>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Total Program Fee: ₹15,000</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Flexible EMI Option — No-Cost EMI</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Secure payment via Cashfree</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Automated Digital Tax Invoice</li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-xl p-8">
              <h4 className="font-semibold text-card-foreground mb-4 flex items-center justify-center gap-2"><Settings className="w-5 h-5" /> Automation & Access</h4>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Instant Dashboard Provisioning</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Welcome email with login details</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Reminder before program launch</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-accent mt-0.5 shrink-0" /> Gated Premium Content Access</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-6">This flexible payment structure allows students to secure their place without financial pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(217 91% 60%), hsl(270 70% 55%))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-heading">Join the Upcoming Batch</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Take the first step toward your DevOps career. Enrollment is quick and easy.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-10 py-6 font-semibold" onClick={() => navigate("/enroll")}>
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground font-heading text-center mb-12">Contact Us</h2>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-xl p-8">
              <p className="text-sm text-muted-foreground mb-1">Registered Company</p>
              <h3 className="text-lg font-bold text-card-foreground mb-4">Vyomira Tech Solutions Private Limited</h3>
              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>5th Floor, Tower A, Building 10, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana - 122002, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:info@vyomiratech.com" className="text-primary hover:underline">info@vyomiratech.com</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+917900363000" className="text-primary hover:underline">+91 7900363000</a>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 flex flex-col items-center justify-center">
              <p className="text-muted-foreground mb-4">We'll respond within 24 hours</p>
              <Button onClick={() => window.open("https://wa.me/917900363000", "_blank")} className="gap-2">
                💬 Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Vyomira Tech Solutions Pvt. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
