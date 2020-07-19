//import lol from './filtrar.js';
import lol from './data/lol/lol.js';
const dataLol = Object.values(lol.data);

let champions = '';
const allFiles = document.getElementById('root');
function showChampions (){
    for (let i = 0; i < dataLol.length; i++) {
        let file = document.createElement('section');
        file.setAttribute('class','file');
        champions =
        `<div class='splashSection'><img src='${dataLol[i].splash}'></div>
        <section id= 'textFile' class='textFile'>
        <h1> ${(dataLol[i].name).toUpperCase()} </h1>
        <h3> ${(dataLol[i].title).toUpperCase()} </h3>
        <h4>${dataLol[i].tags} </h4>
        <p> ${dataLol[i].blurb} </p>
        </section>`;
        allFiles.appendChild(file);
        console.log(file)
        file.innerHTML = champions;

    };
};
showChampions();



// console.log (datos);
//let initList = datos.allCards();
//let finList = [];
// const menuBtn = document.getElementById("buttonEnter");
const A_Z = document.getElementById("A_Z");
const Z_A = document.getElementById("Z_A");
const filtTank = document.getElementById("Tank");
const filtAsesino = document.getElementById("assassinBtn");
const filtMage = document.getElementById("mageBtn");
const filtFighter = document.getElementById("fighterBtn");
const filtMarksman = document.getElementById("Marksman");
const filtSupport = document.getElementById("supportBtn");
const filtro = document.getElementById("tags");

filtTank.addEventListener ("click", function(){
    let tank = document.getElementById("tankBtn").value;
    
});
filtAsesino.addEventListener ("click", function(){

});
filtMage.addEventListener ("click", function(){

});
filtFighter.addEventListener ("click", function(){

});
filtMarksman.addEventListener ("click", function(){

});
filtSupport.addEventListener ("click", function(){

});

//<!-----------------------------filtro de la A - Z-------------------------->
// A_Z.addEventListener("click", filtrar_A_Z);
// function filtrar_A_Z(){
//     finList = initList.sort(datos.A_Z);
//     fillDashboard(finList);
// }

// Z_A.addEventListener("click", filtrart_Z_A);
// function filtrart_Z_A(){
//     finList = initList.sort(datos.Z_A);
//     fillDashboard(finList);
// }

//<!-------------------------------- ROLE FILTERS ------------------------------------>
document.getElementById("tankBtn").addEventListener("click", function roleTank() {
    console.log("holi")
  finList = initList.filter(champ => champ.tags.includes("Tank"));
    fillDashboard(finList);
});

// document.getElementById("assassinBtn").addEventListener("click", function roleAssassin() {
//     finList = initList.filter(champ => champ.tags.includes("Assassin"));
//     fillDashboard(finList);
// });

// document.getElementById("mageBtn").addEventListener("click", function roleMage() {
//     finList = initList.filter(champ => champ.tags.includes("Mage"));
//     fillDashboard(finList);
//});

// document.getElementById("fighterBtn").addEventListener("click", function roleFighter() {
//     finList = initList.filter(champ => champ.tags.includes("Fighter"));
//     fillDashboard(finList);
//});

// document.getElementById("marksmanBtn").addEventListener("click", function roleMarksman() {
//     finList = initList.filter(champ => champ.tags.includes("Marksman"));
//     fillDashboard(finList);
//});

// document.getElementById("supportBtn").addEventListener("click", function roleSupport() {
//     finList = initList.filter(champ => champ.tags.includes("Support"));
//     fillDashboard(finList);
//});

// <!-- -------------------------filtro por Dificultad------------------------------------>
// filtro.addEventListener("click", difficulty);
// function difficulty(){
//     const filterItems = query => {
//         return fruits.filter((el) =>
//           el.toLowerCase().indexOf(query.toLowerCase()) > -1
//         );
//       }
//     if(champ => champ.difficulty <= 4){
//         const difficultyEasy;
//         difficultyEasy = initList.filter(champ => champ.difficulty <= 4);
//         console.log(filterItems('difficultyEasy')); // ['easy']
//     }
//     else if (champ => champ.difficulty >= 5) {
//         const difficultyMiddle;
//         difficultyMiddle = initList.filter(champ => champ.difficulty >= 5);
//         console.log(filterItems('difficultyMiddle')); // ['middle']
//     }else if(champ => champ.difficulty >=8){
//         const difficultyHard;
//         difficultyHard = initList.filter(champ => champ.difficulty >=8);
//         console.log(filterHard('diffficultyHard')); //['Hard']
//     }
// }



// crear funcion que oculte el resto de rol o dificultades al momento de filtrar.


//console.log(example, data);


/*aqui debe ir el html dinamico*/