const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipeName: {type: String, required: true},
  description: {type: String, required: true},
  ingredients: [{type: String, required: true}],
  procedure: [{type: String, required: true}],
  firstAnswer: {type: String},
  secondAnswer: {type: String},
  thirdAnswer: {type: String},
}, {
  timestamps: true,
})

const Recipe = mongoose.mode('Recipe', recipeSchema);

module.exports = Recipe;
