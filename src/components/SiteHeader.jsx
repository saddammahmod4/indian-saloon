import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link href="/" className="brand" aria-label="Indian Saloon Home">
          <Image
            src="/assets/header-logo.jpg"
            alt="Indian Saloon Logo"
            width={180}
            height={60}
            priority
            className="header-logo"
          />
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          Book Appointment <span>↗</span>
        </Link>
      </div>
    </header>
  );
}