function showTab(tabId) {
  // Remove active class from all tab contents
  document.querySelectorAll('.tab-content').forEach(content => {
    content.classList.remove('active');
  });

  // Remove active class from all buttons
  document.querySelectorAll('.uspr-tab-control').forEach(button => {
    button.classList.remove('active');
  });

  // Add active class to the selected tab content
  document.getElementById(tabId)?.classList.add('active');

  // Add active class to the clicked button
  const activeButton = document.querySelector(`.uspr-tab-control[data-tab="${tabId}"]`);
  if (activeButton) {
    activeButton.classList.add('active');
  }

  // Dynamically update the navbar title
  const navbarTitle = document.getElementById('navbar-title');
  if (activeButton && navbarTitle) {
    navbarTitle.textContent = activeButton.textContent; // Set the title to the clicked button's text
  }
}