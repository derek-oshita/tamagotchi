// --- App State (Variables) --- // 

// Tamagotchi creator 

class Tamagotchi {
    constructor (tamagotchiName) {
    // properties 
        this.name = tamagotchiName;
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

// Not assigned until createTamagotchi() fires. 

let time = 0; 
let round = 1; 
let tamagotchi; 
let tamagotchiName; 
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
    tamagotchiBoredom = tamagotchi.boredom; 
    tamagotchiHunger = tamagotchi.hunger; 
    tamagotchiSleepiness = tamagotchi.sleepiness; 
    // inserting those values to the DOM using jQuery 
    $(nameField).html(tamagotchiName);
    $(boredomField).html(tamagotchiBoredom); 
    $(hungerField).html(tamagotchiHunger); 
    $(sleepinessField).html(tamagotchiSleepiness);   

}; 

// Start Timer 

function startTimer () {
    const timer = setInterval ( function () {
        // Use the timer as a way to update its age
        time++;
        $(ageField).html(time); 
        // putting update boredom function here will increment boredom but it keeps going!
        updateBoredom (time); 
        updateHunger (time); 
        updateSleepiness (time); 
    }, 1000); 
}; 

// Update Boredom

function updateBoredom (time) {
    if ( time % 10 === 0) {
        tamagotchiBoredom += 1;
        $(boredomField).html(tamagotchiBoredom);  
    }
}; 

// Update Hunger 

function updateHunger (time) {
    if ( time % 10 === 0) {
        tamagotchiHunger += 1;
        $(hungerField).html(tamagotchiHunger);  
    }
}; 

// Update 

function updateSleepiness (time) {
    if ( time % 10 === 0) {
        tamagotchiSleepiness += 1;
        $(sleepinessField).html(tamagotchiSleepiness);  
    }
}; 

// Increment condition: 
// 3600 secs / hour 
// every 6 minutes = 360 secs
// use modulus 
// if ( (time % 360) === 0) {tamagotchiBoredom++; $(boredomField).html(tamagotchiBoredom);   }

// --- Cached DOM Elements --- // 

// Tamagotchi Details
const nameField = $('#name'); 
const ageField = $('#age'); 

// Tamagotchi Metrics
const boredomField = $('#boredom'); 
const hungerField = $('#hunger'); 
const sleepinessField = $('#sleepiness');  

// Buttons 
const createButton = $('#create'); 
const playButton = $('#play'); 
const feedButton = $('#feed'); 
const turnOffButton = $('#turn-off'); 

// Stage Details 
const stageField = $('#stage'); 
const completedField = $('#completed'); 


// --- Event listeners --- // 

// Create tamagotchi 
$(createButton).on('click', createTamagotchi); 
$(createButton).on('click', startTimer)