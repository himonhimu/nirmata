import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { socialLinks } from "../footer/main-footer";
import { FaEarthAfrica } from "react-icons/fa6";

import Link from "next/link";

import styles from "./css/contact-info.module.css";

export default function ContactInfo() {
  return (
    <aside className={styles.contactInfo}>
      <h1 className={styles.heading}>Contact With US</h1>

      <div className={styles.grid}>
        <span>
          <FaPhoneAlt size={16} />
        </span>
        <h3>Call Us</h3>
        <p>+8801711-430093 , +8801973-646514 (WhatsApp)</p>
      </div>
      <div className={styles.grid}>
        <span>
          <MdLocationPin size={16} />
        </span>
        <h3>Location</h3>
        <p>
          121, Paba Para (Opposite of Rajshahi Krishi Unnayan BankHead office),
          Shah Mukhdum, Sapura, Rajshahi.
        </p>
      </div>

      <div className={styles.grid}>
        <span>
          <FaEarthAfrica size={16} />
        </span>
        <h3>Social links</h3>

        <ul>
          {" "}
          {socialLinks.map(({ href, icon, label }) => (
            <li key={label}>
              <Link href={href} target="_blank">
                <span>{icon}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
