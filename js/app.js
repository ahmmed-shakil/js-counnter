// Take references
let count = parseFloat(localStorage.getItem("count"));
// getElement by id function
function getElement(id) {
  return document.getElementById(id);
}
// set color and bg
function setColor(a, b, c, d) {
  a.b.c = d;
}
const heading = getElement("heading");
const value = getElement("value");
value.textContent = count;
const buttons = document.querySelectorAll(".btn");
const animated = getElement("animated_text");
const nav = getElement("nav");
const docs = getElement("docs");
const footer = getElement("footer");
const modalNote = getElement("modal-note");
const timeStamp = getElement("time");
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
    const date = new Date();
    const classes = e.currentTarget.classList;
    if (classes.contains("add")) {
      count = count + 1;
      timeStamp.textContent = `Counter value increased at ${date.toLocaleTimeString()}`;
    } else if (classes.contains("minus")) {
      if (count <= 0) {
        showSnackbar("The count value is negative");
      }
      count--;
      timeStamp.textContent = `Counter value decreased at ${date.toLocaleTimeString()}`;
    } else {
      modal.style.display = "block";
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
    localStorage.setItem("count", count);
  });
});
// Confirm reset value
confirmReset.onclick = function () {
  const date = new Date();
  modal.style.display = "none";
  showSnackbar("Counter reset successful");
  timeStamp.textContent = `Counter was reset at ${date.toLocaleTimeString()}`;
  count = 0;
  localStorage.removeItem("count");
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
