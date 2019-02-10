var naruceno = localStorage.getItem('naruceno');
var naruceno1 = JSON.parse(naruceno);

console.log(naruceno1);

var komCvet = document.getElementsByClassName('komada');
var cena = document.getElementsByClassName('proizvod');
var ukCena = document.getElementById('ukupna');
var red = document.getElementsByTagName('tr');
var buket = naruceno1.buket;

for (i = 0; i < komCvet.length; i++) {
    cvet = buket[i];
    komCvet[i].value = cvet.kolicina;

    if (cvet.kolicina < 1) {
        red[i].hidden = true;
    }
    cena[i].value = cvet.cena;
}
ukCena.value = naruceno1.ukupnaCena;


function dostavaplus() {
    var dostava = document.getElementById('dostava');
    let cenaSaDostavom = JSON.parse(naruceno1.ukupnaCena) + 500;
    ukCena.value = dostava.checked ? cenaSaDostavom : naruceno1.ukupnaCena;
}
function skladiste2() {
    var user = document.getElementById('ime');
    sessionStorage.setItem('korisnik', JSON.stringify(user.value));

    var kartica = document.getElementsByName('creditcard');
    for (i = 0; i < kartica.length; i++) {
        if (kartica[i].checked == true) {

            sessionStorage.setItem('kartica', JSON.stringify(kartica[i].id));
        }
    }

    var dostava = document.getElementById('dostava');
    sessionStorage.setItem('dostava', dostava.checked)
}



