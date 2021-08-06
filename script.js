const icon = document.getElementById('hello');
const menu = document.getElementById('fuck');;
document.addEventListener('click', () => {
  var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  console.log(width);
  console.log("html width is " + document.querySelector('html'.innerWidth))
})
icon.addEventListener('click', () => {
  if (icon.innerHTML === "⨯") icon.innerHTML = "𝌉";
  else icon.innerHTML = "⨯"
  if (icon.innerHTML === "⨯") {
    menu.style.visibility = "visible";
  } else {
    menu.style.visibility = "hidden";
  }
});