
function toggleSubMenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.classList.contains('active')) {
      submenu.classList.remove('active');
    } else {
      submenu.classList.add('active');
    }
  }