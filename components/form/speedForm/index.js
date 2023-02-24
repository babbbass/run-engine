import React, { useState } from "react"
import styles from "./speedForm.module.css"
import { Input } from "@/components/form/input"
import { Button } from "@/components/form/button"
import {
  speedCalculator,
  setEmptyDataToZero,
  checkSpeedCalculationDatasForm,
} from "@/utils/functions"
import { Speed } from "@/components/results/speed"

const DISTANCE = "Distance(mètres)"
const HOUR = "Heure(s)"
const MINUTES = "Minute(s)"
const SECONDS = "Seconde(s)"

export function SpeedForm() {
  const [active, setActive] = useState(false)
  const [distance, setDistance] = useState(null)
  const [hour, setHour] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  let [speed, setSpeed] = useState(0)

  const formData = {
    distance: distance,
    hour: hour,
    minutes: minutes,
    seconds: seconds,
  }

  function handleInputChange(event, setter) {
    setter(event.target.value)
  }

  function calculateSpeed({ formData, event }) {
    event.preventDefault()
    formData = setEmptyDataToZero(formData)
    if (checkSpeedCalculationDatasForm({ ...formData })) {
      setSpeed(speedCalculator({ ...formData }))
    }
  }

  return (
    <>
      <form className={styles.speedForm}>
        <label
          className={`${styles.label} ${
            active && distance !== null ? styles.isActive : ""
          }`}
        >
          {DISTANCE}
        </label>
        <Input
          type='numeric'
          maxLength='5'
          change={(event) => handleInputChange(event, setDistance)}
          placeholder={distance === null ? DISTANCE : distance}
          emptyInput={() => {
            setDistance("")
            setActive(true)
          }}
        />
        <label
          className={`${styles.label} ${
            active && hour !== null ? styles.isActive : ""
          }`}
        >
          {HOUR}
        </label>
        <Input
          type='numeric'
          change={(event) => handleInputChange(event, setHour)}
          emptyInput={() => {
            setHour("")
            setActive(true)
          }}
          placeholder={hour === null ? HOUR : hour}
        />
        <label
          className={`${styles.label} ${
            active && minutes !== null ? styles.isActive : ""
          }`}
        >
          {MINUTES}
        </label>
        <Input
          type='numeric'
          change={(event) => handleInputChange(event, setMinutes)}
          emptyInput={() => {
            setMinutes("")
            setActive(true)
          }}
          placeholder={minutes === null ? MINUTES : minutes}
        />
        <label
          className={`${styles.label} ${
            active && seconds !== null ? styles.isActive : ""
          }`}
        >
          {SECONDS}
        </label>
        <Input
          type='numeric'
          change={(event) => handleInputChange(event, setSeconds)}
          emptyInput={() => {
            setSeconds("")
            setActive(true)
          }}
          placeholder={seconds === null ? SECONDS : seconds}
        />
        <Button
          textButton='Vitesse'
          result={(event) => calculateSpeed({ formData, event })}
        />
      </form>
      <Speed speed={speed} />
    </>
  )
}
