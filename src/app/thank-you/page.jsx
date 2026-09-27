"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

const messages = [
  "Thank you for choosing Indian Saloon! We look forward to welcoming you.",
  "Your beauty journey starts here. Thank you for visiting Indian Saloon!",
  "You deserve a little luxury. Thanks for connecting with Indian Saloon!",
  "Thank you for reaching out. We can't wait to see you shine!",
  "A little self-care goes a long way. Thank you for choosing us!",
];

export default function ThankYouPage() {
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  }, []);

  return (
    <main className="thankyou-page">
      <div className="thankyou-card">
        <div className="thankyou-icon">
          <CheckCircle size={54} />
        </div>

        <span className="thankyou-label">
          <Sparkles size={16} /> INDIAN SALOON
        </span>

        <h1>Thank You!</h1>

        <p className="thankyou-message">{message}</p>

        <p className="thankyou-subtitle">
          Your visit means a lot to us. We hope to see you soon!
        </p>

        <Link href="/" className="thankyou-button">
          Back to Home
        </Link>
      </div>
    </main>
  );
}