"use strict"

function calculate() {
  const hours = parseInt(
    document.getElementById("number-of-hours-worked").value
  )
  const rate = parseInt(document.getElementById("Hourly-rate:$").value)

  const take = hours * rate * 0.18
  const wage = hours * rate * (1.0 - 0.18)

  document.getElementById("take").innerHTML =
    "The governemnt will take: " + take + "$"
  document.getElementById("wage").innerHTML = "your pay will be: " + wage + "$"
}
