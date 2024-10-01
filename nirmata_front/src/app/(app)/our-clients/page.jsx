import styles from "./css/page.module.css";

import ClientReview from "@/components/our-clients/client-reviews";

export default function Home() {
  return (
    <section className={`container ${styles.container}`}>
      <ClientReview />
    </section>
  );
}
