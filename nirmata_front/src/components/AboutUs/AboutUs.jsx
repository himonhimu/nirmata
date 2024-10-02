import React from "react";
import TeamIcon from "./images/team-icon.webp";
import Innovation from "./images/lightbulb-icon.webp";
import Blueprint from "./images/tools-icon.webp";
import Materials from "./images/bricks-icon.webp";
import Relationship from "./images/handshake-icon.webp";
import Excellence from "./images/trophy-icon.webp";
import Image from "next/image";
import styles from "./aboutus.module.css";

const aboutData = [
  {
    img: TeamIcon.src,
    alt: "Team Icon",
    h2: "Who We Are",
    p: "At Nirmata, our journey began with a simple but profound belief: that every building project, no matter how large or small, deserves meticulous attention, expertise, and dedication. Over the years, we have grown from a small team of passionate professionals into a leading player in the industry. This growth is a testament to our unwavering commitment to excellence and our ability to adapt to the ever-evolving demands of the construction sector.",
  },
  {
    img: Innovation.src,
    alt: "Innovation Icon",
    h2: "Our Core Philosophy",
    p: "Our core philosophy revolves around a deep understanding of the unique needs of each project and client. We recognize that construction is more than just putting together materials; it's about crafting environments where people live, work, and thrive. This perspective drives everything we do, from the initial consultation to the final handover. Our team of experts combines years of experience with innovative solutions to ensure that every project not only meets but exceeds expectations.",
  },
  {
    img: Blueprint.src,
    alt: "Blueprint Icon",
    h2: "Our Services",
    p: "As a construction and building consultancy firm, we pride ourselves on our comprehensive approach. We offer a wide range of services, including project management, design consultation, and feasibility studies. Our goal is to provide clear guidance and support at every stage of the construction process, ensuring that projects run smoothly and efficiently. Whether you're embarking on a residential renovation, a commercial development, or a large-scale infrastructure project, our team is here to provide the expertise and insights you need.",
  },
  {
    img: Materials.src,
    alt: "Materials Icon",
    h2: "Building Materials Supply",
    p: "In addition to our consultancy services, we are also a trusted supplier of high-quality building materials. We understand that the right materials are crucial to the success of any construction project. That's why we partner with leading manufacturers and suppliers to offer a diverse selection of products that meet the highest standards of quality and durability. Our knowledgeable staff is always available to help you choose the best materials for your specific needs, ensuring that your project stands the test of time.",
  },
  {
    img: Relationship.src,
    alt: "Client Relationship Icon",
    h2: "Client Relationships",
    p: "One of the cornerstones of our success is our commitment to building strong, lasting relationships with our clients. We believe that open communication and transparency are key to a successful partnership. From the very first meeting, we work closely with you to understand your vision and goals, and we keep you informed throughout the project. Our dedication to client satisfaction is evident in the long-term relationships we've built and the repeat business we enjoy.",
  },
  {
    img: Excellence.src,
    alt: "Excellence Icon",
    h2: "Commitment to Excellence",
    p: "At Nirmata, we are driven by a passion for excellence and a commitment to delivering superior results. Our team is composed of skilled professionals who are not only experts in their fields but also enthusiastic about their work. This enthusiasm, combined with our extensive experience and a client-focused approach, ensures that we consistently deliver projects that are not only successful but also truly remarkable.",
  },
];

export default function AboutUs() {
  return (
    <section className={"container"}>
      <div className={styles.wrapper}>
        <div className={"title"}>
          <h1>Welcome to Nirmata</h1>
          <p>
            Where expertise in construction, building consultancy, and materials
            supply converge to create exceptional spaces and structures.
          </p>
        </div>

        {aboutData.map((item, index) => {
          return (
            <div key={index} className={styles.container}>
              <Image src={item.img} alt={item.alt} height={100} width={100} />
              <div className={styles.text_content}>
                <h2>{item.h2}</h2>
                <p>{item.p}</p>
              </div>
            </div>
          );
        })}

        <div className={styles.final_section}>
          <p>
            Thank you for considering Nirmata for your construction and
            consultancy needs. We look forward to the opportunity to work with
            you and bring your vision to life. Together, we can build something
            extraordinary.
          </p>
        </div>
      </div>
    </section>
  );
}
