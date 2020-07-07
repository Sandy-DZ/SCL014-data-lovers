import datos from './data.js';
//import data from './data/lol/lol.js';

let initList = datos.allCards();
let finList = [];

const A_Z = document.getElementById("A_Z");
const Z_A = document.getElementById("Z_A");
const filtTank = document.getElementById("Tank");
const filtAsesino = document.getElementById("Assassin");
const filtMage = document.getElementById("Mage");
const filtFighter = document.getElementById("Fighter");
const filtMarksman = document.getElementById("Marksman");
const filtSupport = document.getElementById("Support");
const filtro = document.getElementById("tags");

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
easyFilt.addEventListener("click", difficultyEasy);
function difficultyEasy(){
    finList = initList.filter(champ => champ.difficulty <= 4);
    if (champ => champ.difficulty >= 5) {
        const difficultyMiddle = champ.difficulty;
        console.log("Middle");
    }else if(champ => champ.difficulty >=8){
        const difficultyHard;
        console.log("Hard");
    }
}

// crear funcion que oculte el resto de rol o dificultades al momento de filtrar.



/*midleFilt.addEventListener("click", difficultyMidle);
function difficultyMidle(){
    finList = initList.filter(champ => champ.difficulty >= 5);
    console.log(difficultyMidle);
}

hardFilt.addEventListener("click", difficultyHard);
function difficultyHard(){
    finList = initList.filter(champ => champ.difficulty >=8);
}
*/


//console.log(example, data);


/*aqui debe ir el html dinamico*/