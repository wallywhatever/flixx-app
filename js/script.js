const global = {
  currentPage: window.location.pathname,
};

function init() {
  switch (global.currentPage) {
    case "/":
      console.log("home");
      break;
  }
}
console.log(global.currentPage);
document.addEventListener("DOMContentLoaded", init);
