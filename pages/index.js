import { useState } from "react"
import styles from "@/styles/Home.module.css"
import { TimeDistanceTable } from "@/components/timeDistance/index.js"
import { TimeOnDistanceForm } from "@/components/form/timeOnDistanceForm/timeOnDistanceForm"

export default function Home() {
  const [speed, setSpeed] = useState(0)
  const [active, setActive] = useState(false)
  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <TimeOnDistanceForm
          speed={speed}
          setSpeed={setSpeed}
          setActive={setActive}
        />
        <TimeDistanceTable active={active} />
      </section>
    </main>
  )
}
