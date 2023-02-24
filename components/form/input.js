import React from "react"
import styles from "./styles.module.css"

export function Input({
  type,
  maxLength = 5,
  value,
  change,
  emptyInput,
  placeholder,
}) {
  return (
    <input
      type={type}
      className={styles.input}
      maxLength={maxLength}
      value={value}
      onChange={change}
      onClick={emptyInput}
      placeholder={placeholder}
    />
  )
}
