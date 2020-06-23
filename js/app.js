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
    play() {
        this.boredom -= 1; 
    }; 
    feed() {
        this.hunger -= 1; 
    }; 
    turnOff() {
        this.sleepiness -= 1; 
    };
}; 


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

function handleTamagotchi() {
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
    // Testing
    console.log(tamagotchi); 
}; 

// Start timer 

function handleTimer() {
    const timer = setInterval ( function() {
        // Use the timer to increment tamagotchiAge by seconds 
        tamagotchiAge++;
        tamagotchi.age++; 
        // Create a functin that converts that time into minutes 
        // $(ageField).html(`${tamagotchiAge} minutes old.`); 
        updateAgeField(tamagotchiAge); 
        updateBoredom(tamagotchiAge); 
        updateHunger(tamagotchiAge); 
        updateSleepiness(tamagotchiAge); 
        // Testing
        updateRound(); 
    }, 1000); 
}; 

// Update round

function updateRound() {
    $(roundField).html(round); 
    if ( (tamagotchiAge % 1200 === 0) && (tamagotchiBoredom < 10) && (tamagotchiHunger < 10) && (tamagotchiSleepiness < 10) ) {
        round += 1; 
        $(roundField).html(round); 
    } else if ( (tamagotchiBoredom >= 10) || (tamagotchiHunger >= 10) || (tamagotchiSleepiness >= 10) ) {
        alert(`${tamagotchiName} HAS DIED!!!`); 
        return; 
    }
}


// Update age field (not the actual value of tamagotchiAge, that needs to continue to increment.)

function updateAgeField(time) {
    if (time % 60 === 0) {
        ageFieldPlaceholder += 1; 
        if (ageFieldPlaceholder < 2) {
            $(ageField).html(`${ageFieldPlaceholder} minute old`)
        } else {
            $(ageField).html(`${ageFieldPlaceholder} minutes old`)
        }
    }
}; 

// Update boredom

function updateBoredom(time) {
    if (time % 360 === 0) {
        tamagotchiBoredom += 1;
        tamagotchi.boredom += 1; 
        $(boredomField).html(tamagotchiBoredom);  
    }
}; 

// Update hunger 

function updateHunger(time) {
    if (time % 360 === 0) {
        tamagotchiHunger += 1;
        tamagotchi.hunger += 1; 
        $(hungerField).html(tamagotchiHunger);  
    }
}; 

// Update sleepiness

function updateSleepiness(time) {
    if (time % 360 === 0) {
        tamagotchiSleepiness += 1;
        tamagotchi.sleepiness += 1; 
        $(sleepinessField).html(tamagotchiSleepiness);  
    }
}; 

/* 
Boredom, hunger, and sleepiness will increment every 6 minutes (360 seconds). 
The user will win if the age reaches 1 hour (3600 seconds) and boredom, hunger, and sleepiness 
are less than 10. 
*/

// Play!

function play() {
    // add object method here? 
    tamagotchiBoredom -= 1; 
    tamagotchi.play(); 
    $(boredomField).html(tamagotchiBoredom); 
    console.log(tamagotchi); 
}; 

// Feed!

function feed() {
    tamagotchiHunger -= 1; 
    tamagotchi.feed(); 
    $(hungerField).html(tamagotchiHunger); 
}; 

// Turn off the lights!

function turnOffLights() {
    tamagotchiSleepiness -= 1; 
    tamagotchi.turnOff(); 
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
const roundField = $('#round'); 
const completedField = $('#completed'); 


// --- Event listeners --- // 

// Create tamagotchi 
$(createButton).on('click', handleTamagotchi); 
$(createButton).on('click', handleTimer); 

// User actions 
$(playButton).on('click', play); 
$(feedButton).on('click', feed); 
$(turnOffButton).on('click', turnOffLights); 

