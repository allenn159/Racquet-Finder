const findButton = document.querySelector("#find");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const errorMessage = document.getElementById("errormessage");
const racquetContainer = document.getElementById("racquetcontainer");
const racquetDetails = document.getElementById("racquetdetails");
const bench = document.getElementById("bench");
const babolatObject = Object.values(babolatRacquets.model);

const babolat = document.querySelector("#babolat");
const power = document.querySelector("#power");

const checkboxesArr = Array.from(checkboxes);

const isChecked = () => {
  if (checkboxesArr.some((e) => e.checked) === true) {
    errorMessage.innerHTML = "";
    buttonDiv.append(resetBtn);
    selectedBabolat();
  } else {
    errorMessage.innerHTML = "Please select a checkbox";
  }
};

const unCheckAll = () => {
  checkboxesArr.forEach((el) => (el.checked = false));
  resetBtn.remove();
  racquetContainer.innerHTML = "";
};

findButton.addEventListener("click", isChecked);

const buttonDiv = document.querySelector("#buttons");
const resetBtn = document.createElement("button");
resetBtn.type = "button";
resetBtn.innerHTML = "Reset";

resetBtn.addEventListener("click", unCheckAll);

//Checking to see if Babolat with/without additional setting was selected

const selectedBabolat = () => {
  if (babolat.checked === true && power.checked === false) {
    babolatAlone();
  } else if (babolat.checked === true && power.checked === true) {
    babolatPower();
  }
};

const babolatAlone = () => {
  // Selects a random Babolat racquet and remove from array
  const randomRacquet = babolatObject.splice(
    Math.floor(Math.random() * babolatObject.length),
    1
  )[0];

  if (randomRacquet === undefined) {
    console.log("NO more");
  } else {
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");

    racquetIMG.src = `${randomRacquet.img}`;
    newRacDiv.append(racquetIMG, randomRacquet.name);
    newRacDiv.setAttribute("class", `${randomRacquet.name.toLowerCase()}`);
    racquetContainer.append(newRacDiv);
  }
};

const randomBabolatPowerArr = [];

babolatObject.filter((e) => {
  if (e.power >= 15) {
    randomBabolatPowerArr.push(e);
  }
});

const babolatPower = () => {
  // Selects a random Babolat power racquet and remove from array
  const randomPowerRacquet = randomBabolatPowerArr.splice(
    Math.floor(Math.random() * randomBabolatPowerArr.length),
    1
  )[0];

  if (randomPowerRacquet === undefined) {
    console.log("NO more");
  } else {
    const newRacDiv = document.createElement("div");
    const racquetIMG = document.createElement("img");

    racquetIMG.src = `${randomPowerRacquet.img}`;
    newRacDiv.append(racquetIMG, randomPowerRacquet.name);
    newRacDiv.setAttribute("class", `${randomPowerRacquet.name.toLowerCase()}`);
    racquetContainer.append(newRacDiv);
    console.log(randomPowerRacquet);
  }
};
