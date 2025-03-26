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

function showTab(tabName) {
  // Get all the tab buttons
  const tabs = document.querySelectorAll('.uspr-tab-control');
  tabs.forEach(tab => {
      tab.classList.remove('active');  // Remove the 'active' class from all tabs
  });

  // Set the active tab
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  activeTab.classList.add('active');

  // Get the "Add" button
  const addButton = document.getElementById('serverOpen');
  
  // Logic to hide/show the "Add" button
  if (tabName === 'bk-Reports') {
      addButton.style.display = 'none';  // Hide "Add" button when "Reports" tab is clicked
  } else if (tabName === 'bk-Settings') {
      addButton.style.display = 'flex';  // Show "Add" button when "Settings" tab is clicked
  }
}
