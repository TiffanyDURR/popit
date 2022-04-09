const counterDisplay = document.querySelector("h3");
let counter = 0;
const happy = document.querySelector(".bubbleright");
const sad = document.querySelector(".bubblewrong");
const color = document.querySelector(".color");
const rule = document.getElementById("rules");
const valider = document.getElementById("buttonCool");
const lose = document.getElementById("lose");
const inputName = document.getElementById("inputtext");
const headerinner = document.querySelector(".header-inner");
let urname = document.querySelector(".urname");
let pseudo = "";
const main = document.querySelector("main");
const fail = () => {
  let audio = new Audio("assets/fail.mp3");
  audio.play();
};
const win = () => {
  let audio = new Audio("assets/win.mp3");
  audio.play();
};
const gameover = () => {
  let audio = new Audio("assets/gameover.mp3");
  audio.play();
};
const darkTheme = document.getElementById("theme");

const bubblesRight = () => {
  const bubbleRight = document.createElement("span");
  bubbleRight.classList.add("bubblewrong");
  document.body.appendChild(bubbleRight);

  const size = Math.random() * 100 + 100 + "px";
  bubbleRight.style.height = size;
  bubbleRight.style.width = size;

  bubbleRight.style.top = Math.random() * 100 + 50 + "%";
  bubbleRight.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubbleRight.style.setProperty(
    "--left",
    Math.random() * 100 * plusMinus + "%"
  );

  bubbleRight.addEventListener("click", () => {
    win();
    counter++;
    counterDisplay.textContent = counter;
    bubbleRight.remove();
  });

  setTimeout(() => {
    bubbleRight.remove();
  }, 8000);
};

setInterval(bubblesRight, 300);

const bubblesRightTwo = () => {
  const bubbleRightTwo = document.createElement("span");
  bubbleRightTwo.classList.add("bubblerightwo");
  document.body.appendChild(bubbleRightTwo);

  const size = Math.random() * 100 + 100 + "px";
  bubbleRightTwo.style.height = size;
  bubbleRightTwo.style.width = size;

  bubbleRightTwo.style.top = Math.random() * 100 + 50 + "%";
  bubbleRightTwo.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubbleRightTwo.style.setProperty(
    "--left",
    Math.random() * 100 * plusMinus + "%"
  );

  bubbleRightTwo.addEventListener("click", stopTimer);

  bubbleRightTwo.addEventListener("click", () => {
    document.querySelector("#lose").innerHTML += ` 
    <div class="lose-inner">
    <h1>Game Over</h1>
    <h2>Oh non, <span>${pseudo}</span> un smiley <span>heureux</span> a été éclaté ! </h2>
    <div class="infos">
    <h4>Score final : ${counter}</h4>
    <h4>Pour un temps de : ${timerTime} secondes</h4>
    <p>Envie d'améliorer ce score ?</p>
    <a class="button" href="index.html">Rejouer</a>
    </div></div>
    `;
    lose.classList.add("loseOn");
    fail();
    gameover();
    darkTheme.style.visibility = "hidden";
    main.classList.toggle("classic");
  });

  setTimeout(() => {
    bubbleRightTwo.remove();
  }, 8000);
};

setInterval(bubblesRightTwo, 300);

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

const bubblesWrong = () => {
  const bubbleWrong = document.createElement("span");
  bubbleWrong.classList.add("bubbleright");
  document.body.appendChild(bubbleWrong);

  const size = Math.random() * 100 + 100 + "px";
  bubbleWrong.style.height = size;
  bubbleWrong.style.width = size;

  bubbleWrong.style.top = Math.random() * 100 + 50 + "%";
  bubbleWrong.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubbleWrong.style.setProperty(
    "--left",
    Math.random() * 100 * plusMinus + "%"
  );

  bubbleWrong.addEventListener("click", stopTimer);

  bubbleWrong.addEventListener("click", () => {
    document.querySelector("#lose").innerHTML += ` 
    <div class="lose-inner">
    <h1>Game Over</h1>
    <h2>Oh non, <span>${pseudo}</span> un smiley <span>heureux</span> a été éclaté ! </h2>
    <div class="infos">
    <h4>Score final : ${counter}</h4>
    <h4>Pour un temps de : ${timerTime} secondes</h4>
    <p>Envie d'améliorer ce score ?</p>
    <a class="button" href="index.html">Rejouer</a>
    </div></div>
    `;
    lose.classList.add("loseOn");
    fail();
    gameover();
    darkTheme.style.visibility = "hidden";
    main.classList.toggle("classic");
  });

  setTimeout(() => {
    bubbleWrong.remove();
  }, 8000);
};

setInterval(bubblesWrong, 300);

window.addEventListener("load", (e) => {
  console.log("hey");
});

valider.addEventListener("click", (e) => {
  e.preventDefault();
  rule.style.display = "none";
});

const startButton = document.querySelector("[data-action=start]");
const stopButton = document.querySelector("[data-action=stop]");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

let timerTime = 0;
let isRunning = false;
let interval;

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  interval = setInterval(incrementTimer, 1000);
}

function stopTimer() {
  if (!isRunning) return;

  isRunning = false;
  clearInterval(interval);
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

function incrementTimer() {
  timerTime++;

  const numOfminutes = Math.floor(timerTime / 60);
  const numOfSeconds = timerTime % 60;

  minutes.innerText = pad(numOfminutes);
  seconds.innerText = pad(numOfSeconds);
}

valider.addEventListener("click", startTimer);

valider.addEventListener("click", (e) => {
  document.querySelector(".urname").innerHTML += ` 
  <div class="username">Nom du joueur : <span>${pseudo}</div>
  `;
});

valider.addEventListener("click", (e) => {
  darkTheme.style.visibility = "visible";
});

darkTheme.addEventListener("click", (e) => {
  main.classList.toggle("bodyDark");
  headerinner.classList.toggle("headerInnerDark");
  sad.classList.toggle("bubblewrong");
});

const bubblesWrongTwo = () => {
  const bubbleWrongTwo = document.createElement("span");
  bubbleWrongTwo.classList.add("bubblewrongtwo");
  document.body.appendChild(bubbleWrongTwo);

  const size = Math.random() * 100 + 100 + "px";
  bubbleWrongTwo.style.height = size;
  bubbleWrongTwo.style.width = size;

  bubbleWrongTwo.style.top = Math.random() * 100 + 50 + "%";
  bubbleWrongTwo.style.left = Math.random() * 100 + "%";

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubbleWrongTwo.style.setProperty(
    "--left",
    Math.random() * 100 * plusMinus + "%"
  );

  bubbleWrongTwo.addEventListener("click", () => {
    win();
    counter++;
    counterDisplay.textContent = counter;
    bubbleWrongTwo.remove();
  });

  setTimeout(() => {
    bubbleWrongTwo.remove();
  }, 8000);
};

setInterval(bubblesWrongTwo, 300);
