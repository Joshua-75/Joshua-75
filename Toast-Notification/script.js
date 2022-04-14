const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener('click', () => {
    createNotification(); /** On souhaite crée une notification */
});

/** Création du composant de notification */
const createNotification = () => {
    const notif = document.createElement('div');
          notif.classList.add('toast');

          notif.innerText = "XXXTentacion - Look At Me !";
          
          container.appendChild(notif);/** Ajout à un conteneur de notification*/

          setTimeout(() => {
            notif.remove();
          }, 3000); // Après 3s le contenu appelé disparait

}