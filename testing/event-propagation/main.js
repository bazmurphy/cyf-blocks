document.querySelector('#one').addEventListener('click', showEventTrigger);
document.querySelector('#two').addEventListener('click', showEventTrigger);
document.querySelector('#three').addEventListener('click', showEventTrigger);

function showEventTrigger() {
    document.getElementById('output').innerText += `Element ${this.id}'s event was triggered!\n`;
}