
// AS USUAL, CREATE VARIABLES FOR THE HTML ITEMS
const hideMe = document.getElementById("hideMe");
const earlyFact = document.getElementById("earlyFact");
const animalForm = document.getElementById("animalForm");
let factList = document.getElementById("factList");

getAnimalFacts(); // AS SOON AS THE PAGE LOADS, RUN THE FUNCTION AND DISPLAY A FACT

animalForm.addEventListener('submit', function(event) { 
    event.preventDefault();         // DON'T ALLOW THE FORM TO SUBMIT
    wipeAnimalFacts();              
});

function wipeAnimalFacts () {           // DELETE EXISTING LIST-ITEMS (OTHERWISE THE LIST GROWS)
    let deleteThis = factList.childElementCount;
    while(deleteThis > 0) {
        factList.removeChild(factList.firstElementChild);
        deleteThis--;
    }
    factList = document.getElementById("factList");         // used Chat for coding for the first time in ages. Couldn't figure out what was going wrong with the deletion and addition of list-items (my code was fine but factList needed to be reassigned)
    getAnimalFacts();
}


function getAnimalFacts(animal = "cat", amount = 1) {       // DEFAULT SETTINGS IN CASE IT'S THE FIRST TIME THE PAGE LOADS

    if (document.querySelector('input[name="animalType"]:checked')) {               // FIND WHICH RADIO INPUT IS CHECKED
    animal = document.querySelector('input[name="animalType"]:checked').value;
    }
    amount = document.getElementById("animalAmount").value;
    
    amount < 2 ?                                                                                                    // TURNS OUT THAT TERNARIES CAN BE MORE THAN ONE LINE 
    $.get (`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=${amount}`, (facts) => {
            let fact = facts.text;
        earlyFact.textContent = "a "+animal+" : "+fact;
    }) 
    : 
    $.get (`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=${amount}`, (facts) => {
        for (let fact of facts) {
            thisFact = fact.text
            makeAnimalList (thisFact);
        }
    })
   
}

function makeAnimalList (fact) {                        // CREATE THE LIST-ITEMS, INSERT THE INFO AND CREATE THE LISTS
    let LI = document.createElement("li");
        LI.textContent = fact
        factList.appendChild(LI);
}



