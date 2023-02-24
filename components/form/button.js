import React from "react"
import styles from "./styles.module.css"

export function Button({ result, textButton }) {
  return (
    <button onClick={result} className={styles.validateButton}>
      {textButton}
    </button>
  )
}
