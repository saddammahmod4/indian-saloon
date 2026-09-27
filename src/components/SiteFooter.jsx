import Link from "next/link";
import Image from "next/image";
import { Camera, Scissors } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="brand footer-brand">
            <Image
              src="/assets/footer-logo.jpg"
              alt="Indian Saloon Logo"
              width={180}
              height={60}
              priority
            />
          </Link>
        </div>

        <div>
          <h3>Explore</h3>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </div>

        <div>
          <h3>Visit Us</h3>
          <p>123 Style Street, Your City</p>
          <p>Mon–Sat · 10 AM – 8 PM</p>
          <a href="tel:+919876543210">+91 98765 43210</a>
        </div>

        <div>
          <h3>Follow Us</h3>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <Camera size={23} />
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} INDIAN SALOON.</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
