import React, { useState } from "react"
import styles from "./styles.module.css"
import { Input } from "../input"
import { Button } from "../button"
import { timeCalculator } from "@/utils/functions"

const SPEED = "Votre vitesse..."
const TEXT_BUTTON = "Temps sur course"

function verificationDatas(speed) {
  const regex = /^[0-9]{1,2}([.,][0-9]{1,2})?$/

  if (regex.test(speed)) {
    return speed
  } else {
    alert("seulement des chiffres !!!")
    return
  }
}

export function TimeOnDistanceForm({ speed, setSpeed, setActive }) {
  const [activeInput, setActiveInput] = useState(false)

  function handleInputChange(event) {
    setSpeed(event.target.value)
  }

  function fillTableResult(event) {
    event.preventDefault()
    if (verificationDatas(speed)) {
      timeCalculator(speed)
      setActive(true)
    }
  }

  return (
    <form className={styles.timeOnDistanceForm}>
      <label
        className={`${styles.label} ${activeInput ? styles.isActive : ""}`}
      >
        {SPEED}
      </label>
      <Input
        type='numeric'
        change={handleInputChange}
        placeholder={speed === 0 ? SPEED : speed}
        emptyInput={() => {
          setSpeed("")
          setActiveInput(true)
        }}
      />
      <Button textButton={TEXT_BUTTON} result={fillTableResult} />
      <span className={styles.error}>Entrez des chiffres !!!</span>
    </form>
  )
}
