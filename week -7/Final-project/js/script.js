// script.js - Shared JavaScript functions for MUET University Portal

// Smooth scroll behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Navbar active state management
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setActiveNavLink();
});

// Utility function for showing alerts
function showAlert(message, type = 'success') {
  const alertContainer = document.getElementById('alertContainer');
  if (!alertContainer) return;

  alertContainer.innerHTML = '';

  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
  alertDiv.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  `;

  alertContainer.appendChild(alertDiv);

  // Auto-hide after 5 seconds
  setTimeout(() => {
    if (alertDiv.parentNode) {
      alertDiv.remove();
    }
  }, 5000);
}

// Console log for debugging
console.log('MUET University Portal loaded successfully');