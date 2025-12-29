const tips = [
  "Look both ways before crossing the road.",
  "Keep emergency numbers saved on your phone.",
  "Avoid using your phone while walking on busy roads.",
  "Know the nearest safe place in your area."
];

function newTip() {
  const random = Math.floor(Math.random() * tips.length);
  document.getElementById("tip").textContent = tips[random];
}
