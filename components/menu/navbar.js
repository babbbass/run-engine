import React, { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import styles from "./styles.module.css"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  const currentUrl = useRouter().asPath

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function activeLink(event) {
    document
      .querySelector(`.${styles.activeLink}`)
      .classList.remove(styles.activeLink)
    event.currentTarget.classList.add(`${styles.activeLink}`)
  }

  return (
    <nav className={styles.navbar}>
      <button
        aria-label='toogle curtain navigation'
        className={styles.navbarBurger}
        onClick={toggleMenu}
      >
        <span
          className={`${styles.line1} ${isMenuOpen ? styles.isActive : ""}`}
        ></span>
        <span
          className={`${styles.line2} ${isMenuOpen ? styles.isActive : ""}`}
        ></span>
        <span
          className={`${styles.line3} ${isMenuOpen ? styles.isActive : ""}`}
        ></span>
      </button>
      <ul className={`${styles.menu} ${isMenuOpen ? styles.isActive : ""}`}>
        <li>
          <Link
            href='/'
            className={currentUrl === "/" ? styles.activeLink : ""}
          >
            Temps sur distance
          </Link>
        </li>
        <li>
          <Link
            href='/vitesse'
            className={currentUrl === "/vitesse" ? styles.activeLink : ""}
          >
            Calcul vitesse
          </Link>
        </li>
      </ul>
    </nav>
  )
}
