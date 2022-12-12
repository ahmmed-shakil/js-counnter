// Take references
let count = 0;
const heading = document.getElementById("heading");
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");
const animated = document.getElementById("animated_text");
const nav = document.getElementById("nav");
const docs = document.getElementById("docs");
const footer = document.getElementById("footer");
const modalNote = document.getElementById("modal-note");
const timeStamp = document.getElementById("time");
const date = new Date();
// Get the modal
const modal = document.getElementById("myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// Get the <span> element that confirms
const confirmReset = document.getElementsByClassName("confirm")[0];

function showSnackbar(text) {
  // Get the snackbar DIV

  const snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";
  snackbar.innerText = text;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

// Change headng color
let color = 0;
function changeColor() {
  const colors = [
    "red",
    "hotpink",
    "green",
    "black",
    "blue",
    "aaqua",
    "orange",
    "indigo",
  ];
  color = (color + 1) % colors.length;
  heading.style.color = colors[color];
  value.style.borderTop = `1px solid ${colors[color]}`;
  value.style.borderBottom = `1px solid ${colors[color]}`;
  buttons.forEach(function (btn) {
    btn.style.backgroundColor = colors[color];
    btn.style.color = "white";
    btn.style.border = `1px solid ${colors[color]}`;
  });
  animated.style.backgroundColor = colors[color];
  nav.style.backgroundColor = colors[color];
  docs.style.backgroundColor = colors[color];
  docs.style.border = `1px solid white`;
  footer.style.backgroundColor = colors[color];
  snackbar.style.backgroundColor = colors[color];
  modalNote.style.color = colors[color];
  timeStamp.style.color = colors[color];
}

// Play Audio
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");

function change() {
  setInterval(function () {
    changeColor();
  }, 3000);
}

window.onload = change;

// Add functionality on buttons
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    audio.play();
    const classes = e.currentTarget.classList;
    if (classes.contains("add")) {
      count = count + 1;
      timeStamp.textContent = `Counter value increased at ${date.toLocaleTimeString()}`;
    } else if (classes.contains("minus")) {
      count--;
      timeStamp.textContent = `Counter value decreased at ${date.toLocaleTimeString()}`;
    } else {
      modal.style.display = "block";
    }
    if (count < 0) {
      value.style.color = "red";
      showSnackbar("The count value is negative");
    } else if (count > 0) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
// Confirm reset value
confirmReset.onclick = function () {
  modal.style.display = "none";
  showSnackbar("Counter reset successful");
  timeStamp.textContent = `Counter was reset at ${date.toLocaleTimeString()}`;
  count = 0;
  value.textContent = count;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
