const router = require('express').Router();
let Recipe = require('../models/recipe.model');

router.route('/').get((req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const recipeName = req.body.recipeName;
  const description = req.body.description;
  const ingredients = req.body.ingredients; //might need edits to accomodate for array
  const procedure = req.body.procedure;
  const firstAnswer = req.body.firstAnswer;
  const secondAnswer = req.body.secondAnswer;
  const thirdAnswer = req.body.thirdAnswer;

  const newRecipe = new Recipe({
    userName,
    recipeName,
    description,
    ingredients,
    procedure,
    firstAnswer,
    secondAnswer,
    thirdAnswer,
  });

  newRecipe.save()
    .then(() => res.json('Recipe added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});

router.route('/:id').get((req, res) => {
  Recipe.findById(req.params.id) //getting info directly from url
    .then(recipe => res.json(recipe))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
  Recipe.findByIdAndDelete(req.params.id) //getting info directly from url
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
  Recipe.findById(req.params.id) //getting info directly from url
    .then(recipe => {
      recipe.recipeName = req.body.recipeName;
      recipe.description = req.body.description;
      recipe.ingredients = req.body.ingredients; //might need edits to accomodate for array
      recipe.procedure = req.body.procedure;
      recipe.firstAnswer = req.body.firstAnswer;
      recipe.secondAnswer = req.body.secondAnswer;
      recipe.thirdAnswer = req.body.thirdAnswer;

      recipe.save()
        .then(() => res.json('Recipe updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.export = router;
