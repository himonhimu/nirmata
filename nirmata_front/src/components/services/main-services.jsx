import Link from "next/link";
import styles from "./main-services.module.css";

import { TOTAL_SERVICE_HOME_PAGE } from "@/app/(app)/page";
import ServiceCard from "./service-card";

export default function MainServices({ services }) {
  return (
    <div className={styles.services}>
      <div className="title">
        <h1>Our Services</h1>

        <p>
          At Nirmata, we provide a comprehensive range of professional services
          tailored to meet all your construction and architectural needs. From
          design to execution, our expert team ensures quality and excellence in
          every step of your project.
        </p>
      </div>
      <div className={styles.cards}>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      {TOTAL_SERVICE_HOME_PAGE === services.length && (
        <Link href="/our-services" className={styles.servicesButton}>
          {" "}
          See More
        </Link>
      )}{" "}
    </div>
  );
}
