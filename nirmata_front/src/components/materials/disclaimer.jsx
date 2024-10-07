import styles from "./css/disclaimer.module.css";

export default function Disclaimer() {
  return (
    <section className={styles.disclaimer}>
      <h1>Materials Disclaimer</h1>
      <em>
        {" "}
        The materials listed on this page are for informational purposes only.
        While we at Nirmata Building Construction Company make every effort to
        provide accurate and up-to-date information, we cannot guarantee the
        completeness or suitability of these materials for any specific project.
        Product specifications, availability, and prices may change without
        notice. We recommend verifying details with our team before making any
        purchasing decisions. Nirmata Building Construction Company is not
        responsible for any damages or losses resulting from the use of the
        information provided on this page. If you have any questions or need
        more information about our materials, please feel free to contact us.
      </em>
    </section>
  );
}
