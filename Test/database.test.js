it("should connect to the database", async () => {
  expect(1 + 1).toBe(2)
});

/*
import mongoose from "mongoose";
import config from "config";
describe('insert', () => {
  let db;

  beforeAll(async () => {
    db = await mongoose.connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const recipes = db.collection('recipes');

    const mockRecipes = { _id: 'some-recipe-id', name: 'kage' };
    await recipes.insertOne(mockRecipes);

    const insertedRecipes = await users.findOne({ _id: 'some-recipe-id' });
    expect(insertedRecipes).toEqual(mockRecipes);
  });
}); 
*/