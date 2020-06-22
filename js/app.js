// --- App State (Variables) --- // 

// Tamagotchi creator 

class Tamagotchi {
    constructor (tamagotchiName) {
    // properties 
        this.name = tamagotchiName;
        this.age = 0; 
        this.boredom = 0; 
        this.hunger = 0; 
        this.sleepiness = 0; 
    }
    // instance methods
    // play - needs play button click event as argument 
    play () {
        this.boredom = this.boredom--; 
    }; 
    // feed - needs feed button click event as argument
    feed () {
        this.hunger = this.hunger--; 
    }; 
    // turn off - needs turn off button clicke event as argument
    turnOff () {
        this.sleepiness = this.sleepiness--; 
    };
}; 

// Round creator? 

// --- Global Variables --- // 

let time = 0; 
let round = 1; 
let tamagotchi; 
let tamagotchiName; 
let tamagotchiAge; 
let tamagotchiBoredom; 
let tamagotchiHunger; 
let tamagotchiSleepiness; 

// --- Functions --- // 

// Create tamagotchi - global variables don't get assigned until the user creates a tamagotchi 

function createTamagotchi () {
    let nameInput = $('#input-name').val(); 
    // assigning of values from new object to global variables
    tamagotchi = new Tamagotchi (nameInput); 
    tamagotchi.name = nameInput || 'Charmander'; 
    tamagotchiName = nameInput || 'Charmander'; 
    tamagotchiAge = Tamagotchi.age; 
    tamagotchiBoredom = Tamagotchi.boredom; 
    tamagotchiHunger = Tamagotchi.hunger; 
    tamagotchiSleepiness = Tamagotchi.sleepiness; 
    // inserting those values to the DOM using jQuery 
    $(nameField).html(tamagotchi.name);
    $(ageField).html(tamagotchi.age);
    $(boredomField).html(tamagotchi.boredom); 
    $(hungerField).html(tamagotchi.hunger); 
    $(sleepinessField).html(tamagotchi.sleepiness);   
    console.log(tamagotchi); 
}; 



// Start Timer 
function startTimer () {
    const timer = setInterval ( function () {
        time++; 
        console.log(time); 
    }, 1000)
}; 

// startTimer(); 



// Cached DOM Elements 

// Buttons 
const createButton = $(`#create`); 

// Tamagotchi Details
const nameField = $('#name'); 
const ageField = $('#age'); 

// Tamagotchi Metrics
const boredomField = $('#boredom'); 
const hungerField = $('#hunger'); 
const sleepinessField = $('#sleepiness');  

// Stage
const stageField = $('#stage'); 


// Event listeners

// Create tamagotchi 
$(createButton).on('click', createTamagotchi); 