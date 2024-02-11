const btn = document.querySelector(".btn");
const stopEl = document.querySelector(".stop");
const walkEl = document.querySelector(".walk");

const wait = () => {
  setTimeout(() => {
    stopEl.src = "./img/stop-off.svg";
    walkEl.src = "./img/walk-on.svg";
    console.log("Waited for 3 seconds");
  }, 3000);

  setTimeout(() => {
    stopEl.src = "./img/stop-on.svg";
    walkEl.src = "./img/walk-off.svg";
  }, 8000);
};

btn.addEventListener("click", wait);
