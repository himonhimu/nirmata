"use client";
import Image from "next/image";
import styles from "./css/slider.module.css";

import { useEffect, useState } from "react";
const images = [
  // { src: "/sliders/home_1.jpg", caption: "Caption One" },
  { src: "/sliders/1.jpg", caption: "Caption One" },
  { src: "/sliders/3.jpg", caption: "Caption Three" },
  { src: "/sliders/4.jpg", caption: "Caption Four" },
  { src: "/sliders/5.jpg", caption: "Caption Five" },
];

export default function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === images.length ? 1 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const showSlides = (n) => {
    if (n > images.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(images.length);
    } else {
      setSlideIndex(n);
    }
  };

  return (
    <div className={styles.slideshowContainer}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${styles.mySlides} ${
            index + 1 === slideIndex ? styles.active : ""
          }`}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={`Slide ${index + 1}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}

      <button
        className={styles.prev}
        onClick={() => showSlides(slideIndex - 1)}
      >
        ❮
      </button>
      <button
        className={styles.next}
        onClick={() => showSlides(slideIndex + 1)}
      >
        ❯
      </button>
    </div>
  );
}
