// Take references
let count = 0;
const heading = document.getElementById("heading");
const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");
const animated = document.getElementById("animated_text");
const nav = document.getElementById("nav");
const docs = document.getElementById("docs");
const alertShow = document.getElementById("alert");
const footer = document.getElementById("footer");
const content = document.getElementById("content");

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
  content.style.border = `2px solid ${colors[color]}`;
  alertShow.style.backgroundColor = colors[color];
  footer.style.backgroundColor = colors[color];
}

function change() {
  setInterval(function () {
    changeColor();
  }, 3000);
}

window.onload = change;

// Add functionality on buttons
buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const classes = e.currentTarget.classList;
    if (classes.contains("add")) {
      count = count + 1;
      alertShow.textContent = "";
    } else if (classes.contains("minus")) {
      count--;
    } else {
      count = count * 0;
      alertShow.textContent = "Counter reset succesful";
      alertShow.style.display = "block";
    }
    if (count < 0) {
      value.style.color = "red";
      alertShow.style.display = "block";
      alertShow.textContent = "The count value is less than zero";
    } else if (count > 0) {
      value.style.color = "green";
      alertShow.style.display = "none";
      alertShow.textContent = "";
    } else if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
