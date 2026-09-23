//Gökhan accordion

document.addEventListener("DOMContentLoaded", function () {
    let lastChecked = null; 


    // Ansluter till html klassen "input-radio"
    const radioButtons = document.querySelectorAll('.input-radio');


    // Det som gör att det klick functionen går igång
    radioButtons.forEach(radio => {
        radio.addEventListener('click', function () {
            

            //Går igång ifall jag klickar på samma radio 2 gånger, tex A sen klickar A igen
            if (radio === lastChecked) {
                radio.checked = false;

                //Gör att jag kan fortsätta öppna accordions, resetar minnet kan man säga
                lastChecked = null; 
            } else {
                
                //Går igång ifall jag går från radio A till radio B, så denna delen hanterar byten
                lastChecked = radio;
            }
        });
    });
});