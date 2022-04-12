
let app = {
    houses: [
        'anthorvus',
        'darioptera',
        'lustrix',
        'maxopus'
    ],
    init: function() {

       app.bubble = document.querySelector('.speech');
       app.form = document.querySelector('form'); 
       app.input = document.querySelector('.name');

       app.form.addEventListener('submit', app.handleSubmit);
        
    }, 
    handleSubmit: function(event) {
        event.preventDefault();

        let message;
        let name = app.input.value.trim();
        //vérifier que le champ n'est pas vide
        if(name.length == 0) {
            message = "Ça ne fonctionne qu'avec un nom de sorcier, Moldu !";
        } else {
            // Si un nom a été tapé, alors on exécute la méthode sortStudent et on stocke son résultat.
            message = app.sortStudent();
        }

        // Enfin, on écrit le résultat dans la bulle du choixpeau
        app.writeBubble(message);
    },

    // Méthode qui tire au sort une maison et génère une image d'après le nom de la maison.
    sortStudent: function() {
        
        const random = Math.floor(Math.random() * (4 - 0) + 0);
        let image = '<img src="images/' + app.houses[random] + '.png" />';

        return image;

    },
    // Méthode qui remplace le contenu de la bulle par le contenu passé en argument.
    writeBubble: function (content){
        app.bubble.innerHTML = content;
    }
}

document.addEventListener('DOMContentLoaded', app.init);