import { createPortal } from "react-dom";
import "../styles/LegalPopup.css";

export default function LegalPopup({ popup, setPopup }) {
  if (!popup) return null;

  const content = {
    privacy: {
      title: "Privacy Policy",
      body: [
        { heading: "Last updated", text: "February 3, 2026" },
        {
          heading: "Introduction",
          text: `Vyomira Tech Solutions ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our cloud optimization and management services.`,
        },
        {
          heading: "Information We Collect",
          text: `We collect information that you provide directly to us, information we obtain automatically when you use our services, and information from third-party sources.`,
        },
        {
          heading: "Information You Provide",
          text: `- Account information such as name, email address, phone number, and company details
- Billing information such as payment card details and billing address
- User content that you submit through our services
- Communications with us including customer support requests`,
        },
        {
          heading: "Automatically Collected Information",
          text: `- Usage information such as features used, actions taken, and timestamps
- Device information such as IP address, browser type, and operating system
- Cookies and similar tracking technologies`,
        },
        {
          heading: "How We Use Your Information",
          text: `We use the information we collect for various purposes, including:
- Providing, maintaining, and improving our services
- Processing transactions and managing your account
- Communicating with you about services, promotions, and updates
- Personalizing your experience and providing tailored content
- Analyzing usage patterns and optimizing our services
- Detecting, investigating, and preventing fraudulent or unauthorized activities`,
        },
        {
          heading: "Data Security",
          text: `We implement appropriate technical and organizational measures to protect your information against unauthorized or unlawful processing, accidental loss, destruction, or damage.`,
        },
        {
          heading: "Contact Us",
          text: `If you have questions about this Privacy Policy, please contact us at info@vyomiratech.com`,
        },
      ],
    },
    terms: {
      title: "Terms & Conditions",
      body: [
        {
          heading: "Overview",
          text: "By enrolling in Vyomira programs, you agree to our payment rules, dashboard access policies, and course usage guidelines.",
        },
      ],
    },
    refund: {
      title: "Refund & Cancellation Policy",
      body: [
        {
          heading: "Policy Content",
          text: `Unless otherwise expressly agreed in writing by Vyomira Tech Solutions Private Limited ("Vyomira Tech"), full payment for participation in a Program is required at the time of registration. If a specific Program includes a designated trial window, such access shall be made available only after receipt of the full Program fee. During such a trial window, a student may submit a written request for a refund, which Vyomira Tech may grant at its sole discretion and subject to the satisfaction of internal review. Any such refund shall be processed in accordance with the specific terms of that Program and will be subject to the deduction of applicable charges, including but not limited to administrative, licensing, and marketing expenses incurred by Vyomira Tech. Once the designated trial window for a Program has closed, or in cases where no trial window is provided, no refunds shall be permitted for any reason whatsoever.`,
        },
        {
          heading: "Responsibility",
          text: `It is the sole responsibility of the user enrolling in a Program to verify the accuracy of the enrollment details and to evaluate the suitability and relevance of the elected Program to their professional requirements. Enrollment into any Vyomira Tech Program is strictly non-transferable. To facilitate payment for Programs or any associated products and services offered through the Vyomira Tech platform, users must maintain active internet access and provide a current, valid, and accepted payment method as specified during the sign-up process.`,
        },
        {
          heading: "Third-Party Payment Gateways",
          text: `Vyomira Tech does not store restricted financial information, such as credit card details, in compliance with the guidelines set forth by the Reserve Bank of India (RBI). All financial transactions are processed through partnered third-party payment gateways. By utilizing these third-party providers, you agree to abide by their respective terms and conditions. Vyomira Tech shall not be held responsible for the storage of information by these third parties, and any such storage is at the sole discretion and risk of the user. Vyomira Tech is not liable for any loss of information or financial loss incurred due to the usage of third-party payment platforms and is not responsible for reimbursing or making good such losses in any manner.`,
        },
        {
          heading: "Fees & Taxes",
          text: `Users agree to pay all applicable fees and taxes associated with payments made through the Platform, which are calculated based on the billing information provided at the time of enrollment. Vyomira Tech and its authorized representatives will never request a One-Time Password (OTP) or other sensitive authentication-related information. We urge all users to exercise caution during financial transactions. Failure to remit the applicable Program fees may result in the immediate withdrawal of access to the Program, the candidate dashboard, and all associated learning resources.`,
        },
        {
          heading: "Trial Period",
          text: `If a Program is offered with a free trial period, such trial shall last only for the duration specified during the initial sign-up. Free trials may not be combined with other promotional offers and may exclude access to certain premium features of the product or service. Vyomira Tech reserves the right to determine eligibility for trial periods based on prior account history, contact information, or payment methods associated with the user. All cancellations and subsequent refunds will be governed strictly by the specific terms and conditions of the respective Program as outlined at the time of purchase.`,
        },
      ],
    },
  };

  const selected = content[popup];

  return createPortal(
    <div className="legal-modal-overlay" onClick={() => setPopup(null)}>
      <div className="legal-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="legal-modal-close" onClick={() => setPopup(null)}>
          ×
        </button>

        <h1 className="legal-modal-company">
          Vyomira Tech Solutions Private Limited
        </h1>

        <h2 className="legal-modal-title">{selected.title}</h2>

        <div className="legal-modal-content">
          {selected.body.map((section, idx) => (
            <div key={idx} style={{ marginBottom: "15px" }}>
              <h3
                style={{
                  fontWeight: "700",
                  fontSize: "1.05rem",
                  color: "#1f2937",
                }}
              >
                {section.heading}
              </h3>
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: "1.7",
                  color: "#374151",
                  whiteSpace: "pre-line",
                }}
              >
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
