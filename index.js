var hitrn = 0;
function bubble() {
  var clutter = "";
  for (i = 1; i <= 98; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}
    </div>`;
  }
  document.querySelector(".panel-2").innerHTML = clutter;
}
var timer = 60;
function runTimer() {
  var timeval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#time").textContent = timer;
    } else {
      clearInterval(timeval);
      document.querySelector(".panel-2").innerHTML =
        `<h1>Reload the page to play Again</h1>
        <h1>score is ${score}</h1>
        `;
    }
  }, 1000);
}

function hitval() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").innerHTML = hitrn;
}
score = 0;
function scoreVal() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

function bubbleClicked() {
  document.querySelector(".panel-2").addEventListener("click", function (dets) {
    var bubbleval = Number(dets.target.textContent);
    if (bubbleval === hitrn) {
      // alert("same")
      scoreVal();
      bubble();
      hitval();
    }
  });
}

bubble();
runTimer();
hitval();
bubbleClicked();
