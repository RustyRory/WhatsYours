let score1 = 0;
let score2 = 0;

const score1Display = document.getElementById("score1");
const score2Display = document.getElementById("score2");

const player1Display = document.getElementById("player1Display");
const player2Display = document.getElementById("player2Display");

// --- Modals ---
const modalPlayer = new bootstrap.Modal(document.getElementById("playerModal"));
const modalStart = new bootstrap.Modal(document.getElementById("startModal"));
const modalReset = new bootstrap.Modal(document.getElementById("resetModal"));
const modalWinner = new bootstrap.Modal(document.getElementById("winnerModal"));

// Show name modal when page loads
document.addEventListener("DOMContentLoaded", () => {
  modalPlayer.show();
});

// Validate player names and start game
function startGame() {
  const p1 = document.getElementById("player1Name").value.trim();
  const p2 = document.getElementById("player2Name").value.trim();

  if (p1 === "" || p2 === "") {
    document.getElementById("nameError").style.display = "block";
    return;
  }

  player1Display.textContent = p1;
  player2Display.textContent = p2;

  modalPlayer.hide();
  document.getElementById("scoreboard").style.display = "block";

  modalStart.show();

  // Reset any previous scores
  score1 = 0;
  score2 = 0;
  score1Display.textContent = "0";
  score2Display.textContent = "0";
}

// Add point and check winner
function addPoint(player) {
  if (player === 1) score1++;
  if (player === 2) score2++;

  score1Display.textContent = score1;
  score2Display.textContent = score2;

  // --- Victory condition ---
  if (score1 === 3) {
    declareWinner(player1Display.textContent);
  } else if (score2 === 3) {
    declareWinner(player2Display.textContent);
  }
}

// Show reset confirmation modal
function askReset() {
  modalReset.show();
}

// Reset scores only (not names)
function resetGame() {
  score1 = 0;
  score2 = 0;

  score1Display.textContent = "0";
  score2Display.textContent = "0";

  modalReset.hide();
}

// --- Winner function ---
function declareWinner(winnerName) {
  document.getElementById("winnerName").textContent = winnerName;
  modalWinner.show();
}

// Start a NEW game (with new names)
function newMatch() {
  score1 = 0;
  score2 = 0;
  score1Display.textContent = "0";
  score2Display.textContent = "0";

  modalWinner.hide();
  modalPlayer.show();
}
