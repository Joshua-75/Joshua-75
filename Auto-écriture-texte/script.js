const text = "XXXTentacion - « Nous sommes tous en train de livrer des batailles dont personne ne sait rien. »";

let index = 0;

const writeText = () => {
    document.body.innerText = text.slice (0, index); //Le texte à l'intérieur passera de 0 à l'index

    index++;

    if (index > text.length - 1) { // Si l'index est supérieur à la longueur du texte
        index = 0; // Faire en sorte que l'index soit à zéro
    }
}

setInterval(writeText, 100); //Ecrire du texte toutes les 100 millisecondes