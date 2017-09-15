function dropDown() {
  document.getElementsByClassName("dropdown-nav")[0].classList.toggle("dropdown-nav-show");
  document.getElementsByClassName("dropbtn")[0].classList.toggle("dropbtn-show");
  document.getElementsByClassName("dropdown-menu")[0].classList.toggle("dropdown-menu-show");
}

window.onclick = function(event) {
  if (!event.target.matches(".dropbtn")) {

    var dropdownNav = document.getElementsByClassName("dropdown-nav")[0];
    if (dropdownNav.classList.contains("dropdown-nav-show")) {
      dropdownNav.classList.remove("dropdown-nav-show");
    }
    var dropbtn = document.getElementsByClassName("dropbtn")[0];
    if (dropbtn.classList.contains("dropbtn-show")) {
      dropbtn.classList.remove("dropbtn-show");
    }
    var dropdownMenu = document.getElementsByClassName("dropdown-menu")[0];
    if (dropdownMenu.classList.contains("dropdown-menu-show")) {
      dropdownMenu.classList.remove("dropdown-menu-show");
    }
  }
}
