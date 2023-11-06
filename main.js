import tomb from './quotes.json';

const abcszerint = Array.from(tomb.quotes).sort((a,b)=> {
    return a.author.localeCompare(b.author);
});
const idezet = Array.from(tomb.quotes).map(idez => `${idez.quote}`);
const Hosszaseged = Array.from(tomb.quotes).map(idez => `${idez.quote}`);
const darab = Array.from(tomb.quotes).map(idez => `${idez.author}`);
function init(){
  document.getElementById("Osszesidezet").addEventListener("click",Osszesidezet);
  document.getElementById("The").addEventListener("click",The);
  document.getElementById("Hossz").addEventListener("click",Hossz);
  document.getElementById("Darabszam").addEventListener("click",Darabszam);
}
function Darabszam(){
  const nev = document.getElementById("nev").value;
  let seged= 0;
  for(const t of darab){
    if(t==nev){
      seged++;
    }
  }
  Darabszam_html.value=seged;
}
function Hossz(){
  let seged = [];
  for(const t of Hosszaseged){
    seged.join(t.length);
  }
  let szoveghtml="";
  for(const i of darab){
    szoveghtml  = szoveghtml + `${i.length},`;
  }
  hossz_html.innerHTML=szoveghtml;
  
}
function The(){
  for(const t of idezet){
    const sor = document.createElement("li");
    const sortext = document.createTextNode(t);
    sor.appendChild(sortext);
    lista_html.appendChild(sor);
  }
}
function Osszesidezet(){
  table.innerHTML="<thead><tr><td>ID</td><td>Idézet</td><td>Név</td></tr></thead>";
  const tbody = document.createElement("tbody");
  for(const t of abcszerint){
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const cell2 = document.createElement("td");
    const cell3 = document.createElement("td");
    const celltext1 = document.createTextNode(t.id);
    const celltext2 = document.createTextNode(t.quote);
    const celltext3 = document.createTextNode(t.author);
    cell.appendChild(celltext1);
    cell2.appendChild(celltext2);
    cell3.appendChild(celltext3);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
}
document.addEventListener("DOMContentLoaded",init);