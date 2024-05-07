// document.getElementById("count-el").innerText = 3;

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// functions increment
function incrementPassengerCount() {
    count += 1;
    countEl.textContent = count;
    
}

// create a function SAVE which logs out the count when it is called
function saveCount() {
    countStr = count + " - " ;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}


