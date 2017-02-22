var daycolors = ["yellow", "orange", "black"];

function daylight(timeOfDay) {
  if (timeOfDay === "morning") {
    document.body.style["background-color"] = daycolors[0];
  } else if (timeOfDay === "afternoon") {
    document.body.style["background-color"] = daycolors[1];
  } else if (timeOfDay === "evening") {
    document.body.style["background-color"] = daycolors[2];
  } 
  var currentTime = document.getElementById("currentTime");
  currentTime.innerHTML = timeOfDay;
}
