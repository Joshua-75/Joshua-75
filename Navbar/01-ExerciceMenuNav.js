// créer une nouvelle instance de Vue

var mv = new Vue({
    //Element DOM
    el: "#app",
    //Définition des proprietés et leurs initialisés
    data: {
        active: 'accueil'
    },
    //les fonction qu'on va utiliser
    methods: {
        isActive: function(el) {
            // Lorsqu'un modèle est modifié, la vue est automatiquement mise à jour
            this.active = el;
        }
    }
});