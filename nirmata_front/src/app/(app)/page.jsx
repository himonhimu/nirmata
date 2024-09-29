import Welcome from "@/components/home/welcome";
import styles from "./page.module.css";
import Image from "next/image";
import MainServices from "@/components/services/main-services";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image src={"/slider.jpg"} alt="Slider image" fill />
        </div>
      </header>{" "}
      <section className="container">
        <MainServices />
      </section>
    </>
  );
}
