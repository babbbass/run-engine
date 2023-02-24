import React from "react"
import styles from "./styles.module.css"

export function TimeDistanceTable({ active }) {
  return (
    <table className={`${styles.speedTable} ${active ? styles.active : ""}`}>
      <thead>
        <tr>
          <th></th>
          <th>Temps</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.distance}>400m</td>
          <td id='resultFourHundredMeters' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>1km</td>
          <td id='resultOneKiloMeter' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>3km</td>
          <td id='resultThreeKiloMeters' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>5km</td>
          <td id='resultFiveKiloMeters' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>10km</td>
          <td id='resultTenKiloMeters' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>15km</td>
          <td id='resultFifteenKiloMeters' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>20km</td>
          <td id='resultTwentyKiloMeters' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>Semi-marathon</td>
          <td id='resultHalfMarathon' className={styles.timeDistance}></td>
        </tr>
        <tr>
          <td className={styles.distance}>Marathon</td>
          <td id='resultMarathon' className={styles.timeDistance}></td>
        </tr>
      </tbody>
    </table>
  )
}
