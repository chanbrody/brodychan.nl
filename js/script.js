// Detect if dark mode is already set in local storage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
  
  const toggleButton = document.getElementById('dark-mode-toggle');
  
  // Toggle the dark mode class on the body
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  
    // Save the user's preference in local storage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('dark-mode', 'enabled');
    } else {
      localStorage.setItem('dark-mode', 'disabled');
    }
  });
  