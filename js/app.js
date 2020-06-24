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
    messageBubble.html(`Get ${tamagotchiName} to 30 seconds old and keep your metrics on the left under 10 to win.`)
    // Testing
    console.log(tamagotchi); 
    // edge case to ensure only one object is created, however, clicking create more than once is still affecting the timer... 
    $(createButton).off('click', handleTamagotchi); 
}; 

// Start timer - the source of truth for the gameplay logic 

function handleTimer() {
    const timer = setInterval ( function() {
        // Use the timer to increment tamagotchiAge and tamagotchi.age property by seconds 
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
        // exit game 
        if (tamagotchiAge >= 30) {
            clearInterval(timer); 
        }
    }, 1000); 
}; 

// Update round

function updateRound() {
    $(roundField).html(round); 
    // change modulus value to adjust the length of each round
    if ( (tamagotchiAge % 10 === 0) && (tamagotchiBoredom < 10) && (tamagotchiHunger < 10) && (tamagotchiSleepiness < 10) ) {
        round += 1; 
        $(roundField).html(round); 
    }
    updateImage(round); 
    if (round > 3) {
        $(roundField).html('Game over!')
        return; 
    }
}; 

// Update image 

function updateImage(round) {
    if (round === 2) {
        $('#charmander').attr('src', 'https://ya-webdesign.com/images600_/bulbasaur-vector-svg-14.png');
        // $('#charmander').addClass("animate__animated animate__flash");  
        if (tamagotchiName === 'Charmander') {
            tamagotchiName = 'Charmeleon'; 
            tamagotchi.name = 'Charmeleon'; 
            $(messageBubble).html(`Charmander evolved into ${tamagotchiName}!`)
        } else if (tamagotchiName !== 'Charmeleon') {
            $(messageBubble).html(`${tamagotchiName} evolved into Charmeleon!`)
        }   
    } else if (round === 3) {
        $('#charmander').attr('src', 'https://pm1.narvii.com/5805/58e2f0439b8b7bfa3fcfc57e2669238682dc6bbe_hq.jpg'); 
        if (tamagotchiName === 'Charmander') {
            tamagotchiName = 'Charizard'; 
            tamagotchi.name = 'Charizard'; 
            $(messageBubble).html(`Charmeleon evolved into ${tamagotchiName}!`)
        } else {
            $(messageBubble).html(`${tamagotchiName} evolved into Charizard!`)
        } 
    }
}; 

// Determine results 

function determineResults() {
    if ( (tamagotchiAge === 30) && (tamagotchiBoredom < 10) && (tamagotchiHunger < 10) && (tamagotchiSleepiness < 10) ) {
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
    if (time % 3 === 0) {
        tamagotchiBoredom += 1;
        tamagotchi.boredom += 1; 
        $(boredomField).html(tamagotchiBoredom);  
    }
}; 

// Update hunger 

function updateHunger(time) {
    if (time % 3 === 0) {
        tamagotchiHunger += 1;
        tamagotchi.hunger += 1; 
        $(hungerField).html(tamagotchiHunger);  
    }
}; 

// Update sleepiness

function updateSleepiness(time) {
    if (time % 3 === 0) {
        tamagotchiSleepiness += 1;
        tamagotchi.sleepiness += 1; 
        $(sleepinessField).html(tamagotchiSleepiness);  
    }
}; 

// Play!

function play() {
    // edge case to ensure boredom can't be less than 0
    if ( (tamagotchiBoredom || tamagotchi.boredom) < 1) {
        return; 
    }; 
    tamagotchiBoredom -= 1; 
    tamagotchi.play(); 
    $(boredomField).html(tamagotchiBoredom); 
    $(messageBubble).html(`You played with ${tamagotchiName}.`)
    console.log(tamagotchi);
}; 

// Feed!

function feed() {
    if ( (tamagotchiHunger || tamagotchi.hunger) < 1) {
        return; 
    }; 
    tamagotchiHunger -= 1; 
    tamagotchi.feed(); 
    $(hungerField).html(tamagotchiHunger); 
    $(messageBubble).html(`${tamagotchiName} ate a snack.`)
    console.log(tamagotchi)
}; 

// Turn off lights! 

function turnOffLights() {
    if ( (tamagotchiSleepiness || tamagotchi.sleepiness) < 1) {
        return; 
    }; 
    tamagotchiSleepiness -= 1; 
    tamagotchi.turnOff(); 
    $(sleepinessField).html(tamagotchiSleepiness); 
    $(messageBubble).html(`ZZZZZZzzzzzz`)
    console.log(tamagotchi)
    darkMode(); 
}; 

// Dark mode - nested function for turnOffLights

function darkMode() {
    $('[id=dark-mode]').css('background-color', '#485461'); 
    $('[id=dark-mode]').css('background-image', 'linear-gradient(315deg, #485461 0%, #28313b 74%)');
    $('[id=dark-mode]').addClass('animate__animated animate__fadeIn');
    $('.metric-container').addClass('animate__animated animate__fadeIn');
    $('.metric-container').css('background-image', 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/104940799_3259354584104142_7756547770047346504_n.jpg?_nc_cat=107&_nc_sid=e007fa&_nc_ohc=EaV1GEMQUBkAX_uKT0n&_nc_ht=scontent-sjc3-1.xx&oh=4c71a3ac19d5a077ff1cdc73c861d1e2&oe=5F195F28)');
    $('.metric-container').css('color', 'white'); 
    $('.button-container').addClass('animate__animated animate__fadeIn');
    $('.button-container').css('background-image', 'url(https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/104827204_3259355104104090_417054165595891729_n.jpg?_nc_cat=110&_nc_sid=e007fa&_nc_ohc=THCHb6GeR7MAX_k4XfB&_nc_ht=scontent-sjc3-1.xx&oh=689251726272dd8f39010720b6f2acf0&oe=5F18863A)'); 
    $('footer').css('background-color', '#485461'); 
    $('footer').css('background-image', 'linear-gradient(315deg, #485461 0%, #28313b 74%)');
    $('footer').addClass('animate__animated animate__fadeIn')
}; 

// Eggradient.com - 
// background-color: #485461;
// background-image: linear-gradient(315deg, #485461 0%, #28313b 74%);

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

