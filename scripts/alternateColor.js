alternateColor();

function alternateColor() {
  let x = Array.from(document.getElementsByClassName("content"));
  for (let i = 0; i < x.length; i++) {
    if (i % 2 == 0) {
      x[i + 1].style.background = "rgb(255, 209, 152)";
    }
  }
}
