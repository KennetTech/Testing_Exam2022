import axios from "axios";

async function getFirstFact() {
  const response = await axios("https://catfact.ninja/fact");
  return response.data;
}

export default getFirstFact;
