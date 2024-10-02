import styles from "./css/plan-approval.module.css";

const PlanApproval = () => {
  return (
    <section className={`container ${styles.wrapper}`}>
      <div className={"title"}>
        <h1>Plan Approval Services for RDA & Pourashava</h1>
        <p>
          Streamline your construction process with expert plan approval
          assistance for Rajshahi Development Authority (RDA) and Pourashava.
        </p>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>
            Hassle-Free Plan Submission and Approval
          </h2>
          <p className={styles.description}>
            Navigating the complex procedures of plan approval can be
            overwhelming. Our expert team guides you through every step,
            ensuring your project meets all regulatory requirements for a smooth
            approval process. Whether you’re building a residential, commercial,
            or industrial structure, we handle the paperwork, submission, and
            communication with the relevant authorities to get your plan
            approved.
          </p>

          <h2 className={styles.heading}>How We Help:</h2>
          <ul className={styles.list}>
            <li>Consultation on local building codes and regulations</li>
            <li>
              Preparation of necessary documents for RDA/Pourashava approval
            </li>
            <li>Submission of plans to the appropriate authority</li>
            <li>
              Communication with officials to expedite the approval process
            </li>
            <li>Follow-up services until final approval is granted</li>
          </ul>

          <p className={styles.finalNote}>
            With our extensive experience, we ensure a hassle-free plan approval
            process for your construction project. Avoid delays and
            complications with expert support from start to finish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlanApproval;
