console.log("Sidan laddad");

// Markera aktiv länk
const links = document.querySelectorAll('nav a');
links.forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// Scroll till bokning (exempel)
function scrollToBooking() {
  const bookingSection = document.querySelector('.booking');
  if(bookingSection) bookingSection.scrollIntoView({behavior: 'smooth'});
}
