const findButton = document.querySelector("#find");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const errorMessage = document.getElementById("errormessage");
const racquetContainer = document.getElementById("racquetcontainer");
const racquetDetails = document.getElementById("racquetdetails");
const bench = document.getElementById("bench");
const babolatObject = Object.values(babolatRacquets.model);

const babolat = document.querySelector("#babolat");

//Checking to see if Babolat was selected

const babolatSelected = () => {
  if (babolat.checked === true) {
    babolatAlone();
  }
};

// Selects a random Babolat racquet and remove from object
const babolatAlone = () => {
  const randomRacquet = babolatObject.splice(
    Math.floor(Math.random() * babolatObject.length),
    1
  )[0];
  
  console.log(babolatObject);
  console.log(babolatObject[Math.floor(Math.random() * babolatObject.length)]);
  console.log(randomRacquet);
  const newRacDiv = document.createElement("div");
  const racquetIMG = document.createElement("img");

  racquetIMG.src = `${randomRacquet.img}`;
  newRacDiv.append(racquetIMG, randomRacquet.name);
  newRacDiv.setAttribute("class", `${randomRacquet.name.toLowerCase()}`);
  racquetContainer.append(newRacDiv);
};

const checkboxesArr = Array.from(checkboxes);

const isChecked = () => {
  if (checkboxesArr.some((e) => e.checked) === true) {
    errorMessage.innerHTML = "";
    babolatSelected();
  } else {
    errorMessage.innerHTML = "Please select a checkbox";
  }
};

findButton.addEventListener("click", isChecked);
