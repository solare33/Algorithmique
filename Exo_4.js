let poids = 80;
let taille = 1.75;

let imc = poids / (taille * taille);

console.log("IMC :", imc.toFixed(1));

if (imc < 18.5) {
  console.log("Insuffisance ponderale");
} else if (imc < 24.9) {
  console.log("Poids normal");
} else if (imc < 29.9) {
  console.log("Surpoids");
} else {
  console.log("Obesite");
}
