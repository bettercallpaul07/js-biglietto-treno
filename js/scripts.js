const km = prompt('Quanti kilometri dovrai percorrere?');
const age = prompt('Qual è la tua età?');
let cpk = km * 0.21;
let newcpk = 1;
let discount = ""
let savedprice = 0;


if (age < 18 ) {
    newcpk = cpk*0.80;
    discount = "Complimenti, hai diritto ad uno sconto del 20% sul prezzo del biglietto;"
    savedprice = cpk*0.20;
    savedprice = savedprice.toFixed(2) + '€'
    cpk = cpk + '€'

    document.getElementById("nodiscountprice").innerHTML ="Prezzo del biglietto senza sconto: " + cpk;
    document.getElementById("savedprice").innerHTML = discount + " hai risparmiato: " + savedprice;

}

else if  (age >= 65) {
    newcpk = cpk*0.60;
    discount = "Complimenti, hai diritto ad uno sconto del 40% sul prezzo del biglietto;"
    savedprice = cpk*0.40;
    savedprice = savedprice.toFixed(2) + '€'
    cpk = cpk + '€'

    document.getElementById("nodiscountprice").innerHTML ="Prezzo del biglietto senza sconto: " + cpk;
    document.getElementById("savedprice").innerHTML = discount + " hai risparmiato: " + savedprice;
}

else {
    newcpk = cpk;
    console.log(newcpk);
}

newcpk = newcpk.toFixed(2) + '€';


document.getElementById('km').innerHTML = km;
document.getElementById('age').innerHTML = age;
document.getElementById('cpk').innerHTML = newcpk;
document.getElementById('cpkid').innerHTML = newcpk;




