import styles from "./css/photo-gallery.module.css";

import portrait1 from "@/assets/gallery-images/portrait-1.jpg";
import portrait10 from "@/assets/gallery-images/portrait-10.jpg";
import portrait11 from "@/assets/gallery-images/portrait-11.jpg";
import portrait2 from "@/assets/gallery-images/portrait-2.jpg";
import portrait3 from "@/assets/gallery-images/portrait-3.jpg";
import portrait4 from "@/assets/gallery-images/portrait-4.jpg";
import portrait5 from "@/assets/gallery-images/portrait-5.jpg";
import portrait6 from "@/assets/gallery-images/portrait-6.jpg";
import portrait7 from "@/assets/gallery-images/portrait-7.jpg";
import portrait8 from "@/assets/gallery-images/portrait-8.jpg";
import portrait9, {
  default as portrait12,
  default as portrait14,
  default as portrait15,
} from "@/assets/gallery-images/portrait-9.jpg";

import landscape1 from "@/assets/gallery-images/landscape-1.jpg";
import {
  default as landscape2,
  default as landscape3,
  default as landscape4,
  default as landscape5,
} from "@/assets/gallery-images/landscape-2.jpg";
import Image from "next/image";

const galleryImages = [
  portrait1,
  portrait2,
  portrait3,
  portrait4,
  portrait5,
  portrait6,
  portrait7,
  portrait8,
  portrait9,
  portrait10,
  portrait11,
  landscape1,
  landscape2,
  landscape3,
  landscape4,
  landscape5,
  portrait12,
  portrait15,
  portrait14,
];

export default function PhotoGallery() {
  return (
    <section className={`container ${styles.container}`}>
      <div className="title">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quisquam est veniam quos harum, eum nesciunt itaque consectetur maxime
          vel!
        </p>
      </div>
      <div className={styles.imageGrid}>
        {galleryImages.map((image, i) => (
          <div
            key={i}
            className={`${styles.imageWrapper} ${
              image.width > image.height ? styles.landscape : styles.portrait
            }`}
          >
            <Image
              src={image.src}
              alt={`Gallery image ${i + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
