import React from "react"
import styles from "./styles.module.css"

export function Speed({ speed }) {
  return (
    <>
      <div className={styles.result}>
        <span className={styles.highLight}>{speed}</span>km/h
      </div>
    </>
  )
}
