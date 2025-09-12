const selects = document.querySelectorAll(".color-select");
const message = document.getElementById("message");

selects.forEach(select => {
  select.addEventListener("change", checkSolution);
});

function checkSolution() {
  let allCorrect = true;
  
  selects.forEach(select => {
    if (select.value !== select.dataset.correct) {
      allCorrect = false;
    }
  });
  
  if (allCorrect) {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}
