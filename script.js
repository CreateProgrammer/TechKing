
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

// Contact form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    return;
  }

  const recipient = "YOUR_EMAIL@example.com";
  const subject = encodeURIComponent("Portfolio enquiry from " + name);
  const body = encodeURIComponent(
    "Name: " + name +
    "\nEmail: " + email +
    "\n\nMessage:\n" + message
  );

  document.getElementById("formStatus").textContent =
    "Opening your email application...";

  window.location.href =
    `mailto:${recipient}?subject=${subject}&body=${body}`;
});
