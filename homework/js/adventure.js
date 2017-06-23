var instructions = [
    {
        "id": 1,
        "choices": {
            "first": 2,
            "second": 3
        },
        "choiceText": "choose 1",
        "title": "The Adventure Begins",
        "description": "This is where you setup your initial story",
        "ending" : 'none'
    },
    {
        "id": 2,
        "choices": {
            "first": 4,
            "second": 5
        },
        "choiceText": "Go Left",
        "title": "The long hallway",
        "description": "You walk down a long stone hallway, but feel uneasy.",
        "ending" : 'none'
    },
    {
        "id": 3,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Go Right",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending" : 'bad'
    },
    {
        "id": 4,
        "choices": {
            "first": 8,
            "second": 9
        },
        "choiceText": "Keep walking",
        "title": "Treasure room",
        "description": "You find a treasure room and live a happy life.",
        "ending" : 'good'
    },
    {
        "id": 5,
        "choices": {
            "first": 6,
            "second": 7
        },
        "choiceText": "Turn Around",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending" : 'bad'
    },
    {
        "id": 6,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "You Died... THE END",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending" : 'bad'
    },
    {
        "id": 7,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "Press restart to Try Again",
        "title": "The hungry beast",
        "description": "This is probably not going to end well.",
        "ending" : 'bad'
    },
    {
    "id": 8,
    "choices": {
    "first": 0,
    "second": 0
    },
    "choiceText": "YOU FIND THE TREASURE AND LIVE A HAPPY LIVE",
    "title": "Treasure room",
    "description": "You find a treasure room and live a happy life.",
    "ending" : 'good'
    },
    {
        "id": 9,
        "choices": {
            "first": 0,
            "second": 0
        },
        "choiceText": "THE END",
        "title": "Treasure room",
        "description": "You find a treasure room and live a happy life.",
        "ending" : 'good'
    }
];


//updates the screen to show the current description and choices
//requires the id of the new set of instructions
function nextStep(id) {
    //first we need to get the new item from the list of instructions
    var instruction = getItem(instructions, id);

    //then we need to update the screen with the main description
    updateElement('title', instruction.title);
    updateElement('description', instruction.description);

    //then get the items for choice1 and 2 from the list
    var choice1 = getItem(instructions, instruction.choices.first);
    var choice2 = getItem(instructions, instruction.choices.second);

    //check to see if they are endpoints

    //if endpoints then end the game


    //if not update those sections on the screen with the choiceText
    updateElement('choiceOne', choice1.choiceText);
    updateElement('choiceTwo', choice2.choiceText);
    updateButton('buttonOne', choice1.id);
    updateButton('buttonTwo', choice2.id);
    //check to see if the story is at the end
    end(instruction);
}

//1. create the getItem, updateElement, and updateButton functions

//getItem: gets an item from a list by id
//requires the list and id of the desired element
//write a for statement to check each set of instruction

function getItem(item, id) {
    for( var i = 0; i < item.length; i++){

    if(id == item[i].id){
    return item[i];
    }
    }
}

//updateElement: updates the contents of an element on the screen
//requires the id of the div to update, and the new contents.

function updateElement(elementId, choice) {
    var element = document.getElementById(elementId);
    element.innerHTML = choice;
}
//updateButton: sets the onclick event for a button with the id of the item it chooses

function updateButton(button, choice){
    document.getElementById(button).setAttribute('onclick', 'nextStep(' + choice +')');
}

//2. then create and use a function to initialize the game to step 1



//3. other needed functions
//restart: resets the game back to the beginning.
function restart() {
    nextStep(1);
    document.getElementById('end').innerHTML = '';
}

//happy ending: does whatever we want it to do when they end in a good place

//sad ending: does whatever we want it to do if they end at a bad place

// Lynette Warnberg
