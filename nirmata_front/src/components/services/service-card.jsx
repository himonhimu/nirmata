import styles from "./service-card.module.css";

export default function ServiceCard({ service }) {
  return (
    <div className={styles.card}>
      {service.icon}
      <h3>{service.title}</h3>
    </div>
  );
}
