document.addEventListener('DOMContentLoaded', function() {
    var navbarBrand = document.querySelector('.navbar-brand');
    var navbarCenter = document.getElementById('navbarToggle');

    navbarBrand.addEventListener('click', function(event) {
        event.preventDefault(); 
        navbarCenter.classList.toggle('open');
    });
});
