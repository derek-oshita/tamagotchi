// --- App State (Variables) --- // 

// Class - tamagotchi creator 

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

// hardcoded variables
let round = 1; 
let ageFieldPlaceholder = 0; 
// global variables don't get assigned until the user fires createTamagotchi(); 
let tamagotchi; 
let tamagotchiName; 
let tamagotchiAge; 
let tamagotchiBoredom; 
let tamagotchiHunger; 
let tamagotchiSleepiness; 

// --- Functions --- // 

// Create tamagotchi 

function handleTamagotchi () {
    let nameInput = $('#input-name').val(); 
    // assigning of values from new object to global variables
    tamagotchi = new Tamagotchi (nameInput); 
    tamagotchi.name = nameInput || 'Charmander'; 
    tamagotchiName = nameInput || 'Charmander'; 
    tamagotchiAge = tamagotchi.age; 
    tamagotchiBoredom = tamagotchi.boredom; 
    tamagotchiHunger = tamagotchi.hunger; 
    tamagotchiSleepiness = tamagotchi.sleepiness; 
    // inserting those values to the DOM using jQuery 
    $(nameField).html(tamagotchiName);
    $(ageField).html(tamagotchiAge); 
    $(boredomField).html(tamagotchiBoredom); 
    $(hungerField).html(tamagotchiHunger); 
    $(sleepinessField).html(tamagotchiSleepiness);   
    // testing
    console.log(tamagotchiAge); 
}; 

// Start timer 

function handleTimer () {
    const timer = setInterval ( function () {
        // Use the timer to increment tamagotchiAge by seconds 
        tamagotchiAge++;
        // Create a functin that converts that time into minutes 
        // $(ageField).html(`${tamagotchiAge} minutes old.`); 
        updateAgeField (tamagotchiAge); 
        updateBoredom (tamagotchiAge); 
        updateHunger (tamagotchiAge); 
        updateSleepiness (tamagotchiAge); 
        console.log(tamagotchiAge); 
    }, 1000); 
}; 

// Update age field (not the actual value of tamagotchiAge, that needs to continue to increment.)

function updateAgeField (time) {
    if (time % 60 === 0) {
        ageFieldPlaceholder += 1; 
        $(ageField).html(`${ageFieldPlaceholder} minutes old`)
    }
}; 

// Update boredom

function updateBoredom (time) {
    if ( time % 360 === 0) {
        tamagotchiBoredom += 1;
        $(boredomField).html(tamagotchiBoredom);  
    }
}; 

// Update hunger 

function updateHunger (time) {
    if ( time % 360 === 0) {
        tamagotchiHunger += 1;
        $(hungerField).html(tamagotchiHunger);  
    }
}; 

// Update sleepiness

function updateSleepiness (time) {
    if ( time % 360 === 0) {
        tamagotchiSleepiness += 1;
        $(sleepinessField).html(tamagotchiSleepiness);  
    }
}; 

/* 
Boredom, hunger, and sleepiness will increment every 6 minutes (360 seconds). 
The user will win if the age reaches 1 hour (3600 seconds) and boredom, hunger, and sleepiness 
are less than 10. 
*/

// Play!

function play () {
    // add object method here? 
    tamagotchiBoredom -= 1; 
    $(boredomField).html(tamagotchiBoredom); 
}; 

// Feed!

function feed () {
    tamagotchiHunger -= 1; 
    $(hungerField).html(tamagotchiHunger); 
}; 

// Turn off the lights!

function turnOffLights () {
    tamagotchiSleepiness -= 1; 
    $(sleepinessField).html(tamagotchiSleepiness); 
}; 

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

// Stage details 
const stageField = $('#stage'); 
const completedField = $('#completed'); 


// --- Event listeners --- // 

// Create tamagotchi 
$(createButton).on('click', handleTamagotchi); 
$(createButton).on('click', handleTimer); 

// User actions 
$(playButton).on('click', play); 
$(feedButton).on('click', feed); 
$(turnOffButton).on('click', turnOffLights); 

