document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("myNavbar");
    var toggler = navbar.querySelector(".navbar-toggler");
    
    toggler.addEventListener("click", function() {
        if (navbar.classList.contains("expanded")) {
            navbar.style.height = "auto";
        } else {
            navbar.style.height = ""; // Setting an empty string will remove the height property
        }
        navbar.classList.toggle("expanded");
    });
});