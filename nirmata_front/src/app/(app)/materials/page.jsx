import styles from "./page.module.css";

import Disclaimer from "@/components/materials/disclaimer";
import MainMaterials from "@/components/materials/main-materials";

export default function Materials() {
  return (
    <section className={`container ${styles.container}`}>
      <MainMaterials />
      <Disclaimer />
    </section>
  );
}
