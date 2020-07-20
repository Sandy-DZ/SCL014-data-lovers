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
        //console.log(file)
        file.innerHTML = champions;

        /*<div class "hab">// esta dando error si se agregan las habilidades, no muestra más allá de amumu
        habilidad: <img src='${dataLol[i].skill[i].img}'>
        <img src='${dataLol[i].skill[i].img}'>
        <img src='${dataLol[i].skill[i].img}'>
        <img src='${dataLol[i].skill[i].img}'>
        <img src='${dataLol[i].skill[i].img}'></div>
        </section>`;*/
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










// document.getElementById("tankBtn").addEventListener("click", function roleTank() {
//     let list = document.getElementById("root");
//     let listedElements = list.getElementsByTagName("section");
//     const totalElements = listedElements.length;
//     for (i = 0; i < totalElements; i++) {
//         let element = listedElements[i].getElementsByTagName("h4")[0];
//         console.log(element);

//         let elementValue = element.textContent || element.innerText;
        
//         if (elementValue="Tanque") {
            
//             listedElements[i].style.display = "";
            
//         } else {
//             listedElements[i].style.display = "none";
//         }
//     }
// });

/*
filtAsesino.addEventListener ("click", function(){

});
filtMage.addEventListener ("click", function(){

});
filtFighter.addEventListener ("click", function(){

});
filtMarksman.addEventListener ("click", function(){

});
filtSupport.addEventListener ("click", function(){

});*/

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



 //<!-- -------------------------filtro por Dificultad------------------------------------>
//  filtro.addEventListener("click", difficulty);
//  function difficulty(){
     
//     if(champ => champ.difficulty = 1){
//         const difficultyEasy;
//         difficultyEasy = initList.filter(champ => champ.difficulty = 1);
//         console.log(filterItems('difficultyEasy')); // ['easy']
//     }
//     else if (champ => champ.difficulty = 2) {
//         const difficultyMiddle;
//         difficultyMiddle = initList.filter(champ => champ.difficulty = 2);
//         console.log(filterItems('difficultyMiddle')); // ['middle']
//     }else if(champ => champ.difficulty =3){
//         const difficultyHard;
//         difficultyHard = initList.filter(champ => champ.difficulty =3);
//         console.log(filterHard('diffficultyHard')); //['Hard']
//     }
// }



// crear funcion que oculte el resto de rol o dificultades al momento de filtrar.


//console.log(example, data);


/*aqui debe ir el html dinamico*/