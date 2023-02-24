const distanceTab = {
  resultFourHundredMeters: 0.4,
  resultOneKiloMeter: 1,
  resultThreeKiloMeters: 3,
  resultFiveKiloMeters: 5,
  resultTenKiloMeters: 10,
  resultFifteenKiloMeters: 15,
  resultTwentyKiloMeters: 20,
  resultHalfMarathon: 21.1,
  resultMarathon: 42.195,
}

const UNITY_HOUR = "h"
const UNITY_MINUTES = "min"
const UNITY_SECONDS = "sec"

export function checkSpeedCalculationDatasForm({
  distance,
  hour,
  minutes,
  seconds,
}) {
  const DISTANCE_REGEX = /^[0-9]{1,5}$/
  const HOUR_REGEX = /^[0-2]{1}[0-4]?$/
  const SECONDANDMINUTESREGEX = /^[0-5]{1}[0-9]{0,1}$/

  if (!DISTANCE_REGEX.test(distance)) {
    alert("Distance: seulement des chiffres !!!")
    return
  }

  if (!HOUR_REGEX.test(hour)) {
    alert("Heures: comprise entre 0 et 24 !!!")
    return
  }

  if (!SECONDANDMINUTESREGEX.test(minutes)) {
    alert("Minutes: comprise entre 0 et 59 !!!")
    return
  }

  if (!SECONDANDMINUTESREGEX.test(seconds)) {
    alert("Secondes: comprise entre 0 et 59 !!!")
    return
  }

  return true
}

export function setEmptyDataToZero(inputs) {
  for (let key in inputs) {
    switch (inputs[key]) {
      case "":
      case null:
      case undefined:
        inputs[key] = 0
      default:
        inputs[key]
    }
  }

  return inputs
}

export function speedCalculator({ distance, hour, minutes, seconds }) {
  const timeHours =
    parseInt(hour) + parseInt(minutes) / 60 + parseInt(seconds) / 3600
  let speed = distance / 1000 / timeHours

  if (isNaN(speed)) {
    return 0
  }

  return Math.round(speed * 100) / 100
}

export const timeCalculator = (speed) => {
  for (const [idDomElement, distance] of Object.entries(distanceTab)) {
    let timeOnCourse = (distance / speed) * 60
    const [hours, minutes, seconds] = convertTime(timeOnCourse)

    document.querySelector(
      `#${idDomElement}`
    ).innerText = `${hours}${UNITY_HOUR} ${minutes}${UNITY_MINUTES} ${seconds}${UNITY_SECONDS}`
    if (hours === 0) {
      document.getElementById(
        `${idDomElement}`
      ).innerText = `${minutes}${UNITY_MINUTES} ${seconds}${UNITY_SECONDS}`
    }
    if (seconds === 0) {
      document.getElementById(
        `${idDomElement}`
      ).innerText = `${hours}${UNITY_HOUR} ${minutes}${UNITY_MINUTES}`
    }
    if (seconds === 0 && hours === 0) {
      document.getElementById(
        `${idDomElement}`
      ).innerText = `${minutes}${UNITY_MINUTES}`
    }
    if (minutes === 0 && seconds === 0) {
      document.getElementById(
        `${idDomElement}`
      ).innerText = `${hours}${UNITY_HOUR}`
    }
  }
}

const convertTime = (timeRaw) => {
  const hoursRaw = timeRaw / 60
  const hours = Math.floor(hoursRaw)
  const minutesRaw = (hoursRaw - hours) * 60
  const minutes = Math.floor(minutesRaw)
  const secondsraw = (minutesRaw - minutes) * 60
  const seconds = Math.floor(secondsraw)

  return [Number(hours), Number(minutes), Number(seconds)]
}
