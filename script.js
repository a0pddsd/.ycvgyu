let infoSelect = document.querySelector("#selectInstitutes");
let checkBtn = document.querySelector("#check-btn");
let outTitle = document.querySelector(".out-title");
let outMessage = document.querySelector("#out__message");
let inputPoints = document.querySelector("#points");
let grantBall = 100;
let kontraktBall = 75;
let SupKontBall = grantBall / 2;


checkBtn.addEventListener("click", function () {
  let test = infoSelect.value;
  outMessage.innerHTML = `Congratulations You entered ${test} on a Grand basis`;

});