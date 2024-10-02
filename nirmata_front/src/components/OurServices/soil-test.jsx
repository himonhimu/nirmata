import Link from "next/link";
import styles from "./css/soil-test.module.css";

export default function SoilTest() {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>
          Comprehensive Soil Testing for Every Build
        </h1>
        <p className={styles.bannerSubtitle}>
          Accurate soil testing to ensure the foundation of your project is
          built on solid ground.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>What is Soil Testing?</h2>
          <p className={styles.infoText}>
            Soil testing provides vital data about the composition, moisture,
            and stability of the soil. This helps determine if the land is
            suitable for construction and guides decisions on the type of
            foundation needed.
          </p>
        </div>

        <div className={styles.steps}>
          <h2 className={styles.stepsTitle}>Our Soil Testing Steps</h2>
          <ul className={styles.stepsList}>
            <li className={styles.stepItem}>
              <strong>1. Site Evaluation:</strong> We inspect the location and
              collect multiple samples.
            </li>
            <li className={styles.stepItem}>
              <strong>2. Lab Analysis:</strong> Testing for soil density,
              moisture, and stability.
            </li>
            <li className={styles.stepItem}>
              <strong>3. Report Generation:</strong> A detailed report with
              recommendations for construction.
            </li>
          </ul>
        </div>

        <div className={styles.testTypes}>
          <h2 className={styles.testTypesTitle}>Types of Soil Tests</h2>
          <ul className={styles.testTypesList}>
            <li className={styles.testTypesItem}>Compaction Testing</li>
            <li className={styles.testTypesItem}>Soil Bearing Capacity</li>
            <li className={styles.testTypesItem}>Soil Moisture Content</li>
            <li className={styles.testTypesItem}>Soil Permeability Testing</li>
          </ul>
        </div>
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Need Professional Soil Testing?</h2>
        <p className={styles.contactText}>
          Contact us for a complete soil analysis tailored to your project.
        </p>
        <Link className={styles.contactButton} href={"/contact"}>
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
