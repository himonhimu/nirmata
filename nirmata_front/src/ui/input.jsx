import styles from "./input.module.css";

export default function Input({ label, ...rest }) {
  return (
    <label className={styles.input}>
      <span>{label}</span>
      <input {...rest} />
    </label>
  );
}
