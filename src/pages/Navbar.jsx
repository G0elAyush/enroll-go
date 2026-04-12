import "../styles/Navbar.css";
import logo from "../assets/VyomiraLogo.png";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import EnrollButton from "./EnrollButton";
import RegistrationModal from "./RegistrationModal";
import { handlePayment } from "../utils/handlePayment";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  

  // 🔥 Active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <img
          src={logo}
          alt="Vyomira Logo"
          onClick={() => {
            document
              .getElementById("hero")
              .scrollIntoView({ behavior: "smooth" });
          }}
          style={{ cursor: "pointer" }}
        />
      </div>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#about"
            className={active === "about" ? "active-link" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#enrollment"
            className={active === "enrollment" ? "active-link" : ""}
          >
            Enrollment
          </a>
        </li>
        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#challenge-solution"
            className={active === "challenge-solution" ? "active-link" : ""}
          >
            Challenges
          </a>
        </li>
        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#program"
            className={active === "program" ? "active-link" : ""}
          >
            Program
          </a>
        </li>
        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#learning"
            className={active === "learning" ? "active-link" : ""}
          >
            Learning
          </a>
        </li>
        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#placement"
            className={active === "placement" ? "active-link" : ""}
          >
            Placement
          </a>
        </li>

        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#pricing"
            className={active === "pricing" ? "active-link" : ""}
          >
            Pricing
          </a>
        </li>

        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#features"
            className={active === "features" ? "active-link" : ""}
          >
            Features
          </a>
        </li>
        <li>
          <a
            onClick={() => setMenuOpen(false)}
            href="#contact"
            className={active === "contact" ? "active-link" : ""}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* CTA */}
      <EnrollButton label="Enroll Now" />

      {/* HAMBURGER */}
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
