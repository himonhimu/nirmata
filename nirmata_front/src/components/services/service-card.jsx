import Link from "next/link";
import styles from "./service-card.module.css";

export default function ServiceCard({ service }) {
  return (
    <Link href={`/our-services/${service.link}`} className={styles.card}>
      {service.icon}
      <h3>{service.label}</h3>
    </Link>
  );
}
