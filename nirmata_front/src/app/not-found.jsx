import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={`container ${styles.notFound}`}>
      <h1>Page Under Construction 🚧</h1>
      <p>
        Looks like the page you&apos;re looking for isn&apos;t ready yet or
        doesn&apos;t exist. We&apos;re working hard to build something great! In
        the meantime, feel free to explore our other sections or head back to
        the <Link href={"/"}>homepage</Link>.
      </p>
    </section>
  );
}
