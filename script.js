function applyParallax(x, y) {

  document.querySelector('h1').style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;

    document.querySelector('h2').style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
  ;
}

/* Desktop mouse parallax */

document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 50;
  const y = (e.clientY / window.innerHeight - 0.5) * 50;

  applyParallax(x, y);
});

// ===== Button Interactions =====
const yesBtn = document.querySelector('.btn.yes');
const backBtn = document.querySelector('.btn.back');
const noBtn = document.querySelector('.btn.no');
const container = document.querySelector('.btn-container');
const audio = new Audio('pics/sound.mp3'); // replace with your sound file
audio.loop = true;

if (backBtn) {
  backBtn.addEventListener('click', () => {
    // Navigate back to the main page
    window.location.href = 'index.html'; // change if your main page has a different name
  });
}

// YES button: go to thank you page
yesBtn.addEventListener('click', () => {
  window.location.href = 'thankyou.html'; // redirect to separate page
});

noBtn.addEventListener("mouseenter", () => {

  // Play sound
  audio.currentTime = 0;
  audio.play();

  // Get screen size
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  // Random position
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  // Move button
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

noBtn.addEventListener("mouseleave", () => {
  audio.pause();
  audio.currentTime = 0;
});

