import Image from "next/image";
import Image01 from "@/../public/sliders/home_1.jpg";
import Image02 from "@/../public/sliders/home_2.jpg";

import styles from "./slider.module.css";

export default function Slider() {
  return (
    <header className={styles.header}>
      <div className={styles.imageWrapper}>
        <Image src={Image02.src} alt="Slider image" fill />
      </div>
    </header>
  );
}
