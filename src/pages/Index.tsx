import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Cloud, Settings, Bot, BookOpen, Shield, Zap, Users, Award,
  CheckCircle, Briefcase, CreditCard, Monitor, Rocket, Code,
  Server, GitBranch, Database, Layout, Mail, Phone, MapPin,
  Globe, Menu, X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = ["About", "Enrollment", "Challenges", "Program", "Learning", "Placement", "Pricing", "Features", "Contact"];

const enrollmentSteps = [
  { step: "01", title: "Registration", desc: "A registration fee of ₹500 is required to secure your place in the program. This confirms your interest and reserves your seat.", icon: Users },
  { step: "02", title: "Verify & Finalize", desc: "Complete your full enrollment by 30th April. Use our secure portal to finalize your payment—with No-Cost EMI options available—to unlock your official Student ID and automated tax invoice.", icon: CheckCircle },
  { step: "03", title: "Access Dashboard", desc: "Get immediate access to the Vyomira Educate Dashboard. Your credentials will be generated automatically, giving you instant access to the Sunday Live Room and prebatch resources.", icon: Monitor },
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

const features = [
  { icon: Monitor, title: "Live Sunday Sessions", desc: "Weekly live classes with real-time doubt solving" },
  { icon: Code, title: "Hands-On Labs", desc: "Production-grade lab environments for practice" },
  { icon: Users, title: "Community Access", desc: "Join a network of aspiring DevOps engineers" },
  { icon: Award, title: "Certification", desc: "Get certified on program completion" },
];

// Hook for scroll-triggered animations
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(".aos-init").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Index = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <span className="text-xl font-bold gradient-text font-heading">Vyomira Educate</span>
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={() => navigate("/enroll")}
              size="sm"
              className="rounded-full px-6 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </Button>
            <button
              className="lg:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, hsl(270 60% 96%) 0%, hsl(300 40% 96%) 40%, hsl(330 60% 95%) 70%, hsl(210 60% 98%) 100%)"
        }}
      >
        <div className="container mx-auto px-4 py-24 md:py-36">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading mb-6">
                The Future of{" "}
                <span className="gradient-text">DevOps Learning</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10">
                Build real-world skills with hands-on projects and get industry-ready.
              </p>
              <Button
                size="lg"
                className="text-lg px-10 py-6 rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all duration-300 hover:scale-105"
                onClick={() => navigate("/enroll")}
              >
                Enroll Now
              </Button>
            </div>
            <div className="hidden md:flex flex-col items-end gap-8">
              <div className="animate-float flex items-center gap-3 bg-card border border-border rounded-full px-7 py-4 shadow-md" style={{ marginRight: "20px" }}>
                <span className="text-xl">☁️</span>
                <span className="text-sm font-semibold text-foreground">Cloud</span>
              </div>
              <div className="animate-float-delayed flex items-center gap-3 bg-card border border-border rounded-full px-7 py-4 shadow-md" style={{ marginRight: "80px" }}>
                <span className="text-xl">⚙️</span>
                <span className="text-sm font-semibold text-foreground">CI/CD</span>
              </div>
              <div className="animate-float-slow flex items-center gap-3 bg-card border border-border rounded-full px-7 py-4 shadow-md" style={{ marginRight: "40px" }}>
                <span className="text-xl">🤖</span>
                <span className="text-sm font-semibold text-foreground">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section id="about" className="py-20" style={{ background: "linear-gradient(180deg, hsl(330 40% 97%) 0%, hsl(0 0% 100%) 100%)" }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="aos-init text-3xl md:text-4xl font-bold gradient-text font-heading mb-8">Who We Are</h2>
          <p className="aos-init aos-delay-100 text-muted-foreground mb-8 leading-relaxed text-lg">
            Vyomira Tech Solutions is an engineering-first firm. We don't just teach DevOps; we build scalable cloud infrastructure every day. Our mission is to bridge the gap between academic theory and high-stakes industry requirements by providing freshers with the exact technical workflows used in top-tier tech companies.
          </p>
          <h3 className="aos-init aos-delay-200 text-lg font-semibold text-primary mb-4 uppercase tracking-wider">Introduction</h3>
          <p className="aos-init aos-delay-300 text-muted-foreground leading-relaxed">
            Degrees get you interviews. Hands-on expertise gets you the offer. While traditional education lags behind the cloud revolution, Vyomira Educate puts you in the driver's seat of real CI/CD pipelines and production-grade automation from Day 1.
          </p>
        </div>
      </section>

      {/* Enrollment Process */}
      <section id="enrollment" className="py-20" style={{ background: "linear-gradient(180deg, hsl(270 60% 97%), hsl(330 50% 97%))" }}>
        <div className="container mx-auto px-4">
          <h2 className="aos-init text-3xl md:text-4xl font-bold gradient-text font-heading text-center mb-14">Enrollment Process</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {enrollmentSteps.map((s, i) => (
              <div key={s.step} className={`aos-init aos-delay-${(i + 1) * 100} card-hover bg-card border border-border rounded-2xl p-8 text-center`}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <s.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary/20 mb-2">{s.step}</div>
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
              <h2 className="aos-init text-3xl font-bold text-foreground font-heading mb-8">Challenges Students Face</h2>
              <div className="space-y-4">
                {challenges.map((c, i) => (
                  <div key={c.text} className={`aos-init aos-delay-${(i + 1) * 100} flex items-center gap-4 bg-destructive/5 border border-destructive/10 rounded-xl p-5 card-hover`}>
                    <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-destructive" />
                    </div>
                    <span className="text-foreground font-medium">{c.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="aos-init text-3xl font-bold text-foreground font-heading mb-8">How We Solve It</h2>
              <div className="space-y-4">
                {solutions.map((s, i) => (
                  <div key={s.text} className={`aos-init aos-delay-${(i + 1) * 100} flex items-center gap-4 bg-primary/5 border border-primary/10 rounded-xl p-5 card-hover`}>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program" className="py-20" style={{ background: "linear-gradient(180deg, hsl(270 40% 97%), hsl(0 0% 100%))" }}>
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">Industry DevOps Training Program</h2>
          <p className="aos-init aos-delay-100 text-muted-foreground mb-12 text-lg">
            Vyomira Tech Educate is a 3-month industry training program designed for students interested in building careers in Cloud and DevOps technologies.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Upcoming Batch", value: "03rd May 2026" },
              { label: "Duration", value: "3 Months – 15 Weeks" },
              { label: "Schedule", value: "Sunday 10:00 AM - 1:00 PM IST" },
            ].map((item, i) => (
              <div key={item.label} className={`aos-init aos-delay-${(i + 1) * 100} card-hover bg-card border border-border rounded-2xl p-6`}>
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
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-4">What You Will Learn</h2>
          <p className="aos-init text-center text-muted-foreground mb-14 max-w-2xl mx-auto text-lg">Industry-Standard DevOps Mastery</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {learningTopics.map((topic, i) => (
              <div key={topic.title} className={`aos-init aos-delay-${((i % 3) + 1) * 100} card-hover bg-card border border-border rounded-2xl p-8`}>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5">
                  <topic.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{topic.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16" style={{ background: "linear-gradient(180deg, hsl(270 40% 97%), hsl(330 30% 97%))" }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="aos-init text-lg md:text-xl italic text-muted-foreground leading-relaxed">
            "Graduate with the technical confidence and production‑ready portfolio required to secure high-package DevOps roles"
          </p>
        </div>
      </section>

      {/* Placement Support */}
      <section id="placement" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-14">Placement Support</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {placementSupport.map((item, i) => (
              <div key={item.title} className={`aos-init aos-delay-${(i + 1) * 100} card-hover bg-card border border-border rounded-2xl p-8 text-center`}>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20" style={{ background: "linear-gradient(180deg, hsl(270 40% 97%), hsl(0 0% 100%))" }}>
        <div className="container mx-auto px-4">
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-14">Why Choose Vyomira</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div key={f.title} className={`aos-init aos-delay-${(i + 1) * 100} card-hover bg-card border border-border rounded-2xl p-6 text-center`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-card-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mb-6">Simple & Flexible Payment Plan</h2>
          <p className="aos-init text-muted-foreground mb-12 text-lg">The total cost of the Vyomira Tech Educate Program is:</p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="aos-init card-hover bg-card border border-border rounded-2xl p-8">
              <p className="text-5xl font-bold gradient-text mb-2">₹15,000</p>
              <p className="text-muted-foreground mb-6">Complete Program Fee</p>
              <h4 className="font-semibold text-card-foreground mb-4 flex items-center justify-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" /> Payment & Billing
              </h4>
              <ul className="text-sm text-muted-foreground space-y-3 text-left">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Total Program Fee: ₹15,000</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Flexible EMI Option — No-Cost EMI</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Secure payment via Cashfree</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Automated Digital Tax Invoice</li>
              </ul>
            </div>
            <div className="aos-init aos-delay-200 card-hover bg-card border border-border rounded-2xl p-8">
              <h4 className="font-semibold text-card-foreground mb-4 flex items-center justify-center gap-2">
                <Settings className="w-5 h-5 text-primary" /> Automation & Access
              </h4>
              <ul className="text-sm text-muted-foreground space-y-3 text-left">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Instant Dashboard Provisioning</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Welcome email with login details</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Reminder before program launch</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Gated Premium Content Access</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-6">This flexible payment structure allows students to secure their place without financial pressure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "linear-gradient(135deg, hsl(271 81% 56%), hsl(330 81% 60%))" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="aos-init text-2xl md:text-3xl font-bold text-primary-foreground mb-4 font-heading">Join the Upcoming Batch</h2>
          <p className="aos-init text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Take the first step toward your DevOps career. Enrollment is quick and easy.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="aos-init text-lg px-10 py-6 font-semibold rounded-full hover:scale-105 transition-transform duration-300"
            onClick={() => navigate("/enroll")}
          >
            Enroll Now
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[hsl(222,47%,11%)] text-[hsl(210,40%,98%)]">
        <div className="container mx-auto px-4">
          <h2 className="aos-init text-3xl font-bold font-heading text-center mb-12">Contact Us</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="aos-init flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Office Address</h4>
                  <p className="text-sm text-[hsl(215,20%,65%)]">5th Floor, Tower A, Building 10, DLF Cyber City, DLF Phase 2, Sector 24, Gurugram, Haryana - 122002, India</p>
                </div>
              </div>
              <div className="aos-init aos-delay-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Support Email</h4>
                  <a href="mailto:info@vyomiratech.com" className="text-primary hover:underline text-sm">info@vyomiratech.com</a>
                  <p className="text-xs text-[hsl(215,20%,65%)] mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
              <div className="aos-init aos-delay-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+917900363000" className="text-primary hover:underline text-sm">+91 7900363000</a>
                  <br />
                  <a href="tel:01246620971" className="text-primary hover:underline text-sm">0124-6620971</a>
                </div>
              </div>
              <div className="aos-init aos-delay-300">
                <Button
                  className="rounded-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-[hsl(0,0%,100%)]"
                  onClick={() => window.open("https://wa.me/917900363000", "_blank")}
                >
                  💬 Chat on WhatsApp
                </Button>
              </div>
            </div>
            <div className="aos-init aos-delay-200 rounded-2xl overflow-hidden border border-[hsl(217,33%,17%)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.088!3d28.494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzM4LjQiTiA3N8KwMDUnMTYuOCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              />
              <a
                href="https://maps.google.com/?q=DLF+Cyber+City+Gurugram"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3 text-primary hover:underline text-sm"
              >
                Open in Google Maps →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[hsl(222,47%,8%)] text-[hsl(215,20%,65%)] py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-[hsl(210,40%,98%)] mb-2">Vyomira</h3>
              <p className="text-sm italic mb-3">Scaling beyond the binary</p>
              <p className="text-sm">Empowering DevOps learners with real-world skills.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(210,40%,98%)] mb-3">Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#learning" className="hover:text-primary transition-colors">Courses</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(210,40%,98%)] mb-3">Connect with us</h4>
              <div className="flex gap-3">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[hsl(217,33%,20%)] flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[hsl(217,33%,20%)] flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="https://vyomiratech.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[hsl(217,33%,20%)] flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(210,40%,98%)] mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[hsl(217,33%,15%)] pt-6 text-center text-sm">
            © {new Date().getFullYear()} Vyomira Tech Solutions Private Limited. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
