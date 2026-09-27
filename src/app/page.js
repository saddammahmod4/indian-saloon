import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Scissors, Sparkles, Palette, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Precision Haircuts",
    description:
      "Personalized cuts designed to match your style and personality.",
    price: "From ₹499",
  },
  {
    icon: Palette,
    title: "Hair Color & Styling",
    description: "Beautiful color transformations and professional styling.",
    price: "From ₹1,499",
  },
  {
    icon: Sparkles,
    title: "Beauty Treatments",
    description:
      "Refresh your look with our relaxing beauty and care treatments.",
    price: "From ₹799",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <picture className="hero-picture">
          <source
            media="(max-width: 767px)"
            srcSet="/assets/salon-mobile.jpg"
          />

          <img
            src="/assets/salon-desktop.jpg"
            alt="Indian Saloon beauty and hair styling"
            className="hero-image"
          />
        </picture>

        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-label">BEAUTY • STYLE • CONFIDENCE</span>

          <h1>
            Your Beauty,
            <br />
            Our Passion.
          </h1>

          <p>
            Experience the perfect blend of modern style and timeless beauty at
            Indian Saloon.
          </p>

          <Link href="/contact" className="hero-button">
            Book Your Experience
          </Link>
        </div>
      </section>

      <section className="intro-section section-padding">
        <div className="container intro-grid">
          <span className="eyebrow">WELCOME TO INDIAN SALOON</span>

          <div>
            <h2 className="section-title">
              Beauty is not about changing who you are. It&apos;s about
              celebrating it.
            </h2>

            <p className="muted-text">
              At INDIAN SALOON, we believe every person deserves a salon
              experience that feels special. Our stylists combine creativity,
              care, and expertise to help you feel confident.
            </p>

            <Link href="/about" className="text-link">
              More About Us <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section section-padding">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">WHAT WE DO</span>
              <h2 className="section-title">Services made for you.</h2>
            </div>

            <Link href="/contact" className="text-link">
              Book Your Visit <ArrowRight size={17} />
            </Link>
          </div>

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="service-card" key={service.title}>
                  <span className="service-number">0{index + 1}</span>

                  <Icon size={32} strokeWidth={1.4} />

                  <h3>{service.title}</h3>
                  <p>{service.description}</p>

                  <div className="service-bottom">
                    <span>{service.price}</span>
                    <Link href="/contact" aria-label={`Book ${service.title}`}>
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="story-section section-padding">
        <div className="container story-grid">
          <div className="story-image">
            <Image
              src="/assets/salon-interior.jpg"
              alt="Salon interior"
              width={1000}
              height={700}
            />
          </div>

          <div className="story-content">
            <span className="eyebrow">MORE THAN A SALON</span>

            <h2 className="section-title">
              A little time for yourself. A whole new feeling.
            </h2>

            <p className="muted-text">
              From the moment you walk in, we want you to feel relaxed,
              inspired, and completely yourself. Every detail is designed around
              your comfort.
            </p>

            <div className="story-feature">
              <Heart size={22} />
              <div>
                <h3>Personalized Care</h3>
                <p>Every service begins with understanding you.</p>
              </div>
            </div>

            <Link href="/about" className="button button-dark">
              Discover Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="booking-banner">
        <div className="container booking-content">
          <span className="eyebrow">YOUR NEXT LOOK STARTS HERE</span>
          <h2>Ready for a little transformation?</h2>
          <p>Come in for the style you love and the experience you deserve.</p>
          <Link href="/contact" className="button button-light">
            Book Your Appointment <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
