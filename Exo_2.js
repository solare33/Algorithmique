let prixHT = 100;
let tauxTVA = 20;
let pourcentageRemise = 10;

let montantTVA = prixHT * (tauxTVA / 100);
let prixTTC = prixHT + montantTVA;
let montantRemise = prixTTC * (pourcentageRemise / 100);
let prixFinal = prixTTC - montantRemise;

console.log("Montant de la TVA:", montantTVA);
console.log("Prix TTC:", prixTTC);
console.log("Montant de la remise:", montantRemise);
console.log("Prix final après remise:", prixFinal);
