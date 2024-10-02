"use client";

import styles from "./css/contact.module.css";
import ContactForm from "./contact-form";
import ContactInfo from "./contact-info";

export default function Contact() {
  async function handleSubmit(eve) {
    eve.preventDefault();
    const formData = new FormData(eve.target);

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const phoneNumber = formData.get("phoneNumber");
    const message = formData.get("message");

    console.log({ fullName, email, phoneNumber, message });

    if (
      !fullName.trim() ||
      !email.trim() ||
      !phoneNumber.trim() ||
      !message.trim()
    ) {
      // Handle this error
      return "Input Is in valid";
    }

    const userMessage = {
      fullName: fullName.trim(),
      email: email.trim(),
      phoneNumber: phoneNumber.trim(),
      message: message.trim(),
    };

    console.log(userMessage);
  }

  return (
    <section className={`container ${styles.contact}`}>
      <ContactInfo />
      <ContactForm onSubmit={handleSubmit} />
    </section>
  );
}
