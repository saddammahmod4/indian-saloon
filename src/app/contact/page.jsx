"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function ContactPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">LET'S CONNECT</span>
          <h1>We would love to hear from you.</h1>
          <p>
            Questions, appointments, or simply saying hello —
            we are here for you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2 className="section-title">
              Your next visit starts here.
            </h2>

            <p className="muted-text">
              Reach out to us for appointments, service
              inquiries, or any questions about your visit.
            </p>

            <div className="contact-item">
              <MapPin size={23} />
              <div>
                <h3>Visit Our Salon</h3>
                <p>90 Feet, Dharavi, Mumbai, India</p>
              </div>
            </div>

            <div className="contact-item">
              <Phone size={23} />
              <div>
                <h3>Call Us</h3>
                <a href="tel:+919876543210">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Mail size={23} />
              <div>
                <h3>Email Us</h3>
                <a href="mailto:indiansaloon@gmail.com">
                  indiansaloon@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <Clock size={23} />
              <div>
                <h3>Opening Hours</h3>
                <p>Monday – Saturday: 10 AM – 8 PM</p>
                <p>Sunday: 11 AM – 6 PM</p>
              </div>
            </div>

            <Link href="/" className="text-link">
              Back to Home <ArrowRight size={17} />
            </Link>
          </div>

          <div className="contact-form-card">
            <span className="eyebrow">SEND AN INQUIRY</span>
            <h2>Let's plan your visit.</h2>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option>Haircut & Styling</option>
                  <option>Hair Color</option>
                  <option>Beauty Treatment</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your preferred date or service..."
                  required
                />
              </div>

              <button
                type="submit"
                className="button button-dark form-submit"
              >
                Send Inquiry <ArrowRight size={18} />
              </button>

              <p className="form-note">
                Thank you for your interest in Indian Saloon.
                We look forward to welcoming you!
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}