import React from "react";
import styles from "./welcome.module.css"; // Importing the CSS Module

const WelcomeSection = () => {
  return (
    <section className={styles.welcomeSection}>
      {/* Section Title */}
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Welcome to Nirmata</h1>
        <p className={styles.subTitle}>
          Your Trusted Construction Partner in Rajshahi, Bangladesh
        </p>
      </div>

      {/* Introduction Block */}
      <div className={styles.container}>
        <h2 className={styles.introTitle}>Transforming Visions into Reality</h2>
        <p className={styles.introText}>
          With over a decade of experience in the construction industry, we are
          your go-to partner for building consultancy, construction, and
          material supply.
        </p>
        <button className={styles.contactButton}>Contact Us Today</button>
      </div>

      {/* Service Offerings Section */}
      <div className={styles.servicesContainer}>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>🏛️</div>
          <h3 className={styles.serviceTitle}>Architectural Design</h3>
          <p className={styles.serviceDescription}>
            Unique and functional designs tailored to your specific
            requirements.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>🏗️</div>
          <h3 className={styles.serviceTitle}>Construction</h3>
          <p className={styles.serviceDescription}>
            Comprehensive services from planning to execution.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <div className={styles.icon}>🧱</div>
          <h3 className={styles.serviceTitle}>Materials Supply</h3>
          <p className={styles.serviceDescription}>
            High-quality construction materials at competitive prices.
          </p>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className={styles.additionalServicesContainer}>
        <div className={styles.additionalService}>
          <div className={styles.icon}>🖼️</div>
          <h4 className={styles.additionalServiceTitle}>3D Visualization</h4>
          <p className={styles.additionalServiceDescription}>
            Visualize your project with cutting-edge 3D rendering.
          </p>
        </div>
        <div className={styles.additionalService}>
          <div className={styles.icon}>💰</div>
          <h4 className={styles.additionalServiceTitle}>Cost Estimation</h4>
          <p className={styles.additionalServiceDescription}>
            Accurate and transparent cost estimates.
          </p>
        </div>
        <div className={styles.additionalService}>
          <div className={styles.icon}>📅</div>
          <h4 className={styles.additionalServiceTitle}>Project Management</h4>
          <p className={styles.additionalServiceDescription}>
            Smooth execution and timely delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
