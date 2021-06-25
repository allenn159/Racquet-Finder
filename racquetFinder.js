const findButton = document.querySelector("#find");
const allButtons = document.querySelector("#buttons");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const racquetContainer = document.getElementById("racquetcontainer");
const racquetDetails = document.getElementById("racquetdetails");
const bench = document.getElementById("bench");
const babolatObject = Object.values(racquets.babolat);

const babolat = document.querySelector("#babolat");
const power = document.querySelector("#power");
const control = document.querySelector("#control");

const checkboxesArr = Array.from(checkboxes);

// Create error message

const errorMessage = document.createElement("div");
errorMessage.innerText = "Please select a checkbox!";

// Checks to see if at least one checkbox is selected.

const isChecked = () => {
  if (checkboxesArr.some((el) => el.checked) === true) {
    errorMessage.remove();
    findButton.remove();
    buttonDiv.append(resetBtn);
    selectedBabolat();
  } else {
    allButtons.append(errorMessage);
  }
};

findButton.addEventListener("click", isChecked);

// Checks to see if the checkboxes are toggled.

checkboxes.forEach((e) => {
  e.addEventListener("change", function () {
    if (this.checked === true || this.checked === false) {
      allButtons.append(findButton);
      nextButton.remove();
      resetBtn.remove();
    }
  });
});

// Unchecks all selected checkboxes and clears at the currently shown racquet in the container.

const unCheckAll = () => {
  checkboxesArr.forEach((el) => (el.checked = false));
  resetBtn.remove();
  nextButton.remove();
  buttonDiv.append(findButton);

  while (racquetContainer.firstChild) {
    racquetContainer.removeChild(racquetContainer.firstChild);
  }
};

const buttonDiv = document.querySelector("#buttons");
const resetBtn = document.createElement("button");
resetBtn.type = "button";
resetBtn.innerText = "Uncheck All";

resetBtn.addEventListener("click", unCheckAll);

// Adds next button to show next available racquet options based on checked boxes.

const nextButton = document.createElement("button");
nextButton.classList.add("nextButton");
nextButton.innerHTML = "Next";

//Checking to see if Babolat with or without additional attribute was selected

const checkItBaby = () => {
  checkboxesArr.filter((checkbox) => {
    if (checkbox.checked === true) {
      return true;
    }
  });
};

// const selectedBabolat = () => {
//   allButtons.append(nextButton);
//   if (
//     babolat.checked === true &&
//     power.checked === false &&
//     control.checked === false
//   ) {
//     babolatAlone();
//   } else if (
//     babolat.checked === true &&
//     power.checked === true &&
//     control.checked === false
//   ) {
//     babolatPower();
//   } else if (
//     babolat.checked === true &&
//     power.checked === false &&
//     control.checked === true
//   ) {
//     babolatControl();
//   }
// };

const selectedBabolat = () => {
  allButtons.append(nextButton);
  checkItBaby();
};

// Adds next button for next option which will show results based on what is checked.

nextButton.addEventListener("click", () => {
  bench.append(racquetContainer.lastChild);
  isCheckedBabolat();
});

// Continues to check if at least the Babolat checkbox is selected for the next button.

const isCheckedBabolat = () => {
  if (babolat.checked) {
    selectedBabolat();
  }
};

// This function filters out racquets only when the Babolat checkbox is selected.

const babolatAlone = () => {
  // Selects a random Babolat racquet and remove from array
  const randomRacquet = babolatObject.splice(
    Math.floor(Math.random() * babolatObject.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    racquetContainer.innerText = "Please select new search parameters!";
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");

    racquetIMG.src = `${randomRacquet.img}`;
    newRacDiv.append(racquetIMG, randomRacquet.name);
    newRacDiv.setAttribute("class", `${randomRacquet.name.toLowerCase()}`);
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetPod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Babolat racquets with power rating equal to or above 15 and pushes it into new array.

const randomBabolatPowerArr = [];

babolatObject.filter((e) => {
  if (e.power >= 15) {
    randomBabolatPowerArr.push(e);
  }
});

// This function filters out racquets only when the Babolat and Power checkbox is selected.

const babolatPower = () => {
  // Selects a random Babolat power racquet and remove from array
  const randomPowerRacquet = randomBabolatPowerArr.splice(
    Math.floor(Math.random() * randomBabolatPowerArr.length),
    1
  )[0];

  if (randomPowerRacquet === undefined) {
    nextButton.remove();
    racquetContainer.innerText = "Please select new search parameters!";
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");

    racquetIMG.src = `${randomPowerRacquet.img}`;
    newRacDiv.append(racquetIMG, randomPowerRacquet.name);
    newRacDiv.setAttribute("class", `${randomPowerRacquet.name.toLowerCase()}`);
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetPod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Babolat racquets with control rating equal to or above 15 and pushes it into new array.

const randomBabolatControlArr = [];

babolatObject.filter((e) => {
  if (e.control >= 15) {
    randomBabolatControlArr.push(e);
  }
});

// This function filters out racquets only when the Babolat and Control checkbox is selected.

const babolatControl = () => {
  // Selects a random Babolat power racquet and remove from array
  const randomControlRacquet = randomBabolatControlArr.splice(
    Math.floor(Math.random() * randomBabolatControlArr.length),
    1
  )[0];

  if (randomControlRacquet === undefined) {
    nextButton.remove();
    racquetContainer.innerText = "Please select new search parameters!";
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");

    racquetIMG.src = `${randomControlRacquet.img}`;
    newRacDiv.append(racquetIMG, randomControlRacquet.name);
    newRacDiv.setAttribute(
      "class",
      `${randomControlRacquet.name.toLowerCase()}`
    );
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetPod");
    racquetContainer.append(racquetPod);
  }
};
