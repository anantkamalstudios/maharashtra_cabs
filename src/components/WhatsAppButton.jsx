import { Link } from "react-router-dom";

export default function WhatsAppButton() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 9999,
      }}
    >
      <Link
        to="https://wa.me/9370098337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/whatsapp-icon.gif"
          alt="Chat on WhatsApp"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
          }}
        />
      </Link>
    </div>
  );
}
