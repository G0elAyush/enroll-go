import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Cloud, Settings, Shield, Users, Award, CheckCircle, Briefcase,
  Monitor, Rocket, Code, Server, GitBranch, Database, Mail, Phone,
  MapPin, Globe, Menu, X, Terminal, Container, Workflow, Cpu,
  Linkedin, Download, ArrowRight, Boxes, Zap, FileCode, Lock,
  Activity, Target, GraduationCap, Layers, ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import logo from "../assets/VyomiraDarkLogo.png";
import rohitpic from "/RohitKumarPic.jpeg";
import gautampic from "../assets/mentor-gautam.jpg";
import swarupapic from "../assets/mentor-swarupa.jpg";

type NavItem = { label: string; href: string };
type NavGroup = { label: string; href?: string; children?: NavItem[] };

const navGroups: NavGroup[] = [
  { label: "Program", href: "#program",
    children: [
      { label: "Program", href: "#program" },
      { label: "Pricing", href: "#pricing" },
      { label: "Enrollment Process", href: "#enrollment" },
      
    ],

  },
  {
    label: "Curriculum",
    children: [
      { label: "Roadmap", href: "#roadmap" },
      { label: "Toolbox", href: "#toolbox" },
      { label: "Capstone", href: "#capstone" },
      { label: "What You'll Learn", href: "#learning" },
      { label: "Challenges Solved", href: "#challenges" },
      { label: "Features", href: "#features" },
      { label: "Enrollment Process", href: "#enrollment" },
    ],
  },
  {
    label: "Outcomes",
    children: [
      { label: "Career Outcomes", href: "#outcomes" },
      { label: "Placement Support", href: "#placement" },
    ],
  },
  
  {
    label: "Company",
    children: [
      { label: "About Us", href: "#about" },
      { label: "Founder", href: "#founder" },      
      { label: "FAQ", href: "#faq" },
    ],
  },
  { label: "Contact", href: "#contact" },
];

const heroBadges = [
  "15 Live Sessions",
  "3 Hours Each",
  "Hands-on Labs",
  "Real Production Workflows",
  "Interview Preparation",
];

const careerRoles = [
  { icon: Settings, title: "DevOps Engineer" },
  { icon: Cloud, title: "Cloud Engineer" },
  { icon: Terminal, title: "Linux Administrator" },
  { icon: Layers, title: "Platform Engineer" },
  { icon: Activity, title: "Site Reliability Engineer" },
];

const techStack = [
  { name: "Docker", icon: Container },
  { name: "Kubernetes", icon: Boxes },
  { name: "Terraform", icon: FileCode },
  { name: "AWS", icon: Cloud },
  { name: "GitLab CI/CD", icon: GitBranch },
  { name: "GitHub Actions", icon: Workflow },
  { name: "Linux", icon: Terminal },
  { name: "Nginx", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
];

const workflowSteps = [
  { icon: Code, label: "Code Push" },
  { icon: Workflow, label: "CI Pipeline" },
  { icon: Container, label: "Docker Build" },
  { icon: Cloud, label: "Cloud Deploy" },
  { icon: Activity, label: "Monitor & Scale" },
];

const phases = 
[
  {
    phase: "Phase 1",
    title: "The Foundation",
    color: "from-blue-500/20 to-cyan-500/20",
    sessions: [
      {
        "n": 1,
        "title": "Linux & The Command Line — How a Server Really Works",
        "objective": "The questions every DevOps interviewer asks in round one.",
        "topics": [
          "Why Linux: 96% of cloud VMs, all containers, every DevOps tool",
          "Filesystem hierarchy: /, /etc, /var/log, /home, /bin",
          "Essential daily commands: ls, cat, grep, find, ps, top, chmod",
          "File permissions: rwxr-xr-x, chmod 755 vs 644",
          "Processes: ps aux, systemctl, kill vs kill -9",
          "Package management: apt update, apt install, service verification"
        ],
        "labs": [
          "SSH into Ubuntu VM and explore filesystem",
          "Find top CPU processes using ps/top",
          "Install and verify Nginx server"
        ]
      },
      {
        "n": 2,
        "title": "Git & Version Control — The Way Teams Write Code Together",
        "objective": "Branching, merging, and collaboration used in real teams.",
        "topics": [
          "Git data model: working dir → staging → repo",
          "init, add, commit, status, log, diff",
          "branching and merge conflict resolution",
          "GitHub: push, pull, PR workflow",
          "undo changes: revert vs reset",
          ".gitignore best practices"
        ],
        "labs": [
          "Create repo and feature branch",
          "Create and resolve merge conflict",
          "Push PR and merge to main"
        ]
      },
      {
        "n": 3,
        "title": "Bash Scripting — Automating Daily Tasks",
        "objective": "Automate repetitive system tasks using shell scripting.",
        "topics": [
          "variables and arguments",
          "if/else conditionals",
          "loops and functions",
          "error handling set -euo pipefail",
          "cron scheduling",
          "file and process checks"
        ],
        "labs": [
          "Build server health check script",
          "Monitor disk and memory usage",
          "Schedule script using cron"
        ]
      },
      {
        "n": 4,
        "title": "Python for DevOps — Cloud Automation",
        "objective": "Use Python to interact with APIs and cloud services.",
        "topics": [
          "f-strings, dicts, lists, env variables",
          "JSON/CSV file handling",
          "requests library HTTP calls",
          "boto3 AWS SDK basics",
          "idempotent automation design",
          "exception handling best practices"
        ],
        "labs": [
          "EC2 inventory script using boto3",
          "Export AWS data to CSV",
          "Filter untagged resources"
        ]
      }
    ],
  },
  {
    phase: "Phase 2",
    title: "Infrastructure + Networking + Security",
    color: "from-purple-500/20 to-pink-500/20",
    sessions: [
      {
        "n": 5,
        "title": "Docker & Containerisation",
        "objective": "Understand containers vs virtual machines and build images.",
        "topics": [
          "containers vs VMs",
          "Dockerfile instructions",
          "image layers and caching",
          "ports, volumes, env vars",
          "CMD vs ENTRYPOINT",
          "namespaces and cgroups"
        ],
        "labs": [
          "Containerize a web app",
          "Fix broken Dockerfile",
          "Optimize image size"
        ]
      },
      {
        "n": 6,
        "title": "Docker Compose — Multi-Container Apps",
        "objective": "Run full applications with multiple services.",
        "topics": [
          "multi-service architecture",
          "docker-compose.yml structure",
          "service networking",
          "volumes and persistence",
          "health checks",
          ".env configuration"
        ],
        "labs": [
          "Deploy web + API + DB stack",
          "Fix service dependency issue"
        ]
      },
      {
        "n": 7,
        "title": "AWS Core Services — EC2, S3, IAM, VPC",
        "objective": "Core AWS services used in DevOps interviews and jobs.",
        "topics": [
          "EC2 instances and security groups",
          "S3 buckets and policies",
          "IAM roles vs users",
          "VPC subnets and routing",
          "shared responsibility model",
          "AWS CLI usage"
        ],
        "labs": [
          "Deploy app on EC2",
          "Host static site on S3",
          "Configure IAM role access"
        ]
      },
      {
        "n": 8,
        "title": "AWS Networking & Architecture",
        "objective": "Design scalable and resilient cloud architectures.",
        "topics": [
          "VPC CIDR and subnets",
          "NAT Gateway",
          "Load Balancers",
          "Auto Scaling Groups",
          "RDS databases",
          "architecture diagrams"
        ],
        "labs": [
          "Build 2-tier AWS architecture",
          "Test high availability setup"
        ]
      }
    ],
  },
  {
    phase: "Phase 3",
    title: "Containers + Automation + CI/CD",
    color: "from-orange-500/20 to-red-500/20",
    sessions: [
      {
        "n": 9,
        "title": "CI/CD Pipelines",
        "objective": "Automate build, test, and deployment pipelines.",
        "topics": [
          "CI vs CD",
          "GitHub Actions workflows",
          "pipeline stages",
          "secrets management",
          "docker build and push",
          "debugging pipelines"
        ],
        "labs": [
          "Build full CI/CD pipeline",
          "Auto deploy to EC2 via GitHub Actions"
        ]
      },
      {
        "n": 10,
        "title": "Terraform — Infrastructure as Code",
        "objective": "Provision cloud infrastructure using code.",
        "topics": [
          "IaC principles",
          "providers and state files",
          "plan vs apply",
          "variables and outputs",
          "remote state (S3 + DynamoDB)",
          "state drift handling"
        ],
        "labs": [
          "Provision AWS infrastructure using Terraform",
          "Deploy VPC + EC2 via code"
        ]
      },
      {
        "n": 11,
        "title": "Kubernetes Fundamentals",
        "objective": "Manage containers at scale using orchestration.",
        "topics": [
          "Kubernetes architecture",
          "pods, deployments, services",
          "self-healing and replicas",
          "kubectl commands",
          "service types",
          "rolling updates"
        ],
        "labs": [
          "Deploy multi-replica app",
          "Perform rolling update",
          "Test self-healing pods"
        ]
      }
    ],
  },
  {
    phase: "Phase 4",
    title: "Kubernetes + Production Deployment",
    color: "from-green-500/20 to-emerald-500/20",
    sessions: [
      {
        "n": 12,
        "title": "Monitoring & Observability",
        "objective": "Track system health using metrics and dashboards.",
        "topics": [
          "Prometheus metrics collection",
          "Grafana dashboards",
          "RED method (Rate, Errors, Duration)",
          "alerting strategies",
          "log aggregation",
          "observability basics"
        ],
        "labs": [
          "Deploy Prometheus + Grafana",
          "Create monitoring dashboard",
          "Trigger alerts"
        ]
      },
      {
        "n": 13,
        "title": "DevSecOps Basics",
        "objective": "Integrate security into DevOps pipelines.",
        "topics": [
          "DevSecOps principles",
          "Trivy container scanning",
          "secret detection tools",
          "IAM least privilege",
          "OWASP Top 10",
          "compliance basics"
        ],
        "labs": [
          "Add security scanning to pipeline",
          "Fix IAM misconfigurations"
        ]
      },
      {
        "n": 14,
        "title": "Full Pipeline Integration",
        "objective": "Connect all DevOps components end-to-end.",
        "topics": [
          "end-to-end architecture",
          "CI/CD + Kubernetes + monitoring",
          "incident response",
          "rollback strategies",
          "runbooks",
          "on-call practices"
        ],
        "labs": [
          "Integrate full system pipeline",
          "Simulate production incident",
          "Write postmortem"
        ]
      },
      {
        "n": 15,
        "title": "Capstone & Mock Interview Day",
        "objective": "Build and defend a production-ready DevOps system.",
        "topics": [
          "full system build",
          "Terraform + Docker + Kubernetes integration",
          "CI/CD deployment pipeline",
          "monitoring dashboard live",
          "technical interview simulation",
          "portfolio presentation"
        ],
        "labs": [
          "Build full production system in 60 minutes",
          "Deploy complete DevOps stack",
          "Mock interview + evaluation"
        ]
      }
    ],
  },
];

const capstoneFlow = [
  { icon: Code, label: "Code → GitHub" },
  { icon: Workflow, label: "CI/CD Build" },
  { icon: Container, label: "Dockerize" },
  { icon: Cloud, label: "Deploy to Cloud" },
  { icon: Boxes, label: "Kubernetes (Optional)" },
];

const faqs = [
  { q: "Is this beginner friendly?", a: "Yes. We start from Linux fundamentals and cloud basics, then progressively move into production-grade DevOps. No prior DevOps experience required." },
  { q: "Are recordings available?", a: "Yes. Every live session is recorded and made available in your dashboard for the full duration of the program." },
  { q: "Is coding required?", a: "Basic scripting comfort helps, but we cover everything you need — shell, YAML, and just enough programming to be effective as a DevOps engineer." },
  { q: "Will interview preparation be included?", a: "Yes. We run dedicated technical interview bootcamps covering system design, scenarios, and behavioural rounds." },
  { q: "What projects are included?", a: "A capstone production-style deployment plus hands-on labs in every session — CI/CD pipelines, Docker, cloud deploys, Kubernetes." },
  { q: "What laptop configuration is required?", a: "Any modern laptop with 8GB RAM and a stable internet connection. Most labs run on cloud VMs we help you provision." },
];

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("aos-animate");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".aos-init").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const Index = ({ setPopup }) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useScrollAnimation();

  const downloadSyllabus = () => {
    window.open("/Vyomira_Syllabus_Fresher_v4.pdf", "_self");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Premium top banner */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground text-center text-xs sm:text-sm py-2 px-4 font-medium">
        <span className="opacity-90">Not a Coaching Center. A Live Technical Firm.</span>
        <span className="hidden sm:inline opacity-80"> — Learn from the people who actually build the tech.</span>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <a href="/" className="w-[160px] text-xl font-bold gradient-text font-heading"><img  src={logo} alt="Vyomira Educate"/></a>
          <div className="hidden lg:flex items-center gap-1">
            {navGroups.map((group) =>
              group.children ? (
                <DropdownMenu key={group.label}>
                  <DropdownMenuTrigger className="inline-flex items-center gap-1 px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring data-[state=open]:text-primary">
                    {group.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-300 data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[14rem]">
                    {group.children.map((c) => (
                      <DropdownMenuItem key={c.label} asChild>
                        <a href={c.href} className="cursor-pointer w-full">{c.label}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a key={group.label} href={group.href}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
                  {group.label}
                </a>
              )
            )}
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={() => navigate("/enroll")} size="sm"
              className="rounded-full px-6 bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Enroll Now
            </Button>
            <button className="lg:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-b border-border px-4 pb-4 animate-fade-in max-h-[70vh] overflow-y-auto">
            {navGroups.map((group) =>
              group.children ? (
                <div key={group.label} className="py-1">
                  <p className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mt-3 mb-1">
                    {group.label}
                  </p>
                  {group.children.map((c) => (
                    <a key={c.label} href={c.href}
                      className="block py-2 pl-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setMobileMenuOpen(false)}>
                      {c.label}
                    </a>
                  ))}
                </div>
              ) : (
                <a key={group.label} href={group.href}
                  className="block py-2 text-sm font-medium text-foreground hover:text-primary transition-colors mt-2"
                  onClick={() => setMobileMenuOpen(false)}>
                  {group.label}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="program" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />
        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-6">
                <Zap className="w-3 h-3" /> Practitioner-Led Program · Cohort 2026
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-heading mb-6 leading-tight">
                Advanced Cloud + DevOps +{" "}
                <span className="gradient-text">Kubernetes Program</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Learn real-world DevOps, cloud infrastructure, Linux, CI/CD, Docker, Kubernetes, security, and production deployment workflows from engineers actively working in the industry.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {heroBadges.map((b) => (
                  <span key={b} className="px-3 py-1.5 rounded-full text-xs font-medium bg-card border border-border text-foreground">
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mb-6">
                <Button size="lg" onClick={() => navigate("/enroll")}
                  className="rounded-full px-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-all hover:scale-105">
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={downloadSyllabus} className="rounded-full px-8">
                  <Download className="w-4 h-4" /> Download Syllabus
                </Button>
              </div>
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Target Salary Range</p>
                  <p className="text-sm font-bold text-foreground">₹3–7 LPA for Freshers</p>
                </div>
              </div>
            </div>

            {/* Visual: terminal mock */}
            <div >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl rounded-3xl" />
                <div className="relative rounded-2xl bg-[hsl(222,47%,8%)] border border-[hsl(217,33%,17%)] shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-[hsl(217,33%,17%)] bg-[hsl(222,47%,11%)]">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                    <span className="text-xs text-[hsl(215,20%,65%)] ml-2 font-mono">production ~ deploy.sh</span>
                  </div>
                  <pre className="p-5 text-xs leading-relaxed font-mono text-[hsl(210,40%,90%)]">
{`$ kubectl apply -f deploy.yaml
deployment.apps/app created
service/app created

$ kubectl rollout status deploy/app
deployment "app" successfully rolled out

$ aws ecr get-login-password | docker login
Login Succeeded

$ terraform apply -auto-approve
Apply complete! Resources: 12 added.

`}<span className="text-green-400">✓ Production deploy successful</span>
                  </pre>
                </div>
                <div className="animate-float absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
                  <Container className="w-5 h-5 text-primary" />
                  <span className="text-xs font-semibold">Docker</span>
                </div>
                <div className="animate-float-delayed absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
                  <Boxes className="w-5 h-5 text-accent" />
                  <span className="text-xs font-semibold">Kubernetes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section id="outcomes" className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Career Outcomes</span>
              <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mt-3 mb-4">
                Built for real engineering roles
              </h2>
              <p className="aos-init aos-delay-100 text-muted-foreground text-lg max-w-2xl mx-auto">
                We don't just teach. We prepare students for real technical interviews and production-level engineering work.
              </p>
            </div>

            <div className="aos-init grid md:grid-cols-3 gap-6 mb-10">
              <div className="md:col-span-1 card-hover bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-primary-foreground">
                <Target className="w-10 h-10 mb-4 opacity-90" />
                <p className="text-sm opacity-90 mb-2">Target Salary Range</p>
                <p className="text-4xl font-bold mb-1">₹3–7 LPA</p>
                <p className="text-sm opacity-90">for Freshers</p>
              </div>
              <div className="md:col-span-2 card-hover bg-card border border-border rounded-2xl p-8">
                <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" /> Roles you'll be ready for
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {careerRoles.map((r) => (
                    <div key={r.title} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <r.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-foreground">{r.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder & Mentors */}
      <section id="founder" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">Practitioner-Led Learning</span>
              <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mt-3">
                Learn From the Architects Who Build the Global Cloud
              </h2>
            </div>

            {/* Rohit - existing card unchanged */}
            <div className="aos-init grid md:grid-cols-5 gap-8 items-center bg-card border border-border rounded-3xl p-8 md:p-12 mb-8">
              <div className="md:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-30" />
                  <div className="relative w-100 h-1000 md:w-40 md:h-70 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-card flex items-center justify-center overflow-hidden">
                   {/* <Users className="w-24 h-24 text-primary/60" />*/}
                   <img className="w-50 h-50" src={rohitpic} alt="Rohit Kumar Image"/>
                  </div>
                </div>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-2xl font-bold text-card-foreground mb-1">Rohit Kumar</h3>
                <p className="text-primary font-semibold mb-4">CEO & Founder, Vyomira Tech Solutions Private Limited</p>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Hands-on experience across <span className="font-semibold text-foreground">AWS, GCP, Azure</span>, DevOps automation, CI/CD,
                  Linux engineering, and cloud infrastructure. Students learn the same technologies and workflows used to run real production systems.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["AWS", "GCP", "Azure", "Linux", "Kubernetes", "Terraform", "CI/CD"].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {s}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="rounded-full" onClick={() => window.open("https://www.linkedin.com/in/rohit-kumar1108/", "_blank")}>
                  <Linkedin className="w-4 h-4" /> Connect on LinkedIn
                </Button>
              </div>
            </div>

            {/* Additional mentor cards */}
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Gautam S.",
                  role: "Core Technical Mentor & Panel Reviewer",
                  img: gautampic,
                  pedigree: [
                    "19+ Years of Core Infrastructure Engineering",
                    "Ex-Google Senior Systems Engineer",
                    "Enterprise Distributed Architecture Specialist",
                  ],
                  about:
                    "Gautam brings nearly two decades of Silicon Valley systems optimization to the table. Having spent crucial years engineering at Google, he ensures that the architectural patterns, Zero-Trust network configurations, and scalability guidelines you study perfectly match the highest tiers of global tech infrastructure.",
                },
                {
                  name: "Swarupa K.",
                  role: "Core Technical Mentor & Pipeline Reviewer",
                  img: swarupapic,
                  pedigree: [
                    "10+ Years of Enterprise DevOps Mastery",
                    "Ex-Accenture Principal Cloud Consultant",
                    "Cross-Cloud Infrastructure & Billing Architect (AWS, Azure, GCP)",
                  ],
                  about:
                    "Swarupa is an elite specialist in deep cloud economics, multi-cloud management, and massive-scale data migrations. With a powerful background delivering cross-cloud architectures at corporate giants like Accenture and specialized cloud deployment firms, she ensures your multi-cloud operations and automated delivery pipelines are bulletproof and production-ready.",
                },
              ].map((m) => (
                <div key={m.name} className="aos-init card-hover bg-card border border-border rounded-3xl p-8 flex flex-col">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-full blur opacity-30" />
                      <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-card flex items-center justify-center overflow-hidden">
                        <img className="w-full h-full object-cover" src={m.img} alt={`${m.name} portrait`} loading="lazy" width={1024} height={1024} />
                      </div>
                    </div>
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-card-foreground mb-1">{m.name}</h3>
                    <p className="text-primary font-semibold">{m.role}</p>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {m.pedigree.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                    <span className="font-semibold text-foreground">About Your Mentor: </span>{m.about}
                  </p>
                  <div className="mt-auto flex justify-center">
                    <Button variant="outline" className="rounded-full" type="button">
                      <Shield className="w-4 h-4" /> Verified Industry Expert
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Toolbox + Workflow */}
      <section id="toolbox" className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Technology Stack</span>
            <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mt-3 mb-4">
              The exact toolbox you'll master
            </h2>
            <p className="aos-init aos-delay-100 text-muted-foreground text-lg max-w-2xl mx-auto">
              Industry-standard tools used by real engineering teams in production.
            </p>
          </div>

          <div className="aos-init grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-5xl mx-auto mb-20">
            {techStack.map((t) => (
              <div key={t.name}
                className="group card-hover bg-card border border-border rounded-2xl p-5 flex flex-col items-center justify-center gap-3 text-center transition-all hover:border-primary/40">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-card-foreground">{t.name}</span>
              </div>
            ))}
          </div>

          {/* Workflow infographic */}
          <div className="max-w-5xl mx-auto">
            <h3 className="aos-init text-center text-2xl font-bold text-foreground font-heading mb-10">
              A real DevOps workflow, made tangible
            </h3>
            <div className="aos-init flex flex-col md:flex-row items-stretch justify-between gap-3">
              {workflowSteps.map((s, i) => (
                <div key={s.label} className="flex-1 flex items-center gap-3">
                  <div className="flex-1 card-hover bg-card border border-border rounded-2xl p-5 text-center">
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <s.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-card-foreground">{s.label}</p>
                  </div>
                  {i < workflowSteps.length - 1 && (
                    <ArrowRight className="hidden md:block w-5 h-5 text-primary shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap / Syllabus */}
      <section id="roadmap" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Program Roadmap</span>
            <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mt-3 mb-4">
              15 Sessions · 3 Hours Each
            </h2>
            <p className="aos-init aos-delay-100 text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              A structured journey from Linux fundamentals to production Kubernetes deployments.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="outline" className="rounded-full" onClick={downloadSyllabus}>
                <Download className="w-4 h-4" /> Download Syllabus PDF
              </Button>
            </div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {phases.map((p, idx) => (
              <div key={p.phase} className="aos-init">
                <div className={`rounded-2xl bg-gradient-to-r ${p.color} p-[1px]`}>
                  <div className="rounded-2xl bg-card p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider">{p.phase}</p>
                        <h3 className="text-xl md:text-2xl font-bold text-card-foreground">{p.title}</h3>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-2">
                      {p.sessions.map((s) => (
                        <AccordionItem key={s.n} value={`s-${s.n}`} className="border border-border rounded-xl px-4 bg-background/50">
                          <AccordionTrigger className="hover:no-underline py-4">
                            <div className="flex items-center gap-4 text-left">
                              <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                                S{String(s.n).padStart(2, "0")}
                              </span>
                              <span className="font-semibold text-foreground">{s.title}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-5">
                            <div className="pl-12 space-y-4">
                              <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Objective</p>
                                <p className="text-sm text-muted-foreground">{s.objective}</p>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Topics</p>
                                <div className="flex flex-wrap gap-2">
                                  {s.topics.map((t) => (
                                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-foreground">{t}</span>
                                  ))}
                                </div>
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Hands-on Labs</p>
                                <ul className="space-y-1">
                                  {s.labs.map((l) => (
                                    <li key={l} className="flex items-start gap-2 text-sm text-muted-foreground">
                                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {l}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capstone */}
      <section id="capstone" className="py-20 bg-[hsl(222,47%,8%)] text-[hsl(210,40%,98%)]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Proof of Work</span>
              <h2 className="aos-init text-3xl md:text-4xl font-bold font-heading mt-3 mb-4">
                Ship a real production-style project
              </h2>
              <p className="aos-init aos-delay-100 text-[hsl(215,20%,75%)] text-lg max-w-2xl mx-auto">
                Your capstone is not a tutorial. It's a complete, deployable engineering project you can show to recruiters.
              </p>
            </div>

            {/* Project flow */}
            <div className="aos-init grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
              {capstoneFlow.map((s, i) => (
                <div key={s.label} className="relative bg-[hsl(222,47%,11%)] border border-[hsl(217,33%,17%)] rounded-xl p-5 text-center hover:border-primary/40 transition-colors">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <p className="text-xs font-semibold">{s.label}</p>
                  {i < capstoneFlow.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-2.5 -translate-y-1/2 w-4 h-4 text-primary z-10" />
                  )}
                </div>
              ))}
            </div>

            <div className="aos-init grid sm:grid-cols-2 gap-4">
              {[
                { icon: GitBranch, title: "GitHub-based workflow", desc: "Branching, PRs, code reviews" },
                { icon: Workflow, title: "CI/CD pipeline", desc: "Automated build, test, deploy" },
                { icon: Container, title: "Docker containerization", desc: "Production-grade images" },
                { icon: Cloud, title: "Cloud deployment", desc: "AWS / GCP / Azure" },
                { icon: Lock, title: "Security setup", desc: "SSL, secrets, hardening" },
                { icon: Boxes, title: "Kubernetes (optional)", desc: "K8s deployment & scaling" },
              ].map((f) => (
                <div key={f.title} className="flex items-start gap-4 p-5 rounded-xl bg-[hsl(222,47%,11%)] border border-[hsl(217,33%,17%)]">
                  <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">{f.title}</p>
                    <p className="text-sm text-[hsl(215,20%,70%)]">{f.desc}</p>
                  </div>
                </div>
              ))}
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
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { step: "01", title: "Enrollment to the Vyomira Learning Dashboard", desc: "Complete your registration by paying the standalone ₹500 portal access fee. This amount is not part of the main course fee. It grants access to the Vyomira Educate Student Portal, initializes your profile, and helps us identify candidates who are genuinely committed to learning, building skills, and investing in their future growth.", icon: Users },
              { step: "02", title: "Vyomira Learning Dashboard Credentials Provisioning", desc: "Once your registration fee is verified, our system instantly provisions your secure account. Check your email for your official login credentials and sign in directly to the Vyomira Educate Student Dashboard to access and explore your student portal.", icon: CheckCircle },
              { step: "03", title: "Course Fee Finalization & Onboarding", desc: (<>Inside your personalized student dashboard, complete the ₹5,000<sup>+GST</sup> <del>₹10,000</del> <sup>50% off</sup> program fee payment by 25<sup>th</sup> June 2026 to fully activate your student status. This unlocks live technical practice rooms, system lab access, project environments, and your live Sunday architecture sessions.</>), icon: Monitor },
            ].map((s, i) => (
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
                {[
                  { icon: Shield, text: "Lack of Production Exposure" },
                  { icon: Code, text: "The Theoretical Knowledge Gap" },
                  { icon: GitBranch, text: "No production-grade CI/CD Portfolios" },
                  { icon: Users, text: "Low confidence in interviews" },
                ].map((c, i) => (
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
                {[
                  { icon: Monitor, text: "Live Production-Grade Labs" },
                  { icon: Settings, text: "Enterprise DevOps Frameworks" },
                  { icon: Rocket, text: "Live project building" },
                  { icon: Award, text: "Interview preparation support" },
                ].map((s, i) => (
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
              { label: "Upcoming Batch", value: "30th June 2026" },
              { label: "Duration", value: "15 Weeks" },
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
      <section id="learning" className="py-20" style={{ background: "linear-gradient(180deg, hsl(270 40% 97%), hsl(0 0% 100%))" }}>
        <div className="container mx-auto px-4">
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-4">What You Will Learn</h2>
          <p className="aos-init text-center text-muted-foreground mb-14 max-w-2xl mx-auto text-lg">Industry-Standard DevOps Mastery</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Cloud, title: "Cloud Architecture", desc: "Master AWS, GCP & Azure ecosystems. Architect highly available, secure, and cost-effective cloud environments." },
              { icon: GitBranch, title: "Automated Delivery", desc: "Build production-ready CI/CD pipelines with zero-downtime deployment strategies." },
              { icon: FileCode, title: "Infrastructure as Code", desc: "Use Terraform and Ansible to deploy and manage immutable infrastructure across environments." },
              { icon: Server, title: "Scalable Orchestration", desc: "Deploy and manage Kubernetes clusters in real-world production environments." },
              { icon: Activity, title: "Enterprise SRE Workflows", desc: "Master monitoring, logging, and incident response workflows used by top tech firms." },
              { icon: Rocket, title: "Capstone Project", desc: "Ship a complete real-world DevOps project from code to cloud deployment." },
            ].map((topic, i) => (
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

      {/* Placement Support */}
      <section id="placement" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading text-center mb-14">Placement Support</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Briefcase, title: "Technical Interview Bootcamps", desc: "Deep-dive guidance on system design, automated testing protocols, and behavioural expectations of top-tier cloud engineering firms." },
              { icon: Users, title: "Industry Alignment Guidance", desc: "Align your skills with current enterprise requirements to ensure you are day-one ready." },
              { icon: Award, title: "Production-Grade Portfolios", desc: "Document your experience building real-world, high-availability projects that prove your competence." },
            ].map((item, i) => (
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
            {[
              { icon: Monitor, title: "Live Sunday Sessions", desc: "Weekly live classes with real-time doubt solving" },
              { icon: Code, title: "Hands-On Labs", desc: "Production-grade lab environments for practice" },
              { icon: Users, title: "Community Access", desc: "Join a network of aspiring DevOps engineers" },
              { icon: Award, title: "Certification", desc: "Get certified on program completion" },
            ].map((f, i) => (
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
          <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mb-4">Program Fee & Details</h2>
          <p className="aos-init text-muted-foreground mb-12 text-lg">Total program fee — transparent, one time payment.</p>
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="aos-init card-hover bg-card border border-border rounded-2xl p-8">
              <p className="text-5xl font-bold gradient-text mb-2">₹5,000<sup className="gradient-text text-sm"> + GST</sup></p>
              <p><del className="text-2xl">₹10,000</del><span className="text-2xl"> 50% off</span></p> 
              <p className="text-muted-foreground mb-6">Complete Program Fee</p>
              <ul className="text-sm text-muted-foreground space-y-3 text-left">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 15 Live Sessions × 3 Hours</li>
               {/* <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> No-Cost EMI available</li > */}
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Secure payment via Cashfree</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Automated Tax Invoice</li>
              </ul>
            </div>
            <div className="aos-init aos-delay-200 card-hover bg-card border border-border rounded-2xl p-8 text-left">
              <h4 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Settings className="w-5 h-5 text-primary" /> What's included
              </h4>
              <ul className="text-sm text-muted-foreground space-y-3">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Lifetime access to recordings</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Hands-on production labs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Capstone project & reviews</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Interview preparation bootcamp</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</span>
              <h2 className="aos-init text-3xl md:text-4xl font-bold text-foreground font-heading mt-3">
                Frequently asked questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
                  <AccordionTrigger className="hover:no-underline text-left font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, hsl(271 81% 56%), hsl(330 81% 60%))" }}>
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }} />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="aos-init text-3xl md:text-5xl font-bold text-primary-foreground mb-5 font-heading">
            Start Building Real DevOps Skills
          </h2>
          <p className="aos-init text-primary-foreground/85 mb-10 max-w-2xl mx-auto text-lg">
            Learn cloud infrastructure, Linux, Docker, Kubernetes, CI/CD, security, and deployment engineering through hands-on implementation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary"
              className="rounded-full px-8 font-semibold hover:scale-105 transition-transform"
              onClick={() => navigate("/enroll")}>
              Enroll Now <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline"
              className="rounded-full px-8 font-semibold bg-transparent border-white/40 text-white hover:bg-white/10"
              onClick={() => window.open("https://wa.me/917900363000", "_blank")}>
              💬 Talk to Mentor
            </Button>
          </div>
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
                </div>
              </div>
              <div className="aos-init aos-delay-200 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+917900363000" className="text-primary hover:underline text-sm">+91 7900363000</a>
                </div>
              </div>
              <Button className="rounded-full gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white"
                onClick={() => window.open("https://wa.me/917900363000", "_blank")}>
                💬 Chat on WhatsApp
              </Button>
            </div>
            <div className="aos-init aos-delay-200 rounded-2xl overflow-hidden border border-[hsl(217,33%,17%)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.088!3d28.494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI5JzM4LjQiTiA3N8KwMDUnMTYuOCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Office Location" />
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
              <p className="text-sm">Practitioner-led DevOps engineering education.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(210,40%,98%)] mb-3">Program</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#program" className="hover:text-primary transition-colors">Overview</a></li>
                <li><a href="#roadmap" className="hover:text-primary transition-colors">Roadmap</a></li>
                <li><a href="#capstone" className="hover:text-primary transition-colors">Capstone</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(210,40%,98%)] mb-3">Connect</h4>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/company/vyomira-tech-solutions-private-limited/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[hsl(217,33%,20%)] flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://vyomiratech.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[hsl(217,33%,20%)] flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-[hsl(210,40%,98%)] mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li onClick={() => setPopup("privacy")}>Privacy Policy</li>
                <li onClick={() => setPopup("terms")}>Terms & Conditions</li>
                <li onClick={() => setPopup("refund")}>Refund Policy</li>
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
