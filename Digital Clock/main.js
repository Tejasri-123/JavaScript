const hE = document.getElementById("hours");
const mE = document.getElementById("minutes");
const sE = document.getElementById("seconds");
const ampmE = document.getElementById("ampm");

function gettime() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hE.innerText = h;
  mE.innerText = m;
  sE.innerText = s;
  ampmE.innerText = ampm;
  setTimeout(() => {
    gettime();
  }, 1000);
}
gettime();