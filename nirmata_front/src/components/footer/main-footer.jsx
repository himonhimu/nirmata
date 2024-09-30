import Image from "next/image";
import styles from "./main-footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import { services } from "../services/main-services";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=61563176709784",
    label: "Facebook",
    icon: <FaFacebookF />,
  },
  {
    href: "https://www.instagram.com/nirmatabd",
    label: "Instagram",
    icon: <CiInstagram />,
  },
  {
    href: "https://wa.me/+8801973646514",
    label: "Whatsapp",
    icon: <FaWhatsapp />,
  },
];

export const navLinks = [
  {
    link: "/",
    label: "Home",
  },

  {
    link: "/our-services",
    label: "Our Services",
    submenu: services,
  },
  {
    link: "/materials",
    label: "Materials",
  },
  {
    link: "/our-clients",
    label: "Our Clients",
  },
  {
    link: "/media",
    label: "Media",
  },
  {
    link: "/contact",
    label: "Contact",
  },
  {
    link: "/about-us",
    label: "About Us",
  },
];

export default function MainFooter() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`${styles.card} ${styles.logo}`}>
          <Link href={"/"} className={styles.imageWrapper}>
            <Image
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src={"/nirmata_logo.png"}
              alt="Nirmata Logo"
              fill
            />
          </Link>

          <ul className={styles.socialLinks}>
            {socialLinks.map(({ href, icon, label }) => (
              <li key={label}>
                <Link href={href} target="_blank">
                  <span>{icon}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.card}>
          <h1>Useful Links</h1>

          <ul className={styles.usefulLinks}>
            {navLinks.map(({ label, link }) => (
              <li key={label}>
                <Link href={link}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={`${styles.card} ${styles.location}`}>
          <h1>Location</h1>
          <address>
            121, Paba Para (Opposite of Rajshahi Krishi Unnayan BankHead office)
            <br />
            Shah Mukhdum, Sapura
            <br />
            Rajshahi, Bangladesh
          </address>
        </div>
      </div>
    </footer>
  );
}
