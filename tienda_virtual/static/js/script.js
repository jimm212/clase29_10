document.addEventListener("DOMContentLoaded", function(){
    var nav_links = document.querySelectorAll("nav a");

    nav_links.forEach(function(link){
        link.addEventListener("mouseover", function(){
            link.style.backgroundColor = "yellow"; 
        });
        
        link.addEventListener("mouseout", function(){
            link.style.backgroundColor = "red"; 
        });
    });

    const alert_button = document.getElementById('show-alert');

    alert_button.addEventListener('click', function(){
        alert('Has presionado el Botón');
    })

});
