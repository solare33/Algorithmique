let totalSecondes = 3661;

let heures = Math.floor(totalSecondes / 3600);
let minutes = Math.floor((totalSecondes % 3600) / 60);
let secondes = totalSecondes % 60;

console.log("Résultat:", heures + "h", minutes + "m", secondes + "s");
