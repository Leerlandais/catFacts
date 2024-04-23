const hideMe = document.getElementById("hideMe");
const earlyFact = document.getElementById("earlyFact");
const factList = document.getElementById("factList");
const animalForm = document.getElementById("animalForm");

animalForm.addEventListener('submit', function(event) { 
    event.preventDefault();
    getAnimalFacts();
});


function getAnimalFacts(animal = "cat", amount = 1) {
    let animalType = document.querySelector('input[name="animalType"]:checked').value;
    console.log(animalType)
    $.get (`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal}&amount=${amount}`, (fact) => {
            earlyFact.textContent = fact.text;
    })
}


getAnimalFacts();