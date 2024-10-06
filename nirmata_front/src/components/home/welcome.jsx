import Link from "next/link";
import styles from "./welcome.module.css";

export default function Welcome() {
  return (
    <div className={styles.container}>
      <section className={styles.introSection}>
        <h1 className={styles.title}>Welcome to Nirmata</h1>
        <p className={styles.introText}>
          With over a decade of experience in the construction industry, Nirmata
          is your trusted partner for building consultancy, construction, and
          materials supply. Located in Rajshahi, Bangladesh, we are dedicated to
          turning your vision into reality with precision and commitment.
        </p>
      </section>

      <section className={styles.missionSection}>
        <h2 className={styles.sectionTitle}>Our Commitment to Excellence</h2>
        <p className={styles.missionText}>
          At Nirmata, we take pride in delivering high-quality services that
          guarantee the success of your project. Whether it’s architectural
          design, construction, or materials supply, our attention to detail and
          innovative approach ensures a seamless process from start to finish.
        </p>
        <p className={styles.missionText}>
          Our team of seasoned professionals is dedicated to providing services
          with a client-first mindset. We back our work with a quality
          guarantee, ensuring that every result not only meets but exceeds your
          expectations.
        </p>
      </section>

      <section className={styles.servicesSection}>
        <h2 className={styles.sectionTitle}>What We Offer</h2>
        <ul className={styles.servicesList}>
          <li className={styles.serviceItem}>
            <strong>Architectural Design:</strong> Unique and functional designs
            tailored to your specific needs.
          </li>
          <li className={styles.serviceItem}>
            <strong>Construction:</strong> Comprehensive services from planning
            to execution.
          </li>
          <li className={styles.serviceItem}>
            <strong>Materials Supply:</strong> A wide range of top-quality
            construction materials at competitive prices.
          </li>
        </ul>
      </section>

      <section className={styles.contactSection}>
        <h2 className={styles.sectionTitle}>Get in Touch</h2>
        <p className={styles.contactText}>
          Ready to start your building project?{" "}
          <Link href={"/contact"} className={styles.contactUs}>
            {" "}
            Contact us{" "}
          </Link>{" "}
          today to discuss how Nirmata can bring your vision to life. Our team
          is here to provide expert guidance and support every step of the way.
        </p>
      </section>
    </div>
  );
}
