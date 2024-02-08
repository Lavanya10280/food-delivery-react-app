document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('header');
  const logoContainer = document.querySelector('.logo-container');
  const navLinks = document.querySelectorAll('nav a');
  const searchBox = document.querySelector('.search-box');
  const cartLink = document.querySelector('#cartLink');

  // Apply styles to header
  header.style.backgroundColor = '#8e8282';
  header.style.padding = '15px';
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';

  // Apply styles to logo container
  logoContainer.style.display = 'flex';
  logoContainer.style.alignItems = 'center';
  logoContainer.style.marginRight = '10px';

  // Apply styles to navigation links
  navLinks.forEach(link => {
    link.style.textDecoration = 'none';
    link.style.color = '#333';
    link.style.margin = '0 15px';
    link.style.fontSize = '18px';
    link.style.fontWeight = 'bold';
    link.style.padding = '15px';
    link.style.borderRadius = '5px';
  });

  // Apply styles to search box
  searchBox.style.padding = '10px';
  searchBox.style.width = '250px';
  searchBox.style.backgroundColor = 'black';
  searchBox.style.color = 'white';
  searchBox.style.border = 'none';
  searchBox.style.borderRadius = '5px';
  searchBox.style.outline = 'none';

  // Apply styles to cart link
  cartLink.style.padding = '15px';
  cartLink.style.borderRadius = '5px';
});
