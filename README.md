# tamagotchi
PROJECT-ZERO - GENERAL ASSEMBLY - BY DEREK OSHITA 6/22


// --- Scope --- // 

The final objective is to build a tamagotchi game where a user will interact with the tamagotchi in order to prevent it from dying...

Technologies in play: 
1. HTML
2. CSS
3. Vanilla JavaScript 
4. jQuery
5. Google Fonts
6. Animate.css
7. Eggradients.com 


// --- User Story / Gameplay Logic --- // 

A user is defined as any individual who opens the tamagotchi page and interacts with it. 

1. The user will start by entering a name into the text field then clicking the "create" button. The button will store that name in an object and then create the object with all of its values. It will also initiate the timer, represented by age. 

2. Three metrics will also be shown: hunger, sleepiness, and boredom. Each metric will initiate at 0. The metrics will increment every 5 minutes. If any of the metrics reaches 10, the tamagotchi WILL PERISH. 

3. The user can decrement the value of each metric- hunger, boredom, and sleepiness will be decremented by feed, play, and turn off the lights respectively. Each click will represent 1 decrement in order to prevent any metric from reaching 10. 

4. Every 10 seconds, the the pet wil morph/evolve and the round will be updated. There will be three rounds. 

5. The player wins if they can keep the tamagotchi alive for 30 seconds and all of the metrics under 10 during that time.  


// --- Wireframe --- // 

![landing](./wireframe/tamagotchi_prototype.PDF)

// --- Technical Requirements Checklist --- // 

- HAVE ITS OWN REPO, under your github account. NOT A FORK. (DONE)
- Git 20+ commits Commit early, commit often. Tell a story with your commits. Each message should give a clear idea what you changed. (DONE)
- Include Wireframes and User Stories in the README (DONE)
- Wireframe: - Basically draw out what your game will look like—very different way it could look. You can use paper or any wireframe tool you find online.(DONE)
- User Stories - Wording should center around how a user interacts with your game, for example:
The user click starts and the level starts
When the user hits the f key a fire ball is catuplulated at a target. (DONE)
- Render a game in the browser (DONE)
- Include separate HTML / CSS / JavaScript files (DONE)
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles (DONE)
- Use JavaScript or jQuery for DOM manipulation (DONE)
- Deploy your game online, where the rest of the world can access it (we will show you how) (DONE)
- Use semantic markup for HTML and CSS (adhere to best practices) (DONE)
- Be reasonably complex (DONE)


// --- Specifications Checklist --- // 

- Create a repo for your tomagotchi pet (DONE)
- make a commit after you finish each one of the following (DONE)
- Create a Class (JS Class, look at your notes if your forget) for your tomagotchi (DONE)
- Instatiate your Tomagotchi (DONE)
- Display a character of your choice on the screen to represent your pet (DONE)
- Display the following metrics for your pet: (DONE)
Hunger (1-10 scale)
Sleepiness (1-10 scale)
Boredom (1-10 scale)
Age
- Add buttons to the screen to feed your pet, turn off the lights, and play with your pet. (DONE)
- Add the ability to name your pet. (DONE)
- Style the page. (DONE)
- Increase your pet's age every x minutes (DONE)
- Increase your pet's Hunger, Sleepiness, and Bored metrics on an interval of your choosing. (DONE)
- You pet should die if Hunger, Boredom, or Sleepiness hits 10. (DONE)
- Morph your pet at certain ages. (DONE)
- Animate your pet across the screen while it's alive.




