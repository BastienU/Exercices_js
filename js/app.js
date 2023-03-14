document.addEventListener("DOMContentLoaded", e => {
  console.log(e.target);
  //
  // Exercice 1 :   
  //  const reponse = prompt("Avez-vous des enfants ?");
  //
  //  if (reponse === "oui"){
  //      const nb = prompt("Combien en avez vous ?");
  //      if (nb == 1){
  //          alert ("C'est pour quand le deuxieme ?");
  //      } else if (nb <= 2){
  //          alert ("Quels beaux enfants");
  //      } else if (nb <= 3) {
  //          alert ("C'est fini les enfants ?");
  //      }
  //
  //  } else {
  //      alert ("Eh bah alors ?");
  //  }

  // Exercice 2 : 
  //let nombreUn = prompt("Entrez le premier prix")
  //nombreUn = parseFloat(nombreUn)
  //let nombreDeux = prompt("Entrez le deuxième prix")
  //nombreDeux = parseFloat(nombreDeux)
  //const taxe = 19.6
  //let total = 0
  //const total_tva = 0.196
  //
  //total = nombreUn + nombreDeux;
  //console.log("Total HT = ", total)
  //let ttc = total * total_tva
  //console.log("Total TTC = ", total + ttc)

  // Exercice 3 : 
  // Récupération du bouton et de l'élément contenant la valeur
  const Bouton = document.querySelector('#Bouton');
  //const valeur = document.querySelector('#valeur');

  //// Initialisation de la valeur à 0
  //let compteur = 0;
  //
  //// Ajout d'un écouteur d'événement sur le bouton
  //Bouton.addEventListener('click', () => {
  //  // Incrément de la valeur à chaque clic sur le bouton
  //  compteur++;
  //  // Mise à jour de l'élément contenant la valeur
  //  valeur.textContent = compteur;
  //});
  // Récupération du bouton

  // Initialisation de la valeur à true
  let valeur = true;

  // Ajout d'un écouteur d'événement sur le bouton
  Bouton.addEventListener('click', () => {
    // Inversion de la valeur à chaque clic sur le bouton
    valeur = !valeur;
    // Mise à jour de la propriété du bouton selon la nouvelle valeur
    Bouton.setAttribute('value', valeur);
    alert(valeur);
  });
});