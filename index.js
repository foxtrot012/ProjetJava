/*
const valC = document.getElementById("toucheC").innerHTML;
const valCE = document.getElementById("toucheCE").innerHTML;
const valsup = document.getElementById("touchesup").innerHTML;
const valx = document.getElementById("touchex").innerHTML;
const val1 = document.getElementById("touche1").innerHTML;
const val2 = document.getElementById("touche2").innerHTML;
const val3 = document.getElementById("touche3").innerHTML;
const val4 = document.getElementById("touche4").innerHTML;
const val5 = document.getElementById("touche5").innerHTML;
const val6 = document.getElementById("touche6").innerHTML;
const val7 = document.getElementById("touche7").innerHTML;
const val8 = document.getElementById("touche8").innerHTML;
const val9 = document.getElementById("touche9").innerHTML;
const val0 =document.getElementById("touche0").innerHTML;
const valplus = document.getElementById("toucheplus").innerHTML;
const valmoins = document.getElementById("touchemoins").innerHTML;
const valdiv = document.getElementById("touchediv").innerHTML;
const valpouc = document.getElementById("touchepouc").innerHTML;
const valvir = document.getElementById("touchevir").innerHTML;
const valegal = document.getElementById("toucheegal").innerHTML;
const valecran = document.getElementById("ecran").innerHTML;

function fonction1(){
    document.getElementById("ecran").innerHTML = val1;
}
function fonction2(){
    document.getElementById("ecran").innerHTML = val2;
}
function fonction3(){
    document.getElementById("ecran").innerHTML = val3;
}
function fonction4(){
    document.getElementById("ecran").innerHTML = val4;
}
function fonction5(){
    document.getElementById("ecran").innerHTML = val5;
}
function fonction6(){
    document.getElementById("ecran").innerHTML = val6;
}
function fonction7(){
    document.getElementById("ecran").innerHTML = val7;
}
function fonction8(){
    document.getElementById("ecran").innerHTML = val8;
}
function fonction9(){
    document.getElementById("ecran").innerHTML = val9;
}
function fonction10(){
    document.getElementById("ecran").innerHTML = val0;
}*/

let ecrann = document.getElementById("ecran");

function ajouter(valeur) {
    let dernierCaractere = ecrann.value.slice(-1); // Récupère le dernier caractère

    // Vérifier si deux opérateurs se suivent
    if ("+-*/.".includes(dernierCaractere) && "+-*/.".includes(valeur)) {
        return; // Bloque l'ajout si deux opérateurs se suivent
    }
    ecrann.value += valeur;
}

function calculer() {
    try {
        ecrann.value = new Function("return " + ecrann.value)();
    } catch (e) {
        ecrann.value = "Erreur";
    }
}

function effacer() {
    ecrann.value = "";
}

function supprimer() {
    ecrann.value = ecrann.value.slice(0, -1);
}



 counter = document.getElementById("compteur");
 button = document.getElementById("incrementButton");

let count = 0;

button.addEventListener("click", function() {
    count++;
    counter.textContent = count;
});
