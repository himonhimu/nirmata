"use client";

import { navLinks } from "@/components/footer/main-footer";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleActiveMenu() {
    setActiveMenu((prev) => !prev);
  }

  return (
    <nav className={`container`}>
      <div className={styles.nav}>
        <Link href={"/"}>
          <Image src={"/logo.jpg"} alt="Nirmata Logo" width={50} height={50} />
        </Link>

        <ul
          className={`${styles.navList} ${
            activeMenu ? styles.navListActive : ""
          }`}
        >
          {navLinks.map(({ label, link: menuLink, submenu }) => (
            <li key={menuLink} className={styles.maniMenuList}>
              {submenu && (
                <ul className={styles.submenu}>
                  {submenu.map(({ label, link }) => (
                    <li key={link}>
                      <Link href={`${menuLink}/${link}`}>{label}</Link>
                    </li>
                  ))}
                </ul>
              )}

              {submenu ? (
                <button className={styles.menuItem}>
                  {" "}
                  {label} <IoIosArrowDown />
                </button>
              ) : (
                <Link
                  href={menuLink}
                  onClick={handleActiveMenu}
                  className={styles.menuItem}
                >
                  {label}{" "}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <button className={styles.menu} onClick={handleActiveMenu}>
          <MdMenu />
        </button>

        <Link className={`cta ${styles.callMe}`} href={`tel:+8801711-430093`}>
          <span>
            <FaPhoneAlt />
          </span>
          <span>Call Now</span>
        </Link>
      </div>
    </nav>
  );
}
