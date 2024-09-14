document.addEventListener('DOMContentLoaded', function() {
    const dropdownTrigger = document.getElementById('dropdown-trigger');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const footerDropdownTrigger = document.getElementById('footer-dropdown-trigger');
    const footerDropdownMenu = document.getElementById('footer-dropdown-menu');
  
    dropdownTrigger.addEventListener('click', function() {
      dropdownMenu.classList.toggle('hidden');
    });
  
    footerDropdownTrigger.addEventListener('click', function() {
      footerDropdownMenu.classList.toggle('hidden');
    });
  });
  