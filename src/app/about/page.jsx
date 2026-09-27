import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Sparkles, Award } from "lucide-react";

export const metadata = {
  title: "About Us",
  description: "Discover the story, team, and values of INDIAN SALOON Salon.",
};

const values = [
  {
    icon: Heart,
    title: "Personal Care",
    description: "We listen to your needs and tailor every experience to you.",
  },
  {
    icon: Sparkles,
    title: "Creative Styling",
    description: "We combine modern trends with your individual personality.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "We focus on thoughtful service, attention to detail, and comfort.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">OUR STORY</span>
          <h1>Beauty with a personal touch.</h1>
          <p>
            We are here to help you feel confident, beautiful, and completely
            yourself.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container about-grid">
          <div className="about-image">
            <Image
              src="/assets/about-salon.jpg"
              alt="About our salon"
              width={1000}
              height={700}
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">WHO WE ARE</span>

            <h2 className="section-title">A salon created around you.</h2>

            <p className="muted-text">
              INDIAN SALOON Salon was created with a simple idea: beauty should feel
              personal, welcoming, and inspiring.
            </p>

            <p className="muted-text">
              Our team brings together creativity, professional techniques, and
              a genuine passion for helping people discover a look that feels
              right for them.
            </p>

            <p className="muted-text">
              Whether you are looking for a fresh haircut, a new color, or a
              moment of self-care, we want every visit to leave you feeling
              refreshed.
            </p>

            <Link href="/contact" className="button button-dark">
              Visit Our Salon <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="values-section section-padding">
        <div className="container">
          <div className="center-heading">
            <span className="eyebrow">WHAT MATTERS TO US</span>
            <h2 className="section-title">Our values.</h2>
          </div>

          <div className="service-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article className="service-card" key={value.title}>
                  <Icon size={32} strokeWidth={1.4} />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="team-section section-padding">
        <div className="container team-grid">
          <div>
            <span className="eyebrow">OUR PEOPLE</span>
            <h2 className="section-title">Meet the hands behind your style.</h2>
            <p className="muted-text">
              Our stylists bring creativity, attention to detail, and a personal
              approach to every appointment.
            </p>
            <Link href="/contact" className="text-link">
              Meet Us in Person <ArrowRight size={17} />
            </Link>
          </div>

          <div className="team-image">
            <Image
              src="/assets/about-salon.jpg"
              alt="About our salon"
              width={1000}
              height={700}
            />
          </div>
        </div>
      </section>

      <section className="booking-banner">
        <div className="container booking-content">
          <span className="eyebrow">WE WOULD LOVE TO MEET YOU</span>
          <h2>Your next favorite salon experience awaits.</h2>
          <Link href="/contact" className="button button-light">
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
