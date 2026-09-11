document.addEventListener("DOMContentLoaded", function () {
    let lastChecked = null; 

    const radioButtons = document.querySelectorAll('.input-radio');

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