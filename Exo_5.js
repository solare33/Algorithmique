let longueur = 6;
let largeur = 5;
let hauteur = 3;

let surfaceNette = (longueur + largeur) * 2 * hauteur * 0.8;
let nombrePots = Math.ceil(surfaceNette / 10);
let prixTotal = nombrePots * 29.9;

console.log("Surface nette:", surfaceNette);
console.log("Nombre de pots:", nombrePots);
console.log("Prix total:", prixTotal);
