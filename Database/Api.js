fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => document.getElementById("catFactAPI").innerHTML = data.fact);

