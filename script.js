const roles = [
  "Problem Solver",
  "Data Enthusiast",
  "Business Analyst",
  "Insight Seeker",
  "Storyteller with Data",
  "Critical Thinker",
  "Visual Communicator",
  "Curious Learner",
  "Growth-Minded Analyst",
  "Strategic Thinker",
];
let i = 0,
  j = 0,
  current = "",
  isDeleting = false,
  wait = 1200;
const typedText = document.getElementById("typed-text");

function type() {
  const role = roles[i % roles.length];
  if (!isDeleting) {
    j++;
    current = role.substring(0, j);
    if (j === role.length + 1) {
      isDeleting = true;
      setTimeout(type, wait);
      return;
    }
  } else {
    j--;
    current = role.substring(0, j);
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  typedText.textContent = current;
  setTimeout(type, isDeleting ? 60 : 120);
}
type();
