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
const modalPush = new bootstrap.Modal(document.getElementById("pushModal"));

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

  // 🔄 Mise à jour des noms des boutons Buzz
  document.getElementById("player1BuzzLabel").textContent = p1;
  document.getElementById("player2BuzzLabel").textContent = p2;

  modalPlayer.hide();
  document.getElementById("scoreboard").style.display = "block";

  modalStart.show();

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

  if (score1 === 3) declareWinner(player1Display.textContent);
  if (score2 === 3) declareWinner(player2Display.textContent);
}

// Sub point
function subPoint(player) {
  if (player === 1) score1--;
  if (player === 2) score2--;

  if (score1 < 0) score1 = 0;
  if (score2 < 0) score2 = 0;

  score1Display.textContent = score1;
  score2Display.textContent = score2;
}

// Show reset confirmation modal
function askReset() {
  modalReset.show();
}

// Reset scores
function resetGame() {
  score1 = 0;
  score2 = 0;

  score1Display.textContent = "0";
  score2Display.textContent = "0";

  modalReset.hide();
}

function declareWinner(name) {
  document.getElementById("winnerName").textContent = name;
  modalWinner.show();
}

function newMatch() {
  score1 = 0;
  score2 = 0;
  score1Display.textContent = "0";
  score2Display.textContent = "0";

  modalWinner.hide();
  modalPlayer.show();
}

// 🔔 Buzz button
function playerPressed(player) {
  const name =
    player === 1 ? player1Display.textContent : player2Display.textContent;

  document.getElementById("pressedPlayerName").textContent = name;

  modalPush.show();
}
