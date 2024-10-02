import styles from "./css/digital-survey.module.css";

export default function DigitalSurvey() {
  return (
    <section className={`container ${styles.container}`}>
      <div className={"title"}>
        <h1>Comprehensive Digital Survey Services</h1>
        <p>
          Accurate data for precision planning and execution of your
          construction project.
        </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>
            Why Choose Our Digital Survey?
          </h2>
          <p className={styles.description}>
            A digital survey is the foundation of any construction project,
            providing precise measurements and data to ensure successful project
            planning and execution. Our state-of-the-art technology and
            experienced surveyors guarantee the highest level of accuracy for
            your project.
          </p>

          <div className={styles.listContainer}>
            <h3 className={styles.benefitsTitle}>Key Benefits:</h3>
            <ul className={styles.benefitsList}>
              <li>Laser-guided accuracy for exact measurements</li>
              <li>3D modeling and topographical mapping</li>
              <li>Efficient and timely delivery of survey reports</li>
              <li>Highly experienced and certified surveyors</li>
              <li>GPS-enabled tools for precise geographical data</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
