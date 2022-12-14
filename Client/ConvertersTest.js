function kgsToLbs(kilograms) {
  if (kilograms > 0 && typeof kilograms === 'number') {
    const pounds = Math.round(kilograms * 2.205)
    document.getElementById("lbsOutput").innerHTML = pounds
    return pounds
  }
  document.getElementById("lbsOutput").innerHTML = "value must be greater than 0"
  return "invalid";
}

function lbsToKgs(pounds) {
  if (pounds > 0 && typeof pounds === 'number') {
    const kilograms = Math.round(pounds / 2.205)
    document.getElementById("kgsOutput").innerHTML = kilograms
    return kilograms
  }
  document.getElementById("kgsOutput").innerHTML = "value must be greater than 0"
  return "invalid";
}

function feetToCms(feet) {
  if (feet > 0 && typeof feet === 'number') {
    const centimeter = Math.round(feet * 30.48)
    document.getElementById("cmsOutput").innerHTML = centimeter
    return centimeter
  }
  document.getElementById("cmsOutput").innerHTML = "value must be greater than 0"
  return "invalid";
}

function cmsToFeet(centimeter) {
  if (centimeter > 0 && typeof centimeter === 'number') {
    const feet = Math.round(centimeter / 30.48)
    document.getElementById("feetOutput").innerHTML = feet
    return feet
  }
  document.getElementById("feetOutput").innerHTML = "value must be greater than 0"
  return "invalid";
}

function fahrenheitToCelsius(fahrenheit) {
  //absolute zero in fahrenheit
  if (fahrenheit > -459.67 && typeof fahrenheit === 'number') {
    const celsius = Math.round((fahrenheit - 32) * 0.5556)
    document.getElementById("celsOutput").innerHTML = celsius
    return celsius
  }
  document.getElementById("celsOutput").innerHTML = "value must be greater than -459.67"
  return "invalid";
}

function celsiusToFahrenheit(celsius) {
  //absolute zero in celsius
  if (celsius > -273.15 && typeof celsius === 'number') {
    const fahrenheit = Math.round((celsius * 1.8) + 32)
    document.getElementById("fhtOutput").innerHTML = fahrenheit
    return fahrenheit
  }
  document.getElementById("fhtOutput").innerHTML = "value must be greater than -273.15"
  return "invalid";
}

function milliliterToOunce(millimeter) {
  if (millimeter > 0 && typeof millimeter === 'number') {
    const ounces = Math.round(millimeter / 29.57)
    document.getElementById("ozOutput").innerHTML = ounces
    return ounces
  }
  document.getElementById("ozOutput").innerHTML = "value must be greater than 0"
  return "invalid";
}

function ounceToMilliliter(ounces) {
  if (ounces > 0 && typeof ounces === 'number') {
    const millimeter = Math.round(ounces * 29.57)
    document.getElementById("mlOutput").innerHTML = millimeter
    return millimeter
  }
  document.getElementById("mlOutput").innerHTML = "value must be greater than 0"
  return "invalid";
}

export default { kgsToLbs, lbsToKgs, feetToCms, cmsToFeet, fahrenheitToCelsius, celsiusToFahrenheit, milliliterToOunce, ounceToMilliliter }