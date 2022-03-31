// On va crée une instance de Vue et on va lui passer un objet d'options

var mv = new Vue({
    el: "#app",
    data: {
        show_infobulle: false,
        text_content: "Ecrivez quelque chose ici"
    },
    methods: {
        hideInfobulle: function() {
            //si le modèle a été changé , la vue va etre automatiquement mise à jour
            this.show_infobulle = false;
        },
        toggleInfobulle: function() {
            this.show_infobulle = !this.show_infobulle;
            //si show_infobulle est false => vraie sinon => false
        }
    }
})