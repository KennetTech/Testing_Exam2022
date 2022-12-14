import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({}, { strict: false });
const Recipe = mongoose.model('Recipe', RecipeSchema);

export { Recipe };