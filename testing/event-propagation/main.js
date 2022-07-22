function changeBehaviour() {
    if (toggle.capture === false) {
        toggle.capture = true;
        behaviourInfo.innerText = 'Capturing';
    } else if (toggle.capture === true) {
        toggle.capture = false;
        behaviourInfo.innerText = 'Bubbling';
    }
}

const changeBehaviourButton = document.querySelector('#change-behaviour');
changeBehaviourButton.addEventListener('click', changeBehaviour)
const behaviourInfo = document.querySelector('#behaviour-info')

let toggle = { capture: false };

const elementOne = document.querySelector('#one');
elementOne.addEventListener('click', elementTrigger, toggle);

const elementTwo = document.querySelector('#two');
elementTwo.addEventListener('click', elementTrigger, toggle);

const elementThree = document.querySelector('#three', toggle);
elementThree.addEventListener('click', elementTrigger);

const resetLog = document.querySelector('#reset-logs');
resetLog.addEventListener('click', resetAllLogs);

// const elementClickedLog = document.querySelector('#element-clicked');

const eventsTriggeredList = document.querySelector('#events-triggered-ordered-list');
const eventPhaseList = document.querySelector('#event-phase-ordered-list');


function elementTrigger(e) {

    console.log(toggle);

    // elementClickedLog.innerText += `Element ${this.id} was clicked!\n`;

    let li = document.createElement('li');
    let text = document.createTextNode(`Element ${this.id} event was triggered!\n`);
    li.appendChild(text);
    eventsTriggeredList.appendChild(li);

    
    let phase = '';

    if (e.eventPhase === 1) {
        phase = 'Capturing Phase'
    } else if (e.eventPhase === 2) {
        phase = 'At Target';
    } else if (e.eventPhase === 3) {
        phase = 'Bubbling Phase';
    }

    li = document.createElement('li');
    text = document.createTextNode(`Element ${this.id} => ${phase}\n`);
    li.appendChild(text);
    eventPhaseList.appendChild(li);

}


function resetAllLogs() {
    // elementClickedLog.innerText = "";
    eventsTriggeredList.innerText = "";
    eventPhaseList.innerText = "";
}