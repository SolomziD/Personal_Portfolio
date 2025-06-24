/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

//script

// Theme toggle logic
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  let dark = true;

  toggle.addEventListener("click", () => {
    dark = !dark;
    body.style.backgroundColor = dark ? "#121212" : "#f0f0f0";
    body.style.color = dark ? "#f5f5f5" : "#121212";
    toggle.textContent = dark ? "🌙" : "☀️";
  });

  // Animate progress bars
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});

