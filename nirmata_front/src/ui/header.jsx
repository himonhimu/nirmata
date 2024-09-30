"use client";

import { navLinks } from "@/components/footer/main-footer";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathName = usePathname();
  const [activeMenu, setActiveMenu] = useState(false);

  function handleActiveMenu() {
    setActiveMenu((prev) => !prev);
  }

  const activeMainMenu = pathName.split("/")[1] || "/";
  const activeSubMenu = pathName.split("/")?.[2];

  return (
    <nav className={styles.container}>
      <div className={styles.nav}>
        <Link href={"/"} className={styles.logo}>
          <Image
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={"/nirmata_logo.png"}
            alt="Nirmata Logo"
            fill
          />
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
                      <Link
                        href={`${menuLink}/${link}`}
                        className={
                          "/" + activeSubMenu === link ? styles.activeMenu : ""
                        }
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              {submenu ? (
                <button
                  className={`${styles.menuItem} ${
                    "/" + activeMainMenu === menuLink ? styles.activeMenu : ""
                  }`}
                >
                  {" "}
                  {label} <IoIosArrowDown />
                </button>
              ) : (
                <Link
                  href={menuLink}
                  onClick={handleActiveMenu}
                  className={`${styles.menuItem} ${
                    "/" + activeMainMenu === menuLink ? styles.activeMenu : ""
                  }`}
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
