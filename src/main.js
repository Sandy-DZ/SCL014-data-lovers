/*jQuery('document').ready(function($){
    let menuBtn = $('.menu-icon');
    menu = $('.navigation dl');
    });
    menuBtn.click(function(){
        if(menu.hasClass('show')){
        menu.removeClass(´show');
        }else{
        menu.addclass('show');
        }
    });
});
*/


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
        `<h1 class='' id=''> ${dataLol[i].name} </h1>
        <h3> ${dataLol[i].title} </h3>
        <p> ${dataLol[i].blurb} </p>
        <p> ${dataLol[i].tags} </p>
        
        <img src='${dataLol[i].splash}'>`;
        allFiles.appendChild(file);
        file.innerHTML = champions;

    };
};
showChampions();

// console.log (datos);
// let initList = datos.allCards();
// let finList = [];
// const menuBtn = document.getElementById("buttonEnter");
// const A_Z = document.getElementById("A_Z");
// const Z_A = document.getElementById("Z_A");
// const filtTank = document.getElementById("Tank");
// const filtAsesino = document.getElementById("Assassin");
// const filtMage = document.getElementById("Mage");
// const filtFighter = document.getElementById("Fighter");
// const filtMarksman = document.getElementById("Marksman");
// const filtSupport = document.getElementById("Support");
// const filtro = document.getElementById("tags");
/*
//<!-----------------------------filtro de la A - Z-------------------------->
A_Z.addEventListener("click", filtrar_A_Z);
function filtrar_A_Z(){
    finList = initList.sort(datos.A_Z);
    fillDashboard(finList);
}

Z_A.addEventListener("click", filtrart_Z_A);
function filtrart_Z_A(){
    finList = initList.sort(datos.Z_A);
    fillDashboard(finList);
}

//<!-------------------------------- filtro por Roles ------------------------------------>
filtTank.addEventListener("click", rolTank);
function rolTank(){
    finList = initList.filter(champ => champ.tags.includes("Tank"));
    fillDashboard(finList);
}

filtAsesino.addEventListener("click", rolAssassin);
function rolAssassin(){
    finList = initList.filter(champ => champ.tags.includes("Assassin"));
    fillDashboard(finList);
}

filtMage.addEventListener("click", rolMage);
function rolMage(){
    finList = initList.filter(champ => champ.tags.includes("Mage"));
    fillDashboard(finList);
}

filtFighter.addEventListener("click", rolFighter);
function rolFighter(){
    finList = initList.filter(champ => champ.tags.includes("Fighter"));
    fillDashboard(finList);
}

filtMarksman.addEventListener("click", rolMarksman);
function rolMarksman(){
    finList = initList.filter(champ => champ.tags.includes("Marksman"));
    fillDashboard(finList);
}

filtSupport.addEventListener("click", rolSupport);
function rolSupport(){
    finList = initList.filter(champ => champ.tags.includes("Support"));
    fillDashboard(finList);
}

// <!-- -------------------------filtro por Dificultad------------------------------------>
filtro.addEventListener("click", difficulty);
function difficulty(){
    const filterItems = query => {
        return fruits.filter((el) =>
          el.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
      }
    if(champ => champ.difficulty <= 4){
        const difficultyEasy;
        difficultyEasy = initList.filter(champ => champ.difficulty <= 4);
        console.log(filterItems('difficultyEasy')); // ['easy']
    }
    else if (champ => champ.difficulty >= 5) {
        const difficultyMiddle;
        difficultyMiddle = initList.filter(champ => champ.difficulty >= 5);
        console.log(filterItems('difficultyMiddle')); // ['middle']
    }else if(champ => champ.difficulty >=8){
        const difficultyHard;
        difficultyHard = initList.filter(champ => champ.difficulty >=8);
        console.log(filterHard('diffficultyHard')); //['Hard']
    }
}



// crear funcion que oculte el resto de rol o dificultades al momento de filtrar.


//console.log(example, data);


aqui debe ir el html dinamico*/