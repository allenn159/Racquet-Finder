const findButton = document.querySelector("#find");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const errorMessage = document.getElementById("errormessage");
const racquetContainer = document.getElementById("racquetcontainer");
const bench = document.getElementById("bench");

const babolat = document.querySelector("#babolat");

//Checking to see if Babolat was selected

const babolatSelected = () => {
  if (babolat.checked === true) {
    
  }
};

const checkboxesArr = Array.from(checkboxes);

const isChecked = () => {
  if (checkboxesArr.some((e) => e.checked) === true) {
    errorMessage.innerHTML = "";
  } else {
    errorMessage.innerHTML = "Please select a checkbox";
  }
};

findButton.addEventListener("click", isChecked);
