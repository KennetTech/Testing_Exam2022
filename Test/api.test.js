import getFirstFact from "../Database/Api2";

it("Ensuring dataretrival from CatFactAPI", async () => {
  const fact = await getFirstFact();
  expect(fact).not.toBe(null);
});
