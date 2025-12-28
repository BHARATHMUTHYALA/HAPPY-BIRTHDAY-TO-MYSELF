window.addEventListener("load", function () {
  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;
  const LYRICS_DELAY = 1500;
  const MIN_WIDTH = 768;
  const MIN_HEIGHT = 700;

  console.log(
    "The width and height are ",
    WIDTH,
    " and ",
    HEIGHT,
    " respectively"
  );

  if (WIDTH < MIN_WIDTH || HEIGHT < MIN_HEIGHT) {
    alert("This is a small screen and not suitable for viewing");
    if (confirm("Please use another larger screen?")) {
      console.log("Another screen used");
    } else {
      console.log("they dont care");
    }
  }

  const elements = document.querySelectorAll(".lyrics");

  setTimeout(() => {
    elements.forEach((element) => {
      element.style.display = "block";
    });
  }, LYRICS_DELAY);
});
