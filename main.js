import './style.css'
import lista from './dolgozok.json'

/*document.addEventListener('DOMContentLoaded',fv);

function init(){
  //.....
}



/*document.addEventListener('DOMContentLoaded', function (){
  console.log("Anonim függvény");
});

const arrowFunction = (prameter1, parameter2) => {
  //utasitas1
  //utasitas2
  //utasitas3
}

document.addEventListener('DOMContentLoaded', () => {
  const gomb = document.getElementById('btn');
  gomb.addEventListener('click', () => {
    alert('Hello world!');
  });
})

// DRY - Don't repeat yourself!
const lista = [];

lista.push({
  vezetekNev: 'Gibsz',
  keresztNev: 'Jakab',
  eletkor: 21
});

lista.push({
  vezetekNev: 'Teszt',
  keresztNev: 'Elek',
  eletkor: 19
});

lista.push({
  vezetekNev: 'Német',
  keresztNev: 'Bálint',
  eletkor: 23
});

//const idosebbMint20 = lista.filter(szemely => szemely.eletkor > 20);
const idosebbMint20 = lista.filter((szemely) => {
  return szemely.eletkor > 20
});

const idosebbmint20Gipsz = lista.filter((szemely => szemely.eletkor > 20 && szemely.vezetekNev == 'Gipsz'));

// összes teljes név
const nevek = lista.filter(szemely => {
  return szemely.vezetekNev + ' '+ szemely.keresztNev;
});

console.log(nevek);

// 20 évnél idősebbek teljes neve .filter majd .map

const idosebbMint20TeljesNevuk = lista
.filter(szemely => szemely.eletkor > 20)
.map(szemely => szemely.vezetekNev + ' '+ szemely.keresztNev);

console.log(idosebbMint20TeljesNevuk);

//filter és map nem módosít az eredetin


Tiszta függvény - Pure function
- nem hivatkozik globális vátozóra
- viselkedését a paraméterei fogják meghatározni
- nem használ fel globális változót, nem módosítja azok értékét
*/

const ferfiak = lista.filter(dolgozok => dolgozok.nem == 'férfi').length;
console.log(ferfiak);

const nok = lista.filter(dolgozok => dolgozok.nem == 'nő').length;
console.log(nok);

const fizetes = lista.filter(dolgozok => dolgozok.fizetes > 150000)
console.log(fizetes);

const nagy = lista.filter(dolgozok => dolgozok.nev.split(' ')[0] == 'Nagy');
console.log(nagy);

const kis = lista
.filter(dolgozok => dolgozok.kor < 18)
.map(dolgozok => {
  const obj = {
    nev: dolgozok.nev,
    fizetes: dolgozok.fizetes
  };
  return obj});
console.log(kis);