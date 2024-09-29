import styles from "./service-card.module.css";

export default function ServiceCard({ service }) {
  console.log(service.icon);
  return (
    <div className={styles.card}>
      {service.icon}
      <h3>{service.title}</h3>
    </div>
  );
}
