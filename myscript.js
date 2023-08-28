//recipes --- If new recipes is added - please add it below
const chorizoMozzareallaGnocchiBake = ['onion','garlic','chorizo','tomatoes','gnocchi','mozzarella']
const salmonNicoise =['onion','olives','potato','eggs','green beans','salmon','lettuce','tomatoes']
const salmonAsparagusGratin = ['breadcrumbs','cheese','butter','garlic','cream','milk','asparagus','salmon']
const potatoHashGreens = ['potato','onion','pepper','spinach','eggs']
const braisedSesameTofu = ['tofu','garlic','spring onion','green beans','rice']
const roastDinner = ['potato','chicken','carrots','peas','gravy']
const fiveSpiceRice = ['garlic','chilli','peppers','rice','spring onion','cashews']
const kimichiPancake = ['flour','kimchi','spring onion']
const spaghettiWithNduja = ['spaghetti','garlic','fennel','tomatoes']
const tomatoAndBlackBeanTofuSalad = ['black bean','tomato','lettuce','sweetcorn','pepper','taco shell']
const salmonRisotto = ['salmon','butter','onion','garlic','arborio rice','pea','cheese']
const chickenFajitas = ['chicken','onion','pepper','tortilla']
const porkChopWithCreamyLeeks = ['pork chop','leeks','cream','cheese']

//all recipes in this array --- If new recipes is added - please add it below

const allRecipes = [chorizoMozzareallaGnocchiBake,salmonNicoise, salmonAsparagusGratin,potatoHashGreens,braisedSesameTofu,roastDinner,fiveSpiceRice,kimichiPancake,spaghettiWithNduja,tomatoAndBlackBeanTofuSalad,salmonRisotto,chickenFajitas,porkChopWithCreamyLeeks]

//how many recipes do we have - can have a we currently have () recipes available - show this in HTML

document.addEventListener('DOMContentLoaded',function() {

const recipesLength = allRecipes.length

const recipeLengthOutput = document.getElementById('recipe-length')

const recipeMessage = `We are currently helping with ${recipesLength} recipes`

recipeLengthOutput.textContent = recipeMessage

})

//list all the unique ingredients in the recipes and list them alphabetically

const allIngredients = allRecipes.flat()

const allUniqueIngredients = [...new Set (allIngredients)]

console.log(allUniqueIngredients.sort())


//Uppercase the first letter of each ingredients

const capsAllUniqueIngredients = allUniqueIngredients.map((elem)=>{
    const firstLetter = elem[0].toUpperCase()
    const restOfWord = elem.slice(1).toLowerCase()
return firstLetter + restOfWord
})

//create checkboxes for each ingredients in the capsAllUniqueIngredients

document.addEventListener('DOMContentLoaded',function() {

const checkboxIngredientContainer = document.getElementById('checkbox-ingredient-container')

capsAllUniqueIngredients.forEach((ingredient)=>{
    const addCheckBox = document.createElement('input')
    addCheckBox.type = 'checkbox'
    addCheckBox.name = 'ingredient'
    addCheckBox.value = ingredient

    const createLabel = document.createElement('label')
    createLabel.textContent = ingredient

    checkboxIngredientContainer.appendChild(addCheckBox)
    checkboxIngredientContainer.appendChild(createLabel)
    
})
}
)

//turning the recipe a different colour if the ingredients is checked
