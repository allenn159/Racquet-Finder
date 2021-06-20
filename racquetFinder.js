const findButton = document.querySelector("#find");
const allButtons = document.querySelector("#buttons");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const racquetContainer = document.getElementById("racquetcontainer");
const racquetDetails = document.getElementById("racquetdetails");
const bench = document.getElementById("bench");
const babolatObject = Object.values(racquets.babolat);

const babolat = document.querySelector("#babolat");
const power = document.querySelector("#power");

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

// Continues to check if the Babolat checkbox is selected for the next button.

const isCheckedBabolat = () => {
  if (babolat.checked) {
    selectedBabolat();
  } else {
    console.log("Returns Null");
  }
};

findButton.addEventListener("click", isChecked);

// If no checkboxes are selected, replaces all current buttons with only the find button.

checkboxes.forEach((e) => {
  e.addEventListener("change", function () {
    if (this.checked) {
      console.log("Checkbox is checked..");
    } else {
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

//Checking to see if Babolat with/without additional attribute was selected

const selectedBabolat = () => {
  allButtons.append(nextButton);
  if (babolat.checked === true && power.checked === false) {
    babolatAlone();
  } else if (babolat.checked === true && power.checked === true) {
    babolatPower();
  }
};

// Adds next button for next option which will show results based on what is checked.

nextButton.addEventListener("click", () => {
  bench.append(racquetContainer.lastChild);
  isCheckedBabolat();
});

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

// Filter out Babolat racquets with power rating equal to or above 15 and push it into new array.

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
