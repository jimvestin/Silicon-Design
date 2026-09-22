//Gökhan accordion

document.addEventListener("DOMContentLoaded", function () {
    let lastChecked = null; 


    // Ansluter till html klassen "input-radio"
    const radioButtons = document.querySelectorAll('.input-radio');


    // Det som gör att det klick functionen går igång
    radioButtons.forEach(radio => {
        radio.addEventListener('click', function () {
            
            if (radio === lastChecked) {
                radio.checked = false;
                lastChecked = null; 
            } else {
                
                lastChecked = radio;
            }
        });
    });
});