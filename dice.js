let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 0;

function onSubmit(event) {
  event.preventDefault();
  const formData = document.getElementsByTagName("input");
  firstPlayerName = formData[0].value;
  secondPlayerName = formData[1].value;
  totalScore = formData[2].value;
  document.getElementById("form-container").style.display = "none";
  document.getElementById("board-container").style.display = "block";
  document
    .getElementById("firstplayer")
    .getElementsByClassName("name")[0].innerHTML = firstPlayerName;
  document
    .getElementById("secondplayer")
    .getElementsByClassName("name")[0].innerHTML = secondPlayerName;
}


function rollDice(foot) {
  const randomNumber = getRandom();
  const playerNodes = document.getElementById(`player${foot}`);
  playerNodes
    .querySelector(".foot img")
    .setAttribute("src", `images/dice${randomNumber}.png`);
  switch (foot) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName("img")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("secondplayer")
        .getElementsByTagName("img")[0]
        .removeAttribute("disabled");
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName("img")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("firstplayer")
        .getElementsByTagName("img")[0]
        .removeAttribute("disabled");
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}
function checkIfWinnerExists() {
  if (firstPlayerScore >= totalScore) {
    document.getElementById(
      "1pscore"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("secondplayer")
      .getElementsByTagName("img")[0]
      .setAttribute("disabled", true);
  }
  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      "2pscore"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("firstplayer")
      .getElementsByTagName("img")[0]
      .setAttribute("disabled", true);
  }
}

function reset(event) {
  event.preventDefault();
  window.location.reload();
}

function restart(event) {
  event.preventDefault();
  console.log("restart");
  document.querySelectorAll(".foot img")[0].src = "images/dice6.png";
  document.querySelectorAll(".foot img")[1].src = "images/dice6.png";
  document.querySelectorAll(".score")[0].innerHTML = "0";
  document.querySelectorAll(".score")[1].innerHTML = "0";
  firstPlayerScore = 0;
  secondPlayerScore = 0;
  document.querySelector(".winner").style.display = "none";
  document
  .getElementById("player1")
  .getElementsByTagName("input")[0]
  .disabled = false;
  document
  .getElementById("player2")
  .getElementsByTagName("input")[0]
  .disabled = false;
}