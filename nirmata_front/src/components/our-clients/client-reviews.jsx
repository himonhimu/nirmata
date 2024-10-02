"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./css/client-reviews.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const clientReviews = [
  {
    name: "Mobin",
    imageUrl: "/user.jpg",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus fugiat tenetur provident repudiandae rerum.",
  },
  {
    name: "Himon",
    imageUrl: "/user.jpg",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus fugiat tenetur provident repudiandae rerum.",
  },
  {
    name: "Mihad",
    imageUrl: "/user.jpg",
    rating: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus fugiat tenetur provident repudiandae rerum.",
  },
  {
    name: "Zisan",
    imageUrl: "/user.jpg",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem necessitatibus fugiat tenetur provident repudiandae rerum.",
  },
];

const SLIDER_TIME = 3000;

export default function ClientReview() {
  const sliderRef = useRef();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const allClients = document.querySelectorAll(`.${styles.client}`);
    allClients.forEach(
      (client, i) =>
        (client.style.transform = `translateX(${100 * (i - currentSlide)}%)`)
    );

    sliderRef.current = setInterval(() => {
      if (currentSlide === allClients.length - 1) {
        return setCurrentSlide(0);
      }

      return setCurrentSlide(currentSlide + 1);
    }, SLIDER_TIME);

    if (sliderRef.current) return () => clearInterval(sliderRef.current);
  }, [currentSlide]);

  function handleNext() {
    if (currentSlide === clientReviews.length - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }

    if (sliderRef.current) clearInterval(sliderRef.current);
  }

  function handlePrev() {
    if (currentSlide === 0) {
      setCurrentSlide(clientReviews.length - 1);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }

    if (sliderRef.current) clearInterval(sliderRef.current);
  }

  return (
    <section className={styles.container}>
      <button className={styles.navBtn} onClick={handlePrev}>
        &larr;
      </button>
      <ul className={styles.clients}>
        {clientReviews.map(({ imageUrl, name, rating, description }, i) => (
          <li
            key={i}
            className={styles.client}
            style={{ transform: `translateX(${100 * i}%)` }}
          >
            <div>
              <div className={styles.imageWrapper}>
                <Image src={imageUrl} alt={name} fill />
              </div>

              <h3 className={styles.name}>{name}</h3>

              <div className={styles.ratings}>
                {Array.apply(null, Array(rating)).map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>

              <em>{description}</em>
            </div>
          </li>
        ))}
      </ul>
      <button className={styles.navBtn} onClick={handleNext}>
        &rarr;
      </button>
    </section>
  );
}
