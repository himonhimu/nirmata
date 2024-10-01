import Link from "next/link";
import styles from "./css/architectural-design-drawing.module.css";

export default function ArchitecturalDesignDrawing() {
  return (
    <section className="container">
      <div className={styles.container}>
        <header className={"title"}>
          <h1>Architectural Design Drawing</h1>
          <p>
            Professional and detailed architectural drawings for your
            construction projects.
          </p>
        </header>

        <section className={styles.services}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <ul className={styles.list}>
            <li>
              Custom building design for residential and commercial projects
            </li>
            <li>Blueprints and 3D modeling</li>
            <li>Planning and regulatory approvals</li>
            <li>Interior and exterior design consultation</li>
          </ul>
        </section>

        <section className={styles.whyChooseUs}>
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <p className={styles.paragraph}>
            Our experienced architects and designers work closely with clients
            to create detailed, precise, and high-quality design drawings that
            align with your vision and needs.
          </p>
          <ul className={styles.list}>
            <li>Expert team with years of experience</li>
            <li>Attention to detail in every design</li>
            <li>On-time delivery and compliance with local building codes</li>
          </ul>
        </section>

        <section className={styles.contact}>
          <h2 className={styles.sectionTitle}>Contact Us</h2>
          <p className={styles.paragraph}>
            If you&apos;re looking for professional architectural design
            drawings, reach out to us today!
          </p>
          <Link href="/contact" className={styles.contactButton}>
            Get in Touch
          </Link>
        </section>
      </div>
    </section>
  );
}
