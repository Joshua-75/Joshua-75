/*
on a définit un filtre personnalisé appelé "devise"
La méthode toFixed() permet de formater en notation à point-fixe
Syntaxe : numObj.toFixed([nbChiffres])
Exemple : 
function calc (x) { return Number.parseFloat(x).toFixed(2); } 
console.log(calc(569));// Output : 569.00

 */
Vue.filter('devise', function(valeur) {
    return '€' + valeur.toFixed(2);
});

var mv = new Vue({
    el: "#main",
    data: {
        services: [{
            nom: 'Développement Web',
            prix: 300,
            active: true
        }, {
            nom: 'Design',
            prix: 400,
            active: false
        }, {
            nom: 'Integration',
            prix: 250,
            active: false
        }, {
            nom: 'Gestion De Projet',
            prix: 220,
            active: false
        }, {
            nom: 'Scrum Master',
            prix: 350,
            active: false
        }, ]
    },
    methods: {
        toggleActive: function(s) {
            s.active = !s.active;
        },
        total: function() {
            var total = 0;
            this.services.forEach(function(s) {
                if (s.active) {
                    total += s.prix;
                }
            });
            return total;
        }
    }
});