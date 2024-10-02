import Link from "next/link";
import styles from "./css/building-construction.module.css";

const BuildingConstruction = () => {
  return (
    <section className={`container ${styles.constructionSection}`}>
      <div className={`title`}>
        <h1>Building Your Vision, Brick by Brick</h1>
        <p>
          From groundbreaking to completion, we bring your architectural dreams
          to life with unmatched precision and dedication.
        </p>
      </div>

      <div className={styles.processWrapper}>
        <h2 className={styles.processTitle}>
          Our Step-by-Step Construction Process
        </h2>

        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepHeading}>Initial Consultation</h3>
            <p className={styles.stepDescription}>
              Our journey starts with understanding your vision. We conduct an
              in-depth consultation to assess your needs, budget, and timeline.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepHeading}>Blueprint & Design</h3>
            <p className={styles.stepDescription}>
              We transform your ideas into actionable blueprints and 3D models,
              ensuring all your requirements are reflected in the final design.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepHeading}>Foundation Laying</h3>
            <p className={styles.stepDescription}>
              After design approval, we begin with the foundation, setting the
              stage for the entire project. Our engineers ensure precise
              measurements and stability.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepHeading}>Structural Development</h3>
            <p className={styles.stepDescription}>
              From framing to roofing, our construction team works to bring the
              structure to life, ensuring durability and adherence to all safety
              standards.
            </p>
          </div>
        </div>

        <div className={styles.step}>
          <div className={styles.stepNumber}>5</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepHeading}>Final Finishes</h3>
            <p className={styles.stepDescription}>
              After the structure is complete, we focus on interior and exterior
              finishing, including painting, flooring, and installations, to
              give the building its final touch.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.quoteSection}>
        <blockquote className={styles.quote}>
          &quot;Every great building begins with a strong foundation and a
          vision for the future. We are here to ensure your construction is
          seamless, safe, and inspiring.&quot;
        </blockquote>
        <cite className={styles.cite}>— Abdullahil Kafi - CEO At Nirmata</cite>
      </div>

      <div className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Ready to Build with Us?</h2>
        <p className={styles.contactText}>
          Let’s turn your construction project into a reality. Reach out to our
          team today for a consultation and a customized project plan.
        </p>
        <Link href={"/contact"} className={styles.contactButton}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default BuildingConstruction;
