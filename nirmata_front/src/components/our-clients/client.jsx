import ClientReview from "./client-reviews";
import styles from "./css/client.module.css";

export default function Client() {
  return (
    <div className={styles.client}>
      <div className="title">
        <h1>Who We Work With</h1>
        <p>
          {" "}
          We proudly serve diverse clients, delivering tailored solutions that
          drive success.
        </p>
      </div>

      <ClientReview />
    </div>
  );
}
