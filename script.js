let infoSelect = document.querySelector("#selectInstitutes");
let checkBtn = document.querySelector("#check-btn");
let outTitle = document.querySelector("#out-title");
let outMessage = document.querySelector("#out__message");
let inputPoints = document.querySelector("#points");
let grantBall = 120;
let kontraktBall = 80;
let SupKontBall = grantBall / 2;
let failBall = grantBall / 4;

outMessage.innerHTML = "";

inputPoints.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
event.preventDefault();
checkBtn.click();
}
});

checkBtn.addEventListener("click", function () {
  let select = infoSelect.value;
  let numbPoints = Number(inputPoints.value.trim());
  let freeMessage = "";

  if (numbPoints == "" || numbPoints == null || isNaN(numbPoints)) {
    inputPoints.placeholder = "Enter Points";
    inputPoints.style.boxShadow = "1px 1px 3px 1px 	#ff9966";
    return;
  } else {
    outMessage.innerHTML = freeMessage;
    inputPoints.placeholder = "Enter Your Points";
    inputPoints.style.boxShadow = "1px 1px 3px 1px 	#70707033";
  }
// START MAIN BASIC FEATURES
  outTitle.classList.add("d-none");
  outTitle.classList.remove("out-warning-title");
  outTitle.classList.remove("out-title");
  outTitle.classList.remove("out-fail-title");
  outTitle.classList.remove("out-fall-title");
  outMessage.classList.remove("out-message");
  outMessage.classList.remove("out-warning-message");
  outMessage.classList.remove("out-fail-message");
  outMessage.classList.remove("out-fall-message");
  outTitle.innerHTML = "";
  outMessage.innerHTML = "";
// END MAIN BASIC FEATURES
// START MAIN FUNC
  if (numbPoints >= grantBall) {
    outTitle.classList.remove("d-none");
    outTitle.classList.add("out-title");
    outTitle.innerHTML = "Congratulations";
    outMessage.classList.add("out-message");
    outMessage.innerHTML = `You entered ${select} on a Grant basis with ${numbPoints} points`;
  }
  else if (numbPoints >= kontraktBall && numbPoints < grantBall) {
    outTitle.classList.remove("d-none");
    outTitle.classList.add("out-warning-title");
    outTitle.innerHTML = "Excellent";
    outMessage.classList.add("out-warning-message");
    outMessage.innerHTML = `You entered ${select} on a Contract basis with ${numbPoints} points`;
  } 
  else if (numbPoints >= SupKontBall && numbPoints < kontraktBall && numbPoints >= failBall || numbPoints <= SupKontBall && numbPoints < kontraktBall && numbPoints >= failBall) {
    outTitle.classList.remove("d-none");
    outTitle.classList.add("out-fail-title");
    outTitle.innerHTML = "Can't Talk";
    outMessage.classList.add("out-fail-message");
    outMessage.innerHTML = `You entered ${select} on a Supper Contract with ${numbPoints} points`;
  } 
  else if (numbPoints < failBall) {
    outTitle.classList.remove("d-none");
    outTitle.classList.add("out-fall-title");
    outTitle.innerHTML = "You Fail";
    outMessage.classList.add("out-fall-message");
    outMessage.innerHTML = `You entered ${select} on a Fall with ${numbPoints} points`;
  }
// END MAIN FUNC
});