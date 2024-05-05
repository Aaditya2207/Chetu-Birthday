function openImage() {
  document.getElementById("closedImageContainer").style.display = "none";
  document.getElementById("openImageContainer").style.display = "block";
  document.getElementById("clickHereButton").style.display = "block";
}

function closeImage() {
  document.getElementById("openImageContainer").style.display = "none";
  document.getElementById("closedImageContainer").style.display = "block";
  document.getElementById("clickHereButton").style.display = "none";
}
