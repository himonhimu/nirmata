import styles from "./css/estimate-cost.module.css";

const EstimateCost = () => {
  return (
    <section className={`container ${styles.container}`}>
      <div className={"title"}>
        <h1>Accurate Cost Estimation for Your Construction Project</h1>
        <p>Get a clear breakdown of expenses before starting your project.</p>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          Our cost estimation service helps you plan and budget for your
          construction project with precision. From material costs to labor
          expenses, we provide detailed estimates that ensure there are no
          surprises along the way. Whether you’re building a new home,
          renovating an office space, or starting a commercial project, we have
          the tools and expertise to give you a transparent breakdown.
        </p>

        <div className={styles.estimationDetails}>
          <h2 className={styles.subtitle}>What’s Included in Your Estimate?</h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <h3 className={styles.detailTitle}>Material Costs</h3>
              <p className={styles.detailDescription}>
                A detailed breakdown of materials required for the project,
                including type, quality, and estimated quantity.
              </p>
            </div>

            <div className={styles.detailItem}>
              <h3 className={styles.detailTitle}>Labor Expenses</h3>
              <p className={styles.detailDescription}>
                We calculate labor costs based on project scope, local rates,
                and the expertise required for each phase.
              </p>
            </div>

            <div className={styles.detailItem}>
              <h3 className={styles.detailTitle}>Timeframe</h3>
              <p className={styles.detailDescription}>
                An estimated project timeline with key milestones to help you
                stay on track and within budget.
              </p>
            </div>

            <div className={styles.detailItem}>
              <h3 className={styles.detailTitle}>Contingency Planning</h3>
              <p className={styles.detailDescription}>
                We build in a contingency plan to account for unexpected costs
                and ensure financial stability throughout your project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateCost;
