import React from "react"
import Link from "next/link"
import styles from "./styles.module.css"

export function Footer() {
  return (
    <div className={styles.footer}>
      <Link href='mailto:sebastien.savan@gmail.com'>@babbbass2023</Link>{" "}
      <Link
        href='https://www.linkedin.com/in/sebastien-savan-76597040/'
        className={styles.linkedin}
      >
        Linkedin
      </Link>
    </div>
  )
}
