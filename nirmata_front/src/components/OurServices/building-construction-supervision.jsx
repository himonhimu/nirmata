import Link from "next/link";
import styles from "./css/building-construction-supervision.module.css";

export default function BuildingConstructionSupervision() {
  return (
    <section className={`container ${styles.supervisionSection}`}>
      <div className={"title"}>
        <h1>Professional Building Construction Supervision</h1>
        <p>
          We ensure the highest standards of safety and quality control
          throughout every phase of construction. Trust our expert supervisors
          to manage your project with precision.
        </p>
      </div>

      <div className={styles.featuresProcessGrid}>
        <div className={styles.featureItem}>
          <h2 className={styles.featureTitle}>On-Site Monitoring</h2>
          <p className={styles.featureDescription}>
            Our supervisors are present on-site to ensure that all construction
            activities follow the design plans and safety regulations. We
            provide daily reports to keep you updated on progress.
          </p>
        </div>

        <div className={styles.featureItem}>
          <h2 className={styles.featureTitle}>Quality Assurance</h2>
          <p className={styles.featureDescription}>
            We maintain the highest quality standards by inspecting materials,
            workmanship, and compliance with building codes. Our supervision
            helps you avoid costly rework and delays.
          </p>
        </div>

        <div className={styles.featureItem}>
          <h2 className={styles.featureTitle}>Safety First Approach</h2>
          <p className={styles.featureDescription}>
            Ensuring safety is a priority in every construction project. We
            monitor safety protocols, inspect protective equipment, and ensure
            compliance with all local safety regulations.
          </p>
        </div>
      </div>

      <div className={styles.processSection}>
        <h2 className={styles.processTitle}>Our Supervision Process</h2>
        <div className={styles.featuresProcessGrid}>
          <div className={styles.processStep}>
            <h3 className={styles.processStepTitle}>1. Initial Assessment</h3>
            <p className={styles.processStepDescription}>
              We start by conducting a thorough review of your building plans,
              site conditions, and construction requirements.
            </p>
          </div>
          <div className={styles.processStep}>
            <h3 className={styles.processStepTitle}>2. Daily Inspections</h3>
            <p className={styles.processStepDescription}>
              Our team visits the site daily, overseeing each stage of
              construction, from foundation to finishing, ensuring quality at
              every step.
            </p>
          </div>
          <div className={styles.processStep}>
            <h3 className={styles.processStepTitle}>
              3. Final Review & Handover
            </h3>
            <p className={styles.processStepDescription}>
              Before project completion, we conduct a final inspection to ensure
              everything meets the agreed-upon standards, delivering a flawless
              building.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>
          Need Reliable Construction Supervision?
        </h2>
        <p className={styles.contactDescription}>
          Get in touch with us today and let our experienced supervisors handle
          your project with the care and expertise it deserves.
        </p>
        <Link className={styles.contactButton} href={"/contact"}>
          Contact Us
        </Link>
      </div>
    </section>
  );
}
