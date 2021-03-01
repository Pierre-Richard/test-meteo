let ville = 'Paris';
// appeler la fonction recevoirTemperature(ville)
recevoirTemperature(ville);
// test

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
     ville = prompt('Quel ville souhaitez-vous voir');
     recevoirTemperature(ville);
}) 
function recevoirTemperature(ville){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=9420bd22441e9202533ec5fa59ef26e3&units=metric';
    let requete = new XMLHttpRequest();
    requete.open('GET' , url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        if(requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
                console.log(ville +' '+ temperature);
            }
            else {
                alert('Un probleme est survenue, merci de revenir plus tard.');
            }

        }
    }
}



