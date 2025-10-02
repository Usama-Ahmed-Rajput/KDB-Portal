const loginBtn = document.getElementById("loginBtn");
const errorEl = document.getElementById("error");

function stopMatrixAndShowSite() {
  if (matrixTimer) {
    clearInterval(matrixTimer);
    matrixTimer = null;
  }
  if (canvas) {
    canvas.remove();
  }
  document.body.classList.remove("hacker-mode");

  document.getElementById("login-page").classList.add("hidden");
  document.getElementById("site-content").classList.remove("hidden");
}

const VALID_USER = "Admin";
const VALID_PASS = "Usama@H4K3R";

function tryLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === VALID_USER && pass === VALID_PASS) {
    errorEl.style.display = "none";
    stopMatrixAndShowSite();
  } else {
    errorEl.style.display = "block";
  }
}

if (loginBtn) {
  loginBtn.addEventListener("click", tryLogin);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !document.getElementById("site-content")?.classList.contains("hidden")) return;
    if (e.key === "Enter") tryLogin();
  });
}