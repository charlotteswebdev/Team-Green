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


    // this snipped below breaks the website and nothing displays so I commented it out
// document.addEventListener('DOMContentLoaded',function() {

// const recipesLength = allRecipes.length

// const recipeLengthOutput = document.getElementById('recipe-length')

// const recipeMessage = `We are currently helping with ${recipesLength} recipes`

// recipeLengthOutput.textContent = recipeMessage

// })

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
    addCheckBox.className = 'ingredient'
    addCheckBox.name = 'ingredient'
    addCheckBox.value = ingredient
    addCheckBox.setAttribute('onchange', 'checkIfChecked()')

    const createLabel = document.createElement('label')
    createLabel.textContent = ingredient

    checkboxIngredientContainer.appendChild(addCheckBox)

    addCheckBox.addEventListener('change', checkIfChecked)
    checkboxIngredientContainer.appendChild(createLabel)
    
})
}
)

//turning the recipe a different colour if the ingredients is checked
//  debugger

function checkIfChecked() {

    let checkBox = document.getElementsByClassName('ingredient')
    let newStyle = document.getElementById("chorizoMozzarellaGnocchiBake")
// create an array with the selected ingredients
    let checked = []

    for (let i = 0; i < checkBox.length; i++) {

        let checkedIngredient = checkBox[i]
        let isChecked = checkBox[i].checked ? true : false

        if (isChecked) {
            checked.push(checkedIngredient.value.toLowerCase())
        }
                // for chorizo mozarella gnocci bake
        for (let i = 0; i < checked.length; i++) {

 // check if  all the elements in created array are the same as ingredients in the recipe array and set the color to green
            let checker = (chorizoMozzareallaGnocchiBake.every(v => checked.includes(v)));

            if (checker) {
                newStyle.style.backgroundColor = 'green'
            }

 // if only some are present set the color to yellow
            else if (checked.some(v => chorizoMozzareallaGnocchiBake.includes(v))) {
                newStyle.style.backgroundColor = 'yellow'    
            }
// if none of the ingredients are selected change color to default
            else if (checker == false) {
                newStyle.style.backgroundColor = '#545365'
            }
        }
    }    
    // for salmonNicoise
    for (let i = 0; i < checked.length; i++) {
        let checker = (salmonNicoise.every(v => checked.includes(v)));
        if (checker) {
            document.getElementById("salmonNicoise").style.backgroundColor = 'green'
        }
        else if (checked.some(v => salmonNicoise.includes(v))) {
            document.getElementById("salmonNicoise").style.backgroundColor = 'yellow'
        }
        else if (checker == false) {
            document.getElementById("salmonNicoise").style.backgroundColor = '#545365'
        }
    }
    // for salmonAsparagusGratin
    for (let i = 0; i < checked.length; i++) {
        let checker = (salmonAsparagusGratin.every(v => checked.includes(v)));
        if (checker) {
            document.getElementById("salmonAsparagusGratin").style.backgroundColor = 'green'
        }
        else if (checked.some(v => salmonAsparagusGratin.includes(v))) {
            document.getElementById("salmonAsparagusGratin").style.backgroundColor = 'yellow'
        }
        else if (checker == false) {
            document.getElementById("salmonAsparagusGratin").style.backgroundColor = '#545365'
        }
    }
     // for potatoHashGreens
     for (let i = 0; i < checked.length; i++) {
        let checker = (potatoHashGreens.every(v => checked.includes(v)));
        if (checker) {
            document.getElementById("potatoHashGreens").style.backgroundColor = 'green'
        }
        else if (checked.some(v => potatoHashGreens.includes(v))) {
            document.getElementById("potatoHashGreens").style.backgroundColor = 'yellow'
        }
        else if (checker == false) {
            document.getElementById("potatoHashGreens").style.backgroundColor = '#545365'
        }
    }
     // for braisedSesameTofu
     for (let i = 0; i < checked.length; i++) {
        let checker = (braisedSesameTofu.every(v => checked.includes(v)));
        if (checker) {
            document.getElementById("braisedSesameTofu").style.backgroundColor = 'green'
        }
        else if (checked.some(v => braisedSesameTofu.includes(v))) {
            document.getElementById("braisedSesameTofu").style.backgroundColor = 'yellow'
        }
        else if (checker == false) {
            document.getElementById("braisedSesameTofu").style.backgroundColor = '#545365'
        }
    }
     // for roastDinner
     for (let i = 0; i < checked.length; i++) {
        let checker = (roastDinner.every(v => checked.includes(v)));
        if (checker) {
            document.getElementById("roastDinner").style.backgroundColor = 'green'
        }
        else if (checked.some(v => roastDinner.includes(v))) {
            document.getElementById("roastDinner").style.backgroundColor = 'yellow'
        }
        else if (checker == false) {
            document.getElementById("roastDinner").style.backgroundColor = '#545365'
        }
    }
    // for fiveSpiceRice
    for (let i = 0; i < checked.length; i++) {
        let checker = (fiveSpiceRice.every(v => checked.includes(v)));
        if (checker) {
            document.getElementById("fiveSpiceRice").style.backgroundColor = 'green'
        }
        else if (checked.some(v => fiveSpiceRice.includes(v))) {
            document.getElementById("fiveSpiceRice").style.backgroundColor = 'yellow'
        }
        else if (checker == false) {
            document.getElementById("fiveSpiceRice").style.backgroundColor = '#545365'
        }
    }
     // for kimichiPancake
     for (let i = 0; i < checked.length; i++) {
        let checker = (kimichiPancake.every(v => checked.includes(v)));
        if (checker) {
            document.getElementById("kimichiPancake").style.backgroundColor = 'green'
        }
        else if (checked.some(v => kimichiPancake.includes(v))) {
            document.getElementById("kimichiPancake").style.backgroundColor = 'yellow'
        }
        else if (checker == false) {
            document.getElementById("kimichiPancake").style.backgroundColor = '#545365'
        }
    }
}



