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
    // message bubble changes 
    messageBubble.html('Make it to 30 seconds old and keep your metrics on the left under 10 to win.')
    // Testing
    console.log(tamagotchi); 
}; 

// Start timer - the source of truth for the gameplay logic 

function handleTimer() {
    const timer = setInterval ( function() {
        // Use the timer to increment tamagotchiAge and tamagotchi object by seconds 
        tamagotchiAge++;
        tamagotchi.age++; 
        // converts age into minutes and adjusts the field every minute
        updateAgeField(tamagotchiAge); 
        // updates all of the metrics according to the tamagotchiAge variable
        updateBoredom(tamagotchiAge); 
        updateHunger(tamagotchiAge); 
        updateSleepiness(tamagotchiAge); 
        // change round and determines if player wins or loses
        updateRound(); 
        determineResults(); 
    }, 1000); 
}; 

// Update round

function updateRound() {
    $(roundField).html(round); 
    // change comparison value to 1200
    if ( (tamagotchiAge % 10 === 0) && (tamagotchiBoredom < 10) && (tamagotchiHunger < 10) && (tamagotchiSleepiness < 10) ) {
        round += 1; 
        $(roundField).html(round); 
    }
}; 

// Determine results 

function determineResults() {
    if ( (tamagotchiAge === 30) && (round === 3) && (tamagotchiBoredom < 10) && (tamagotchiHunger < 10) && (tamagotchiSleepiness < 10) ) {
        $(messageBubble).html(`${tamagotchiName} is now ${ageFieldPlaceholder} seconds old. You win!`); 
        return;
    } else if (tamagotchiBoredom >= 10) {
        $(messageBubble).html(`You forgot to play with ${tamagotchiName}. ${tamagotchiName} has died of boredom. :(`); 
        return; 
    } else if (tamagotchiHunger >= 10) {
        $(messageBubble).html(`You forgot to feed ${tamagotchiName}. ${tamagotchiName} has died of hunger. :(`); 
        return; 
    } else if (tamagotchiSleepiness >= 10 ) {
        $(messageBubble).html(`You forgot to turn off the lights so ${tamagotchiName} could sleep. ${tamagotchiName} has died of insomnia. :(`); 
        return; 
    } 
}; 

// Update age field (not the actual value of tamagotchiAge, that needs to continue to increment.)

function updateAgeField(time) {
    if (time % 1 === 0) {
        ageFieldPlaceholder += 1; 
        if (ageFieldPlaceholder < 2) {
            $(ageField).html(`${ageFieldPlaceholder} second old`)
        } else {
            $(ageField).html(`${ageFieldPlaceholder} seconds old`)
        }
    }
}; 

// Update boredom

function updateBoredom(time) {
    if (time % 6 === 0) {
        tamagotchiBoredom += 1;
        tamagotchi.boredom += 1; 
        $(boredomField).html(tamagotchiBoredom);  
    }
}; 

// Update hunger 

function updateHunger(time) {
    if (time % 6 === 0) {
        tamagotchiHunger += 1;
        tamagotchi.hunger += 1; 
        $(hungerField).html(tamagotchiHunger);  
    }
}; 

// Update sleepiness

function updateSleepiness(time) {
    if (time % 6 === 0) {
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
    console.log(tamagotchi)
}; 

// Turn off the lights!

function turnOffLights() {
    tamagotchiSleepiness -= 1; 
    tamagotchi.turnOff(); 
    $(sleepinessField).html(tamagotchiSleepiness); 
    console.log(tamagotchi)
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

// Round details 
const roundField = $('#round'); 

// Message bubble 
const messageBubble = $('#message-bubble'); 

// --- Event listeners --- // 

// Create tamagotchi 
$(createButton).on('click', handleTamagotchi); 
$(createButton).on('click', handleTimer); 

// User actions 
$(playButton).on('click', play); 
$(feedButton).on('click', feed); 
$(turnOffButton).on('click', turnOffLights); 

