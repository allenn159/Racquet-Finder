const findButton = document.querySelector("#find");
const allButtons = document.querySelector("#buttons");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const racquetContainer = document.getElementById("racquetcontainer");
const racquetDetails = document.getElementById("racquetdetails");
const bench = document.getElementById("bench");
const babolatObject = Object.values(racquets.babolat);
const wilsonObject = Object.values(racquets.wilson);
const babWilObject = Object.values(racquets.babolat.concat(racquets.wilson));
const buttonDiv = document.querySelector("#buttons");
const checkAllBtn = document.querySelector("#checkAll");
const errorMessageContainer = document.querySelector("#errormessage");

const babolat = document.querySelector("#babolat");
const wilson = document.querySelector("#wilson");
const power = document.querySelector("#power");
const control = document.querySelector("#control");
const popular = document.querySelector("#popular");

const checkboxesArr = Array.from(checkboxes);

// Create error messages

const errorMessage = document.createElement("p");
errorMessage.innerText = "Please select a checkbox!";

const secondErrorMessage = document.createElement("p");
secondErrorMessage.innerText = "Please select new search parameters!";

// Checks to see if at least one checkbox is selected.

const isChecked = () => {
  if (checkboxesArr.some((el) => el.checked) === true) {
    errorMessage.remove();
    findButton.remove();
    buttonDiv.append(resetBtn);
    nextCheck();
  } else {
    errorMessageContainer.append(errorMessage);
  }
};

findButton.addEventListener("click", isChecked);

// Checks to see if the checkboxes are toggled.

checkboxes.forEach((e) => {
  e.addEventListener("change", function () {
    if (this.checked === true || this.checked === false) {
      while (racquetContainer.firstChild) {
        bench.append(racquetContainer.lastChild);
      }
      allButtons.append(findButton);
      nextButton.remove();
      resetBtn.remove();
      errorMessage.remove();
      secondErrorMessage.remove();
      racquetContainer.innerText = "";
    }
  });
});

// Function to remove all child nodes
const clearAll = () => {
  while (bench.firstChild) {
    bench.removeChild(bench.firstChild);
  }
};

// Function to reset page

const reloadPage = () => {
  window.location.reload();
};

// Unchecks all selected checkboxes and clears out the currently shown racquet in the main container.

const clear = () => {
  checkboxesArr.forEach((el) => (el.checked = false));
  while (racquetContainer.firstChild) {
    bench.append(racquetContainer.lastChild);
  }
  resetBtn.remove();
  nextButton.remove();
  buttonDiv.append(findButton);
  racquetContainer.innerText = "";
  secondErrorMessage.remove();
};

const resetBtn = document.createElement("button");
resetBtn.type = "button";
resetBtn.innerText = "Clear";
resetBtn.classList.add("button");
resetBtn.setAttribute("id", "resetbtn");

resetBtn.addEventListener("click", clear);

// Checks all checkboxes

// const checkAll = () => {
//   checkboxesArr.forEach((el) => (el.checked = true));
//   checkAllBtn.remove();
// };

// checkAllBtn.addEventListener("click", checkAll);

// Adds next button to show next available racquet options based on checked boxes.

const nextButton = document.createElement("button");
nextButton.classList.add("button");
nextButton.innerHTML = "Next";

//Checking to see if Babolat with or without additional attribute was selected

const selectedBabolat = () => {
  allButtons.append(nextButton);
  if (
    babolat.checked === true &&
    power.checked === false &&
    control.checked === false &&
    popular.checked === false
  ) {
    babolatAlone();
  } else if (
    babolat.checked === true &&
    power.checked === true &&
    control.checked === false &&
    popular.checked === false
  ) {
    babolatPower();
  } else if (
    babolat.checked === true &&
    power.checked === false &&
    control.checked === true &&
    popular.checked === false
  ) {
    babolatControl();
  } else if (
    babolat.checked === true &&
    power.checked === false &&
    control.checked === false &&
    popular.checked === true
  ) {
    babolatPopular();
  } else if (
    babolat.checked === true &&
    power.checked === true &&
    control.checked === true &&
    popular.checked === false
  ) {
    babolatPowerControl();
  } else {
    babolatAll();
  }
};

//Checking to see if Wilson with or without additional attribute was selected

const selectedWilson = () => {
  allButtons.append(nextButton);
  if (
    wilson.checked === true &&
    power.checked === false &&
    control.checked === false &&
    popular.checked === false
  ) {
    wilsonAlone();
  } else if (
    wilson.checked === true &&
    power.checked === true &&
    control.checked === false &&
    popular.checked === false
  ) {
    wilsonPower();
  } else if (
    wilson.checked === true &&
    power.checked === false &&
    control.checked === true &&
    popular.checked === false
  ) {
    wilsonControl();
  } else if (
    wilson.checked === true &&
    power.checked === false &&
    control.checked === false &&
    popular.checked === true
  ) {
    wilsonPopular();
  } else if (
    wilson.checked === true &&
    power.checked === true &&
    control.checked === true &&
    popular.checked === false
  ) {
    wilsonPowerControl();
  } else {
    wilsonAll();
  }
};

//Checking to see if Wilson and Babolat checkbox with or without additional attribute was selected. This area also filters out if only
// the Power, Control, or Popular checkbox is selected individually or together.

const babWilSelected = () => {
  allButtons.append(nextButton);
  if (
    wilson.checked === true &&
    babolat.checked === true &&
    power.checked === false &&
    control.checked === false &&
    popular.checked === false
  ) {
    babWilAlone();
  } else if (
    (wilson.checked === true &&
      babolat.checked === true &&
      power.checked === true &&
      control.checked === false &&
      popular.checked === false) ||
    (wilson.checked === false &&
      babolat.checked === false &&
      power.checked === true &&
      control.checked === false &&
      popular.checked === false)
  ) {
    babWilPower();
  } else if (
    (wilson.checked === true &&
      babolat.checked === true &&
      power.checked === false &&
      control.checked === true &&
      popular.checked === false) ||
    (wilson.checked === false &&
      babolat.checked === false &&
      power.checked === false &&
      control.checked === true &&
      popular.checked === false)
  ) {
    babWilControl();
  } else if (
    (wilson.checked === true &&
      babolat.checked === true &&
      power.checked === false &&
      control.checked === false &&
      popular.checked === true) ||
    (wilson.checked === false &&
      babolat.checked === false &&
      power.checked === false &&
      control.checked === false &&
      popular.checked === true)
  ) {
    babWilPopular();
  } else if (
    (wilson.checked === true &&
      babolat.checked === true &&
      power.checked === true &&
      control.checked === true &&
      popular.checked === false) ||
    (wilson.checked === false &&
      babolat.checked === false &&
      power.checked === true &&
      control.checked === true &&
      popular.checked === false)
  ) {
    babWilPowerControl();
  } else {
    babWilAll();
  }
};

// Adds next button for next option which will show results based on what is checked.

nextButton.addEventListener("click", () => {
  bench.append(racquetContainer.lastChild);
  nextCheck();
});

// Checks to see if the which checkbox is selected for the next button.

const nextCheck = () => {
  if (babolat.checked === true && wilson.checked === false) {
    selectedBabolat();
  } else if (wilson.checked === true && babolat.checked === false) {
    selectedWilson();
  } else {
    babWilSelected();
  }
};

// Checks to see if the Wilson checkbox is selected for the next button.

// const isWilsonChecked = () => {
//   if (wilson.checked) {
//     selectedWilson();
//   }
// };

// This function filters out only Babolat racquets when the Babolat checkbox is selected.

const babolatAlone = () => {
  // Selects a random Babolat racquet and removes from array
  const randomRacquet = babolatObject.splice(
    Math.floor(Math.random() * babolatObject.length),
    1
  )[0];
  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
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
  // Selects a random Babolat power racquet and removes from array
  const randomRacquet = randomBabolatPowerArr.splice(
    Math.floor(Math.random() * randomBabolatPowerArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
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
  // Selects a random Babolat control racquet and removes from array
  const randomRacquet = randomBabolatControlArr.splice(
    Math.floor(Math.random() * randomBabolatControlArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Babolat racquets with popular rating equal to or above 7 and pushes it into new array.

const randomBabolatPopularArr = [];

babolatObject.filter((e) => {
  if (e.popularity >= 9) {
    randomBabolatPopularArr.push(e);
  }
});

// This function filters out racquets only when the Babolat and popular checkbox is selected.

const babolatPopular = () => {
  // Selects a random popular Babolat racquet and removes from array
  const randomRacquet = randomBabolatPopularArr.splice(
    Math.floor(Math.random() * randomBabolatPopularArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Babolat racquets with power and control rating equal to or above 14 and pushes it into new array.

const randomBabolatPowerControlArr = [];

babolatObject.filter((e) => {
  if (e.power >= 14 && e.control >= 14) {
    randomBabolatPowerControlArr.push(e);
  }
});

// This function filters out racquets only when the Babolat, Power, and Control checkbox is selected.

const babolatPowerControl = () => {
  // Selects a random Babolat power and control racquet and removes from array
  const randomRacquet = randomBabolatPowerControlArr.splice(
    Math.floor(Math.random() * randomBabolatPowerControlArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Babolat racquets with power and control rating above 14, and popularity rating above 7, and pushes it into new array.

const randomBabolatAllArr = [];

babolatObject.filter((e) => {
  if (e.power >= 14 && e.control >= 14 && e.popularity >= 7) {
    randomBabolatAllArr.push(e);
  }
});

// This function filters out racquets only when the Babolat, Power, Control, and Popular checkbox is selected.

const babolatAll = () => {
  // Selects a random Babolat Power, Control, and Popular racquet and removes from array
  const randomRacquet = randomBabolatAllArr.splice(
    Math.floor(Math.random() * randomBabolatAllArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// This function filters out only Wilson racquets when the Wilson checkbox is selected.

const wilsonAlone = () => {
  // Selects a random Wilson racquet and removes from array
  const randomRacquet = wilsonObject.splice(
    Math.floor(Math.random() * wilsonObject.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson racquets with power rating equal to or above 15 and pushes it into new array.

const randomWilsonPowerArr = [];

wilsonObject.filter((e) => {
  if (e.power >= 15) {
    randomWilsonPowerArr.push(e);
  }
});

// This function filters out racquets only when the Wilson and Power checkbox is selected.

const wilsonPower = () => {
  // Selects a random Wilson power racquet and removes from array
  const randomRacquet = randomWilsonPowerArr.splice(
    Math.floor(Math.random() * randomWilsonPowerArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson racquets with control rating equal to or above 15 and pushes it into new array.

const randomWilsonControlArr = [];

wilsonObject.filter((e) => {
  if (e.control >= 15) {
    randomWilsonControlArr.push(e);
  }
});

// This function filters out racquets only when the Wilson and Control checkbox is selected.

const wilsonControl = () => {
  // Selects a random Wilson control racquet and removes from array
  const randomRacquet = randomWilsonControlArr.splice(
    Math.floor(Math.random() * randomWilsonControlArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson racquets with popular rating equal to or above 7 and pushes it into new array.

const randomWilsonPopularArr = [];

wilsonObject.filter((e) => {
  if (e.popularity >= 9) {
    randomWilsonPopularArr.push(e);
  }
});

// This function filters out racquets only when the Wilson and Popular checkbox is selected

const wilsonPopular = () => {
  // Selects a random popular Wilson racquet and removes from array
  const randomRacquet = randomWilsonPopularArr.splice(
    Math.floor(Math.random() * randomWilsonPopularArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson racquets with power and control rating equal to or above 14 and pushes it into new array.

const randomWilsonPowerControlArr = [];

wilsonObject.filter((e) => {
  if (e.power >= 14 && e.control >= 14) {
    randomWilsonPowerControlArr.push(e);
  }
});

// This function filters out racquets only when the Babolat and Popular checkbox is selected.

const wilsonPowerControl = () => {
  // Selects a random Wilson Power and Control racquet and removes from array
  const randomRacquet = randomWilsonPowerControlArr.splice(
    Math.floor(Math.random() * randomWilsonPowerControlArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson racquets with power and control rating above 14, and popularity rating above 7, and pushes it into new array.

const randomWilsonAllArr = [];

wilsonObject.filter((e) => {
  if (e.power >= 14 && e.control >= 14 && e.popularity >= 7) {
    randomWilsonAllArr.push(e);
  }
});

// This function filters out racquets only when the Wilson, Power, Control, and Popular checkbox is selected.

const wilsonAll = () => {
  // Selects a random Wilson Power, Control, and Popular racquet and removes from array
  const randomRacquet = randomWilsonAllArr.splice(
    Math.floor(Math.random() * randomWilsonAllArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// This function filters out only Babolat and Wilson racquets when the respective checkboxes are selected.

const babWilAlone = () => {
  // Selects a random Babolat racquet and removes from array
  const randomRacquet = babWilObject.splice(
    Math.floor(Math.random() * babWilObject.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Babolat and Wilson racquets with power rating equal to or above 15 and pushes it into new array.

const randomBabWilPowerArr = [];

babWilObject.filter((e) => {
  if (e.power >= 15) {
    randomBabWilPowerArr.push(e);
  }
});

// This function filters out racquets only when the Babolat, Wilson, and Power checkbox is selected.

const babWilPower = () => {
  // Selects a random Babolat or Wilson power racquet and removes from array
  const randomRacquet = randomBabWilPowerArr.splice(
    Math.floor(Math.random() * randomBabWilPowerArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson and Babolat racquets with control rating equal to or above 15 and pushes it into new array.

const randomBabWilControlArr = [];

babWilObject.filter((e) => {
  if (e.control >= 15) {
    randomBabWilControlArr.push(e);
  }
});

// This function filters out racquets only when the Wilson, Babolat and Control checkbox is selected.

const babWilControl = () => {
  // Selects a random Wilson or Babolat control racquet and removes from array
  const randomRacquet = randomBabWilControlArr.splice(
    Math.floor(Math.random() * randomBabWilControlArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson and Babolat racquets with popular rating equal to or above 7 and pushes it into new array.

const randomBabWilPopularArr = [];

babWilObject.filter((e) => {
  if (e.popularity >= 9) {
    randomBabWilPopularArr.push(e);
  }
});

// This function filters out racquets only when the Wilson, Babolat and Popular checkbox is selected

const babWilPopular = () => {
  // Selects a random popular Wilson or Babolat racquet and removes from array
  const randomRacquet = randomBabWilPopularArr.splice(
    Math.floor(Math.random() * randomBabWilPopularArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson and Babolat racquets with power and control rating equal to or above 14 and pushes it into new array.

const randomBabWilPowerControlArr = [];

babWilObject.filter((e) => {
  if (e.power >= 14 && e.control >= 14) {
    randomBabWilPowerControlArr.push(e);
  }
});

// This function filters out racquets only when the Babolat, Wilson, Power, and Control checkbox is selected.

const babWilPowerControl = () => {
  // Selects a random Wilson or Babolat Power and Control racquet and removes from array
  const randomRacquet = randomBabWilPowerControlArr.splice(
    Math.floor(Math.random() * randomBabWilPowerControlArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);
  }
};

// Filter out Wilson and Babolat racquets with power and control rating above 14, and popularity rating above 7, and pushes it into new array.

const randomBabWilAllArr = [];

babWilObject.filter((e) => {
  if (e.power >= 14 && e.control >= 14 && e.popularity >= 7) {
    randomBabWilAllArr.push(e);
  }
});

// This function filters out racquets only when the Babolat, Wilson, Power, Control, and Popular checkbox is selected.

const babWilAll = () => {
  // Selects a random Babolat or Wilson Power, Control, and Popular racquet and removes from array
  const randomRacquet = randomBabWilAllArr.splice(
    Math.floor(Math.random() * randomBabWilAllArr.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    nextButton.remove();
    errorMessageContainer.append(secondErrorMessage);
  } else {
    const racquetPod = document.createElement("div");
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");
    const racquetName = document.createElement("p");
    const racquetDetails = document.createElement("div");

    racquetIMG.src = `${randomRacquet.img}`;
    racquetName.innerText = randomRacquet.name;
    racquetDetails.innerText = randomRacquet.description;
    racquetDetails.setAttribute("class", "details");
    newRacDiv.append(racquetIMG);
    newRacDiv.append(racquetName);
    newRacDiv.setAttribute("id", `${randomRacquet.name.toLowerCase()}`);
    newRacDiv.setAttribute("class", "racquet");
    racquetPod.append(newRacDiv);
    racquetPod.setAttribute("class", "racquetpod");
    racquetContainer.append(racquetPod);

    console.log(racquetDetails);

    newRacDiv.addEventListener("mouseover", function () {
      newRacDiv.append(racquetDetails);
      newRacDiv.removeChild(racquetIMG);
    });

    newRacDiv.addEventListener("mouseout", function () {});
  }
};
