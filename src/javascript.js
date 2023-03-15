const btn = document.getElementById("jsBtn");
const bulb = document.getElementById("bulb");
btn.addEventListener("click", toggleBulb);
function toggleBulb(e) {
  if (btn.textContent.includes("on")) {
    //include("on") will be checked from button in body
    bulb.src = "/image/on.png";
    btn.textContent = "Turn-Off";
  } else {
    bulb.src = "/image/off.png";
    btn.textContent = "Turn-on";
  }
}