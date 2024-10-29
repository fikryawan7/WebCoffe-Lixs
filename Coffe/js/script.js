// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
if (hamburgerMenu && navbarNav) {
  hamburgerMenu.onclick = () => {
    navbarNav.classList.toggle('active');
  };
}

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
const searchButton = document.querySelector('#search-button');

if (searchButton && searchForm && searchBox) {
  searchButton.onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
  };
}

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

if (shoppingCartButton && shoppingCart) {
  shoppingCartButton.onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
  };
}

// Klik di luar elemen untuk menutup
document.addEventListener('click', function (e) {
  if (hamburgerMenu && navbarNav && !hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (searchButton && searchForm && !searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (shoppingCartButton && shoppingCart && !shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const closeModalIcon = document.querySelector('.modal .close-icon');

if (itemDetailModal && closeModalIcon) {
  itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal.style.display = 'flex';
      e.preventDefault();
    };
  });

  // klik tombol close modal
  closeModalIcon.onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
  };

  // klik di luar modal untuk menutup
  window.onclick = (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = 'none';
    }
  };
}
