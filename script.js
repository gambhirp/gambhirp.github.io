const roles = ["Analyst.", "Data Enthusiast.", "Business Consultant.", "Problem Solver."];
let i = 0, j = 0, current = '', isDeleting = false, wait = 1200;
const typedText = document.getElementById('typed-text');

function type() {
  const role = roles[i % roles.length];
  if (!isDeleting) {
    current = role.substring(0, j + 1);
    j++;
    if (j === role.length) {
      isDeleting = true;
      setTimeout(type, wait);
      return;
    }
  } else {
    current = role.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i++;
    }
  }
  typedText.textContent = current;
  setTimeout(type, isDeleting ? 60 : 120);
}
type();