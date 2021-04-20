// Import stylesheets
import "./style.css";
function clickMe() {
  alert();
}
let globalDataArray = [];
function getShuffleData(inputArray) {
  let shuffleArray = [];
  if (inputArray) {
    for (let i = inputArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = inputArray[i];
      inputArray[i] = inputArray[j];
      inputArray[j] = temp;
    }
    shuffleArray = inputArray;
    // const newArray = newShuffleArray.inputArray;
  }
  return shuffleArray;
}

function setElements(shuffleArray) {
  // Iterate the original Array
  let datalist = document.getElementsByClassName("boxes");
  for (let i = 0; i < datalist.length; i++) {
    let dataValue = parseInt(datalist[i].getAttribute("data-id"));
    // Now set the latest data
    datalist[i].setAttribute("data-id", shuffleArray[i]);
    datalist[i].innerHTML = shuffleArray[i];
    console.log(datalist[i]);
  }
}

let datalist = document.getElementsByClassName("boxes");
for (let i = 0; i < datalist.length; i++) {
  let dataValue = parseInt(datalist[i].getAttribute("data-id"));
  globalDataArray.push(dataValue);
}

console.log("Before shuffle ", globalDataArray);
// Now we will shuffle the data accordingly
const shuffledArray = getShuffleData(globalDataArray);
console.log("After Shuffle ", shuffledArray);
setElements(shuffledArray);

// Write Javascript code!
