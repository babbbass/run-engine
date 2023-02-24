import React, { useState } from "react"
import styles from "@/styles/Home.module.css"
import { SpeedForm } from "@/components/form/speedForm/index.js"

export default function Vitesse() {
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <SpeedForm />
      </section>
    </main>
  )
}
