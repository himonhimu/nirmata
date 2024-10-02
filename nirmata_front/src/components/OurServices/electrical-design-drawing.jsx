import Link from "next/link";
import styles from "./css/electrical-design-drawing.module.css";

export default function ElectricalDesignDrawing() {
  return (
    <section className={`${styles.container} container`}>
      <div className={"title"}>
        <h1>Professional Electrical Design Drawings</h1>
        <p>Powering Your Construction Projects with Precision and Safety</p>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          Our electrical design services offer top-quality technical drawings
          tailored to meet the needs of both small-scale and large-scale
          construction projects. From homes to industrial facilities, we ensure
          each system is carefully designed to optimize efficiency, comply with
          regulatory standards, and ensure maximum safety.
        </p>

        <div className={styles.featuresSection}>
          <h2 className={styles.featuresTitle}>
            Why Choose Our Electrical Design Services?
          </h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Customized Solutions</h3>
              <p className={styles.featureDescription}>
                Every project is unique, and so are our electrical designs. We
                craft custom solutions based on your specific project
                requirements.
              </p>
            </div>

            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Compliance with Standards</h3>
              <p className={styles.featureDescription}>
                We strictly adhere to international electrical standards to
                ensure safety and longevity in every design we deliver.
              </p>
            </div>

            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Cost Efficiency</h3>
              <p className={styles.featureDescription}>
                Our designs focus on reducing material wastage, optimizing
                energy consumption, and keeping costs manageable without
                sacrificing quality.
              </p>
            </div>

            <div className={styles.featureItem}>
              <h3 className={styles.featureTitle}>Expert Support</h3>
              <p className={styles.featureDescription}>
                Our team of experienced electrical engineers is always available
                for consultation and support throughout the construction
                process.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            Ready to power your project?{" "}
            <Link href={"/contact"} className={styles.contact}>
              Contact us
            </Link>{" "}
            today for a consultation.
          </p>
        </div>
      </div>
    </section>
  );
}
