export default {
  type: "champion",
  format: "standAloneComplex",
  version: "V10.14",
  data: {
    Aatrox: {
      version: "V10.14",
      id: "Aatrox",
      key: "266",
      name: "Aatrox",
      title: "La Espada Darkin",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Aatrox.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg",
      blurb:
        "Aatrox y sus hermanos, que alguna vez fueron respetados defensores de Shurima contra el Vacío, se convirtieron en una amenaza aún mayor para Runaterra y los derrotaron con hechicería mortal usada con astucia. Pero, después de siglos de encarcelamiento, Aatrox fue el primero en encontrar la libertad una vez más; corrompió y transformó a los bastante tontos como para intentar blandir el arma mágica que contenía su esencia. Ahora, con cuerpos robados, camina por Runaterra con una apariencia retorcida de su forma original y busca la venganza apocalíptica que tanto desea.",
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 2
      },
      image: {
        full: "Aatrox.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "BloodWell",
      rangetype:"cuerpo a cuerpo",
      date: "2013-06-13",
      patch: "V3.8",
      graphic :{
        damage:3,
        toughness:3,
        control:2,
        mobility:2,
        utility:2,
      },
      stats: {
        hp: 580,
        hpperlevel: 90,
        mp: 0,
        mpperlevel: 0,
        armor: 38,
        armorperlevel: 3.25,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 3,
        hpregenperlevel: 1,
        mpregen: 0,
        mpregenperlevel: 0,
        attackdamage: 60,
        attackdamageperlevel: 5,
        attackspeedoffset: 0.651,
        attackspeedperlevel: 2.5,
        attackrange: 175,
        movespeed: 345
      },
      skill:[
         {pasive:"Heraldo de la destrucción",img:"https://opgg-static.akamaized.net/images/lol/passive/Aatrox_Passive.png?image=q_auto,w_48&v=1591083841",info:"Cada cierto tiempo, el siguiente ataque básico de Aatrox inflige daño físico adicional según la vida máxima del objetivo, y lo cura por la cantidad de daño infligido"},
         {q:"La Espada Darkin",img:"https://opgg-static.akamaized.net/images/lol/spell/AatroxQ.png?image=q_auto,w_48&v=1591083841",info:"Aatrox golpea el piso con su espada e inflige daño físico. Puede atacar con ella tres veces, cada vez con un área de efecto distinta"},
         {w:"Cadenas Infernales",img:"https://opgg-static.akamaized.net/images/lol/spell/AatroxW.png?image=q_auto,w_48&v=1591083841",info:"Aatrox golpea el suelo e inflige daño al primer enemigo golpeado. Los campeones o monstruos grandes deben abandonar la zona de impacto rápidamente o los arrastrará al centro y les infligirá daño de nuevo"},
         {e:"Impulso Siniestro",img:"https://opgg-static.akamaized.net/images/lol/spell/AatroxE.png?image=q_auto,w_48&v=1591083841",info:"Aatrox se cura de forma pasiva al dañar a campeones enemigos. Al activarlo, se desplaza en una dirección."},
         {r:"Destructor de Mundos",img:"https://opgg-static.akamaized.net/images/lol/spell/AatroxR.png?image=q_auto,w_48&v=1591083841",info:"Aatrox despliega su forma demoniaca, aterroriza a los súbditos enemigos cercanos, y obtiene daño de ataque, curación aumentada y velocidad de movimiento. Si participa en un derribo, estos efectos extienden su duración."}
      ]
    },
    Ahri: {
      version: "V10.14",
      id: "Ahri",
      key: "103",
      name: "Ahri",
      title: "La Vastaya De Nueve Colas",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ahri.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
      blurb:
        "Ahri, conectada de forma innata con el poder latente de Runaterra, es una vastaya que puede moldear la magia en orbes de energía pura. Se divierte jugueteando con su presa y manipulando sus emociones, antes de devorar su esencia vital. A pesar de su naturaleza predadora, Ahri conserva cierta empatía porque recibe destellos de los recuerdos de cada alma que consume.",
      info: {
        attack: 3,
        defense: 4,
        magic: 8,
        difficulty: 2
      },
      image: {
        full: "Ahri.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Asesino"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2011-12-14",
      patch: "V1.0.0.131",
      graphic :{
        damage:3,
        toughness:1,
        control:2,
        mobility:3,
        utility:0,
      },
      stats: {
        hp: 526,
        hpperlevel: 92,
        mp: 418,
        mpperlevel: 25,
        armor: 20.88,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 6.5,
        hpregenperlevel: 0.6,
        mpregen: 8,
        mpregenperlevel: 0.8,
        attackdamage: 53.04,
        attackdamageperlevel: 3,
        attackspeedoffset: 0.668,
        attackspeedperlevel: 2,
        attackrange: 550,
        movespeed: 330
      },
      skill:[
        {pasive:"Elegancia Vastaya",img:"https://opgg-static.akamaized.net/images/lol/passive/Ahri_SoulEater2.png?image=q_auto,w_48&v=1591083841",info:"Si Ahri logra alcanzar a un campeón 2 veces con sus hechizos en un breve periodo, obtiene un aumento temporal de velocidad de movimiento."},
        {q:"Orbe del Engaño",img:"https://opgg-static.akamaized.net/images/lol/spell/AhriOrbofDeception.png?image=q_auto,w_48&v=1591083841",info:"Ahri lanza y recupera su orbe, lo que inflige daño mágico de ida y daño verdadero de vuelta. Después de acertar varios hechizos, el siguiente orbe de Ahri le restaura vida."},
        {w:"Fuego Zorruno",img:"https://opgg-static.akamaized.net/images/lol/spell/AhriFoxFire.png?image=q_auto,w_48&v=1591083841",info:"Ahri lanza tres fuegos zorrunos que se fijan en enemigos cercanos y los atacan."},
        {e:"Encanto",img:"https://opgg-static.akamaized.net/images/lol/spell/AhriSeduce.png?image=q_auto,w_48&v=1591083841",info:"Ahri lanza un beso que inflige daño y deja encantado al enemigo, lo que detiene de inmediato las habilidades de movimiento del objetivo y hace que avance hacia ella de manera inofensiva. El objetivo recibe daño aumentado de Ahri temporalmente."},
        {r:"Impulso Espiritual",img:"https://opgg-static.akamaized.net/images/lol/spell/AhriTumble.png?image=q_auto,w_48&v=1591083841",info:"Ahri se desplaza hacia adelante y dispara rayos de esencia, lo que inflige daño a los enemigos cercanos. Puedes lanzar Impulso Espiritual hasta tres veces antes de que entre en enfriamiento."}
      ]
    },
    Akali: {
      version: "V10.14",
      id: "Akali",
      key: "84",
      name: "Akali",
      title: "La Asesina Furtiva",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Akali.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg",
      blurb:
        "Tras renunciar a la Orden Kinkou y a su título como el Puño de la Sombra, Akali pelea a solas, lista para ser el arma letal que su pueblo necesita. Aunque conserva todo lo que aprendió de su maestro Shen, juró defender a Jonia de sus enemigos... una víctima a la vez. Puede que Akali ataque en silencio, pero su mensaje resonará con fuerza y claridad: témanle a la asesina sin maestro.",
      info: {
        attack: 5,
        defense: 3,
        magic: 8,
        difficulty: 2
      },
      image: {
        full: "Akali.png",
        sprite: "champion0.png",
        group: "champion",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Asesino"],
      partype: "Energy",
      rangetype:"cuerpo a cuerpo",
      date: "2010-05-11",
      patch: "V1.0.0.85",
      graphic :{
        damage:3,
        toughness:1,
        control:1,
        mobility:3,
        utility:1,
      },
      stats: {
        hp: 575,
        hpperlevel: 95,
        mp: 200,
        mpperlevel: 0,
        armor: 23,
        armorperlevel: 3.5,
        mrbase: 37,
        mrlevel : 1.25,
        hpregen: 8,
        hpregenperlevel: 0.5,
        mpregen: 50,
        mpregenperlevel: 0,
        attackdamage: 62.4,
        attackdamageperlevel: 3.3,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 3.2,
        attackrange: 125,
        movespeed: 345
      },
      skill:[
        {pasive:"Marca de la Asesina",img:"https://opgg-static.akamaized.net/images/lol/passive/Akali_P.png?image=q_auto,w_48&v=1591083841",info:"Infligir daño a un campeón con tus hechizos crea un círculo de energía a su alrededor. Salir de dicho círculo hará que el siguiente ataque básico de Akali esté potenciado con alcance y daño adicionales."},
        {q:"Ráfaga de los cinco Filos",img:"https://opgg-static.akamaized.net/images/lol/spell/AkaliQ.png?image=q_auto,w_48&v=1591083841",info:"Akali arroja cinco kunai que ralentizan e infligen daño según su daño de ataque y su poder de habilidad adicionales."},
        {w:"Manto Crepuscular",img:"https://opgg-static.akamaized.net/images/lol/spell/AkaliW.png?image=q_auto,w_48&v=1591083841",info:"Akali desata una cortina de humo y obtiene velocidad de movimiento por un momento. Al estar dentro del manto, Akali se vuelve invisible y no puede ser alcanzada por hechizos y ataques enemigos. Quedará revelada por un instante si ataca o usa habilidades."},
        {e:"Maniobra de Shuriken",img:"https://opgg-static.akamaized.net/images/lol/spell/AkaliE.png?image=q_auto,w_48&v=1591083841",info:"Akali realiza una voltereta hacia atrás y arroja un shuriken hacia adelante, lo que inflige daño físico. El primer enemigo o nube de humo impactados quedan marcados. Vuelve a lanzarlo para desplazarte hacia el objetivo marcado e infligir daño adicional."},
        {r:"Ejecución Perfecta",img:"https://opgg-static.akamaized.net/images/lol/spell/AkaliR.png?image=q_auto,w_48&v=1591083841",info:"Akali salta hacia una dirección para infligir daño a los enemigos alcanzados. Relanzamiento: Akali se desplaza en una dirección y ejecuta a todos los enemigos alcanzados."}
      ]
    },
    Alistar: {
      version: "V10.14",
      id: "Alistar",
      key: "12",
      name: "Alistar",
      title: "El Minotauro",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Alistar.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg",
      blurb:"Alistar, que desde siempre fue un gran guerrero con una temible reputación, busca venganza por la muerte de su clan a manos del imperio noxiano. Aunque haya sido esclavizado y forzado a tener una vida de gladiador, su voluntad inquebrantable fue lo que impidió que se convirtiera en una bestia completamente. Ahora, libre de las cadenas de sus anteriores amos, pelea en nombre de los desamparados y desprotegidos usando tanto su furia como sus cuernos, pezuñas y puños como armas.",
      info: {
        attack: 6,
        defense: 9,
        magic: 5,
        difficulty: 2
      },
      image: {
        full: "Alistar.png",
        sprite: "champion0.png",
        group: "champion",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tanque", "Soporte"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-02-21",
      patch: "semana alfa 2",
      graphic :{
        damage:1,
        toughness:3,
        control:3,
        mobility:1,
        utility:2,
      },
      stats: {
        hp: 600,
        hpperlevel: 106,
        mp: 350,
        mpperlevel:40 ,
        armor: 44,
        armorperlevel: 3.5,
        mrbase:32.1 ,
        mrlevel : 1.25,
        hpregen: 8.5,
        hpregenperlevel: 0.85,
        mpregen: 8.5,
        mpregenperlevel:0.8,
        attackdamage: 62,
        attackdamageperlevel:3.75,
        attackspeedoffset: 0.625,
        attackspeedperlevel:2.125 ,
        attackrange:125,
        movespeed:330
      },
      skill:[
        {pasive:"Rugido Triunfal",img:"https://opgg-static.akamaized.net/images/lol/passive/Alistar_E.png?image=q_auto,w_48&v=1591083841",info:"Alistar carga su rugido al aturdir o desplazar campeones enemigos, o cuando mueren enemigos cercanos. Al cargarse al máximo, se cura a sí mismo y a todos los campeones aliados cercanos."},
        {q:"Pulverizar",img:"https://opgg-static.akamaized.net/images/lol/spell/Pulverize.png?image=q_auto,w_48&v=1591083841",info:"Alistar aplasta el suelo, lo que inflige daño a los enemigos cercanos y los lanza por el aire"},
        {w:"Testarazo",img:"https://opgg-static.akamaized.net/images/lol/spell/Headbutt.png?image=q_auto,w_48&v=1591083841",info:"Alistar propina un cabezazo al objetivo, dañándolo y empujándolo hacia atrás."},
        {e:"Pisotear",img:"https://opgg-static.akamaized.net/images/lol/spell/AlistarE.png?image=q_auto,w_48&v=1591083841",info:"Alistar atropella a las unidades enemigas cercanas. Ignora la colisión con unidades y obtiene acumulaciones si daña a un campeón enemigo. Cuando tenga el máx. de acumulaciones, el siguiente ataque básico de Alistar contra un campeón enemigo infligirá daño mágico adicional y lo aturdirá"},
        {r:"Voluntad Inquebrantable",img:"https://opgg-static.akamaized.net/images/lol/spell/FerociousHowl.png?image=q_auto,w_48&v=1591083841",info:"Alistar desata un rugido salvaje, lo que elimina todos los efectos de control de masas en él y reduce el daño físico y mágico que recibe mientras dura el efecto."}
      ]
    },
    Amumu: {
      version: "V10.14",
      id: "Amumu",
      key: "32",
      name: "Amumu",
      title: "La Momia Triste",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Amumu.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg",
      blurb:
        "''La soledad puede ser más solitaria que la muerte''<br><br>Cuenta la leyenda que Amumu es un alma solitaria y melancólica de la antigua Shurima que vaga por el mundo en busca de un amigo. Una antigua maldición lo condenó a permanecer solo por toda la eternidad. Sus caricias son la muerte, su afecto es la ruina. Quienes afirman haberlo visto lo describen como un cadáver viviente de corta estatura envuelto en vendajes. Amumu ha sido la inspiración de mitos, canciones y folclore que se han contado una y otra vez a lo largo de generaciones, tanto que es imposible separar la verdad de la ficción.",
      info: {
        attack: 2,
        defense: 6,
        magic: 8,
        difficulty:1
      },
      image: {
        full: "Amumu.png",
        sprite: "champion0.png",
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tanque", "Mago"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-06-26",
      patch: "V.26.06.2009",
      graphic :{
        damage:2,
        toughness:3,
        control:3,
        mobility:1,
        utility:1,
      },
      stats: {
        hp:613.12,
        hpperlevel:84,
        mp:287.2,
        mpperlevel:40,
        armor:33,
        armorperlevel:3.8,
        mrbase:32.1,
        mrlevel :1.25,
        hpregen:9,
        hpregenperlevel:0.85,
        mpregen:7.382,
        mpregenperlevel:0.525,
        attackdamage:53.38,
        attackdamageperlevel:3.8,
        attackspeedoffset: 0.736,
        attackspeedperlevel:2.18,
        attackrange:125,
        movespeed:335
      },
      skill:[
        {pasive:"Toque Maldito",img:"https://opgg-static.akamaized.net/images/lol/passive/Amumu_Passive.png?image=q_auto,w_48&v=1591083841",info:"Los ataques básicos de Amumu infligen Maldición a sus enemigos, lo que hace que reciban daño verdadero adicional con el daño mágico que reciban."},
        {q:"Lanzamiento de Vendas",img:"https://opgg-static.akamaized.net/images/lol/spell/BandageToss.png?image=q_auto,w_48&v=1591083841",info:"Amumu lanza una venda adhesiva a un objetivo que lo aturde y lo desplaza hacia él"},
        {w:"Desesperanza",img:"https://opgg-static.akamaized.net/images/lol/spell/AuraofDespair.png?image=q_auto,w_48&v=1591083841",info:"Abrumados por la angustia, los enemigos cercanos pierden parte de su vida máxima por seg y sus Maldiciones se reinician."},
        {e:"Berrinche",img:"https://opgg-static.akamaized.net/images/lol/spell/Tantrum.png?image=q_auto,w_48&v=1591083841",info:"Reduce de forma permanente el daño físico que recibe Amumu. Además, le permite desatar su furia para infligir daño a los enemigos cercanos. Los ataques que alcancen a Amumu reducen el enfriamiento de Berrinche por 0.5 seg."},
        {r:"Maldición de la Momia Triste",img:"https://opgg-static.akamaized.net/images/lol/spell/CurseoftheSadMummy.png?image=q_auto,w_48&v=1591083841",info:"Amumu envuelve en vendas a las unidades enemigas cercanas, lo que les aplica Maldición, les inflige daño, y hace que no puedan atacar ni moverse."}
      ]
    },
    Anivia: {
      version: "V10.14",
      id: "Anivia",
      key: "34",
      name: "Anivia",
      title: "La Criofénix",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Anivia.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg",
      blurb:
        "Anivia es un espíritu benevolente alado que soporta interminables ciclos de vida, muerte y resurrección para proteger Fréljord. Nació de la unión del hielo cruel y del viento penetrante, por lo que es una semidiosa que utiliza esos poderes elementales para frustrar a quien se atreva a perturbar su tierra natal. Anivia guía y protege a las tribus del norte hostil, quienes la veneran como símbolo de esperanza y como presagio de un gran cambio. Pelea con cada fibra de su ser sabiendo que su recuerdo perdurará a través de su sacrificio y que renacerá en un nuevo mañana.",
      info: {
        attack: 1,
        defense: 4,
        magic: 10,
        difficulty: 3
      },
      image: {
        full: "Anivia.png",
        sprite: "champion0.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Soporte"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-07-10",
      patch: "V.10.07.2009",
      graphic :{
        damage:3,
        toughness:1,
        control:3,
        mobility:1,
        utility:2,
      },
      stats: {
        hp:480,
        hpperlevel:82,
        mp:495,
        mpperlevel:25,
        armor:21.22,
        armorperlevel:4,
        mrbase:30,
        mrlevel :0.5,
        hpregen:5.5,
        hpregenperlevel:0.55,
        mpregen:8,
        mpregenperlevel:0.8,
        attackdamage:51.376,
        attackdamageperlevel:3.2,
        attackspeedoffset: 0.625,
        attackspeedperlevel:1.68,
        attackrange:600,
        movespeed:325
      },
      skill:[
        {pasive:"Renacimiento",img:"https://opgg-static.akamaized.net/images/lol/passive/Anivia_P.png?image=q_auto,w_48&v=1591083841",info:"Al recibir daño letal, Anivia se convertirá en un huevo y renacerá con vida completa."},
        {q:"Destello Helado",img:"https://opgg-static.akamaized.net/images/lol/spell/FlashFrost.png?image=q_auto,w_48&v=1591083841",info:"Anivia junta sus alas e invoca una esfera de hielo que vuela hacia sus oponentes. Esta congela e inflige daño a cualquiera que esté en su camino. Cuando la esfera estalla, inflige daño moderado dentro de un radio específico y aturde a cualquiera que esté dentro del área."},
        {w:"Cristalizar",img:"https://opgg-static.akamaized.net/images/lol/spell/Crystallize.png?image=q_auto,w_48&v=1591083841",info:"Anivia condensa la humedad en el aire y la convierte en un muro infranqueable de hielo que bloquea todo movimiento. El muro tiene una corta duración antes de derretirse."},
        {e:"Quemadura Gélida",img:"https://opgg-static.akamaized.net/images/lol/spell/Frostbite.png?image=q_auto,w_48&v=1591083841",info:"Con un aleteo de sus alas, Anivia lanza una ráfaga de viento congelado a su enemigo que le inflige una pequeña cantidad de daño. Si el objetivo quedó aturdido por Destello Helado recientemente o si recibió daño por una Tormenta Glacial completamente formada, recibirá el doble de daño."},
        {r:"Tormenta Glacial",img:"https://opgg-static.akamaized.net/images/lol/spell/GlacialStorm.png?image=q_auto,w_48&v=1591083841",info:"Anivia invoca una lluvia torrencial de hielo y granizo para dañar a sus enemigos y ralentizar su avance."}
      ]
    },
    Annie: {
      version: "V10.14",
      id: "Annie",
      key: "1",
      name: "Annie",
      title: "La Hija De La Oscuridad",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Annie.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg",
      blurb:
        "Annie es una peligrosa, talentosa y encantadora niña maga que posee un inmenso poder piroquinético. Incluso bajo las sombras de las montañas al norte de Noxus, es una maga excepcional. Su afinidad innata con el fuego se manifestó pronto en su vida a través de explosiones emocionales impredecibles, aunque con el tiempo aprendió a controlar esos ''trucos''. Uno de sus favoritos es invocar a Tibbers, su amado osito de peluche, como una feroz bestia de fuego. Perdida en la perpetua inocencia de la niñez, Annie vaga por los bosques oscuros siempre en busca de alguien con quien jugar.",
      info: {
        attack: 2,
        defense: 3,
        magic: 10,
        difficulty: 2
      },
      image: {
        full: "Annie.png",
        sprite: "champion0.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-02-21",
      patch: "semana alfa 2",
      graphic :{
        damage:3,
        toughness:1,
        control:3,
        mobility:1,
        utility:2,
      },
      stats: {
        hp:524,
        hpperlevel:88,
        mp:418,
        mpperlevel:25,
        armor:19.22,
        armorperlevel:4,
        mrbase:30,
        mrlevel:0.5,
        hpregen:5.5,
        hpregenperlevel:0.55,
        mpregen:8,
        mpregenperlevel:0.8,
        attackdamage:50.41,
        attackdamageperlevel:2.625,
        attackspeedoffset:0.579,
        attackspeedperlevel:1.36,
        attackrange:625,
        movespeed:335
      },
      skill:[
        {pasive:"Piromanía",img:"https://opgg-static.akamaized.net/images/lol/passive/Annie_Passive.png?image=q_auto,w_48&v=1591083841",info:"Luego de lanzar 4 hechizos, el próximo hechizo ofensivo de Annie aturdirá al objetivo."},
        {q:"Desintegrar",img:"https://opgg-static.akamaized.net/images/lol/spell/AnnieQ.png?image=q_auto,w_48&v=1591083841",info:"Annie lanza una bola de fuego imbuida de Maná, infligiendo daño y recuperando el costo de Maná si destruye el objetivo."},
        {w:"Incinerar",img:"https://opgg-static.akamaized.net/images/lol/spell/AnnieW.png?image=q_auto,w_48&v=1591083841",info:"Annie lanza un abrasador cono de fuego, dañando a todos los enemigos de la zona."},
        {e:"Escudo Fundido",img:"https://opgg-static.akamaized.net/images/lol/spell/AnnieE.png?image=q_auto,w_48&v=1591083841",info:"Le otorga a Annie un porcentaje aumentado de reducción de daño, un aumento de velocidad de movimiento y daña a los enemigos que la atacan con ataques básicos."},
        {r:"Invocar Tibbers",r2:"Controlar Tibbers",img:"https://opgg-static.akamaized.net/images/lol/spell/AnnieR.png?image=q_auto,w_48&v=1591083841",info:"Annie da vida a su oso Tibbers, que daña a todas las unidades de la zona. Tibbers puede atacar y quemar a los enemigos adyacentes."}
      ]
    },
    Aphelios: {
      version: "V10.14",
      id: "Aphelios",
      key: "523",
      name: "Aphelios",
      title: "El Arma De Los Adeptos",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Aphelios.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg",
      blurb:
        "Aphelios emerge de la sombra de la luz de la luna con sus armas listas y mata a los enemigos de su fe en un silencio melancólico. Habla únicamente a través de la certeza de su puntería y del disparo de cada arma. Si bien su impulso proviene de un veneno que lo enmudece, es guiado por su hermana Alune. Desde un santuario lejano, le envía un arsenal de armas de piedra lunar a sus manos. Mientras la luna resplandezca en lo alto, Aphelios nunca estará solo.",
      info: {
        attack: 6,
        defense: 2,
        magic: 1,
        difficulty: 3
      },
      image: {
        full: "Aphelios.png",
        sprite: "champion0.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2019-12-11",
      patch: "V9.24",
      graphic :{
        damage:3,
        toughness:1,
        control:2,
        mobility:1,
        utility:1,
      },
      stats: {
        hp:530,
        hpperlevel:86,
        mp:348,
        mpperlevel:42,
        armor:28,
        armorperlevel:3,
        mrbase:26,
        mrlevel :0.5,
        hpregen:3.25,
        hpregenperlevel:0.55,
        mpregen:6.5,
        mpregenperlevel:0.4,
        attackdamage:57,
        attackdamageperlevel:2,
        attackspeedoffset: 0.64,
        attackspeedperlevel:2.1,
        attackrange:550,
        movespeed:325
      },
      skill:[
        {pasive:"El Victimario y la Vidente",img:"https://opgg-static.akamaized.net/images/lol/passive/ApheliosP.png?image=q_auto,w_48&v=1591083841",info:"Aphelios usa 5 armas Lunari que fabricó su hermana, Alune. Puede usar dos a la vez: una principal y otra secundaria. Cada arma tiene un ataque básico único y una habilidad activa. Los ataques y las habilidades consumen munición. Aphelios descarta el arma cuando se agota la munición y Alune invoca la siguiente de las 5"},
        {q:"Habilidades de Armas",img:"https://opgg-static.akamaized.net/images/lol/spell/ApheliosQ_ClientTooltipWrapper.png?image=q_auto,w_48&v=1591083841",info:"Aphelios tiene 5 habilidades activas diferentes, que dependen de su arma principal: Calibrum (Rifle): disparo de largo alcance que marca a su objetivo y permite un segundo ataque de gran alcance. Severum (Pistola Guadaña): te desplazas rápidamente y atacas a los enemigos cercanos con ambas armas. Gravitum (Cañón): inmovilizas a todos los enemigos que se encuentren ralentizados por esta arma. Infernum (Lanzallamas): atacas en forma de cono y disparas con tu arma secundaria. Crescendum (Chakram): despliegas una torreta que dispara con el arma secundaria de Aphelios."},
        {w:"Cambio de Arma",img:"https://opgg-static.akamaized.net/images/lol/spell/ApheliosW.png?image=q_auto,w_48&v=1591083841",info:"Aphelios cambia su arma principal con su arma secundaria, con lo que reemplaza su ataque básico y su habilidad activa"},
        {e:"Sistema de Armas en Serie",img:"https://opgg-static.akamaized.net/images/lol/spell/ApheliosE_ClientTooltipWrapper.png?image=q_auto,w_48&v=1591083841",info:"Aphelios no tiene una tercera habilidad. Este espacio muestra el siguiente arma que obtendrá de Alune. Al principio, el orden de las armas es fijo, pero puede cambiar en el curso de la partida. Cuando un arma se queda sin munición, se va al último lugar."},
        {r:"Vigilia de Luz Lunar",img:"https://opgg-static.akamaized.net/images/lol/spell/ApheliosR.png?image=q_auto,w_48&v=1591083841",info:"Lanza una onda de luz lunar concentrada que explota al impacto contra campeones enemigos. Aplica el efecto único del arma principal de Aphelios."}
      ]
    },
    Ashe: {
      version: "V10.14",
      id: "Ashe",
      key: "22",
      name: "Ashe",
      title: "la Arquera de Hielo",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ashe.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg",
      blurb:
        "Como Hija del Hielo y madre de guerra de la tribu Avarosa, Ashe comanda la más grande horda en el norte. Estoica, inteligente e idealista, pero incómoda con su rol de líder, ella aprovecha las magias ancestrales de su linaje para portar un arco de Hielo Puro. Apoyada por la creencia de su gente que ella es el héroe mitológico reencarnado de Avarosa, Ashe espera unificar el Fréljord una vez más al retomar sus tierras antiguas y tribales.",
      info: {
        attack: 7,
        defense: 3,
        magic: 2,
        difficulty: 2
      },
      image: {
        full: "Ashe.png",
        sprite: "champion0.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Soporte"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-02-21",
      patch: "semana alfa 2",
      graphic :{
        damage:2,
        toughness:0,
        control:3,
        mobility:0,
        utility:2,
      },
      stats: {
        hp:570,
        hpperlevel:87,
        mp:280,
        mpperlevel:32,
        armor:26,
        armorperlevel:3.4,
        mrbase:30,
        mrlevel :0.5,
        hpregen:3.5,
        hpregenperlevel:0.55,
        mpregen:6.972,
        mpregenperlevel:0.4,
        attackdamage:61,
        attackdamageperlevel:2.96,
        attackspeedoffset: 0.658,
        attackspeedperlevel:3.33,
        attackrange:600,
        movespeed:325
      },
      skill:[
        {pasive:"Tiro Escarchado",img:"https://opgg-static.akamaized.net/images/lol/passive/Ashe_P.png?image=q_auto,w_48&v=1591083841",info:"Los ataques de Ashe ralentizan a su objetivo, lo que ocasiona que inflija daño aumentado a dichos objetivos. Los golpes críticos de Ashe no infligen daño adicional, pero aplican una ralentización potenciada a sus objetivos."},
        {q:"Concentración de la Guardabosques",img:"https://opgg-static.akamaized.net/images/lol/spell/AsheQ.png?image=q_auto,w_48&v=1591083841",info:"Ashe acumula Concentración al atacar. Cuando tiene Concentración máxima, Ashe puede activar Concentración de la Guardabosques, que consume todas las acumulaciones de Concentración y aumenta su velocidad de ataque, lo que transforma su ataque básico en un poderoso torbellino de golpes durante ese tiempo."},
        {w:"Descarga",img:"https://opgg-static.akamaized.net/images/lol/spell/Volley.png?image=q_auto,w_48&v=1591083841",info:"Ashe dispara 9 flechas en un arco para causar más daño. Además, aplica Tiro Escarchado."},
        {e:"Tiro de Halcón",img:"https://opgg-static.akamaized.net/images/lol/spell/AsheSpiritOfTheHawk.png?image=q_auto,w_48&v=1591083841",info:"Ashe puede enviar su Espíritu Halcón a cualquier parte del mapa en misión de exploración."},
        {r:"Flecha de Cristal Encancatada",img:"https://opgg-static.akamaized.net/images/lol/spell/EnchantedCrystalArrow.png?image=q_auto,w_48&v=1591083841",info:"Ashe dispara un proyectil de hielo en línea recta. Si la flecha impacta contra un campeón enemigo, inflige daño y lo aturde. El aturdimiento será mayor cuanto más larga sea la distancia que recorra la flecha. Además, las unidades enemigas circundantes reciben daño y se ralentizan."}
      ]
    },
    AurelionSol: {
      version: "V10.14",
      id: "AurelionSol",
      key: "136",
      name: "Aurelion Sol",
      title: "El Forjador de Estrellas",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/AurelionSol.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg",
      blurb:
        "Aurelion Sol alguna vez adornó el gran vacío del cosmos con maravillas celestiales de su propia creación. Ahora, se ve obligado a usar su increíble poder para el beneficio de un imperio espacial que, tras engañarlo, lo mantiene bajo su servicio. Deseoso de volver a sus días de gloria, Aurelion Sol bajaría cada estrella del cielo, si tuviera que hacerlo, con tal de recuperar su libertad.",
      info: {
        attack: 2,
        defense: 3,
        magic: 8,
        difficulty: 3
      },
      image: {
        full: "AurelionSol.png",
        sprite: "champion0.png",
        group: "champion",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Luchador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2016-03-24",
      patch: "V6.6",
      graphic :{
        damage:3,
        toughness:0,
        control:2,
        mobility:2,
        utility:0,
      },
      stats: {
        hp: 575,
        hpperlevel:92,
        mp:350,
        mpperlevel:50,
        armor:19,
        armorperlevel:3.6,
        mrbase:30,
        mrlevel :0.5,
        hpregen:7,
        hpregenperlevel:0.6,
        mpregen:6,
        mpregenperlevel:0.8,
        attackdamage:57,
        attackdamageperlevel:3.2,
        attackspeedoffset:0.625,
        attackspeedperlevel:1.36,
        attackrange:550,
        movespeed:325
      },
      skill:[
        {pasive:"Centro del Universo",img:"https://opgg-static.akamaized.net/images/lol/passive/AurelionSol_Passive.png?image=q_auto,w_48&v=1591083841",info:"Las estrellas orbitan alrededor de Aurelion Sol e infligen daño mágico al alcanzar a un enemigo."},
        {q:"Explosión Astral",img:"https://opgg-static.akamaized.net/images/lol/spell/AurelionSolQ.png?image=q_auto,w_48&v=1591083841",info:"Aurelion Sol crea un disco expansivo que explota para aturdir e infligir daño a los enemigos que se alejan demasiado de él."},
        {w:"Expansión Celestial",img:"https://opgg-static.akamaized.net/images/lol/spell/AurelionSolW.png?image=q_auto,w_48&v=1591083841",info:"Aurelion Sol desplaza sus estrellas aún más lejos y aumenta su daño y velocidad."},
        {e:"Cometa Legendario",img:"https://opgg-static.akamaized.net/images/lol/spell/AurelionSolE.png?image=q_auto,w_48&v=1591083841",info:"Aurelion Sol despega y vuela una larga distancia."},
        {r:"Voz de Luz",img:"https://opgg-static.akamaized.net/images/lol/spell/AurelionSolR.png?image=q_auto,w_48&v=1591083841",info:"Aurelion Sol proyecta una explosión de fuego estelar puro que inflige daño y ralentiza a todos los enemigos atrapados en ella y derriba a los enemigos cercanos, empujándolos a una distancia segura."}
      ]
    },
    Azir: {
      version: "V10.14",
      id: "Azir",
      key: "268",
      name: "Azir",
      title: "El Emperador de las Arenas",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Azir.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
      blurb:
        "''Shurima fue una vez la gloria de Runeterra. Lo haré de nuevo.''<br><br>Azir, emperador de Shurima en un pasado remoto, fue un hombre orgulloso que estuvo a punto de alcanzar la inmortalidad. Dominado por la arrogancia, fue traicionado y asesinado en la hora de su mayor triunfo. Pero ahora, milenios después, renació como un ser Ascendido de inmenso poder. Su enterrada ciudad resurgió de las arenas y Azir está decidido a restaurar la antigua gloria de Shurima.",
      info: {
        attack: 6,
        defense: 3,
        magic: 8,
        difficulty: 3
      },
      image: {
        full: "Azir.png",
        sprite: "champion0.png",
        group: "champion",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2014-09-16",
      patch: "V4.16",
      graphic :{
    	damage:3,
	    toughness:1,
	    control:2,
    	mobility:2,
	    utility:1,
      },
      stats: {
        hp:552,
        hpperlevel:92,
        mp:438,
        mpperlevel:21,
        armor:19.04,
        armorperlevel:3,
        mrbase:30,
        mrlevel :0.5,
        hpregen:7,
        hpregenperlevel:0.75,
        mpregen:8,
        mpregenperlevel:0.8,
        attackdamage:52,
        attackdamageperlevel:2.8,
        attackspeedoffset: 0.625,
        attackspeedperlevel:3,
        attackrange:525,
        movespeed:335
      },
      skill:[
        {pasive:"Legado de Shurima",img:"https://opgg-static.akamaized.net/images/lol/passive/Azir_Passive.png?image=q_auto,w_48&v=1591083841",info:"Azir puede invocar el Disco Solar desde las ruinas de torretas aliadas o enemigas."},
        {q:"Conquistador de las Arenas",img:"https://opgg-static.akamaized.net/images/lol/spell/AzirQWrapper.png?image=q_auto,w_48&v=1591083841",info:"Azir envía a todos los soldados de arena hacia una ubicación. Los soldados de arena infligen daño mágico a los enemigos que atraviesan y además aplican una ralentización durante 1 segundo."},
        {w:"¡Levántense!",img:"https://opgg-static.akamaized.net/images/lol/spell/AzirW.png?image=q_auto,w_48&v=1591083841",info:"Azir invoca a un soldado de arena para atacar a los objetivos cercanos por él. El ataque básico de estos soldados reemplaza el suyo contra todos los enemigos que estén a su alcance. Su ataque inflige daño mágico a todos los enemigos situados en una línea. Además, ¡Levántense! otorga velocidad de ataque de manera pasiva a Azir y a sus soldados de arena."},
        {e:"Arenas Movedizas",img:"https://opgg-static.akamaized.net/images/lol/spell/AzirEWrapper.png?image=q_auto,w_48&v=1591083841",info:"Azir se escuda a sí mismo por un momento y se desplaza hacia uno de sus Soldados de Arena, lo que inflige daño a los enemigos. Si alcanza un campeón enemigo, Azir preparará al instante un nuevo Soldado de Arena para desplegarlo y detiene su desplazamiento."},
        {r:"División Imperial",img:"https://opgg-static.akamaized.net/images/lol/spell/AzirR.png?image=q_auto,w_48&v=1591083841",info:"Azir invoca un muro de soldados que, con una carga hacia delante, infligen daño y derriban al enemigo."}
      ]
    },
    Bard: {
      version: "V10.14",
      id: "Bardo",
      key: "432",
      name: "Bardo",
      title: "El Guardián Trotamundos",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Bard.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg",
      blurb:
        "El Bardo es un viajero de un reino más allá de las estrellas y un agente de la serendipia quien lucha por conservar el balance donde sea que la vida resista la indiferencia del caos. Muchas canciones de Runaterra hablan sobre su extraordinaria naturaleza y todas ellas dicen que los artefactos de un inmenso poder mágico atraen al vagabundo cósmico. Rodeado por un alegre coro de espíritus de meeps, es imposible pensar que sus acciones son malévolas, ya que el Bardo siempre busca servir al bien de todos... a su extraña manera.",
      info: {
        attack: 4,
        defense: 4,
        magic: 5,
        difficulty: 3
      },
      image: {
        full: "Bard.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2015-03-12",
      patch: "V5.5",
      graphic :{
	    damage:1,
	    toughness:1,
	    control:3,
	    mobility:2,
	    utility:3,
      },
      stats: {
        hp:575,
        hpperlevel:89,
        mp:350,
        mpperlevel:50,
        armor:34,
        armorperlevel:4,
        mrbase:30,
        mrlevel :0.5,
        hpregen:5.5,
        hpregenperlevel:0.55,
        mpregen:6,
        mpregenperlevel:0.45,
        attackdamage:52,
        attackdamageperlevel:3,
        attackspeedoffset: 0.625,
        attackspeedperlevel:2,
        attackrange:500,
        movespeed:330
      },
      skill:[
        {pasive:"Llamado del Viajero",img:"https://opgg-static.akamaized.net/images/lol/passive/Bard_Passive.png?image=q_auto,w_48&v=1591083841",info:"Meeps: Bardo atrae espíritus menores que lo ayudarán en sus ataques básicos para infligir daño mágico adicional. Cuando Bardo haya recolectado suficientes Campanillas, sus meeps también infligirán daño en un área y ralentizarán a los enemigos que impacten. Campanillas: Aparecen campanillas ancestrales de forma aleatoria para que Bardo las recolecte. Las campanillas ancestrales otorgan experiencia, maná máximo y acumulaciones de velocidad de movimiento fuera de combate."},
        {q:"Amarre Cósmico",img:"https://opgg-static.akamaized.net/images/lol/spell/BardQ.png?image=q_auto,w_48&v=1591083841",info:"El Bardo dispara un proyectil que ralentiza al primer enemigo alcanzado, luego sigue su trayectoria. A partir de ahí, si golpea un muro, el objetivo inicial queda aturdido. Si golpea a otro enemigo, los dos sufren el efecto."},
        {w:"Altar del Guardián",img:"https://opgg-static.akamaized.net/images/lol/spell/BardW.png?image=q_auto,w_48&v=1591083841",info:"Manifiesta un santuario curativo que tarda unos segundos en cargarse y desaparece después de curar al primer aliado que lo toca."},
        {e:"Viaje Místico",img:"https://opgg-static.akamaized.net/images/lol/spell/BardE.png?image=q_auto,w_48&v=1591083841",info:"El Bardo abre un portal en un terreno cercano. Tanto sus aliados como sus enemigos pueden atravesarlo para cruzar al otro lado, pero solo funciona en un sentido."},
        {r:"Destino Apacible",img:"https://opgg-static.akamaized.net/images/lol/spell/BardR.png?image=q_auto,w_48&v=1591083841",info:"El Bardo lanza arcos de energía espiritual que inmovilizan a todos los campeones, súbditos, monstruos y torretas de la zona momentáneamente."}
      ]
    },
    Blitzcrank: {
      version: "V10.14",
      id: "Blitzcrank",
      key: "53",
      name: "Blitzcrank",
      title: "El Gran Gólem de Vapor",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Blitzcrank.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg",
      blurb:
        "Blitzcrank es un autómata gigantesco y casi indestructible de Zaun, que originalmente fue creado para deshacerse de los desechos tóxicos. Sin embargo, él cree que su propósito principal era demasiado limitado, así que modificó su propia forma para poder servir mejor a la frágil gente del Sumidero. Blitzcrank utiliza su fuerza y durabilidad desinteresadamente para proteger a los demás, extendiendo su puño de metal o lanzando una ráfaga de energía para someter a quienes busquen causar problemas.",
      info: {
        attack: 4,
        defense: 8,
        magic: 5,
        difficulty: 2
      },
      image: {
        full: "Blitzcrank.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tanque", "Luchador"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-09-02",
      patch: "V0.9.22.16",
      graphic :{
        damage:1,
        toughness:2,
        control:3,
        mobility:1,
        utility:0,
      },
      stats: {
        hp: 582.6,
        hpperlevel:95 ,
        mp: 267.2,
        mpperlevel: 40,
        armor: 37,
        armorperlevel:3.5 ,
        mrbase: 32.1,
        mrlevel :1.25 ,
        hpregen: 8.5,
        hpregenperlevel: 0.75,
        mpregen: 8.5,
        mpregenperlevel: 0.8,
        attackdamage: 61.54,
        attackdamageperlevel:3.5,
        attackspeedoffset: 0.625,
        attackspeedperlevel:1.13 ,
        attackrange:125 ,
        movespeed: 325
      },
      skill:[
        {pasive:"Barrera de Maná",img:"https://opgg-static.akamaized.net/images/lol/passive/Blitzcrank_ManaBarrier.png?image=q_auto,w_48&v=1591083841",info:"Cuando se queda con poca vida, Blitzcrank obtiene un escudo según su maná."},
        {q:"Agarre Cohete",img:"https://opgg-static.akamaized.net/images/lol/spell/RocketGrab.png?image=q_auto,w_48&v=1591083841",info:"Blitzcrank dispara su mano derecha para apresar a un rival que encuentre en su camino, infligiendo daño y atrayéndolo hacia él."},
        {w:"Sobremarcha",img:"https://opgg-static.akamaized.net/images/lol/spell/Overdrive.png?image=q_auto,w_48&v=1591083841",info:"Blitzcrank se sobrecarga para aumentar drásticamente su velocidad de movimiento y su velocidad de ataque. Queda ralentizado temporalmente después que termina el efecto."},
        {e:"Puño de Poder",img:"https://opgg-static.akamaized.net/images/lol/spell/PowerFist.png?image=q_auto,w_48&v=1591083841",info:"Blitzcrank carga su puño para que su siguiente ataque cause el doble de daño y lance al objetivo por el aire."},
        {r:"Campo Estático",img:"https://opgg-static.akamaized.net/images/lol/spell/StaticField.png?image=q_auto,w_48&v=1591083841",info:"Los enemigos atacados por Blitzcrank quedan marcados y sufren daños de relámpago después de 1 seg. Además, Blitzcrank puede activar esta habilidad para eliminar los escudos de enemigos cercanos, infligirles daño y silenciarlos brevemente."}
      ]
    },
    Brand: {
      version: "V10.14",
      id: "Brand",
      key: "63",
      name: "Brand",
      title: "La Venganza Ardiente",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Brand.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg",
      blurb:
        "La criatura conocida como Brand es una lección de la tentación del poder. Alguna vez fue un simple hombre de la tribu de Fréljord y su nombre era Kegan Rodhe, pero al estar buscando una de las Runas del Mundo, Kegan traicionó a sus compañeros y se la quedó para él mismo. Y en un instante, el hombre se había esfumado. Su alma se quemó y se desvaneció, y su cuerpo ahora es el recipiente de una flama viva. Brand ahora vaga en Valoran en busca de otras Runas, jurando venganza por los males que no pudo haber sufrido ni en una docena de vidas mortales.",
      info: {
        attack: 2,
        defense: 2,
        magic: 9,
        difficulty: 2
      },
      image: {
        full: "Brand.png",
        sprite: "champion0.png",
        group: "champion",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2011-04-12",
      patch: "V1.0.0.115",
      graphic :{
	    damage:3,
	    toughness:0,
	    control:2,
	    mobility:0,
	    utility:0,
      },
      stats: {
        hp:519.68 ,
        hpperlevel:88,
        mp: 469,
        mpperlevel:21,
        armor: 21.88,
        armorperlevel:3.5,
        mrbase: 30,
        mrlevel :0.5,
        hpregen:5.5,
        hpregenperlevel:0.55,
        mpregen:10.665,
        mpregenperlevel:0.6,
        attackdamage:57.04,
        attackdamageperlevel:3,
        attackspeedoffset: 0.625,
        attackspeedperlevel:1.36,
        attackrange:550,
        movespeed:340
      },
      skill:[
        {pasive:"Llamarada",img:"https://opgg-static.akamaized.net/images/lol/passive/BrandP.png?image=q_auto,w_48&v=1591083841",info:"Los hechizos de Brand prenden a sus objetivos en llamas e infligen daño a lo largo de 4 seg. Se acumula hasta 3 veces. Si Brand mata a un enemigo en llamas, recupera maná. Llamarada se vuelve inestable cuando alcanza el máximo de acumulaciones contra un campeón o un monstruo. Detona en 2 seg, lo que aplica efectos de hechizo e inflige daño masivo en una zona alrededor de la víctima."},
        {q:"Abrasar",img:"https://opgg-static.akamaized.net/images/lol/spell/BrandQ.png?image=q_auto,w_48&v=1591083841",info:"Brand lanza una bola de fuego hacia adelante que inflige daño mágico. Si el objetivo está en llamas, Abrasar aturdirá al enemigo durante 1.5 seg."},
        {w:"Columna de Fuego",img:"https://opgg-static.akamaized.net/images/lol/spell/BrandW.png?image=q_auto,w_48&v=1591083841",info:"Tras unos momentos, Brand crea una Columna de Fuego en la zona objetivo, lo que inflige daño mágico a las unidades enemigas dentro del área. Las unidades en llamas reciben un 25% de daño adicional."},
        {e:"Conflagración",img:"https://opgg-static.akamaized.net/images/lol/spell/BrandE.png?image=q_auto,w_48&v=1591083841",info:"Brand conjura un poderoso ataque contra su objetivo y le inflige daño mágico. Si el objetivo está en llamas, Conflagración se expande a enemigos cercanos."},
        {r:"Piroclasma",img:"https://opgg-static.akamaized.net/images/lol/spell/BrandR.png?image=q_auto,w_48&v=1591083841",info:"Brand desata un devastador torrente de fuego que inflige daño mágico cada vez que rebota, hasta 5 rebotes. Los rebotes tendrán la prioridad de acumular Llamarada al máximo en campeones. Si el objetivo está en llamas, Piroclasma lo ralentizará durante un breve periodo."}
      ]
    },
    Braum: {
      version: "V10.14",
      id: "Braum",
      key: "201",
      name: "Braum",
      title: "El Corazón Del Fréljord",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Braum.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg",
      blurb:
        "Dotado de bíceps masivos y un corazón aún más grande, Braum es un querido héroe de Fréljord. Todas las tabernas al norte de Frostheld brindan por su fuerza legendaria; se dice que taló un bosque de robles en una sola noche y que hizo añicos una montaña entera con un solo golpe. Con una puerta de bóveda encantada como escudo, Braum vaga el norte congelado portando una sonrisa bigotona tan grande como sus músculos: un verdadero amigo para aquellos que lo necesitan.",
      info: {
        attack: 3,
        defense: 9,
        magic: 4,
        difficulty: 1
      },
      image: {
        full: "Braum.png",
        sprite: "champion0.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Tanque"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2014-05-12",
      patch: "V4.7",
      graphic :{
	    damage:1,
	    toughness:2,
	    control:3,
	    mobility:1,
	    utility:2,
      },
      stats: {
        hp:540,
        hpperlevel:87,
        mp:310.6,
        mpperlevel:45,
        armor:47,
        armorperlevel:4,
        mrbase:32.1,
        mrlevel :1.25,
        hpregen:8,
        hpregenperlevel:1,
        mpregen:6,
        mpregenperlevel:0.8,
        attackdamage:55.376,
        attackdamageperlevel:3.2,
        attackspeedoffset: 0.644,
        attackspeedperlevel:3.5,
        attackrange:125,
        movespeed:335
      },
      skill:[
        {pasive:"Golpes Conmocionantes",img:"https://opgg-static.akamaized.net/images/lol/passive/Braum_Passive.png?image=q_auto,w_48&v=1591083841",info:"Los ataques básicos de Braum aplican Golpes Conmocionantes. Una vez que se aplique la primera acumulación, los ataques básicos de aliados también acumulan Golpes Conmocionantes. Al alcanzar 4 acumulaciones, el objetivo queda aturdido y recibe daño mágico. No pueden recibir acumulaciones nuevas durante los siguientes segundos, pero reciben daño mágico adicional de los ataques de Braum."},
        {q:"Rigor del Invierno",img:"https://opgg-static.akamaized.net/images/lol/spell/BraumQ.png?image=q_auto,w_48&v=1591083841",info:"Braum lanza hielo de su escudo, lo que ralentiza e inflige daño mágico. Aplica una acumulación de Golpes Conmocionantes."},
        {w:"Detrás de Mí",img:"https://opgg-static.akamaized.net/images/lol/spell/BraumW.png?image=q_auto,w_48&v=1591083841",info:"Braum salta hacia un campeón o súbdito aliado. Al llegar, Braum y el aliado obtienen armadura y resistencia mágica durante algunos segundos."},
        {e:"Inquebrantable",img:"https://opgg-static.akamaized.net/images/lol/spell/BraumE.png?image=q_auto,w_48&v=1591083841",info:"Braum levanta su escudo en una dirección durante varios segundos e intercepta todos los proyectiles para destruirlos en el proceso. Repele el daño del primer ataque por completo y reduce el daño de todos los ataques subsecuentes en esa dirección."},
        {r:"Fisura Glacial",img:"https://opgg-static.akamaized.net/images/lol/spell/BraumRWrapper.png?image=q_auto,w_48&v=1591083841",info:"Braum golpea con fuerza el piso y lanza por el aire a los enemigos cercanos y en línea frente a él. A lo largo de la línea permanece una fisura que ralentiza a los enemigos."}
      ]
    },
    Caitlyn: {
      version: "V10.14",
      id: "Caitlyn",
      key: "51",
      name: "Caitlyn",
      title: "La Sheriff De Piltóver",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Caitlyn.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg",
      blurb:
        "Reconocida como la mejor pacificadora, Caitlyn también es la mejor oportunidad de Piltóver para deshacerse de los elementos criminales elusivos de su ciudad. A veces hace equipo con Vi y es un buen contrapunto para la naturaleza más impulsiva de su compañera. Aunque carga un rifle hextech único, el arma más poderosa de Caitlyn es su intelecto superior, el cual le permite tender trampas elaboradas para malhechores que son suficientemente tontos para operar en la Ciudad del Progreso.",
      info: {
        attack: 8,
        defense: 2,
        magic: 2,
        difficulty: 2
      },
      image: {
        full: "Caitlyn.png",
        sprite: "champion0.png",
        group: "champion",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2011-01-04",
      patch: "V1.0.0.108",
      graphic :{
	    damage:3,
	    toughness:0,
	    control:2,
	    mobility:2,
	    utility:0,
      },
      stats: {
        hp: 510,
        hpperlevel:93 ,
        mp:313.7 ,
        mpperlevel:35,
        armor:28 ,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel :0.5 ,
        hpregen: 3.5,
        hpregenperlevel:0.55 ,
        mpregen: 7.4,
        mpregenperlevel: 0.55,
        attackdamage: 62,
        attackdamageperlevel:2.88,
        attackspeedoffset: 0.568,
        attackspeedperlevel:4 ,
        attackrange:650 ,
        movespeed:325 
      },
      skill:[
        {pasive:"Disparo a la Cabeza",img:"https://opgg-static.akamaized.net/images/lol/passive/Caitlyn_Headshot.png?image=q_auto,w_48&v=1591083841",info:"Caitlyn disparará a la cabeza tras cierto número de ataques básicos o contra un objetivo que atrape. Los disparos a la cabeza infligen daño adicional que aumenta con su probabilidad de golpe crítico. El alcance de ataque del Disparo a la Cabeza de Caitlyn se duplica contra objetivos que estén atrapados."},
        {q:"Pacificadora de Piltóver",img:"https://opgg-static.akamaized.net/images/lol/spell/CaitlynPiltoverPeacemaker.png?image=q_auto,w_48&v=1591083841",info:"Caitlyn carga su rifle durante 1 segundo para liberar un disparo penetrante que provoca daño físico (causa menos daños a los objetivos posteriores)."},
        {w:"Trampa Para Yordles",img:"https://opgg-static.akamaized.net/images/lol/spell/CaitlynYordleTrap.png?image=q_auto,w_48&v=1591083841",info:"Caitlyn pone una trampa para encontrar yordles escurridizos. Cuando se activa, la trampa revela e inmoviliza al campeón enemigo durante 1.5 seg y le otorga un Disparo a la Cabeza potenciado a Caitlyn."},
        {e:"Red Calibre 90",img:"https://opgg-static.akamaized.net/images/lol/spell/CaitlynEntrapment.png?image=q_auto,w_48&v=1591083841",info:"Caitlyn lanza una red pesada para ralentizar a su objetivo. El retroceso empuja hacia atrás a Caitlyn."},
        {r:"As Bajo la Mira",img:"https://opgg-static.akamaized.net/images/lol/spell/CaitlynAceintheHole.png?image=q_auto,w_48&v=1591083841",info:"Caitlyn se toma su tiempo para preparar el tiro perfecto, causando una gran cantidad de Daño a un solo objetivo a gran distancia. Los campeones enemigos pueden interceptar la bala para sus aliados."}
      ]
    },
    Camille: {
      version: "V10.14",
      id: "Camille",
      key: "164",
      name: "Camille",
      title: "La Sombra de Acero",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Camille.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg",
      blurb:
        "Armada para operar fuera de los límites de la ley, Camille es la principal inteligencia del Clan Ferros: una elegante agente de élite que se asegura de que la máquina de Piltóver y el submundo zaunita funcione sin problemas. Al ser adaptable y precisa, ella ve las técnicas torpes como una vergüenza que necesita ponerse en línea. Con una mente tan brillante y afilada como las cuchillas que porta, la búsqueda de Camille por la superioridad a través de las mejoras de cuerpo de hextech, han hecho que la gente se pregunte si es más máquina que mujer.",
      info: {
        attack: 8,
        defense: 6,
        magic: 3,
        difficulty: 2
      },
      image: {
        full: "Camille.png",
        sprite: "champion4.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2016-12-07",
      patch: "V6.24",
      graphic :{
        damage:3,
        toughness:2,
        control:2,
        mobility:3,
        utility:0,
      },
      stats: {
        hp: 575.6,
        hpperlevel: 85,
        mp: 338.8,
        mpperlevel: 32,
        armor: 35,
        armorperlevel:3.8 ,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 8.5,
        hpregenperlevel: 0.8,
        mpregen: 8.15,
        mpregenperlevel: 0.75,
        attackdamage: 68,
        attackdamageperlevel:3.5,
        attackspeedoffset: 0.644,
        attackspeedperlevel:2.5 ,
        attackrange: 125,
        movespeed: 340
      },
      skill:[
        {pasive:"Defensas Flexibles",img:"https://opgg-static.akamaized.net/images/lol/passive/Camille_Passive.png?image=q_auto,w_48&v=1591083841",info:"Los ataques básicos a campeones otorgan un escudo igual al 20% de la Vida Máxima de Camille contra su tipo de daño (físico o mágico) por un breve momento."},
        {q: "Protocolo de Precisión",img:"https://opgg-static.akamaized.net/images/lol/spell/CamilleQ.png?image=q_auto,w_48&v=1591083841",info:"El siguiente ataque de Camille inflige daño adicional y le otorga velocidad de movimiento adicional. Puedes volver a lanzar este hechizo durante un breve periodo e infligirá mucho daño adicional si Camille se toma un momento entre ambos ataques."},
        {w: "Barrido Táctico",img:"https://opgg-static.akamaized.net/images/lol/spell/CamilleW.png?image=q_auto,w_48&v=1591083841",info:"Camille ataca en un área en cono después de una espera, lo que inflige daño. Los enemigos que se encuentren en la mitad exterior quedarán ralentizados y recibirán daño adicional, lo que le restaura vida a Camille."},
        {e: "Gancho",img:"https://opgg-static.akamaized.net/images/lol/spell/CamilleE.png?image=q_auto,w_48&v=1591083841",info:"Camille se impulsa a sí misma hacia un muro, salta y, al aterrizar, lanza a los campeones enemigos por el aire."},
        {r: "El Ultimátum Hextech",img:"https://opgg-static.akamaized.net/images/lol/spell/CamilleR.png?image=q_auto,w_48&v=1591083841",info:"Camille se desplaza a un campeón objetivo y lo inmoviliza en el área. Además, inflige daño mágico adicional al objetivo con sus ataques básicos."}
     ]
    },
    Cassiopeia: {
      version: "V10.14",
      id: "Cassiopeia",
      key: "69",
      name: "Cassiopeia",
      title: "El Abrazo de la Serpiente",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Cassiopeia.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg",
      blurb:
        "Cassiopeia es una criatura mortífera que disfruta manipular a otros para que hagan su voluntad siniestra. La más joven y más hermosa hija de la familia noble de Du Couteau de Noxus, se aventuró a las profundidades de la cripta debajo de Shurima en búsqueda de un poder antiguo. Ahí la mordió un espantoso guardián de la tumba y su veneno la transformó en un depredador similar a una víbora. Astuta y ágil, Cassiopeia ahora se desliza bajo el velo de la noche y petrifica a sus enemigos con su maléfica mirada.",
      info: {
        attack: 2,
        defense: 3,
        magic: 9,
        difficulty: 3
      },
      image: {
        full: "Cassiopeia.png",
        sprite: "champion0.png",
        group: "champion",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2010-12-14",
      patch: "V1.0.0.107",
      graphic :{
        damage:3,
        toughness:1,
        control:3,
        mobility:1,
        utility:0,
      },
      stats: {
        hp: 560,
        hpperlevel: 90,
        mp: 350,
        mpperlevel: 40,
        armor: 18,
        armorperlevel:3.5 ,
        mrbase: 32,
        mrlevel : 0.5,
        hpregen: 5.5,
        hpregenperlevel: 0.5,
        mpregen: 8,
        mpregenperlevel: 0.8,
        attackdamage: 53,
        attackdamageperlevel:3,
        attackspeedoffset: 0.647,
        attackspeedperlevel:1.5 ,
        attackrange: 550,
        movespeed: 328
      },
      skill:[
        {pasive:"Gracia Serpentina",img:"https://opgg-static.akamaized.net/images/lol/passive/Cassiopeia_Passive.png?image=q_auto,w_48&v=1591083841",info:"Cassiopeia gana velocidad de movimiento por nivel, pero no puede comprar objetos del tipo Botas."},
        {q:"Explosion Nociva",img:"https://opgg-static.akamaized.net/images/lol/spell/CassiopeiaQ.png?image=q_auto,w_48&v=1591083841",info:"Cassiopeia lanza Veneno sobre un área después de un breve momento. Si impacta a un campeón enemigo, obtiene velocidad de movimiento aumentada."},
        {w:"Miasma",img:"https://opgg-static.akamaized.net/images/lol/spell/CassiopeiaW.png?image=q_auto,w_48&v=1591083841",info:"Cassiopeia libera varias nubes de veneno que ralentizan, anclan y dañan ligeramente a los enemigos que pasen a través de ellas. Los enemigos anclados no podrán utilizar habilidades de movimiento."},
        {e:"Colmillos Gemelos",img:"https://opgg-static.akamaized.net/images/lol/spell/CassiopeiaE.png?image=q_auto,w_48&v=1591083841",info:"Cassiopeia libera un ataque que inflige daño adicional a objetivos afectados con Veneno y se cura a sí misma por un porcentaje del daño infligido. Si el objetivo muere por este ataque, Cassiopeia recupera maná."},
        {r:"Mirada Petrificante",img:"https://opgg-static.akamaized.net/images/lol/spell/CassiopeiaR.png?image=q_auto,w_48&v=1591083841",info:"Cassiopeia lanza un rayo de energía mágica de sus ojos que aturde a los enemigos frente a ella que la estén viendo y ralentiza a los enemigos que le estén dando la espalda."}
      ]
    },
    Chogath: {
      version: "V10.14",
      id: "Chogath",
      key: "31",
      name: "Cho'Gath",
      title: "El Terror Del Vacío",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Chogath.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg",
      blurb:
        "Desde el momento que Cho'Gath emergió por primera vez a la fuerte luz del sol de Runaterra, la bestia se vio consumida por el hambre más pura e insaciable. Como una expresión perfecta del deseo del Vacío para consumir toda vida conocida, la biología compleja de Cho'Gath convierte rápidamente la materia en más crecimiento para su cuerpo, aumentando su masa y densidad muscular o endureciendo su caparazón como diamante orgánico. Cuando crecer más no cumple con las necesidades del engendro del Vacío, este vomita el material excedente en forma de espinas filosas como navajas, dejando a la presa como brocheta, lista para comerse más tarde.",
      info: {
        attack: 3,
        defense: 7,
        magic: 7,
        difficulty: 2
      },
      image: {
        full: "Chogath.png",
        sprite: "champion0.png",
        group: "champion",
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tanque", "Mago"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-06-26",
      patch: "V.26.07.2009",
      graphic :{
        damage:2,
        toughness:3,
        control:2,
        mobility:0,
        utility:1,
      },
      stats: {
        hp:574.4 ,
        hpperlevel:80 ,
        mp:272.2 ,
        mpperlevel:40 ,
        armor: 38,
        armorperlevel: 3.5,
        mrbase: 32.1,
        mrlevel :1.25 ,
        hpregen: 9,
        hpregenperlevel: 0.85,
        mpregen: 7.206,
        mpregenperlevel: 0.45,
        attackdamage:69 ,
        attackdamageperlevel:4.2,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 1.44,
        attackrange:125 ,
        movespeed: 345
      },
      skill:[
        {pasive:"Carnívoro",img:"https://opgg-static.akamaized.net/images/lol/passive/GreenTerror_TailSpike.png?image=q_auto,w_48&v=1591083841",info:"Cho'Gath restaura Vida y Maná cada vez que elimina a un enemigo. La cantidad aumenta con el nivel de Cho'Gath."},
        {q:"Ruptura",img:"https://opgg-static.akamaized.net/images/lol/spell/Rupture.png?image=q_auto,w_48&v=1591083841",info:"Provoca una ruptura en el piso en la ubicación objetivo que hace volar a las unidades enemigas, les inflige daño y las ralentiza."},
        {w:"Grito Salvaje",img:"https://opgg-static.akamaized.net/images/lol/spell/FeralScream.png?image=q_auto,w_48&v=1591083841",info:"Cho'Gath desata un terrible grito en forma de cono a los enemigos, les inflige daño mágico y los silencia durante unos segundos."},
        {e:"Clavos Vorpalinos",img:"https://opgg-static.akamaized.net/images/lol/spell/VorpalSpikes.png?image=q_auto,w_48&v=1591083841",info:"Los ataques de Cho'Gath liberan púas mortales que dañan y ralentizan a todas las unidades enemigas frente a él."},
        {r:"Festín",img:"https://opgg-static.akamaized.net/images/lol/spell/Feast.png?image=q_auto,w_48&v=1591083841",info:"Devora a una unidad enemiga y le inflige una gran cantidad de daño verdadero. Si el objetivo muere, Cho'Gath crece y obtiene vida máxima."}
      ]
    },
    Corki: {
      version: "V10.14",
      id: "Corki",
      key: "42",
      name: "Corki",
      title: "El Bombardero Osado",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Corki.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg",
      blurb:
        "Corki, el piloto yordle, adora dos cosas sobre todo lo demás: volar y su glamoroso bigote... aunque no siempre en ese orden. Luego de dejar la Ciudad de Bandle, se estableció en Piltóver y se enamoró de las máquinas maravillosas que encontró ahí. Se dedicó al desarrollo de artilugios voladores, liderando una fuerza de defensa área de veteranos que se conocen como Serpientes Aulladoras. Corki, quien mantiene la calma bajo fuego enemigo, patrulla los cielos alrededor de su hogar adoptivo y nunca ha encontrado un problema que unos cuantos misiles no puedan resolver.",
      info: {
        attack: 8,
        defense: 3,
        magic: 6,
        difficulty: 2
      },
      image: {
        full: "Corki.png",
        sprite: "champion0.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-09-19",
      patch: "V0.9.25.21",
      graphic :{
        damage:3,
        toughness:0,
        control:1,
        mobility:2,
        utility:0,
      },
      stats: {
        hp: 518,
        hpperlevel: 87,
        mp: 350.16,
        mpperlevel: 34,
        armor: 28,
        armorperlevel:3.5 ,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen:5.5 ,
        hpregenperlevel: 0.55,
        mpregen: 7.424,
        mpregenperlevel: 0.55,
        attackdamage: 55,
        attackdamageperlevel:2.5,
        attackspeedoffset: 0.638,
        attackspeedperlevel: 2.3,
        attackrange:550 ,
        movespeed:325
      },
      skill:[
        {pasive:"Munición Hextech",img:"https://opgg-static.akamaized.net/images/lol/passive/Corki_RapidReload.png?image=q_auto,w_48&v=1591083841",info:"Los ataques básicos de Corki infligen un porcentaje de su daño como daño mágico en lugar de físico. Cada cierto tiempo, El Paquete llega a la base de Corki para que lo recoja, lo que le otorga de forma temporal Velocidad de Movimiento fuera de combate y mejora a Valquiria a Entrega Especial." },
        {q:"Bomba Fosfórica",img:"https://opgg-static.akamaized.net/images/lol/spell/PhosphorusBomb.png?image=q_auto,w_48&v=1591083841",info:"Corki dispara una bomba luminosa a una ubicación objetivo e inflige daño mágico a los enemigos que estén en el área. Además, este ataque revelará unidades en el área mientras dure su efecto."},
        {w:"Valquiria",img:"https://opgg-static.akamaized.net/images/lol/spell/CarpetBomb.png?image=q_auto,w_48&v=1591083841",info:"Corki vuela una distancia corta y suelta bombas que dejan un rastro de fuego que dañará a los oponentes que permanezcan sobre él."},
        {e:"Cañon de Repetición",img:"https://opgg-static.akamaized.net/images/lol/spell/GGun.png?image=q_auto,w_48&v=1591083841",info:"El cañón de repetición de Corki dispara rápidamente hacia adelante en forma de cono. Inflige daño, y reduce la armadura y la resistencia mágica de los enemigos."},
        {r:"Descarga de Misiles",img:"https://opgg-static.akamaized.net/images/lol/spell/MissileBarrage.png?image=q_auto,w_48&v=1591083841",info:"Corki dispara un misil en dirección a su ubicación objetivo, el cual explota al impacto e inflige daño a los enemigos del área. Corki acumula misiles progresivamente hasta llegar a un máximo. Cada tercer misil disparará un misil grande que inflige daño adicional."}
      ]
    },
    Darius: {
      version: "V10.14",
      id: "Darius",
      key: "122",
      name: "Darius",
      title: "La Mano De Noxus",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Darius.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg",
      blurb:
        "No hay símbolo más grande del poder noxiano que Darius, el líder más temido y con más experiencia en la guerra. Desde sus orígenes humildes hasta convertirse en la Mano de Noxus, Darius acaba con los enemigos del imperio, de los cuales, muchos también son noxianos. Al saber que él nunca dudará si su causa es justa y que no titubeará una vez que levanta su hacha, quienes se enfrentan al comandante de la Legión Trifariana saben no les tendrá misericordia.",
      info: {
        attack: 9,
        defense: 5,
        magic: 1,
        difficulty: 1
      },
      image: {
        full: "Darius.png",
        sprite: "champion0.png",
        group: "champion",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2012-05-23",
      patch: "V1.0.0.140",
      graphic :{
        damage:3,
        toughness:2,
        control:2,
        mobility:0,
        utility:0,
      },
      stats: {
        hp: 582.24,
        hpperlevel:100 ,
        mp: 263,
        mpperlevel:37.5 ,
        armor:39 ,
        armorperlevel:4 ,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 10,
        hpregenperlevel: 0.95,
        mpregen: 6.6,
        mpregenperlevel: 0.35,
        attackdamage: 64,
        attackdamageperlevel:5,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 1,
        attackrange: 175,
        movespeed: 340
      },
      skill:[
        {pasive:"Hemorragia",img:"https://opgg-static.akamaized.net/images/lol/passive/Darius_Icon_Hemorrhage.png?image=q_auto,w_48&v=1591083841",info:"Los ataques y habilidades de daño de Darius provocan que los enemigos sangren y reciban daño físico a lo largo de 5 seg. Se acumula hasta 5 veces."},
        {q:"Diezmar",img:"https://opgg-static.akamaized.net/images/lol/spell/DariusCleave.png?image=q_auto,w_48&v=1591083841",info:"Darius reúne fuerzas y lanza un ataque circular amplio con su hacha. Los enemigos alcanzados por el filo recibirán más daño que los alcanzados por el mango. Darius se cura con los impactos a campeones enemigos y monstruos grandes con el filo del hacha."},
        {w:"Golpe Incapacitante",img:"https://opgg-static.akamaized.net/images/lol/spell/DariusNoxianTacticsONH.png?image=q_auto,w_48&v=1591083841",info:"El siguiente ataque de Darius corta una arteria crucial del enemigo. El enemigo perderá velocidad de movimiento a medida que se desangra."},
        {e:"Aprehender",img:"https://opgg-static.akamaized.net/images/lol/spell/DariusAxeGrabCone.png?image=q_auto,w_48&v=1591083841",info:"Darius afila su hacha, lo que le permite ignorar parte de la armadura de su objetivo de manera pasiva. Al activarla, Darius barre a los enemigos con su hacha y los trae hacia él."},
        {r:"Guillotina Noxiana",img:"https://opgg-static.akamaized.net/images/lol/spell/DariusExecute.png?image=q_auto,w_48&v=1591083841",info:"Darius salta hacia un campeón enemigo y le asesta un golpe letal que inflige daño verdadero. El daño aumenta con cada acumulación de Hemorragia que tenga el objetivo. Guillotina Noxiana restaura su enfriamiento durante unos segundos si causó un asesinato."}
      ]
    },
    Diana: {
      version: "V10.14",
      id: "Diana",
      key: "131",
      name: "Diana",
      title: "El Desdén de la Luna",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Diana.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg",
      blurb:
        "Portando su hoja lunar creciente, Diana pelea como una guerrera de los Lunari, una poderosa fe que impera en las tierras alrededor del Monte Targón. Blindada con una armadura reluciente del color de la nieve de invierno durante la noche, ella es la encarnación viviente del poder de la luna de plata. Imbuida con la esencia de un Aspecto que viene de más allá de la cúspide de torres de Targón, Diana ya no es completamente humana, y le cuesta entender su poder y propósito en este mundo",
      info: {
        attack: 7,
        defense: 6,
        magic: 8,
        difficulty: 2
      },
      image: {
        full: "Diana.png",
        sprite: "champion0.png",
        group: "champion",
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Mago"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2012-08-07",
      patch: "V1.0.0.144",
      graphic :{
        damage:3,
        toughness:2,
        control:2,
        mobility:2,
        utility:0,
      },
      stats: {
        hp:570,
        hpperlevel: 95,
        mp: 372,
        mpperlevel:20 ,
        armor: 31,
        armorperlevel:3.6 ,
        mrbase: 32.1,
        mrlevel :1.25 ,
        hpregen: 7.5,
        hpregenperlevel:0.85 ,
        mpregen: 8,
        mpregenperlevel:0.8 ,
        attackdamage: 57,
        attackdamageperlevel:3,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 2.25,
        attackrange: 150,
        movespeed: 345
      },
      skill:[
        {pasive:"Navaja De Lunaplata",img:"https://opgg-static.akamaized.net/images/lol/passive/Diana_Passive_LunarBlade.png?image=q_auto,w_48&v=1591083841",info:"Cada tercer golpe corta a enemigos cercanos e inflige daño mágico adicional. Después de lanzar un hechizo, Diana obtiene velocidad de ataque en sus 3 ataques siguientes."},
        {q:"Golpe Creciente",img:"https://opgg-static.akamaized.net/images/lol/spell/DianaQ.png?image=q_auto,w_48&v=1591083841",info:"Desata un rayo de energía lunar en forma de arco que inflige daño mágico. Los enemigos impactados quedan afectados con Luz Lunar y Diana los revela durante 3 seg si no están en sigilo."},
        {w:"Cascada Pálida",img:"https://opgg-static.akamaized.net/images/lol/spell/DianaOrbs.png?image=q_auto,w_48&v=1591083841",info:"Diana crea tres esferas que orbitan, explotan al contacto con los enemigos e infligen daño de área. Además, obtiene un escudo temporal que absorbe daño. Si la tercera esfera explota, el escudo adquiere fuerza adicional."},
        {e:"Impilso Lunar",img:"https://opgg-static.akamaized.net/images/lol/spell/DianaTeleport.png?image=q_auto,w_48&v=1591083841",info:"Diana se convierte en la encarnación viva de la luna vengativa, se desplaza hacia un enemigo y le inflige daño mágico. Impulso Lunar no tiene enfriamiento si Diana lo usa para desplazarse hacia un enemigo marcado con Luz Lunar. El efecto de Luz Lunar en todos los demás enemigos terminará sin importar si hayan sido o no el objetivo de Impulso Lunar."},
        {r:"Caida De La Luna ",img:"https://opgg-static.akamaized.net/images/lol/spell/DianaR.png?image=q_auto,w_48&v=1591083841",info:"Diana revela y atrae a todos los enemigos cercanos y luego los ralentiza. Si atrae a uno o más campeones enemigos, la luz de luna choca contra ella después de un breve momento, lo que inflige daño mágico en una zona alrededor de ella. Este daño aumenta por cada objetivo adicional atraído."}
     ],
    },
    Draven: {
      version: "V10.14",
      id: "Draven",
      key: "119",
      name: "Draven",
      title: "El Glorioso Ejecutor",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Draven.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg",
      blurb:
        "En Noxus, los guerreros llamados ''jueces'' se enfrentan unos a otros en arenas donde la sangre corre y la fuerza se pone a prueba, pero nadie ha sido tan celebrado como Draven. Este exsoldado encontró que el público en verdad apreciaba su habilidad para el melodrama y su talento sinigual para manejar hachas giratorias. Adicto al espectáculo de su propia creación audaz, Draven juró vencer a quien sea necesario para asegurar que su nombre se cante por todo el imperio durante toda la eternidad.",
      info: {
        attack: 9,
        defense: 3,
        magic: 1,
        difficulty: 3
      },
      image: {
        full: "Draven.png",
        sprite: "champion0.png",
        group: "champion",
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2012-06-06",
      patch: "V1.0.0.140b",
      graphic :{
        damage:3,
        toughness:0,
        control:1,
        mobility:2,
        utility:0,
      },
      stats: {
        hp: 605,
        hpperlevel: 90,
        mp: 360.56,
        mpperlevel:39 ,
        armor: 29,
        armorperlevel: 3.3,
        mrbase: 30,
        mrlevel :0.5 ,
        hpregen: 3.75,
        hpregenperlevel: 0.7,
        mpregen: 8.042,
        mpregenperlevel: 0.65,
        attackdamage: 60,
        attackdamageperlevel:3.61,
        attackspeedoffset: 0.679,
        attackspeedperlevel:2.7 ,
        attackrange: 550,
        movespeed:330 
      },
      skill:[
        {pasive:"League Of Draven",img:"https://opgg-static.akamaized.net/images/lol/passive/Draven_passive.png?image=q_auto,w_48&v=1591083841",info:"Draven obtiene Adoración de sus seguidores cuando atrapa un Hacha Giratoria o cuando mata a un súbdito, monstruo o torre. Asesinar campeones enemigos le otorga oro adicional a Draven según la cantidad de Adoración que tenga"},
        {q:"Hacha Giratoria",img:"https://opgg-static.akamaized.net/images/lol/spell/DravenSpinning.png?image=q_auto,w_48&v=1591083841",info:"El siguiente ataque de Draven infligirá daño físico adicional. Esta hacha rebotará del enemigo hacia el aire. Si Draven la atrapa, preparará automáticamente otra Hacha Giratoria. Draven puede manejar dos Hachas Giratorias al mismo tiempo."},
        {w:"Impulso Sangriento",img:"https://opgg-static.akamaized.net/images/lol/spell/DravenFury.png?image=q_auto,w_48&v=1591083841",info:"Draven obtiene velocidad de movimiento y de ataque aumentadas. La velocidad de movimiento adicional se reduce rápidamente a lo largo de su duración. Atrapar un Hacha Giratoria restablecerá el enfriamiento de Impulso Sangriento."},
        {e:"Apártate",img:"https://opgg-static.akamaized.net/images/lol/spell/DravenDoubleShot.png?image=q_auto,w_48&v=1591083841",info:"Draven lanza sus hachas, lo que inflige daño físico a los objetivos impactados y los lanza a un lado. Los objetivos impactados quedan ralentizados."},
        {r:"Muerte Rodante",img:"https://opgg-static.akamaized.net/images/lol/spell/DravenRCast.png?image=q_auto,w_48&v=1591083841",info:"Draven arroja dos hachas gigantes que infligen daño físico a cada unidad impactada. Muerte Rodante revierte lentamente su dirección y regresa a Draven después de impactar a un campeón enemigo. Draven también puede activar esta habilidad mientras las hachas estén a medio trayecto para hacer que regresen antes. Inflige daño reducido por cada unidad impactada y se restablece cuando las hachas revierten su dirección."}
     ],
    },
    DrMundo: {
      version: "V10.14",
      id: "DrMundo",
      key: "36",
      name: "Dr. Mundo",
      title: "El Loco De Zaun",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/DrMundo.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg",
      blurb:
        "El Dr. Mundo, completamente demente, desvergonzadamente homicida y espeluznantemente morado, es la razón por la cual los ciudadanos de Zaun permanecen en sus casas en las noches particularmente oscuras. Esta monstruosidad monosilábica parece solo buscar una cosa: el dolor, ya sea infligirlo o recibirlo. Mundo lleva su cuchillo carnicero gigantesco como si no le pesara y es conocido por capturar y torturar a decenas de ciudadanos de Zaun para sus ''operaciones'' viles, las cuales parecen no tener ningún propósito. Es brutal, es impredecible, va a dondequiera que le plazca. Además, técnicamente no es un doctor.",
      info: {
        attack: 5,
        defense: 7,
        magic: 6,
        difficulty: 2
      },
      image: {
        full: "DrMundo.png",
        sprite: "champion0.png",
        group: "champion",
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "None",
      rangetype:"cuerpo a cuerpo",
      date: "2009-09-02",
      patch: "V0.0.22.16",
      graphic :{
        damage:2,
        toughness:3,
        control:1,
        mobility:0,
        utility:0,
      },
      stats: {
        hp:582.52 ,
        hpperlevel: 89,
        mp: 0,
        mpperlevel:0 ,
        armor: 36,
        armorperlevel:3.5 ,
        mrbase: 32.1,
        mrlevel :1.25 ,
        hpregen: 8,
        hpregenperlevel:0.75 ,
        mpregen: 0,
        mpregenperlevel:0 ,
        attackdamage: 61.27,
        attackdamageperlevel:3.5,
        attackspeedoffset: 0.625,
        attackspeedperlevel:2.8 ,
        attackrange: 125,
        movespeed: 345
      },
      skill:[
        {pasive:"Descarga de Adrenalina",img:"https://opgg-static.akamaized.net/images/lol/passive/DrMundo_Passive.png?image=q_auto,w_48&v=1591083841",info:"El Dr. Mundo regenera un 0,3% de su Vida máxima por segundo."},
        {q:"Cuchilla Infectada",img:"https://opgg-static.akamaized.net/images/lol/spell/InfectedCleaverMissileCast.png?image=q_auto,w_48&v=1591083841",info:"Dr. Mundo arroja su cuchilla, lo que inflige daño mágico igual a un porcentaje de la vida actual de su objetivo y lo ralentiza durante un breve periodo. Dr. Mundo se deleita con el sufrimiento de los demás, por lo que recupera un porcentaje del costo de vida cuando conecta una cuchilla (se duplica en golpes letales)."},
        {w:"Ardiente Agonía",img:"https://opgg-static.akamaized.net/images/lol/spell/BurningAgony.png?image=q_auto,w_48&v=1591083841",info:"Dr. Mundo drena su propia vida para reducir la duración de las inhabilitaciones e infligir daño continuo a los enemigos cercanos."},
        {e:"Masoquismo",img:"https://opgg-static.akamaized.net/images/lol/spell/Masochism.png?image=q_auto,w_48&v=1591083841",info:"Dr. Mundo obtiene daño de ataque adicional según su vida faltante y su siguiente ataque básico le da un cabezazo a su objetivo, lo que inflige daño adicional. Aumenta la resistencia mágica de manera pasiva cuando Dr. Mundo recibe daño mágico o paga un costo de vida."},
        {r:"Sadismo",img:"https://opgg-static.akamaized.net/images/lol/spell/Sadism.png?image=q_auto,w_48&v=1591083841",info:"El Dr. Mundo sacrifica una parte de su vida para aumentar su velocidad de movimiento y regeneración de vida de forma drástica."}
     ],
    },
    Ekko: {
      version: "V10.14",
      id: "Ekko",
      key: "245",
      name: "Ekko",
      title: "El Jóven Que Fragmento El Tiempo",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ekko.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg",
      blurb:
        "Ekko, un prodigio surgido de las duras calles de Zaun, es capaz de manipular el tiempo para su propio beneficio. Usando una máquina de su invención llamada Pulsar-Z, explora las distintas posibilidades de la realidad para crear el momento perfecto. Aunque adora su libertad, si algo amenaza a sus amigos hará lo que sea para defenderlos. Para quien no sepa quién es en realidad este muchacho, su capacidad de hacer lo imposible una y otra vez resulta increíble.",
      info: {
        attack: 5,
        defense: 3,
        magic: 7,
        difficulty: 3
      },
      image: {
        full: "Ekko.png",
        sprite: "champion0.png",
        group: "champion",
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Asesino", "Luchador"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2015-05-29",
      patch: "V5.10",
      graphic :{
        damage:3,
        toughness:2,
        control:2,
        mobility:3,
        utility:0,
      },
      stats: {
        hp: 585,
        hpperlevel: 85,
        mp: 280,
        mpperlevel: 50,
        armor: 32,
        armorperlevel: 3,
        mrbase: 32,
        mrlevel : 1.25,
        hpregen: 9,
        hpregenperlevel: 0.9,
        mpregen: 7,
        mpregenperlevel: 0.8,
        attackdamage: 58,
        attackdamageperlevel:3,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 3.3,
        attackrange: 125,
        movespeed:340 
      },
      skill:[
        {pasive:"Resonancia Pulsar-Z",img:"https://opgg-static.akamaized.net/images/lol/passive/Ekko_P.png?image=q_auto,w_48&v=1591083841",info:"El Pulsar-Zero potencia sus hechizos y ataques con energía temporal. El tercer impacto causa daño adicional y, si el objetivo es un campeón, Ekko obtiene velocidad de movimiento aumentada."},
        {q:"Rebobinador de Tiempo",img:"https://opgg-static.akamaized.net/images/lol/spell/EkkoQ.png?image=q_auto,w_48&v=1591083841",info:"Ekko lanza una granada temporal que, al alcanzar a un campeón enemigo, genera un campo de distorsión cronológica. Las unidades sorprendidas en su interior sufren daño y quedan ralentizadas. Al cabo de unos instantes, la granada regresa a Ekko y daña a todo lo que esté en su camino."},
        {w:"Convergencia Paralela",img:"https://opgg-static.akamaized.net/images/lol/spell/EkkoW.png?image=q_auto,w_48&v=1591083841",info:"Los ataques básicos de Ekko infligen daño mágico adicional a enemigos con poca vida. Puede lanzar Convergencia Paralela para dividir la línea de tiempo y, tras unos momentos, crear una anomalía que ralentiza a los enemigos atrapados en su interior. Si Ekko entra a la anomalía, obtiene un escudo y suspende a sus enemigos en el tiempo para dejarlos aturdidos."},
        {e:"Salto de Fase",img:"https://opgg-static.akamaized.net/images/lol/spell/EkkoE.png?image=q_auto,w_48&v=1591083841",info:"Ekko rueda por el suelo en un movimiento evasivo mientras activa su Pulsar-Z. Su siguiente ataque inflige daño adicional y distorsiona la realidad para teletransportarlo hasta su objetivo."},
        {r:"Cronorruptura",img:"https://opgg-static.akamaized.net/images/lol/spell/EkkoR.png?image=q_auto,w_48&v=1591083841",info:"Ekko fragmenta su línea temporal y se vuelve imposible de seleccionar como objetivo mientras regresa a un momento pasado más favorable. Reaparece en el mismo sitio donde se encontraba hace unos segundos y recupera una parte de la vida que hubiera perdido en ese tiempo. Los enemigos situados cerca de su zona de llegada reciben muchísimo daño."}
     ],
    },
    Elise: {
      version: "V10.14",
      id: "Elise",
      key: "60",
      name: "Elise",
      title: "La Reina De Las Arañas",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Elise.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg",
      blurb:
        "Elise es una depredadora mortífera que reside en un palacio cerrado y sin luz, en las profundidades de la ciudad más vieja de Noxus. Cuando era mortal era la señora de una poderosa casa, pero la mordida de un vil semidiós la transformó en algo hermoso, pero inhumano: una criatura con forma de araña, quien manda a sus ignorantes presas hacia su telaraña. Para mantener la juventud eterna, Elise ahora prefiere alimentarse de los ingenuos e inocentes y pocos pueden resistirse a su encanto.",
      info: {
        attack: 6,
        defense: 5,
        magic: 7,
        difficulty: 3
      },
      image: {
        full: "Elise.png",
        sprite: "champion0.png",
        group: "champion",
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Luchador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2012-10-26",
      patch: "V1.0.0.150",
      graphic :{
        damage:2,
        toughness:2,
        control:2,
        mobility:2,
        utility:0,
      },
      stats: {
        hp:534,
        hpperlevel:93,
        mp:324,
        mpperlevel:50,
        armor:27,
        armorperlevel:3.35,
        mrbase:30,
        mrlevel :0.5,
        hpregen: 5.5,
        hpregenperlevel: 0.6,
        mpregen: 6,
        mpregenperlevel: 0.8,
        attackdamage:55 ,
        attackdamageperlevel:3,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 1.75,
        attackrange: 550,
        movespeed: 330
      },
      skill:[
        {pasive:"Reina de las Arañas",img:"https://opgg-static.akamaized.net/images/lol/passive/ElisePassive.png?image=q_auto,w_48&v=1591083841",info:"Forma Humana: cuando las habilidades de Elise alcanzan a un enemigo, obtiene una Araña inactiva. Forma Arácnida: los ataques básicos infligen daño mágico adicional y restauran la vida de Elise."},
        {q:"Neurotoxina",img:"https://opgg-static.akamaized.net/images/lol/spell/EliseHumanQ.png?image=q_auto,w_48&v=1591083841",info:"Forma Humana: inflige daño según la vida actual del objetivo. Forma Arácnida: ataca a un enemigo e inflige daño según su vida faltante."},
        {w:"Araña Volátil",img:"https://opgg-static.akamaized.net/images/lol/spell/EliseHumanW.png?image=q_auto,w_48&v=1591083841",info:"Forma Humana: libera una araña con veneno que explota al acercarse a un objetivo. Forma Arácnida: Elise y sus arañas obtienen velocidad de ataque."},
        {e:"Capullo",img:"https://opgg-static.akamaized.net/images/lol/spell/EliseHumanE.png?image=q_auto,w_48&v=1591083841",info:"Forma Humana: aturde al primer enemigo alcanzado y lo revela si no está en sigilo. Forma Arácnida: Elise y sus arañas ascienden por el aire y luego descienden sobre el objetivo enemigo. Después de descender sobre un objetivo enemigo, el daño adicional de Elise y la curación de Reina de las Arañas aumenta."},
        {r:"Forma Arácnida",img:"https://opgg-static.akamaized.net/images/lol/spell/EliseR.png?image=q_auto,w_48&v=1591083841",info:"Se transforma en una araña amenazante y reduce su alcance de ataque a cambio de velocidad de movimiento, habilidades nuevas y un conjunto de arañas que atacará a sus enemigos."}
     ],
    },
    Evelynn: {
      version: "V10.14",
      id: "Evelynn",
      key: "28",
      name: "Evelynn",
      title: "El Abrazo De La Agonía",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg",
      blurb:
        "Dentro de las oscuras vetas de Runaterra, la demonio Evelynn acecha a su siguiente víctima. Seduce a su presa con la apariencia voluptuosa de una mujer humana, pero una vez que alguien sucumbe ante sus encantos, Evelynn revela su verdadera forma. Es en ese momento somete a su víctima a un inimaginable tormento y se deleita con su dolor. Para el demonio, estos encuentros son amoríos inocentes. Para el resto de Runaterra, son historias macabras de lujuria que terminaron mal y atroces recordatorios del costo que tiene el deseo lascivo.",
      info: {
        attack: 4,
        defense: 2,
        magic: 7,
        difficulty: 3
      },
      image: {
        full: "Evelynn.png",
        sprite: "champion0.png",
        group: "champion",
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Asesino", "Mago"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-05-01",
      patch: "May.1.2009",
      graphic :{
        damage:2,
        toughness:2,
        control:1,
        mobility:2,
        utility:2,
      },
      stats: {
        hp: 572,
        hpperlevel: 84,
        mp: 315.6,
        mpperlevel: 42,
        armor: 37,
        armorperlevel:3.5 ,
        mrbase: 32.1,
        mrlevel :1.25 ,
        hpregen: 8.5,
        hpregenperlevel: 0.75,
        mpregen: 8.108,
        mpregenperlevel: 0.6,
        attackdamage:61 ,
        attackdamageperlevel:3,
        attackspeedoffset: 0.667,
        attackspeedperlevel: 2.1,
        attackrange: 125,
        movespeed: 335
      },
      skill:[
        {pasive:"Sombra Demoniaca",img:"https://opgg-static.akamaized.net/images/lol/passive/Evelynn_Passive.png?image=q_auto,w_48&v=1591083841",info:"Cuando no se encuentra en combate, Evelynn activa Sombra Demoníaca. Sombra Demoníaca cura a Evelynn cuando tiene poca vida y le otorga Camuflaje a partir del nivel 6."},
        {q:"Púas de Odio",img:"https://opgg-static.akamaized.net/images/lol/spell/EvelynnQ.png?image=q_auto,w_48&v=1591083841",info:"Evelynn ataca con su látigo, lo que inflige daño a la primera unidad que alcanza. Luego, Evelynn puede disparar una línea de púas a los enemigos cercanos hasta 3 veces."},
        {w:"Seducción",img:"https://opgg-static.akamaized.net/images/lol/spell/EvelynnW.png?image=q_auto,w_48&v=1591083841",info:"Evelynn maldice a su objetivo, lo que hace que, tras una espera, su siguiente ataque o hechizo encante y reduzca la resistencia mágica de su objetivo."},
        {e:"Latigazo",img:"https://opgg-static.akamaized.net/images/lol/spell/EvelynnE.png?image=q_auto,w_48&v=1591083841",info:"Evelynn ataca a su objetivo con su látigo, lo que inflige daño. Luego, obtiene velocidad de movimiento durante unos momentos."},
        {r:"Última Caricia",img:"https://opgg-static.akamaized.net/images/lol/spell/EvelynnR.png?image=q_auto,w_48&v=1591083841",info:"Evelynn se vuelve inalcanzable y diezma la zona frente a ella antes de teletransportarse una larga distancia hacia atrás."}
     ]
    },
    Ezreal: {
      version: "V10.14",
      id: "Ezreal",
      key: "81",
      name: "Ezreal",
      title: "El Explorador Pródigo",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ezreal.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg",
      blurb:
        "Un aventurero deslumbrante, inconscientemente talentoso para las artes mágicas, Ezreal saquea catacumbas hace mucho tiempo perdidas, se enreda en antiguas maldiciones y supera probabilidades aparentemente imposibles con ligereza. Su valentía no conoce límite, pero prefiere improvisar su manera de escapar de cualquier situación, sobre todo confiando en su ingenio, pero más que nada en su místico guantelete shurimano, que usa para desatar impactos arcanos devastadores. Una cosa es cierta: cada vez que Ezreal está cerca, los problemas no demoran en llegar. O incluso se adelantan. Seguramente están en todos lados.",
      info: {
        attack: 7,
        defense: 2,
        magic: 6,
        difficulty:2
      },
      image: {
        full: "Ezreal.png",
        sprite: "champion0.png",
        group: "champion",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2010-03-16",
      patch: "V1.0.0.79",
      graphic :{
        damage:3,
        toughness:0,
        control:0,
        mobility:3,
        utility:0,
      },
      stats: {
        hp: 530,
        hpperlevel:88 ,
        mp: 360.6,
        mpperlevel: 50,
        armor: 22,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 4,
        hpregenperlevel: 0.55,
        mpregen: 8.092,
        mpregenperlevel: 0.65,
        attackdamage: 60,
        attackdamageperlevel:2.5,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 2.5,
        attackrange: 550,
        movespeed: 325
      },
      skill:[
        {pasive:"Fuerza de Hechizo Creciente",img:"https://opgg-static.akamaized.net/images/lol/passive/Ezreal_RisingSpellForce.png?image=q_auto,w_48&v=1591083841",info:"Ezreal obtiene velocidad de ataque que aumenta cada vez que acierta uno de sus hechizos. Se acumula hasta 5 veces."},
        {q:"Disparo Místico",img:"https://opgg-static.akamaized.net/images/lol/spell/EzrealQ.png?image=q_auto,w_48&v=1591083841",info:"Ezreal dispara un rayo de energía dañino que reduce ligeramente todos sus enfriamientos si impacta a una unidad enemiga."},
        {w:"Flujo de Esencia",img:"https://opgg-static.akamaized.net/images/lol/spell/EzrealW.png?image=q_auto,w_48&v=1591083841",info:"Ezreal dispara un orbe que se adhiere al primer campeón u objetivo alcanzado. Si Ezreal ataca a un enemigo con el orbe, lo detona e inflige daño."},
        {e:"Desplazamiento Arcano",img:"https://opgg-static.akamaized.net/images/lol/spell/EzrealE.png?image=q_auto,w_48&v=1591083841",info:"Ezreal se teletransporta a una ubicación cercana y le dispara un rayo dirigido a la unidad enemiga más cercana. Da prioridad a los enemigos afectados por Flujo de Esencia."},
        {r:"Descarga de Tiros Certeros",img:"https://opgg-static.akamaized.net/images/lol/spell/EzrealR.png?image=q_auto,w_48&v=1591083841",info:"Ezreal concentra su poder para lanzar una poderosa ráfaga de energía que inflige daño masivo a todas las unidades a su paso (el daño se reduce para súbditos y monstruos no épicos)."}
     ]
    },
    FiddleSticks: {
      version: "V10.14",
      id: "FiddleSticks",
      key: "9",
      name: "Fiddlesticks",
      title: "El Terror Ancestral",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/FiddleSticks.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg",
      blurb:
        "Algo ha despertado en Runaterra. Algo ancestral. Algo terrible. El horror eterno conocido como Fiddlesticks acecha los bordes de la sociedad mortal, atraído por los espacios en donde la paranoia abunda, en los que se alimenta de sus aterradas víctimas. Acompañado de una guadaña dentada, la criatura demacrada y burda siega el miedo mismo y reduce a añicos las mentes de los desafortunados sobrevivientes tras su paso. Cuidado con el graznido del cuervo o con el suspiro de la forma que parece ser ''casi'' humana: Fiddlesticks ha vuelto.",
      info: {
        attack: 2,
        defense: 3,
        magic: 9,
        difficulty: 3
      },
      image: {
        full: "FiddleSticks.png",
        sprite: "champion0.png",
        group: "champion",
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Soporte"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-02-21",
      patch: "Semana Alpha 2",
      graphic :{
        damage:3,
        toughness:1,
        control:3,
        mobility:1,
        utility:0,
      },
      stats: {
        hp: 580.4,
        hpperlevel: 80,
        mp:500 ,
        mpperlevel:28 ,
        armor: 34,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 5.5,
        hpregenperlevel: 0.6,
        mpregen: 8,
        mpregenperlevel: 0.8,
        attackdamage: 55.36,
        attackdamageperlevel:2.625,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 2.11,
        attackrange: 480,
        movespeed: 335
      },
      skill:[
        {pasive:"Un Espantapájaros Inofensivo",img:"https://opgg-static.akamaized.net/images/lol/passive/FiddleSticks_Passive.png?image=q_auto,w_48&v=1591083841",info:"Las Efigies de Espantapájaros reemplazan la baratija de Fiddlesticks."},
        {q:"Aterrorizar",img:"https://opgg-static.akamaized.net/images/lol/spell/FiddleSticksQ.png?image=q_auto,w_48&v=1591083841",info:"Si Fiddlesticks inflige daño a un enemigo con hechizos mientras no está en el campo de visión o utiliza Aterrorizar sobre un enemigo, provocará terror a una unidad objetivo, lo que la hará huir aterrorizada durante un tiempo."},
        {w:"Extracción Abundante",img:"https://opgg-static.akamaized.net/images/lol/spell/FiddleSticksW.png?image=q_auto,w_48&v=1591083841",info:"Fiddlesticks drena la vida de los enemigos cercanos, lo que inflige daño de ejecución adicional al final de la duración."},
        {e:"Cosechar",img:"https://opgg-static.akamaized.net/images/lol/spell/FiddleSticksE.png?image=q_auto,w_48&v=1591083841",info:"Fiddlesticks hace un corte en un área con su guadaña, lo que ralentiza a todos los enemigos alcanzados y silencia a los que estén en el centro del corte."},
        {r:"Tormenta de Cuervos",img:"https://opgg-static.akamaized.net/images/lol/spell/FiddleSticksR.png?image=q_auto,w_48&v=1591083841",info:"Una bandada de cuervos vuela salvajemente alrededor de Fiddlesticks. La bandada inflige daño por segundo a todas las unidades enemigas que estén en el área."}
     ]
    },
    Fiora: {
      version: "V10.14",
      id: "Fiora",
      key: "114",
      name: "Fiora",
      title: "La Gran Duelista",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Fiora.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg",
      blurb:
        "Fiora, la duelista más temida de Valoran, se hizo famosa por sus modales bruscos y su astucia, además de la rapidez y destreza con la que maneja su florete. Nacida en el seno de la Casa Laurent de Demacia, tomó el control de la familia de su padre en medio de un escándalo que casi los destruye. La reputación de la Casa Laurent quedó desquebrajada, pero Fiora pone todo su empeño para restaurar el honor de su familia y devolverla al lugar donde corresponde: en lo más alto de Demacia.",
      info: {
        attack: 10,
        defense: 4,
        magic: 2,
        difficulty: 1
      },
      image: {
        full: "Fiora.png",
        sprite: "champion0.png",
        group: "champion",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Asesino"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2012-02-29",
      patch: "V1.0.0.135",
      graphic :{
        damage:3,
        toughness:2,
        control:2,
        mobility:2,
        utility:2,
      },
      stats: {
        hp: 550,
        hpperlevel: 85,
        mp: 300,
        mpperlevel: 40,
        armor: 33,
        armorperlevel: 3.5,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen:8.5 ,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.7,
        attackdamage: 68,
        attackdamageperlevel:3.3,
        attackspeedoffset: 0.69,
        attackspeedperlevel: 3.2,
        attackrange: 150,
        movespeed: 345
      },
      skill:[
        {pasive:"Baile de Duelista",img:"https://opgg-static.akamaized.net/images/lol/passive/Fiora_P.png?image=q_auto,w_48&v=1591083841",info:"Fiora desafía a los campeones enemigos cercanos a esquivarla e indica una dirección desde la cual intentará atacar. Si Fiora completa su desafío, recibirá un efecto adicional e indicará una nueva dirección."},
        {q:"Embestida",img:"https://opgg-static.akamaized.net/images/lol/spell/FioraQ.png?image=q_auto,w_48&v=1591083841",info:"Fiora se abalanza hacia un punto y asesta una estocada a un enemigo cercano, infligiendo daño y aplica efectos de impacto."},
        {w:"Estocada",img:"https://opgg-static.akamaized.net/images/lol/spell/FioraW.png?image=q_auto,w_48&v=1591083841",info:"Fiora bloquea todo el daño y los efectos de inhabilitación durante un breve periodo y luego golpea en una dirección. La estocada ralentiza al primer campeón enemigo alcanzado o lo aturde si Fiora bloqueó un efecto de inmovilización con la habilidad."},
        {e:"Esgrima",img:"https://opgg-static.akamaized.net/images/lol/spell/FioraE.png?image=q_auto,w_48&v=1591083841",info:"Fiora cuenta con velocidad de ataque adicional durante dos ataques. El primero ralentiza al objetivo y el segundo asesta un golpe crítico."},
        {r:"Gran Duelo",img:"https://opgg-static.akamaized.net/images/lol/spell/FioraR.png?image=q_auto,w_48&v=1591083841",info:"Fiora localiza los cuatro puntos vitales de un campeón enemigo y obtiene velocidad de movimiento al estar cerca de él. Si lo alcanza en los cuatro puntos vitales o si el objetivo muere después de ser alcanzado en al menos uno, Fiora y sus aliados de la zona reciben curación durante algunos segundos."}
     ]
    },
    Fizz: {
      version: "V10.14",
      id: "Fizz",
      key: "105",
      name: "Fizz",
      title: "El Bromista De Las Mareas",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Fizz.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg",
      blurb:
        "Fizz es un yordle anfibio que habita en los arrecifes alrededor de Aguasturbias. A menudo recupera y regresa las monedas lanzadas al mar por capitanes supersticiosos, pero hasta los más escépticos marinos saben que no deben contrariarlo; hay muchas historias de aquellos que subestimaron a este escurridizo personaje. Fizz, a veces confundido con un caprichoso espíritu del océano, comanda la enorme y carnívora bestia de las profundidades, y le gusta confundir a sus aliados y enemigos por igual.",
      info: {
        attack: 6,
        defense: 4,
        magic: 7,
        difficulty: 2
      },
      image: {
        full: "Fizz.png",
        sprite: "champion0.png",
        group: "champion",
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Asesino", "Luchador"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2011-11-15",
      patch: "V1.0.0.129",
      graphic :{
        damage:3,
        toughness:1,
        control:2,
        mobility:3,
        utility:0,
      },
      stats: {
        hp:570 ,
        hpperlevel:98 ,
        mp: 317.2,
        mpperlevel:37 ,
        armor: 22.412,
        armorperlevel:3.4 ,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 8,
        hpregenperlevel: 0.7,
        mpregen: 6,
        mpregenperlevel: 0.8,
        attackdamage: 58.04,
        attackdamageperlevel:3,
        attackspeedoffset: 0.658,
        attackspeedperlevel: 3.1,
        attackrange: 175,
        movespeed: 335
      },
      skill:[
        {pasive:"Luchador Veloz",img:"https://opgg-static.akamaized.net/images/lol/passive/Fizz_P.png?image=q_auto,w_48&v=1591083841",info:"Fizz puede moverse a través de las unidades y recibe una cantidad fija de daño reducido de todas las fuentes."},
        {q:"Golpe Travierizo",img:"https://opgg-static.akamaized.net/images/lol/spell/FizzQ.png?image=q_auto,w_48&v=1591083841",info:"Fizz atraviesa a su objetivo, le inflige daño mágico y aplica efectos al impacto."},
        {w:"Tridente Piedramar",img:"https://opgg-static.akamaized.net/images/lol/spell/FizzW.png?image=q_auto,w_48&v=1591083841",info:"Los ataques de Fizz hacen sangrar a sus enemigos y les infligen daño mágico durante varios segundos. Fizz puede potenciar su siguiente ataque para que inflija daño adicional y dejar potenciados sus siguientes ataques durante un breve periodo."},
        {e:"Juguetón",img:"https://opgg-static.akamaized.net/images/lol/spell/FizzE.png?image=q_auto,w_48&v=1591083841",info:"Fizz salta y aterriza con gracia sobre su lanza, lo que lo vuelve inalcanzable. Desde esta posición, Fizz puede golpear el piso o volver a saltar antes de caer con fuerza."},
        {r:"Carnada para Tiburones",img:"https://opgg-static.akamaized.net/images/lol/spell/FizzR.png?image=q_auto,w_48&v=1591083841",info:"Fizz arroja un pez que se adhiere y ralentiza a cualquier campeón que lo toca. Después de un momento, un tiburón surge del suelo, lo que levanta al objetivo y a cualquier enemigo cercano. Todos los enemigos alcanzados recibirán daño mágico y quedarán ralentizados."}
     ]
    },
    Galio: {
      version: "V10.14",
      id: "Galio",
      key: "3",
      name: "Galio",
      title: "El Coloso",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Galio.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg",
      blurb:
        "En las afueras de la resplandeciente ciudad de Demacia, el coloso de piedra Galio se mantiene en guardia constante. Construido como un baluarte contra los magos enemigos, se mantiene inmóvil durante décadas hasta que la presencia de magia poderosa lo despierta. Una vez activado, Galio pasa la mayor parte del tiempo saboreando la emoción de la pelea y el excepcional honor de defender a sus compatriotas. Pero sus triunfos siempre son agridulces, pues la magia que él destruye es también la fuente de su reanimación y cada victoria lo desactiva una vez más.",
      info: {
        attack: 3,
        defense: 7,
        magic: 6,
        difficulty: 2
      },
      image: {
        full: "Galio.png",
        sprite: "champion0.png",
        group: "champion",
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tanque", "Mago"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2010-08-10",
      patch: "V1.0.0.98",
      graphic :{
        damage:2,
        toughness:3,
        control:3,
        mobility:2,
        utility:1,
      },
      stats: {
        hp: 562,
        hpperlevel:112 ,
        mp: 500,
        mpperlevel: 40,
        armor: 24,
        armorperlevel:3.5 ,
        mrbase: 32,
        mrlevel : 1.25,
        hpregen: 8,
        hpregenperlevel: 0.8,
        mpregen: 9.5,
        mpregenperlevel: 0.7,
        attackdamage: 59,
        attackdamageperlevel:3.5,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 1.5,
        attackrange:150 ,
        movespeed: 335
      },
      skill:[
        {pasive:"Golpe Colosal",img:"https://opgg-static.akamaized.net/images/lol/passive/Galio_Passive.png?image=q_auto,w_48&v=1591083841",info:"Cada cierto tiempo, el siguiente ataque básico de Galio inflige daño mágico adicional en una zona."},
        {q:"Vientos de Guerra",img:"https://opgg-static.akamaized.net/images/lol/spell/GalioQ.png?image=q_auto,w_48&v=1591083841",info:"Galio dispara dos ráfagas de viento que convergen en un gran tornado que inflige daño prolongado"},
        {w:"Escudo de Durand",img:"https://opgg-static.akamaized.net/images/lol/spell/GalioW.png?image=q_auto,w_48&v=1591083841",info:"Galio adopta una postura defensiva, lo que hace que se mueva más lento. Al dejar la postura, Galio provocará e infligirá daño a los enemigos cercanos."},
        {e:"Golpe Justiciero",img:"https://opgg-static.akamaized.net/images/lol/spell/GalioE.png?image=q_auto,w_48&v=1591083841",info:"Galio retrocede un poco, luego se abalanza hacia adelante y levantará en el aire a cualquier campeón enemigo a su paso."},
        {r:"Entrada Heroica",img:"https://opgg-static.akamaized.net/images/lol/spell/GalioR.png?image=q_auto,w_48&v=1591083841",info:"Galio designa la posición de un aliado como su punto de aterrizaje, lo que otorga un escudo contra daño mágico a todos los aliados en el área. Después de un momento, Galio se lanza a la ubicación y arroja por el aire a los enemigos cercanos."}
     ]
    },
    Gangplank: {
      version: "V10.14",
      id: "Gangplank",
      key: "41",
      name: "Gangplank",
      title: "El Azote De Los Mares",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Gangplank.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg",
      blurb:
        "Tan impredecible como brutal, el saqueador y rey destronado Gangplank es temido por todo el mundo. Alguna vez gobernó la ciudad portuaria de Aguasturbias y aunque su reino terminó, hay quienes creen que esto solo lo hizo más peligroso. Gangplank prefiere ver a Aguasturbias bañada en sangre antes de dejar que alguien más la tome; y ahora, armado con pistola, un sable y barriles de pólvora, está determinado a reclamar aquello que perdió.",
      info: {
        attack: 7,
        defense: 6,
        magic: 4,
        difficulty: 3
      },
      image: {
        full: "Gangplank.png",
        sprite: "champion1.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-08-19",
      patch: "V0.9.22.15",
      graphic :{
        damage:3,
        toughness:1,
        control:1,
        mobility:1,
        utility:2,
      },
      stats: {
        hp: 540,
        hpperlevel: 82,
        mp: 282,
        mpperlevel: 40,
        armor: 35,
        armorperlevel: 3,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 6,
        hpregenperlevel: 0.6,
        mpregen: 7.5,
        mpregenperlevel: 0.7,
        attackdamage: 64,
        attackdamageperlevel:3,
        attackspeedoffset: 0.69,
        attackspeedperlevel: 3.2,
        attackrange: 125,
        movespeed: 345
      },
      skill:[
        {pasive:"Prueba de Fuego",img:"https://opgg-static.akamaized.net/images/lol/passive/Gangplank_Passive.png?image=q_auto,w_48&v=1591083841",info:"Cada cierto tiempo, los ataques cuerpo a cuerpo de Gangplank incendiarán a sus oponentes."},
        {q:"Parrrlamentar",img:"https://opgg-static.akamaized.net/images/lol/spell/GangplankQWrapper.png?image=q_auto,w_48&v=1591083841",info:"Dispara al objetivo y saquea oro por cada unidad enemiga asesinada."},
        {w:"Eliminar Escorbuto",img:"https://opgg-static.akamaized.net/images/lol/spell/GangplankW.png?image=q_auto,w_48&v=1591083841",info:"Come cítricos para curar los efectos de control de masas y recuperar vida."},
        {e:"Barril de Pólvora",img:"https://opgg-static.akamaized.net/images/lol/spell/GangplankE.png?image=q_auto,w_48&v=1591083841",info:"Gangplank coloca un barril de pólvora en la ubicación objetivo. Si lo ataca, explota y esparce el daño de ataque a los enemigos en la zona, además de ralentizarlos."},
        {r:"Descarga de Cañones",img:"https://opgg-static.akamaized.net/images/lol/spell/GangplankR.png?image=q_auto,w_48&v=1591083841",info:"Gangplank le indica a su barco que bombardee una zona, lo que ralentiza y daña a los enemigos."}
     ]
    },
    Garen: {
      version: "V10.14",
      id: "Garen",
      key: "86",
      name: "Garen",
      title: "El Poder De Demacia",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Garen.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg",
      blurb:
        "Como un orgulloso y noble guerrero, Garen forma parte de la Vanguardia Valerosa. Es popular entre sus compañeros y bastante respetado por sus enemigos. Es descendiente de la prestigiosa familia Guardia de la Corona y se le confió la tarea de defender a Demacia y sus ideales. Vistiendo una armadura resistente a la magia y empuñando una gran espada, Garen está listo para enfrentar a los magos y hechiceros en el campo de batalla con su imparable remolino de acero justiciero.",
      info: {
        attack: 7,
        defense: 7,
        magic: 1,
        difficulty: 1
      },
      image: {
        full: "Garen.png",
        sprite: "champion1.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "None",
      rangetype:"cuerpo a cuerpo",
      date: "2010-04-27",
      patch: "V1.0.0.83",
      graphic :{
        damage:2,
        toughness:3,
        control:1,
        mobility:1,
        utility:0,
      },
      stats: {
        hp:620 ,
        hpperlevel:84 ,
        mp: 0,
        mpperlevel: 0,
        armor: 36,
        armorperlevel: 3,
        mrbase: 32.1,
        mrlevel : 0.25,
        hpregen: 8,
        hpregenperlevel: 0.5,
        mpregen: 0,
        mpregenperlevel: 0,
        attackdamage:66,
        attackdamageperlevel:4.5,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 3.65,
        attackrange: 175,
        movespeed: 340
      },
      skill:[
        {pasive:"Perseverancia",img:"https://opgg-static.akamaized.net/images/lol/passive/Garen_Passive.png?image=q_auto,w_48&v=1591083841",info:"Si Garen no ha recibido ataques de ningún tipo recientemente, se regenerará un porcentaje de su vida máxima cada segundo."},
        {q:"Golpe Decisivo",img:"https://opgg-static.akamaized.net/images/lol/spell/GarenQ.png?image=q_auto,w_48&v=1591083841",info:"Garen obtiene una ráfaga de velocidad de movimiento y se libera de todas las ralentizaciones que lo están afectando. Su siguiente ataque impactará un área vital de su enemigo, le infligirá daño adicional y lo silenciará."},
        {w:"Coraje",img:"https://opgg-static.akamaized.net/images/lol/spell/GarenW.png?image=q_auto,w_48&v=1591083841",info:"Garen aumenta su armadura y su resistencia mágica de forma pasiva al matar enemigos. También puede activar esta habilidad para obtener un escudo y tenacidad durante un breve momento, seguido de una reducción de daño menor durante un mayor periodo de tiempo."},
        {e:"Juicio",img:"https://opgg-static.akamaized.net/images/lol/spell/GarenE.png?image=q_auto,w_48&v=1591083841",info:"Garen gira rápidamente su espada alrededor de él, lo que inflige daño físico a los enemigos cercanos."},
        {r:"Justicia Demaciana",img:"https://opgg-static.akamaized.net/images/lol/spell/GarenR.png?image=q_auto,w_48&v=1591083841",info:"Garen invoca todo el poder de Demacia para ejecutar a un campeón enemigo."}
     ]
    },
    Gnar: {
      version: "V10.14",
      id: "Gnar",
      key: "150",
      name: "Gnar",
      title: "El Eslabon Perdido",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Gnar.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg",
      blurb:
        "Gnar es un yordle primitivo cuyos jugueteos bobos pueden transformarse en un berrinche de infante en un instante, transformándolo así en una bestia masiva que disfruta la destrucción. Congelado en Hielo Puro por miles de años, la curiosa criatura se escapó y ahora está libre en un mundo cambiado que percibe tan exótico como maravilloso. Encantado con el peligro, Gnar arroja lo que puede a sus enemigos, ya sea su búmeran hecho de colmillos o una construcción cercana.",
      info: {
        attack: 6,
        defense: 5,
        magic: 5,
        difficulty: 3
      },
      image: {
        full: "Gnar.png",
        sprite: "champion1.png",
        group: "champion",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "Gnarfury",
      rangetype:"a distancia",
      date: "2014-08-14",
      patch: "V4.14",
      graphic :{
        damage:2,
        toughness:1,
        control:1,
        mobility:2,
        utility:0,
      },
      stats: {
        hp:510 ,
        hpperlevel: 65,
        mp:100 ,
        mpperlevel: 0,
        armor: 32,
        armorperlevel:2.5 ,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 4.5,
        hpregenperlevel:1.75 ,
        mpregen: 0,
        mpregenperlevel: 0,
        attackdamage: 59,
        attackdamageperlevel:3,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 6,
        attackrange: 175,
        movespeed: 335
      },
      skill:[
        {pasive:"Gen de la Furia",img:"https://opgg-static.akamaized.net/images/lol/passive/Gnar_Passive.png?image=q_auto,w_48&v=1591083841",info:"Gnar genera Rabia durante el combate. Al alcanzar el máximo de Rabia, su siguiente habilidad lo transformará en Mega Gnar, lo que le otorgará supervivencia aumentada y acceso a nuevos hechizos."},
        {q:"Búmeran",img:"https://opgg-static.akamaized.net/images/lol/spell/GnarQ.png?image=q_auto,w_48&v=1591083841",info:"Gnar lanza un bumerán que daña y ralentiza a los enemigos que alcanza antes de volver a él. Si recoge el bumerán, el Enfriamiento se reduce. Mega Gnar, en cambio, lanza un peñasco que se detiene al alcanzar a una unidad, daña y ralentiza a todas las que están cerca. También en este caso se puede recoger el proyectil para reducir al Enfriamiento."},
        {w:"Híper",img:"https://opgg-static.akamaized.net/images/lol/spell/GnarW.png?image=q_auto,w_48&v=1591083841",info:"Los ataques y hechizos de Gnar lo aceleran, con lo que causa daño adicional y aumenta su Velocidad de Movimiento. Mega Gnar está demasiado furioso para correr y lo que hace es levantarse y golpear con violencia la zona que tiene delante. Los enemigos situados en ella quedan aturdidos."},
        {e:"Brinco",img:"https://opgg-static.akamaized.net/images/lol/spell/GnarE.png?image=q_auto,w_48&v=1591083841",info:"Gnar salta hacia una ubicación y, si aterriza sobre la cabeza de una unidad, puede seguir saltando. Mega Gnar es demasiado grande para rebotar, así que aterriza con fuerza devastadora y causa daño en la zona circundante."},
        {r:"¡GNAR!",img:"https://opgg-static.akamaized.net/images/lol/spell/GnarR.png?image=q_auto,w_48&v=1591083841",info:"Mega Gnar arroja en una dirección a todos los enemigos circundantes, que resultan dañados y ralentizados. Cualquier enemigo que choque con un muro queda aturdido y recibe daño adicional."}
     ]
    },
    Gragas: {
      version: "V10.14",
      id: "Gragas",
      key: "79",
      name: "Gragas",
      title: "El Revoltoso",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Gragas.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg",
      blurb:
        "Gragas, tan alegre como imponente, es un masivo y ruidoso maestro cervecero en su propia misión por encontrar el perfecto tarro de cerveza. Procedente de un lugar desconocido, ahora busca ingredientes poco comunes entre los inmaculados páramos de Fréljord, probando todas las recetas en su camino. A veces borracho y extremadamente impulsivo, Gragas es famoso por las batallas que inicia, las cuales a veces terminan en fiestas de toda la noche y mucho daño a la propiedad. Cualquier aparición de Gragas presagia bebida y destrucción; en ese orden.",
      info: {
        attack: 4,
        defense: 7,
        magic: 6,
        difficulty: 2
      },
      image: {
        full: "Gragas.png",
        sprite: "champion1.png",
        group: "champion",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Mago"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2010-02-02",
      patch: "V1.0.0.72",
      graphic :{
        damage:2,
        toughness:3,
        control:3,
        mobility:2,
        utility:0,
      },
      stats: {
        hp: 600,
        hpperlevel: 95,
        mp: 400,
        mpperlevel:47,
        armor:35,
        armorperlevel:3.6,
        mrbase: 32.1,
        mrlevel :1.25,
        hpregen:5.5,
        hpregenperlevel:0.5,
        mpregen:6,
        mpregenperlevel:0.8,
        attackdamage:64,
        attackdamageperlevel:3.5,
        attackspeedoffset: 0.625,
        attackspeedperlevel:2.05,
        attackrange: 125,
        movespeed: 330
      },
      skill:[
        {pasive:"Hora Feliz",img:"https://opgg-static.akamaized.net/images/lol/passive/GragasPassiveHeal.png?image=q_auto,w_48&v=1591083841",info:"Al usar una habilidad, Gragas toma un trago y recupera el 6% de su Vida máxima. Este efecto solo puede ocurrir cada 8 segundos."},
        {q:"Barril Rodante",img:"https://opgg-static.akamaized.net/images/lol/spell/GragasQ.png?image=q_auto,w_48&v=1591083841",info:"Gragas rueda su barril hasta una ubicación y puede activarlo para hacerlo explotar. Explotará por sí solo después de 4 seg. Los enemigos impactados por la explosión tendrán una reducción de velocidad de movimiento."},
        {w:"Furia Ebria",img:"https://opgg-static.akamaized.net/images/lol/spell/GragasW.png?image=q_auto,w_48&v=1591083841",info:"Gragas toma un buen trago de cerveza de su barril durante 1 segundo. Al terminar de beber, estará potenciado por la bebida e infligirá daño mágico a todos los enemigos cercanos con su siguiente ataque básico y reducirá el daño que reciba."},
        {e:"Lanzamiento de Barriga",img:"https://opgg-static.akamaized.net/images/lol/spell/GragasE.png?image=q_auto,w_48&v=1591083841",info:"Gragas carga en una dirección, choca con la primera unidad enemiga que se encuentra y les inflige daño a todas las unidades enemigas cercanas y las aturde."},
        {r:"Tonel Explosivo",img:"https://opgg-static.akamaized.net/images/lol/spell/GragasR.png?image=q_auto,w_48&v=1591083841",info:"Gragas rueda su barril hasta una ubicación, lo que inflige daño y lanza hacia atrás a los enemigos atrapados en el radio de la explosión."}
     ]
    },
    Graves: {
      version: "V10.14",
      id: "Graves",
      key: "104",
      name: "Graves",
      title: "El Forajido",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Graves.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg",
      blurb:
        "Malcolm Graves es un reconocido mercenario, apostador y ladrón: un hombre al que se le busca en cada ciudad e imperio que ha visitado. Aunque tiene un temperamento explosivo, posee un estricto sentido de honor criminal que hace valer con el poder de su escopeta de dos cañones, Destino. En años recientes concretó una problemática alianza con Twisted Fate y juntos prosperaron una vez más dentro del caos que son las entrañas criminales de Aguasturbias.",
      info: {
        attack: 8,
        defense: 5,
        magic: 3,
        difficulty:1
      },
      image: {
        full: "Graves.png",
        sprite: "champion1.png",
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2011-10-19",
      patch: "V1.0.0.127",
      graphic :{
        damage:3,
        toughness:2,
        control:1,
        mobility:2,
        utility:2,
      },
      stats: {
        hp: 555,
        hpperlevel: 92,
        mp:325 ,
        mpperlevel: 40,
        armor:33 ,
        armorperlevel: 3.4,
        mrbase: 32,
        mrlevel : 1.25,
        hpregen: 8,
        hpregenperlevel: 0.7,
        mpregen: 8,
        mpregenperlevel:0.7 ,
        attackdamage: 68,
        attackdamageperlevel:3,
        attackspeedoffset: 0.49,
        attackspeedperlevel:2.6 ,
        attackrange: 425,
        movespeed: 340
      },
      skill:[
        {pasive:"Destino Nuevo",img:"https://opgg-static.akamaized.net/images/lol/passive/GravesTrueGrit.png?image=q_auto,w_48&v=1591083841",info:"La escopeta de Graves carga dos cartuchos. Después de dispararlos, debe recargar. Cada ataque dispara varias balas en un cono. El enemigo recibe daño adicional si lo impactan muchas balas. Estas balas no pueden atravesar unidades."},
        {q:"Fin del Trayecto",img:"https://opgg-static.akamaized.net/images/lol/spell/GravesQLineSpell.png?image=q_auto,w_48&v=1591083841",info:"Graves dispara un cartucho explosivo que explota tras 2 segundos, o 0,2 segundos, si impacta sobre el terreno."},
        {w:"Pantalla de Humo",img:"https://opgg-static.akamaized.net/images/lol/spell/GravesSmokeGrenade.png?image=q_auto,w_48&v=1591083841",info:"Graves dispara un cartucho de humo al área objetivo, lo que crea una nube de humo que reduce el alcance de visión. Los enemigos que se encuentren dentro del impacto inicial reciben daño mágico y ven reducida su velocidad de movimiento por un breve momento."},
        {e:"Disparo Veloz",img:"https://opgg-static.akamaized.net/images/lol/spell/GravesMove.png?image=q_auto,w_48&v=1591083841",info:"Graves corre hacia adelante, obteniendo una mejora de Armadura durante varios segundos. Si se desplaza hacia un campeón enemigo, gana dos acumulaciones de Valor Verdadero. Golpear a los enemigos con ataques básicos reduce el enfriamiento de esta habilidad y renueva las mejoras defensivas."},
        {r:"Daño Colateral",img:"https://opgg-static.akamaized.net/images/lol/spell/GravesChargeShot.png?image=q_auto,w_48&v=1591083841",info:"Graves dispara un tiro explosivo que inflige bastante daño al primer campeón que impacte. Tras golpear a un campeón o llegar al final de su alcance, la bala explota infligiendo daño en un cono."}
     ]
    },
    Hecarim: {
      version: "V10.14",
      id: "Hecarim",
      key: "120",
      name: "Hecarim",
      title: "La Sombra De La Guerra",
      champkey: "Hecarim",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Hecarim.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg",
      blurb:
        "Hecarim es una fusión espectral de un hombre y una bestia condenada a llevar las almas de los vivos por toda la eternidad. Cuando las Islas Bendecidas cayeron en oscuridad, este orgulloso caballero fue arrasado por la destructiva energía de la Ruina junto a su caballería y sus monturas. Ahora, cuando la Niebla Negra se esparce por Runaterra, él encabeza la devastadora carga, se deleita en la matanza que causa y aplasta al enemigo bajo sus pezuñas acorazadas.",
      info: {
        attack: 8,
        defense: 6,
        magic: 4,
        difficulty: 2
      },
      image: {
        full: "Hecarim.png",
        sprite: "champion1.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2012-04-18",
      patch: "V1.0.0.138",
      graphic :{
        damage:2,
        toughness:2,
        control:2,
        mobility:2,
        utility:0,
      },
      stats: {
        hp: 580,
        hpperlevel: 90,
        mp: 277.2,
        mpperlevel:40 ,
        armor: 36,
        armorperlevel:4 ,
        mrbase:32.1 ,
        mrlevel : 1.25,
        hpregen:7 ,
        hpregenperlevel:0.75 ,
        mpregen: 6.5,
        mpregenperlevel: 0.6,
        attackdamage:66 ,
        attackdamageperlevel:3.2,
        attackspeedoffset: 0.670,
        attackspeedperlevel: 2.5,
        attackrange: 175,
        movespeed: 345
      },
      skill:[
        {pasive:"Sendero de Guerra",img:"https://opgg-static.akamaized.net/images/lol/passive/Hecarim_Passive.png?image=q_auto,w_48&v=1591083841",info:"Hecarim obtiene Daño de Ataque igual a un porcentaje de su Velocidad de Movimiento adicional."},
        {q:"Ataque de Furia",img:"https://opgg-static.akamaized.net/images/lol/spell/HecarimRapidSlash.png?image=q_auto,w_48&v=1591083841",info:"Hecarim golpea a los enemigos cercanos y les inflige daño físico. Si Hecarim inflige daño a por lo menos un enemigo, aumenta el daño y disminuye el enfriamiento de los lanzamientos subsecuentes de Ataque de Furia."},
        {w:"Espíritu del Terror",img:"https://opgg-static.akamaized.net/images/lol/spell/HecarimW.png?image=q_auto,w_48&v=1591083841",info:"Hecarim inflige daño mágico a los enemigos cercanos durante un breve periodo de tiempo. Hecarim recupera una cantidad de Vida equivalente a un porcentaje del daño que reciban estos enemigos."},
        {e:"Carga Devastadora",img:"https://opgg-static.akamaized.net/images/lol/spell/HecarimRamp.png?image=q_auto,w_48&v=1591083841",info:"La velocidad de movimiento de Hecarim aumenta y puede pasar entre las unidades durante un breve periodo de tiempo. Su siguiente ataque derriba al objetivo e inflige daño físico adicional con base en la distancia recorrida tras activar la habilidad."},
        {r:"Avalancha de Sombras",img:"https://opgg-static.akamaized.net/images/lol/spell/HecarimUlt.png?image=q_auto,w_48&v=1591083841",info:"Hecarim invoca a jinetes espectrales y carga, infligiendo daño mágico en línea recta. Hecarim crea una onda de choque al terminar su carga que hace que los enemigos cercanos huyan aterrorizados."}
     ]
    },
    Heimerdinger: {
      version: "V10.14",
      id: "Heimerdinger",
      key: "74",
      name: "Heimerdinger",
      title: "El Venerable Inventor",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Heimerdinger.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg",
      blurb:
        "El Profesor Cecil B. Heimerdinger, brillante y a veces excéntrico científico yordle, es uno de los inventores más innovadores que Piltóver ha conocido. Implacable en su trabajo hasta llegar a niveles de neurótica obsesión, se alegra en poder contestar las preguntas más impenetrables del universo. Aunque sus teorías a veces parecieran esotéricas, Heimerdinger ha construido varias de las piezas de maquinaría más milagrosas y letales de Piltóver, y constantemente interviene sus invenciones para hacerlas más eficientes.",
      info: {
        attack: 2,
        defense: 6,
        magic: 8,
        difficulty: 3
      },
      image: {
        full: "Heimerdinger.png",
        sprite: "champion1.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Soporte"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-10-10",
      patch: "V0.9.25.34",
      graphic :{
        damage:3,
        toughness:0,
        control:2,
        mobility:0,
        utility:2,
      },
      stats: {
        hp: 488,
        hpperlevel:87 ,
        mp: 385,
        mpperlevel:20 ,
        armor:19.04 ,
        armorperlevel:3 ,
        mrbase:30 ,
        mrlevel : 0.5,
        hpregen: 7,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        attackdamage: 55.536,
        attackdamageperlevel:2.7,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 1.36,
        attackrange: 550,
        movespeed: 340
      },
      skill:[
        {pasive:"Afinidad Hextech",img:"https://opgg-static.akamaized.net/images/lol/passive/Heimerdinger_Passive.png?image=q_auto,w_48&v=1591083841",info:"Otorga Velocidad de Movimiento al estar cerca de torres aliadas y torretas colocadas por Heimerdinger."},
        {q:"Torreta Evolutiva H-28G",img:"https://opgg-static.akamaized.net/images/lol/spell/HeimerdingerQ.png?image=q_auto,w_48&v=1591083841",info:"Heimerdinger despliega una torreta de fuego rápido equipada con un rayo secundario que atraviesa a los enemigos (inflige la mitad de daño a torres)."},
        {w:"Microcohetes Hextech",img:"https://opgg-static.akamaized.net/images/lol/spell/HeimerdingerW.png?image=q_auto,w_48&v=1591083841",info:"Heimerdinger dispara proyectiles de largo alcance que convergen en su cursor."},
        {e:"Granada de Tormenta de Electrones CH-2",img:"https://opgg-static.akamaized.net/images/lol/spell/HeimerdingerE.png?image=q_auto,w_48&v=1591083841",info:"Heimerdinger arroja una granada en la zona objetivo que inflige daño las unidades enemigas, además de aturdir a cualquiera que alcance directamente y de ralentizar a las unidades cercanas."},
        {r:"¡ACTUALIZACIÓN!",img:"https://opgg-static.akamaized.net/images/lol/spell/HeimerdingerR.png?image=q_auto,w_48&v=1591083841",info:"Heimerdinger inventa una mejora con la que aumenta los efectos de su próximo hechizo."}
     ]
    },
    Illaoi: {
      version: "V10.14",
      id: "Illaoi",
      key: "420",
      name: "Illaoi",
      title: "La Sacerdotisa Del Kraken",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Illaoi.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg",
      blurb:
        "El poderoso físico de Illaoi solo se ve disminuido por su indomable fe. Como profeta del Gran Kraken, ella usa un enorme ídolo dorado para arrebatarles el espíritu a sus enemigos y destrozar su percepción de la realidad. Todo aquel que desafíe al ''Mensajero de la Verdad de Nagakabouros'' descubrirá muy pronto que Illaoi jamás pelea sola: el dios de las Islas Serpiente combate a su lado.",
      info: {
        attack: 8,
        defense: 6,
        magic: 3,
        difficulty: 2
      },
      image: {
        full: "Illaoi.png",
        sprite: "champion1.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2015-11-24",
      patch: "V5.23",
      graphic :{
        damage:3,
        toughness:2,
        control:1,
        mobility:0,
        utility:0,
      },
      stats: {
        hp: 585.6,
        hpperlevel: 95,
        mp:300 ,
        mpperlevel: 40,
        armor: 35,
        armorperlevel:3.8 ,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 9.5,
        hpregenperlevel: 0.8,
        mpregen: 7.5,
        mpregenperlevel: 0.75,
        attackdamage: 68,
        attackdamageperlevel:5,
        attackspeedoffset: 0.571,
        attackspeedperlevel: 2.5,
        attackrange: 125,
        movespeed: 340
      },
      skill:[
        {pasive:"Profeta de un Dios Ancestral",img:"https://opgg-static.akamaized.net/images/lol/passive/Illaoi_P.png?image=q_auto,w_48&v=1591083841",info:"Illaoi y los Recipientes que crea generan tentáculos sobre el terreno cercano inaccesible. Los tentáculos atacan a espíritus, Recipientes y a las víctimas de Dura Lección de Illaoi. Los tentáculos infligen daño físico a los enemigos alcanzados y curarán a Illaoi si infligen daño a un campeón."},
        {q:"Tentáculo Aplastante",img:"https://opgg-static.akamaized.net/images/lol/spell/IllaoiQ.png?image=q_auto,w_48&v=1591083841",info:"Aumenta el daño infligido por los Tentáculos. Al activarse, Illaoi azota un Tentáculo que inflige daño físico."},
        {w:"Dura Lección",img:"https://opgg-static.akamaized.net/images/lol/spell/IllaoiW.png?image=q_auto,w_48&v=1591083841",info:"Illaoi salta hacia su objetivo, lo que inflige daño físico y provoca que los Tentáculos cercanos también se abalancen sobre el objetivo."},
        {e:"Prueba de Espíritu",img:"https://opgg-static.akamaized.net/images/lol/spell/IllaoiE.png?image=q_auto,w_48&v=1591083841",info:"Illaoi arrebata el espíritu del cuerpo del enemigo, forzándolo a pararse frente a ella. Los espíritus reflejan un porcentaje del daño que reciben hacia el objetivo original. Si es asesinado o si el objetivo se aleja demasiado del espíritu, el objetivo se convierte en un Recipiente y comienza a generar Tentáculos."},
        {r:"Salto de Fe",img:"https://opgg-static.akamaized.net/images/lol/spell/IllaoiR.png?image=q_auto,w_48&v=1591083841",info:"Illaoi azota a su ídolo en el suelo, lo que inflige daño físico a los enemigos cercanos. Genera un Tentáculo por cada campeón enemigo que golpea."}
     ]
    },
    Irelia: {
      version: "V10.14",
      id: "Irelia",
      key: "39",
      name: "Irelia",
      title: "La Cuchilla Danzante",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Irelia.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg",
      blurb:
        "La invasión de Jonia a manos de Noxus produjo muchos héroes, pero ninguno fue tan improbable como la joven Irelia de Navori. Entrenada en las ancestrales danzas de su región, adaptó su arte para la guerra y ahora usa sus movimientos refinados y llenos de gracia para controlar un arsenal de cuchillas letales. Después de demostrar ser una guerrera, se le asignó el papel de líder y ejemplo de la resistencia. Hoy en día, sigue dedicada a defender su territorio.",
      info: {
        attack: 7,
        defense: 4,
        magic: 5,
        difficulty: 2
      },
      image: {
        full: "Irelia.png",
        sprite: "champion1.png",
        group: "champion",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Asesino"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2010-11-16",
      patch: "V1.0.0.105",
      graphic :{
        damage:2,
        toughness:2,
        control:2,
        mobility:3,
        utility:2,
      },
      stats: {
        hp:580 ,
        hpperlevel:95 ,
        mp: 350,
        mpperlevel: 30,
        armor: 36,
        armorperlevel: 3,
        mrbase: 32,
        mrlevel : 1.25,
        hpregen: 8.5,
        hpregenperlevel: 0.85,
        mpregen: 8,
        mpregenperlevel: 0.8,
        attackdamage: 63,
        attackdamageperlevel:4,
        attackspeedoffset: 0.656,
        attackspeedperlevel: 2.5,
        attackrange: 200,
        movespeed: 335
      },
      skill:[
        {pasive:"Fervor Jonio",img:"https://opgg-static.akamaized.net/images/lol/passive/Irelia_Passive.png?image=q_auto,w_48&v=1591083841",info:"Cuando Irelia impacta enemigos con sus habilidades, obtiene velocidad de ataque adicional que se acumula. Al tener el máximo de acumulaciones, también obtiene daño adicional al impacto."},
        {q:"Embate de Cuchillas",img:"https://opgg-static.akamaized.net/images/lol/spell/IreliaQ.png?image=q_auto,w_48&v=1591083841",info:"Irelia se desplaza hacia un objetivo, lo ataca y se cura a sí misma. Si el objetivo está marcado o muere por Embate de Cuchillas, restaura su enfriamiento."},
        {w:"Danza de Insurrección",img:"https://opgg-static.akamaized.net/images/lol/spell/IreliaW.png?image=q_auto,w_48&v=1591083841",info:"Irelia carga un ataque que inflige más daño cuanto más tiempo lo carga. Recibe daño físico reducido mientras está cargando."},
        {e:"Dueto Perfecto",img:"https://opgg-static.akamaized.net/images/lol/spell/IreliaE.png?image=q_auto,w_48&v=1591083841",info:"Irelia envía dos cuchillas que se encuentran entre sí. Los enemigos alcanzados por ellas reciben daño, además de quedar aturdidos y marcados."},
        {r:"Filo de Vanguardia",img:"https://opgg-static.akamaized.net/images/lol/spell/IreliaR.png?image=q_auto,w_48&v=1591083841",info:"Irelia lanza una gran cantidad de cuchillas que se desplazan hacia afuera después de alcanzar a un campeón enemigo. Los enemigos impactados por las cuchillas reciben daño y quedan marcados. Después, las cuchillas forman un muro que inflige daño y ralentiza a los campeones que lo atraviesan."}
     ]
    },
    Ivern: {
      version: "V10.14",
      id: "Ivern",
      key: "427",
      name: "Ivern",
      title: "El Árbol Padre",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ivern.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg",
      blurb:
        "Ivern Pies de Espino, conocido por muchos como el Árbol Padre, es un ser peculiar, mitad humano y mitad árbol, que deambula por los bosques de Runaterra y cultiva vida dondequiera que va. Conoce los secretos del mundo natural y es buen amigo de todo lo que crece, vuela o se oculta en él. Ivern vaga por el mundo natural compartiendo su curiosa sabiduría con quienes conoce, rejuvenece los bosques y, de vez en cuando, confía sus secretos a mariposas indiscretas.",
      info: {
        attack: 3,
        defense: 5,
        magic: 7,
        difficulty: 2
      },
      image: {
        full: "Ivern.png",
        sprite: "champion4.png",
        group: "champion",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2016-10-05",
      patch: "V6.20",
      graphic :{
        damage:1,
        toughness:1,
        control:3,
        mobility:2,
        utility:3,
      },
      stats: {
        hp: 585,
        hpperlevel: 95,
        mp: 450,
        mpperlevel: 60,
        armor: 27,
        armorperlevel: 3.5,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 7,
        hpregenperlevel: 0.85,
        mpregen: 6,
        mpregenperlevel: 0.75,
        attackdamage: 50,
        attackdamageperlevel:3,
        attackspeedoffset: 0.644,
        attackspeedperlevel: 3.4,
        attackrange: 475,
        movespeed: 330
      },
      skill:[
        {pasive:"Amigo del Bosque",img:"https://opgg-static.akamaized.net/images/lol/passive/IvernP.png?image=q_auto,w_48&v=1591083841",info:"Ivern no puede atacar ni ser atacado por monstruos no épicos. Puede crear arboledas mágicas en los campamentos de la jungla que crecen con el tiempo. Cuando la arboleda ha crecido por completo, Ivern puede liberar a los monstruos para recibir oro y experiencia. A partir del nivel 5, Ivern puede compartir las mejoras de la jungla con aliados."},
        {q:"Invocador de Raíces",img:"https://opgg-static.akamaized.net/images/lol/spell/IvernQ.png?image=q_auto,w_48&v=1591083841",info:"Ivern conjura una enredadera que inflige daño e inmoviliza a los objetivos enemigos. Los aliados de Ivern pueden desplazarse hacia el objetivo inmovilizado."},
        {w:"Creador de Maleza",img:"https://opgg-static.akamaized.net/images/lol/spell/IvernW.png?image=q_auto,w_48&v=1591083841",info:"Cuando está en la maleza, los ataques de Ivern infligen daño mágico adicional. Ivern puede activar esta habilidad para crear una zona de maleza."},
        {e:"Detonar Semilla",img:"https://opgg-static.akamaized.net/images/lol/spell/IvernE.png?image=q_auto,w_48&v=1591083841",info:"Ivern coloca un escudo sobre un aliado. Tras un breve periodo, el escudo estalla para ralentizar e infligir daño a los enemigos."},
        {r:"¡Daisy!",img:"https://opgg-static.akamaized.net/images/lol/spell/IvernR.png?image=q_auto,w_48&v=1591083841",info:"Ivern invoca a su amiga centinela, Daisy, para que pelee a su lado. Daisy provoca una onda de choque si golpea tres veces seguidas al mismo campeón."}
     ]
    },
    Janna: {
      version: "V10.14",
      id: "Janna",
      key: "40",
      name: "Janna",
      title: "La Furia De La Tormenta",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Janna.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg",
      blurb:
        "Janna es un poderoso y misterioso espíritu del viento que protege a los desvalidos de Zaun con la tempestad de Runaterra. Algunos creen que las súplicas de los marineros pidiendo vientos favorables mientras navegaban a través de las aguas traicioneras y las violentas tempestades dieron vida a Janna. Se convirtió en el símbolo de la esperanza de los necesitados, y su favor y protección alcanzan a todos hasta las profundidades de Zaun. Nadie sabe dónde o cuándo aparecerá, pero con frecuencia ella acude al llamado de ayuda.",
      info: {
        attack: 3,
        defense: 5,
        magic: 7,
        difficulty: 1
      },
      image: {
        full: "Janna.png",
        sprite: "champion1.png",
        group: "champion",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-09-02",
      patch: "V0.9.22.16",
      graphic :{
        damage:1,
        toughness:1,
        control:3,
        mobility:1,
        utility:3,
      },
      stats: {
        hp: 500,
        hpperlevel: 70,
        mp: 350,
        mpperlevel: 64,
        armor: 28,
        armorperlevel: 3.8,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 11.5,
        mpregenperlevel: 0.4,
        attackdamage: 46,
        attackdamageperlevel:1.5,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 2.95,
        attackrange: 550,
        movespeed: 315
      },
      skill:[
        {pasive:"Viento a Favor",img:"https://opgg-static.akamaized.net/images/lol/passive/Janna_Tailwind.png?image=q_auto,w_48&v=1591083841",info:"Janna obtiene de manera pasiva velocidad de movimiento adicional y los campeones aliados cercanos obtienen este efecto al avanzar hacia ella. Además, los ataques básicos de Janna infligen daño mágico adicional según su velocidad de movimiento adicional."},
        {q:"Vendaval Aullante",img:"https://opgg-static.akamaized.net/images/lol/spell/HowlingGale.png?image=q_auto,w_48&v=1591083841",info:"Al manipular la presión y la temperatura en un punto específico, Janna puede crear una pequeña tormenta que crece con el tiempo. Puede activar el hechizo de nuevo para liberarla. Al hacerlo, la tormenta volará hacia la dirección en la que se lanzó, lo que inflige daño y lanza por el aire a todos los enemigos en su camino."},
        {w:"Céfiro",img:"https://opgg-static.akamaized.net/images/lol/spell/SowTheWind.png?image=q_auto,w_48&v=1591083841",info:"Janna invoca un elemental de aire que aumenta su velocidad de movimiento de forma pasiva y le permite atravesar unidades. También puede activar esta habilidad para infligir daño y reducir la velocidad de movimiento de un enemigo. El efecto de la pasiva se pierde mientras la habilidad esté en enfriamiento."},
        {e:"Ojo de la Tormenta",img:"https://opgg-static.akamaized.net/images/lol/spell/EyeOfTheStorm.png?image=q_auto,w_48&v=1591083841",info:"Janna conjura un vendaval defensivo que escuda a un campeón aliado o a una torre del daño recibido y aumenta su daño de ataque."},
        {r:"Monzón",img:"https://opgg-static.akamaized.net/images/lol/spell/ReapTheWhirlwind.png?image=q_auto,w_48&v=1591083841",info:"Janna se rodea de una tormenta mágica que aleja a los enemigos. Cuando la tormenta se apacigua, los vientos suaves curan a los aliados cercanos mientras la habilidad esté activa."}
     ]
    },
    JarvanIV: {
      version: "V10.14",
      id: "JarvanIV",
      key: "59",
      name: "Jarvan IV",
      title: "El Ejemplo De Demacia",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/JarvanIV.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg",
      blurb:
        "El príncipe Jarvan, vástago de la dinastía Escudo de Luz, es heredero del trono de Demacia. Criado para ser un modelo de las virtudes más grandes de su nación, se ve forzado a balancear las grandes expectativas que se tienen de él y su propio deseo de pelear en el frente. Jarvan inspira a sus tropas con su temible valentía y desinteresada determinación, levantando alto los colores de su familia y revelando su verdadera fuerza como un líder futuro de su gente.",
      info: {
        attack: 6,
        defense: 8,
        magic: 3,
        difficulty: 2
      },
      image: {
        full: "JarvanIV.png",
        sprite: "champion1.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tanque", "Luchador"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2011-03-01",
      patch: "V1.0.0.112",
      graphic :{
        damage:2,
        toughness:2,
        control:2,
        mobility:2,
        utility:2,
      },
      stats: {
        hp: 570,
        hpperlevel: 90,
        mp: 300,
        mpperlevel: 40,
        armor: 34,
        armorperlevel: 3.6,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 8,
        hpregenperlevel: 0.7,
        mpregen: 6.5,
        mpregenperlevel: 0.45,
        attackdamage: 64,
        attackdamageperlevel:3.4,
        attackspeedoffset: 0.658,
        attackspeedperlevel: 2.5,
        attackrange: 175,
        movespeed: 340
      },
      skill:[
        {pasive:"Cadencia Marcial",img:"https://opgg-static.akamaized.net/images/lol/passive/JarvanIV_MartialCadence.png?image=q_auto,w_48&v=1591083841",info:"El primer ataque básico de Jarvan a un enemigo inflige daño físico adicional según su vida actual. Este efecto no puede aplicarse de nuevo al mismo objetivo durante unos segundos."},
        {q:"Golpe Dragón",img:"https://opgg-static.akamaized.net/images/lol/spell/JarvanIVDragonStrike.png?image=q_auto,w_48&v=1591083841",info:"Jarvan IV extiende su lanza, lo que causa daño físico y reduce la armadura de los enemigos situados en su camino. Además, Jarvan se desplaza hacia el Estandarte Demaciano y derriba a los enemigos que encuentre."},
        {w:"Égida Dorada",img:"https://opgg-static.akamaized.net/images/lol/spell/JarvanIVGoldenAegis.png?image=q_auto,w_48&v=1591083841",info:"Jarvan IV invoca a los antiguos reyes de Demacia para que le protejan de todo posible daño y ralenticen a los enemigos que le rodeen."},
        {e:"Estandarte Demaciano",img:"https://opgg-static.akamaized.net/images/lol/spell/JarvanIVDemacianStandard.png?image=q_auto,w_48&v=1591083841",info:"Gracias al orgullo de Demacia, Jarvan IV goza, de forma pasiva, de una bonificación de Velocidad de Ataque. Al activar Estandarte Demaciano, Jarvan IV puede colocar una bandera de Demacia que inflige Daño Mágico al impacto y otorga Velocidad de Ataque a los campeones aliados cercanos."},
        {r:"Cataclismo",img:"https://opgg-static.akamaized.net/images/lol/spell/JarvanIVCataclysm.png?image=q_auto,w_48&v=1591083841",info:"Jarvan IV salta heroicamente al combate y cae sobre un objetivo con tal fuerza que transforma el terreno a su alrededor para crear una arena. Los enemigos cercanos reciben daño al momento del impacto."}
     ]
    },
    Jax: {
      version: "V10.14",
      id: "Jax",
      key: "24",
      name: "Jax",
      title: "El Maestro De Armas",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Jax.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg",
      blurb:
        "Inigualable tanto en sus habilidades de armamentos únicos como en su mordaz sarcasmo, Jax es el último maestro de armas conocido de Icathia. Después de que su tierra natal fue destruida por su propia arrogancia al desencadenar el Vacío, Jax y su especie juraron proteger lo poco que quedó. Mientras la magia aumenta en el mundo, la amenaza durmiente se agita una vez más, y Jax vaga por Valoran, portando la última luz de Icathia y poniendo a prueba a todos los guerreros que conoce para ver si son suficientemente fuertes para erguirse a su lado...",
      info: {
        attack: 7,
        defense: 5,
        magic: 7,
        difficulty: 2
      },
      image: {
        full: "Jax.png",
        sprite: "champion1.png",
        group: "champion",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Asesino"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-02-21",
      patch: "Semana Alpha 2",
      graphic :{
        damage:3,
        toughness:2,
        control:2,
        mobility:2,
        utility:0,
      },
      stats: {
        hp: 592.8,
        hpperlevel: 85,
        mp: 338.8,
        mpperlevel: 32,
        armor: 36,
        armorperlevel: 3,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 8.5,
        hpregenperlevel: 0.55,
        mpregen: 7.576,
        mpregenperlevel: 0.7,
        attackdamage: 68,
        attackdamageperlevel:3.375,
        attackspeedoffset: 0.638,
        attackspeedperlevel: 3.4,
        attackrange: 125,
        movespeed: 350
      },
      skill:[
        {pasive:"Asalto Implacable",img:"https://opgg-static.akamaized.net/images/lol/passive/Armsmaster_MasterOfArms.png?image=q_auto,w_48&v=1591083841",info:"Los ataques básicos consecutivos de Jax aumentan su Velocidad de Ataque constantemente."},
        {q:"Salto Brutal",img:"https://opgg-static.akamaized.net/images/lol/spell/JaxLeapStrike.png?image=q_auto,w_48&v=1591083841",info:"Jax salta hacia una unidad. Si es un enemigo, lo golpea con su arma."},
        {w:"Potenciación",img:"https://opgg-static.akamaized.net/images/lol/spell/JaxEmpowerTwo.png?image=q_auto,w_48&v=1591083841",info:"Jax carga su arma con energía para que su siguiente ataque cause daño adicional."},
        {e:"Contraataque",img:"https://opgg-static.akamaized.net/images/lol/spell/JaxCounterStrike.png?image=q_auto,w_48&v=1591083841",info:"Aumenta la Probabilidad de evadir durante unos segundos. Mientras la habilidad está disponible y no se está en combate, aumenta de forma pasiva la Velocidad de Movimiento."},
        {r:"Fuerza del Gran Maestro",img:"https://opgg-static.akamaized.net/images/lol/spell/JaxRelentlessAssault.png?image=q_auto,w_48&v=1591083841",info:"Cada tercer golpe consecutivo inflige Daño Mágico adicional. Además, Jax puede activar esta habilidad para fortalecer su resolución, lo que aumenta su Armadura y Resistencia Mágica durante un breve espacio de tiempo."}
     ]
    },
    Jayce: {
      version: "V10.14",
      id: "Jayce",
      key: "126",
      name: "Jayce",
      title: "El Defensor Del Mañana",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Jayce.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg",
      blurb:
        "Jayce es un brillante inventor que comprometió su vida a la defensa de Piltóver y a su firme búsqueda del progreso. Con su martillo hextech transformable en mano, Jayce utiliza su fuerza, valor y considerable inteligencia para proteger su ciudad natal. Aunque lo veneran como a un héroe, no se ha tomado bien toda la atención que conlleva el heroísmo. Aun así, el corazón de Jayce es bondadoso e incluso quienes envidian sus habilidades innatas agradecen la protección que le otorga a la Ciudad del Progreso.",
      info: {
        attack: 8,
        defense: 4,
        magic: 3,
        difficulty: 2
      },
      image: {
        full: "Jayce.png",
        sprite: "champion1.png",
        group: "champion",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tirador"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2012-07-07",
      patch: "V1.0.0.142",
      graphic :{
        damage:3,
        toughness:0,
        control:1,
        mobility:2,
        utility:2,
      },
      stats: {
        hp: 560,
        hpperlevel:90 ,
        mp: 375,
        mpperlevel: 45,
        armor: 27,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 6,
        hpregenperlevel: 0.6,
        mpregen: 6,
        mpregenperlevel: 0.8,
        attackdamage: 54,
        attackdamageperlevel:4.25,
        attackspeedoffset: 0.658,
        attackspeedperlevel: 3,
        attackrange: 125,
        movespeed: 335
      },
      skill:[
        {pasive:"Condensador Hextech",img:"https://opgg-static.akamaized.net/images/lol/passive/Jayce_Passive.png?image=q_auto,w_48&v=1591083841",info:"Tras lanzar Transformar, Jayce gana 40 de velocidad de movimiento y, durante los siguientes 1,25 segundos puede atravesar unidades."},
        {q:"¡Hacia los Cielos!",img:"https://opgg-static.akamaized.net/images/lol/spell/JayceToTheSkies.png?image=q_auto,w_48&v=1591083841",info:"Posición de Martillo: Salta a una zona, infligiendo daño físico y ralentizando a los enemigos. Posición de Cañón: Lanza un orbe de electricidad que detona al golpear a un enemigo o al llegar al final del camino, infligiendo daño físico a todos los enemigos alcanzados."},
        {w:"Campo Electrificado",img:"https://opgg-static.akamaized.net/images/lol/spell/JayceStaticField.png?image=q_auto,w_48&v=1591083841",info:"Posición de Martillo: Pasiva: Restaura Maná por cada golpe. Activa: Crea un campo de rayos que daña a los enemigos cercanos durante varios segundos. Posición de Cañón: Obtiene un impulso de energía y aumenta al máximo la Velocidad de Ataque durante varios ataques."},
        {e:"Golpe Relámpago",img:"https://opgg-static.akamaized.net/images/lol/spell/JayceThunderingBlow.png?image=q_auto,w_48&v=1591083841",info:"Posición de Martillo: Inflige daño mágico a un enemigo y lo empuja alejándolo una corta distancia. Posición de Cañón: Lanza un Portal de Aceleración que aumenta la Velocidad de Movimiento de todos los campeones aliados que lo atraviesen. Si se lanza Descarga Eléctrica a través del portal, aumentarán la velocidad, el alcance y el daño del misil."},
        {r:"Transformar Cañón de Mercurio",img:"https://opgg-static.akamaized.net/images/lol/spell/JayceStanceHtG.png?image=q_auto,w_48&v=1591083841",info:"Posición de Martillo: transforma el Martillo de Mercurio en el Cañón de Mercurio, por lo que obtiene nuevas habilidades y mayor alcance. El primer ataque con esta forma reduce la Armadura y la Resistencia Mágica del objetivo. Posición de Cañón: transforma el Cañón de Mercurio en el Martillo de Mercurio, por lo que obtiene nuevas habilidades y aumenta la Armadura y la Resistencia Mágica. El primer ataque con esta forma inflige daño mágico adicional."}
     ]
    },
    Jhin: {
      version: "V10.14",
      id: "Jhin",
      key: "202",
      name: "Jhin",
      title: "the Virtuoso",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Jhin.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg",
      blurb:
        "''El Arte Requiere De Cierta...Crueldad.''<br><br>Jhin es un psicópata meticuloso que cree que el asesinato es un arte. Alguna vez un prisionero jonio, pero liberado por elementos sombríos dentro del concejo líder de Jonia, el asesino en serie ahora presta sus servicios como sicario a esa camarilla. Utilizando su arma como un pincel, Jhin crea obras de arte brutales que horrorizan a sus víctimas y testigos. Mostrar sus obras de horripilante drama le causa un placer retorcido, lo que lo convierte en la mejor opción para mandar el más poderoso de los mensajes: el terror.",
      info: {
        attack: 10,
        defense: 2,
        magic: 6,
        difficulty: 2
      },
      image: {
        full: "Jhin.png",
        sprite: "champion1.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Asesino"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2016-02-01",
      patch: "V6.2",
      graphic :{
        damage:3,
        toughness:0,
        control:2,
        mobility:1,
        utility:0,
      },
      stats: {
        hp: 585,
        hpperlevel: 93,
        mp: 300,
        mpperlevel: 50,
        armor: 24,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 3.75,
        hpregenperlevel: 0.55,
        mpregen: 6,
        mpregenperlevel: 0.8,
        attackdamage: 59,
        attackdamageperlevel:4.7,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 3,
        attackrange: 550,
        movespeed: 330
      },
      skill:[
        {pasive:"Murmullo",img:"https://opgg-static.akamaized.net/images/lol/passive/Jhin_P.png?image=q_auto,w_48&v=1591083841",info:"El cañón de mano de Jhin, Murmullo, es un preciso instrumento diseñado para infligir daño superior. Dispara a un ritmo establecido y porta solo cuatro balas. Jhin imbuye a la última bala con magia oscura para asestar golpes críticos e infligir daño de ejecución adicional. Siempre que Murmullo asesta golpes críticos, le otorga a Jhin un estallido de velocidad de movimiento."},
        {q:"Granada Bailarina",img:"https://opgg-static.akamaized.net/images/lol/spell/JhinQ.png?image=q_auto,w_48&v=1591083841",info:"Jhin lanza un cartucho mágico contra el enemigo. Puede golpear hasta cuatro objetivos y obtiene daño cada vez que mata."},
        {w:"Brote Mortal",img:"https://opgg-static.akamaized.net/images/lol/spell/JhinW.png?image=q_auto,w_48&v=1591083841",info:"Jhin esgrime su bastón y dispara una sola bala con un enorme alcance. Atraviesa a los súbditos y monstruos, pero se detiene en el primer campeón impactado. El objetivo queda inmovilizado si fue alcanzado recientemente por ataques de aliados de Jhin, Trampas de Loto, o si recibió daño de Jhin."},
        {e:"Audiencia Cautiva",img:"https://opgg-static.akamaized.net/images/lol/spell/JhinE.png?image=q_auto,w_48&v=1591083841",info:"Jhin coloca una trampa de loto invisible que florece cuando se camina por encima de ella y ralentiza a los enemigos cercanos antes de infligir daño con una explosión de pétalos serrados. La Belleza de la Muerte: Cuando Jhin mata a un campeón enemigo, una trampa florecerá cerca del cadáver."},
        {r:"Llamado a Escena",img:"https://opgg-static.akamaized.net/images/lol/spell/JhinR.png?image=q_auto,w_48&v=1591083841",info:"Jhin canaliza, lo que transforma a Murmullo en un mega cañón montado al hombro. Puede disparar 4 superbalas desde distancias extremas que atraviesan a los súbditos y a los monstruos, pero se detienen en el primer campeón que impacta. Murmullo incapacita a los enemigos que golpea, lo que los ralentiza y retrasa el daño de ejecución. El cuarto disparo está perfectamente diseñado, es épicamente poderoso, y garantiza un golpe crítico."}
     ]
    },
    Jinx: {
      version: "V10.14",
      id: "Jinx",
      key: "222",
      name: "Jinx",
      title: "La Bala Perdida",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Jinx.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg",
      blurb:
        "Jinx, una maniática e impulsiva criminal de Zaun, vive para sembrar el caos sin pararse a pensar en las consecuencias. Con un arsenal de juguetes letales a su disposición, desata las explosiones más brillantes y los estallidos más ruidosos para dejar un rastro de caos y pánico a su paso. Jinx detesta el aburrimiento y con una gran alegría deja su marca de pandemonio a dondequiera que vaya.",
      info: {
        attack: 9,
        defense: 2,
        magic: 4,
        difficulty: 2
      },
      image: {
        full: "Jinx.png",
        sprite: "champion1.png",
        group: "champion",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2013-10-10",
      patch: "V3.12",
      graphic :{
        damage:3,
        toughness:0,
        control:2,
        mobility:1,
        utility:0,
      },
      stats: {
        hp: 610,
        hpperlevel:86,
        mp: 245,
        mpperlevel: 45,
        armor: 28,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 3.75,
        hpregenperlevel:0.5,
        mpregen: 6.7,
        mpregenperlevel: 1,
        attackdamage: 57,
        attackdamageperlevel:3.4,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 1,
        attackrange: 525,
        movespeed: 325
      },
      skill:[
        {pasive:"¡Comienza a Emocionarte!",img:"https://opgg-static.akamaized.net/images/lol/passive/Jinx_Passive.png?image=q_auto,w_48&v=1591083841",info:"Jinx recibe velocidad de movimiento y velocidad de ataque aumentadas cuando inflige daño a un campeón enemigo, monstruo épico o estructura que resulta destruido en los 3 seg siguientes."},
        {q:"¡Cambio de Armas!",img:"https://opgg-static.akamaized.net/images/lol/spell/JinxQ.png?image=q_auto,w_48&v=1591083841",info:"Jinx modifica sus ataques básicos al alternar entre Pum-Pum, su ametralladora, y Carapescado, su lanzacohetes. Los ataques con Pum-Pum otorgan velocidad de ataque, mientras que con Carapescado inflige daño de área de efecto, aumenta su alcance, dispara más lento y drena maná."},
        {w:"¡Chispas!",img:"https://opgg-static.akamaized.net/images/lol/spell/JinxW.png?image=q_auto,w_48&v=1591083841",info:"Jinx usa a Chispita, su pistola de rayos, para disparar un rayo que ralentiza, revela e inflige daño al primer enemigo que golpea."},
        {e:"¡Mascafuegos!",img:"https://opgg-static.akamaized.net/images/lol/spell/JinxE.png?image=q_auto,w_48&v=1591083841",info:"Jinx lanza una hilera de granadas paralizantes que explotan tras 5 segundos y envuelven en llamas a los enemigos circundantes. Las Mascafuegos morderán e inmovilizarán a los campeones enemigos que pasen por encima de ellas."},
        {r:"¡¡Supermegacohete Requetemortal!!",img:"https://opgg-static.akamaized.net/images/lol/spell/JinxR.png?image=q_auto,w_48&v=1591083841",info:"Jinx dispara un supercohete por todo el mapa que va aumentando su daño a medida que avanza. El cohete explotará al impactar contra un campeón enemigo y tanto este como los enemigos circundantes recibirán una cantidad de daño proporcional a la Vida que les falte en ese momento."}
     ]
    },
    Kaisa: {
      version: "V10.14",
      id: "Kaisa",
      key: "145",
      name: "Kai'Sa",
      title: "La Hija Del Vacío",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Kaisa.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg",
      blurb:
        "Reclamada por el Vacío cuando era tan solo una niña, Kai'Sa ha logrado sobrevivir a través de absoluta tenacidad y fuerza de voluntad. Sus experiencias la han convertido en una cazadora letal y, para algunos, el presagio de un futuro para el cual preferirían no vivir lo suficiente para no verlo. Ahora que forma parte de una inquietante simbiosis con un caparazón viviente del Vacío, pronto le llegará el momento en el que tendrá que decidir si perdona a los mortales que la consideraran un monstruo para vencer juntos a la oscuridad que se aproxima... o simplemente olvidar, mientras el Vacío consume el mundo que la dejó atrás.",
      info: {
        attack: 8,
        defense:5,
        magic: 3,
        difficulty:2 
      },
      image: {
        full: "Kaisa.png",
        sprite: "champion1.png",
        group: "champion",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2018-03-07",
      patch: "V8.5",
      graphic :{
        damage:3,
        toughness:1,
        control:0,
        mobility:3,
        utility:1,
      },
      stats: {
        hp: 600,
        hpperlevel: 88,
        mp: 344.88,
        mpperlevel: 38,
        armor: 28,
        armorperlevel: 3,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 3.5,
        hpregenperlevel: 0.55,
        mpregen: 8.2,
        mpregenperlevel: 0.45,
        attackdamage: 59,
        attackdamageperlevel:1.7,
        attackspeedoffset: 0.644,
        attackspeedperlevel: 1.8,
        attackrange: 525,
        movespeed: 335
      },
      skill:[
        {pasive:"Segunda Piel",img:"https://opgg-static.akamaized.net/images/lol/passive/Kaisa_Passive.png?image=q_auto,w_48&v=1591083841",info:"Los ataques básicos de Kai'Sa acumulan Plasma, lo que inflige daño mágico adicional. Los efectos de inmovilización de sus aliados ayudan a acumular Plasma. Además, al comprar objetos, Kai'Sa puede mejorar sus hechizos básicos para que tengan propiedades más poderosas."},
        {q:"Lluvia de Icathia",img:"https://opgg-static.akamaized.net/images/lol/spell/KaisaQ.png?image=q_auto,w_48&v=1591083841",info:"Kai'Sa desata una lluvia de misiles que buscan objetivos cercanos. Arma Viviente: mejora Lluvia para lanzar más misiles."},
        {w:"Buscadora del Vacío",img:"https://opgg-static.akamaized.net/images/lol/spell/KaisaW.png?image=q_auto,w_48&v=1591083841",info:"Kai'Sa dispara un misil de largo alcance que marca a los enemigos con su pasiva. Arma Viviente: mejora Buscadora del Vacío para que aplique más marcas de la pasiva y reduce su enfriamiento al impacto contra campeones."},
        {e:"Supercarga",img:"https://opgg-static.akamaized.net/images/lol/spell/KaisaE.png?image=q_auto,w_48&v=1591083841",info:"Kai'Sa incrementa su velocidad de movimiento por un breve momento y después incrementa su velocidad de ataque. Arma Viviente: mejora Supercarga para otorgar Invisibilidad por un breve momento."},
        {r:"Instinto Asesino",img:"https://opgg-static.akamaized.net/images/lol/spell/KaisaR.png?image=q_auto,w_48&v=1591083841",info:"Kai'Sa se desplaza cerca de un campeón enemigo."}
     ]
    },
    Kalista: {
      version: "V10.14",
      id: "Kalista",
      key: "429",
      name: "Kalista",
      title: "El Espíritu De La Venganza",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Kalista.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg",
      blurb:
        "Kalista, espectro de ira y retribución, es el espíritu eterno de la venganza, una pesadilla armada invocada de las Islas de la Sombra para cazar impostores y traidores. Los traicionados pueden llorar ensangrentados clamando venganza, pero Kalista solo escucha a los que están dispuestos a pagar con sus propias almas. Aquellos que se convierten en presa de la ira de Kalista, deben estar en paz, pues cada pacto sellado con esta cazadora terminará con el frío y penetrante fuego de sus lanzas de alma.",
      info: {
        attack: 8,
        defense: 2,
        magic: 4,
        difficulty: 2
      },
      image: {
        full: "Kalista.png",
        sprite: "champion1.png",
        group: "champion",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2014-11-20",
      patch: "V4.20",
      graphic :{
        damage:3,
        toughness:0,
        control:1,
        mobility:3,
        utility:2,
      },
      stats: {
        hp: 534,
        hpperlevel: 100,
        mp: 250,
        mpperlevel: 45,
        armor: 21,
        armorperlevel: 4,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 3.75,
        hpregenperlevel: 0.55,
        mpregen: 6.3,
        mpregenperlevel: 0.4,
        attackdamage: 69,
        attackdamageperlevel:3.5,
        attackspeedoffset: 0.694,
        attackspeedperlevel: 4,
        attackrange: 525,
        movespeed: 325
      },
      skill:[
        {pasive:"Elegancia Marcial",img:"https://opgg-static.akamaized.net/images/lol/passive/Kalista_Passive.png?image=q_auto,w_48&v=1591083841",info:"Si Kalista da una orden de movimiento mientras prepara un ataque básico o Atravesar, al asestar el golpe recorrerá una corta distancia en la dirección indicada."},
        {q:"Atravesar",img:"https://opgg-static.akamaized.net/images/lol/spell/KalistaMysticShot.png?image=q_auto,w_48&v=1591083841",info:"Arroja una veloz lanza que atraviesa a los enemigos que asesina."},
        {w:"Guardián",img:"https://opgg-static.akamaized.net/images/lol/spell/KalistaW.png?image=q_auto,w_48&v=1591083841",info:"Obtienes daño adicional cuando Kalista y su Juramentado atacan al mismo objetivo. Actívala para enviar un espíritu a explorar, el cual revelará la zona frente a él."},
        {e:"Desgarrar",img:"https://opgg-static.akamaized.net/images/lol/spell/KalistaExpungeWrapper.png?image=q_auto,w_48&v=1591083841",info:"Cuando ataca, atraviesa a sus objetivos con lanzas. Actívala para arrancarlas, lo que ralentiza a las víctimas y les causa daño en función del nivel."},
        {r:"Llamada del Destino",img:"https://opgg-static.akamaized.net/images/lol/spell/KalistaRx.png?image=q_auto,w_48&v=1591083841",info:"Kalista teleporta al Juramentado hacia su posición. Este adquiere la capacidad de correr hacia una posición y derribar a los campeones enemigos con los que se encuentra."}
     ]
    },
    Karma: {
      version: "V10.14",
      id: "Karma",
      key: "43",
      name: "Karma",
      title: "La Iluminada",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Karma.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg",
      blurb:
        "Ningún mortal es capaz de ilustrar mejor las tradiciones espirituales de Jonia que Karma. Ella es la personificación de un alma antigua que ha reencarnado innumerables veces, transmitiendo sus recuerdos acumulados en cada una de las vidas nuevas, bendecida con un poder que muy pocos pueden comprender. Ha dado lo mejor de sí para guiar a su gente en los tiempos de crisis recientes, aunque sabe bien que la paz y la armonía tienen un costo considerable, tanto para ella como para la tierra que atesora como lo más preciado.",
      info: {
        attack: 1,
        defense: 7,
        magic: 8,
        difficulty: 2
      },
      image: {
        full: "Karma.png",
        sprite: "champion1.png",
        group: "champion",
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Soporte"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2011-02-01",
      patch: "V1.0.0.110",
      graphic :{
        damage:2,
        toughness:1,
        control:2,
        mobility:1,
        utility:2,
      },
      stats: {
        hp: 534,
        hpperlevel: 95,
        mp: 374,
        mpperlevel: 50,
        armor: 26,
        armorperlevel: 3.8,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 5.5,
        hpregenperlevel: 0.55,
        mpregen: 11.5,
        mpregenperlevel: 0.5,
        attackdamage: 53.544,
        attackdamageperlevel:3.3,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 2.3,
        attackrange: 525,
        movespeed: 335
      },
      skill:[
        {pasive:"Fuego Reunificador",img:"https://opgg-static.akamaized.net/images/lol/passive/Karma_Passive.png?image=q_auto,w_48&v=1591083841",info:"Reduce el enfriamiento de Mantra cada vez que Karma inflige daño a un campeón enemigo con una de sus habilidades (la mitad de efecto para los ataques básicos)."},
        {q:"Llama Interna",img:"https://opgg-static.akamaized.net/images/lol/spell/KarmaQ.png?image=q_auto,w_48&v=1591083841",info:"Karma envía una bola de energía espiritual que explota e inflige daño al golpear a una unidad enemiga. Efecto adicional de Mantra: además de la explosión, Mantra aumenta el poder de ataque de Llama Interna, lo que crea un cataclismo que inflige daño tras unos momentos."},
        {w:"Resolución Enfocada",img:"https://opgg-static.akamaized.net/images/lol/spell/KarmaSpiritBind.png?image=q_auto,w_48&v=1591083841",info:"Karma crea un enlace entre ella y un enemigo, lo que inflige daño y lo revela. Si el enlace no se rompe, el enemigo quedará inmovilizado y recibirá el daño de nuevo. Efecto adicional de Mantra: Karma fortalece el enlace para curarse y extender la duración de la inmovilización."},
        {e:"Inspiración",img:"https://opgg-static.akamaized.net/images/lol/spell/KarmaSolKimShield.png?image=q_auto,w_48&v=1591083841",info:"Karma invoca un escudo protector que absorbe el daño recibido y aumenta la velocidad de movimiento del aliado protegido. Efecto adicional de Mantra: la energía irradia desde su objetivo, lo que fortalece el escudo inicial y aplica Inspiración a campeones aliados cercanos."},
        {r:"Mantra",img:"https://opgg-static.akamaized.net/images/lol/spell/KarmaMantra.png?image=q_auto,w_48&v=1591083841",info:"Karma potencia su siguiente habilidad para otorgarle un efecto adicional. Mantra está disponible en el nivel 1 y no necesita un punto de habilidad."}
     ]
    },
    Karthus: {
      version: "V10.14",
      id: "Karthus",
      key: "30",
      name: "Karthus",
      title: "El Canto De La Muerte",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Karthus.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg",
      blurb:
        "Karthus, heraldo del olvido, es un espíritu inmortal cuyas canciones pavorosas preceden el horror de su dantesca aparición. Los vivos temen la eternidad de la no-muerte, pero Karthus solo ve hermosura y pureza en su abrazo, una comunión perfecta entre la vida y la muerte. Cuando emerge de las Islas de la Sombra es para llevar la dicha de la muerte a los mortales como apóstol de la no-vida.",
      info: {
        attack: 2,
        defense: 2,
        magic: 10,
        difficulty: 2
      },
      image: {
        full: "Karthus.png",
        sprite: "champion1.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"a distancia",
      date: "2009-06-12",
      patch: "V6.12.2009",
      graphic :{
        damage:3,
        toughness:0,
        control:1,
        mobility:0,
        utility:2,
      },
      stats: {
        hp: 550,
        hpperlevel: 87,
        mp: 467,
        mpperlevel: 30.5,
        armor: 20.88,
        armorperlevel: 3.5,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 6.5,
        hpregenperlevel: 0.55,
        mpregen: 8,
        mpregenperlevel: 0.8,
        attackdamage: 45.66,
        attackdamageperlevel:3.25,
        attackspeedoffset: 0.625,
        attackspeedperlevel: 2.11,
        attackrange: 450,
        movespeed: 335
      },
      skill:[
        {pasive:"Desafío a la Muerte",img:"https://opgg-static.akamaized.net/images/lol/passive/Karthus_Passive.png?image=q_auto,w_48&v=1591083841",info:"Al morir, Karthus adopta una forma espiritual que le permite seguir lanzando hechizos durante 7 seg."},
        {q:"Sembrar la Desolación",img:"https://opgg-static.akamaized.net/images/lol/spell/KarthusLayWasteA1.png?image=q_auto,w_48&v=1591083841",info:"Karthus desata una explosión retardada en una ubicación, lo que inflige daño a los enemigos cercanos. Inflige daño aumentado a los enemigos aislados."},
        {w:"Muro de Dolor",img:"https://opgg-static.akamaized.net/images/lol/spell/KarthusWallOfPain.png?image=q_auto,w_48&v=1591083841",info:"Karthus crea una pantalla traspasable que roba energía. Cualquier enemigo que la atraviese verá reducidas, durante un período de tiempo, su Velocidad de Movimiento y su Resistencia Mágica."},
        {e:"Profanación",img:"https://opgg-static.akamaized.net/images/lol/spell/KarthusDefile.png?image=q_auto,w_48&v=1591083841",info:"Karthus roba energía de forma pasiva a sus víctimas, cuyas muertes le proporcionan Maná. También puede optar por rodearse con las almas de sus presas, lo que inflige daño a los enemigos cercanos pero gasta rápidamente su propio Maná."},
        {r:"Réquiem",img:"https://opgg-static.akamaized.net/images/lol/spell/KarthusFallenOne.png?image=q_auto,w_48&v=1591083841",info:"Después de canalizar durante 3 segundos, Karthus inflige daño a todos los campeones enemigos."}
     ]
    },
    Kassadin: {
      version: "V10.14",
      id: "Kassadin",
      key: "38",
      name: "Kassadin",
      title: "El Caminante Del Vacío",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Kassadin.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg",
      blurb:
        "Al abrirse paso a través de los lugares más oscuros del mundo, Kassadin sabe que sus días están contados. Aunque alguna vez fue un experimentado guía y aventurero de Shurima, eligió vivir en el anonimato y tener una familia en las pacíficas tribus del sur... hasta el día que el Vacío consumió su aldea. Kassadin juró venganza, y combinó numerosos artefactos arcanos y tecnologías prohibidas para el peligro que se avecinaba. Así, Kassadin se dirigió por fin a las tierras olvidadas de Icathia, listo para enfrentar a cualquier monstruoso ser del Vacío en su búsqueda del autoproclamado profeta, Malzahar.",
      info: {
        attack: 3,
        defense: 5,
        magic: 8,
        difficulty: 3
      },
      image: {
        full: "Kassadin.png",
        sprite: "champion1.png",
        group: "champion",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Asesino", "Mago"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-08-07",
      patch: "V0.9.22.7",
      graphic :{
        damage:3,
        toughness:2,
        control:1,
        mobility:3,
        utility:0,
      },
      stats: {
        hp: 576,
        hpperlevel: 90,
        mp: 397.6,
        mpperlevel: 67,
        armor: 19,
        armorperlevel: 2.8,
        mrbase: 30,
        mrlevel : 0.5,
        hpregen: 6,
        hpregenperlevel: 0.5,
        mpregen: 6,
        mpregenperlevel: 0.8,
        attackdamage: 58.852,
        attackdamageperlevel:3.9,
        attackspeedoffset: 0.64,
        attackspeedperlevel:3.7,
        attackrange: 150,
        movespeed: 335
      },
      skill:[
        {pasive:"Piedra del Vacío",img:"https://opgg-static.akamaized.net/images/lol/passive/Kassadin_Passive.png?image=q_auto,w_48&v=1591083841",info:"Kassadin sufre 15% menos de daño mágico e ignora la colisión de unidades."},
        {q:"Esfera Nula",img:"https://opgg-static.akamaized.net/images/lol/spell/NullLance.png?image=q_auto,w_48&v=1591083841",info:"Kassadin dispara un orbe de energía del Vacío hacia el objetivo, lo que inflige daño e interrumpe las canalizaciones. El exceso de energía se forma a su alrededor, lo que otorga un escudo temporal que absorbe daño mágico."},
        {w:"Cuchilla Infernal",img:"https://opgg-static.akamaized.net/images/lol/spell/NetherBlade.png?image=q_auto,w_48&v=1591083841",info:"Pasiva: los ataques básicos de Kassadin infligen daño mágico adicional. Activa: el siguiente ataque básico de Kassadin inflige daño mágico adicional y restaura maná"},
        {e:"Pulso de Fuerza",img:"https://opgg-static.akamaized.net/images/lol/spell/ForcePulse.png?image=q_auto,w_48&v=1591083841",info:"Kassadin extrae energía de los hechizos lanzados a su alrededor. Después de cargar, Kassadin puede usar Pulso de Fuerza para dañar y ralentizar a enemigos en un cono frente a él."},
        {r:"Ruptura en el Camino",img:"https://opgg-static.akamaized.net/images/lol/spell/RiftWalk.png?image=q_auto,w_48&v=1591083841",info:"Kassadin se teletransporta a una ubicación cercana e inflige daño a unidades enemigas cercanas. Usar múltiples Rupturas en el Camino en poco tiempo no solo cuesta maná adicional, sino también inflige daño adicional."}
     ]
    },
    Katarina: {
      version: "V10.14",
      id: "Katarina",
      key: "55",
      name: "Katarina",
      title: "La Daga Siniestra",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Katarina.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg",
      blurb:
        "Decisiva en su juicio y letal en combate, Katarina es una asesina noxiana del más alto calibre. Como la hija mayor del legendario General Du Couteau, ella hizo que reconocieran sus talentos con agiles muertes a sus enemigos desprevenidos. Su feroz ambición la ha llevado a buscar blancos fuertemente protegidos aunque tenga que poner en riesgo a sus aliados; sin embargo, sin importar la misión, Katarina no dudará al ejecutar su deber en medio de un torbellino de dagas.",
      info: {
        attack: 4,
        defense: 3,
        magic: 9,
        difficulty: 3
      },
      image: {
        full: "Katarina.png",
        sprite: "champion1.png",
        group: "champion",
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Asesino", "Mago"],
      partype: "None",
      rangetype:"cuerpo a cuerpo",
      date: "2009-09-19",
      patch: "V0.9.25.21",
      graphic :{
        damage:3,
        toughness:0,
        control:0,
        mobility:3,
        utility:0,
      },
      stats: {
        hp: 602,
        hpperlevel:94 ,
        mp: 0,
        mpperlevel:0 ,
        armor: 27.88,
        armorperlevel:3.5 ,
        mrbase: 32.1,
        mrlevel : 1.25,
        hpregen: 7.5,
        hpregenperlevel: 0.7,
        mpregen: 0,
        mpregenperlevel:0 ,
        attackdamage:58 ,
        attackdamageperlevel:3.2,
        attackspeedoffset: 0.658,
        attackspeedperlevel: 2.74,
        attackrange: 125,
        movespeed: 340
      },
      skill:[
        {pasive:"Voracidad",img:"https://opgg-static.akamaized.net/images/lol/passive/Katarina_Passive.png?image=q_auto,w_48&v=1591083841",info:"Si Katarina inflige daño a un enemigo y este muere poco después, los enfriamientos restantes de sus habilidades se reducirán significativamente. Si Katarina recoge una Daga, la usará para acuchillar a todos los enemigos cercanos e infligir daño mágico."},
        {q:"Hoja Rebotante",img:"https://opgg-static.akamaized.net/images/lol/spell/KatarinaQ.png?image=q_auto,w_48&v=1591083841",info:"Katarina arroja una daga hacia el objetivo que luego rebota hacia otros enemigos cercanos antes de aterrizar en el suelo."},
        {w:"Preparación",img:"https://opgg-static.akamaized.net/images/lol/spell/KatarinaW.png?image=q_auto,w_48&v=1591083841",info:"Katarina obtiene un aumento de velocidad de movimiento y arroja una daga hacia el aire directamente sobre ella."},
        {e:"Shunpo",img:"https://opgg-static.akamaized.net/images/lol/spell/KatarinaEWrapper.png?image=q_auto,w_48&v=1591083841",info:"Katarina se transporta hacia el objetivo y lo daña si es un enemigo. Si no, daña al enemigo más cercano."},
        {r:"Loto Mortal",img:"https://opgg-static.akamaized.net/images/lol/spell/KatarinaR.png?image=q_auto,w_48&v=1591083841",info:"Katarina se vuelve una ráfaga filosa que causa daño masivo mientras canaliza hacia los 3 enemigos más cercanos."}
     ]
    },
    Kayle: {
      version: "V10.14",
      id: "Kayle",
      key: "10",
      name: "Kayle",
      title: "La Justiciera",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Kayle.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg",
      blurb:
        "Nacida de un Aspecto targoniano durante el punto culminante de las Guerras Rúnicas, Kayle honra el legado de su madre al pelear por la justicia con sus alas de fuego divino. Ella y su hermana gemela, Morgana, fueron las protectoras de Demacia durante años... hasta que las constantes fallas de los mortales decepcionaron a Kayle, y decidió abandonar este reino para siempre. Hasta el día de hoy se cuentan leyendas sobre cómo castigó a los injustos con sus espadas ardientes, y muchos esperan que algún día regrese.",
      info: {
        attack: 6,
        defense: 6,
        magic: 7,
        difficulty: 2
      },
      image: {
        full: "Kayle.png",
        sprite: "champion1.png",
        group: "champion",
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Soporte"],
      partype: "MP",
      rangetype:"cuerpo a cuerpo",
      date: "2009-02-21",
      patch: "Semana Alpha 2",
      graphic :{
        damage:3,
        toughness:1,
        control:1,
        mobility:1,
        utility:3,
      },
      stats: {
        hp: 600,
        hpperlevel:85 ,
        mp: 330,
        mpperlevel:50 ,
        armor: 26,
        armorperlevel: 3,
        mrbase: 34,
        mrlevel : 0.5,
        hpregen: 5,
        hpregenperlevel:0.5,
        mpregen: 8,
        mpregenperlevel: 0.8,
        attackdamage: 50,
        attackdamageperlevel:2.5,
        attackspeedoffset: 0.667,
        attackspeedperlevel: 1.5,
        attackrange: 175,
        movespeed: 335
      },
      skill:[
        {pasive:"Ascenso Divino",img:"https://opgg-static.akamaized.net/images/lol/passive/Kayle_P.png?image=q_auto,w_48&v=1591083841",info:"os ataques de Kayle se potencian con el poder de los cielos a medida que sube de nivel y gasta puntos de habilidad. Sus alas comienzan a arder a medida que obtiene velocidad de ataque, velocidad de movimiento, alcance de ataque y ondas de fuego con sus ataques."},
        {q:"Explosión Radiante",img:"https://opgg-static.akamaized.net/images/lol/spell/KayleQ.png?image=q_auto,w_48&v=1591083841",info:"Kayle conjura un portal que invoca una espada celestial que atraviesa a sus enemigos, lo que ralentiza, daña y reduce las resistencias de todos los objetivos afectados."},
        {w:"Bendición Celestial",img:"https://opgg-static.akamaized.net/images/lol/spell/KayleW.png?image=q_auto,w_48&v=1591083841",info:"Con la bendición de todo lo divino, Kayle se cura y se otorga velocidad de movimiento a sí misma y al aliado más cercano."},
        {e:"Espadafuego Celeste",img:"https://opgg-static.akamaized.net/images/lol/spell/KayleE.png?image=q_auto,w_48&v=1591083841",info:"Pasiva: la espada celestial de Kayle, Virtud, inflige daño mágico adicional a los enemigos que ataca. Activa: el siguiente ataque de Kayle castiga a su objetivo con fuego celestial, lo que inflige daño adicional proporcional a su vida faltante."},
        {r:"Juicio Divino",img:"https://opgg-static.akamaized.net/images/lol/spell/KayleR.png?image=q_auto,w_48&v=1591083841",info:"Kayle vuelve a un aliado invulnerable e invoca a los antiguos Aspectos de la Justicia para que purifiquen el área alrededor de su objetivo con una lluvia divina de espadas."}
     ]
    },
    Kennen: {
      version: "V10.14",
      id: "Kennen",
      key: "85",
      name: "Kennen",
      title: "the Heart of the Tempest",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Kennen.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg",
      blurb:
        "There exists an ancient order originating in the Ionian Isles dedicated to the preservation of balance. Order, chaos, light, darkness -- all things must exist in perfect harmony for such is the way of the universe. This order is known as the Kinkou ...",
      info: {
        attack: 6,
        defense: 4,
        magic: 7,
        difficulty: 4
      },
      image: {
        full: "Kennen.png",
        sprite: "champion1.png",
        group: "champion",
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Marksman"],
      partype: "Energy",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Khazix: {
      version: "V10.14",
      id: "Khazix",
      key: "121",
      name: "Kha'Zix",
      title: "the Voidreaver",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Khazix.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg",
      blurb:
        "A vicious Void predator, Kha'Zix infiltrated Valoran to devour the land's most promising creatures. With each kill he absorbs his prey's strength, evolving to grow more powerful. Kha'Zix hungers most to conquer and consume Rengar, the one beast he ...",
      info: {
        attack: 9,
        defense: 4,
        magic: 3,
        difficulty: 6
      },
      image: {
        full: "Khazix.png",
        sprite: "champion1.png",
        group: "champion",
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Kindred: {
      version: "V10.14",
      id: "Kindred",
      key: "203",
      name: "Kindred",
      title: "The Eternal Hunters",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Kindred.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg",
      blurb:
        "''Tell me again, little Lamb, which things are ours to take?''<br>''All things, Dear Wolf.''<br>Separate, but never parted, Kindred represents the twin essences of death. Lamb's arrow offers a swift release for those who accept their fate. Wolf hunts ...",
      info: {
        attack: 8,
        defense: 2,
        magic: 2,
        difficulty: 4
      },
      image: {
        full: "Kindred.png",
        sprite: "champion1.png",
        group: "champion",
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Marksman"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Kled: {
      version: "V10.14",
      id: "Kled",
      key: "240",
      name: "Kled",
      title: "the Cantankerous Cavalier",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Kled.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg",
      blurb:
        "''A sane man would run . . . but I ain't the runnin' kind!''<br><br>A warrior as fearless as he is ornery, Kled is a popular folk hero in Noxus. Embodying the furious bravado of his nation, he is an icon beloved by the empire's soldiers, distrusted by ...",
      info: {
        attack: 8,
        defense: 2,
        magic: 2,
        difficulty: 7
      },
      image: {
        full: "Kled.png",
        sprite: "champion4.png",
        group: "champion",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "Gnarfury",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    KogMaw: {
      version: "V10.14",
      id: "KogMaw",
      key: "96",
      name: "Kog'Maw",
      title: "the Mouth of the Abyss",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/KogMaw.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg",
      blurb:
        "''If that's just hungry, I don't want to see angry.''<br><br>When the prophet Malzahar was reborn in Icathia, he was led there by an ominous voice which thereafter anchored itself to his psyche. From within, this voice bestowed upon him terrible ...",
      info: {
        attack: 8,
        defense: 2,
        magic: 5,
        difficulty: 6
      },
      image: {
        full: "KogMaw.png",
        sprite: "champion1.png",
        group: "champion",
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Marksman", "Mage"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Leblanc: {
      version: "V10.14",
      id: "Leblanc",
      key: "7",
      name: "LeBlanc",
      title: "the Deceiver",
      "name:":
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Leblanc.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg",
      blurb:
        "Every city has its dark side, even one whose reputation is already of a questionable hue. Noxus - though its name is already invoked with a mixture of reverence and revulsion - is no exception to this simple truth. Deep within the winding dungeons ...",
      info: {
        attack: 1,
        defense: 4,
        magic: 10,
        difficulty: 9
      },
      image: {
        full: "Leblanc.png",
        sprite: "champion1.png",
        group: "champion",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Mage"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    LeeSin: {
      version: "V10.14",
      id: "LeeSin",
      key: "64",
      name: "Lee Sin",
      title: "the Blind Monk",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/LeeSin.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg",
      blurb:
        "As a young teen, Lee Sin was intent on becoming a summoner. His will and dedication were unmatched by any of his peers, and his skill drew the attention of Reginald Ashram, the League's High Councilor at the time. While studying at the Arcanum Majoris,...",
      info: {
        attack: 8,
        defense: 5,
        magic: 3,
        difficulty: 6
      },
      image: {
        full: "LeeSin.png",
        sprite: "champion1.png",
        group: "champion",
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Assassin"],
      partype: "Energy",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Leona: {
      version: "V10.14",
      id: "Leona",
      key: "89",
      name: "Leona",
      title: "the Radiant Dawn",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Leona.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg",
      blurb:
        "''If you would shine like a sun, first you must burn like one.''<br><br>Imbued with the fire of the sun, Leona is a warrior templar of the Solari who defends Mount Targon with her Zenith Blade and Shield of Daybreak. Her skin shimmers with starfire ...",
      info: {
        attack: 4,
        defense: 8,
        magic: 3,
        difficulty: 4
      },
      image: {
        full: "Leona.png",
        sprite: "champion1.png",
        group: "champion",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Support"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Lissandra: {
      version: "V10.14",
      id: "Lissandra",
      key: "127",
      name: "Lissandra",
      title: "the Ice Witch",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Lissandra.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg",
      blurb:
        "Lissandra's magic twists the pure power of ice into something dark and terrible. With the force of her black ice, she does more than freeze - she impales and crushes those who oppose her. To the terrified denizens of the north, she is known only as ...",
      info: {
        attack: 2,
        defense: 5,
        magic: 8,
        difficulty: 6
      },
      image: {
        full: "Lissandra.png",
        sprite: "champion1.png",
        group: "champion",
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mage"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Lucian: {
      version: "V10.14",
      id: "Lucian",
      key: "236",
      name: "Lucian",
      title: "the Purifier",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Lucian.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg",
      blurb:
        "Lucian wields relic weapons imbued with ancient power and stands a stalwart guardian against the undead. His cold conviction never wavers, even in the face of the maddening horrors he destroys beneath his hail of purifying fire. Lucian walks alone on ...",
      info: {
        attack: 8,
        defense: 5,
        magic: 3,
        difficulty: 6
      },
      image: {
        full: "Lucian.png",
        sprite: "champion1.png",
        group: "champion",
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Marksman"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Lulu: {
      version: "V10.14",
      id: "Lulu",
      key: "117",
      name: "Lulu",
      title: "the Fae Sorceress",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Lulu.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg",
      blurb:
        "Perhaps more than any other champion in the League, Lulu marches to the beat of her own drum. During her youth in Bandle City, she spent most of her time wandering alone in the forest or lost in a daydream. It wasn't that she was antisocial; the ...",
      info: {
        attack: 4,
        defense: 5,
        magic: 7,
        difficulty: 5
      },
      image: {
        full: "Lulu.png",
        sprite: "champion2.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Support", "Mage"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Lux: {
      version: "V10.14",
      id: "Lux",
      key: "99",
      name: "Lux",
      title: "the Lady of Luminosity",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Lux.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg",
      blurb:
        "Born to the prestigious Crownguards, the paragon family of Demacian service, Luxanna was destined for greatness. She grew up as the family's only daughter, and she immediately took to the advanced education and lavish parties required of families as ...",
      info: {
        attack: 2,
        defense: 4,
        magic: 9,
        difficulty: 5
      },
      image: {
        full: "Lux.png",
        sprite: "champion2.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Support"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Malphite: {
      version: "V10.14",
      id: "Malphite",
      key: "54",
      name: "Malphite",
      title: "Shard of the Monolith",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Malphite.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg",
      blurb:
        "There is a world of perfect harmony, where all are part of the whole. The Monolith is the essence of all creation, and its denizens are but singular pieces of it. It is beautiful in its symmetry, and in its almost complete lack of uncertainty. The ...",
      info: {
        attack: 5,
        defense: 9,
        magic: 7,
        difficulty: 2
      },
      image: {
        full: "Malphite.png",
        sprite: "champion2.png",
        group: "champion",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Malzahar: {
      version: "V10.14",
      id: "Malzahar",
      key: "90",
      name: "Malzahar",
      title: "the Prophet of the Void",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Malzahar.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg",
      blurb:
        "Many men have gone mad beneath the glare of the Shurima sun, but it was during the night's chilling embrace that Malzahar relinquished his sanity. Malzahar was born a seer, blessed with the gift of prophecy. His talent, though unrefined, promised to ...",
      info: {
        attack: 2,
        defense: 2,
        magic: 9,
        difficulty: 6
      },
      image: {
        full: "Malzahar.png",
        sprite: "champion2.png",
        group: "champion",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Assassin"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Maokai: {
      version: "V10.14",
      id: "Maokai",
      key: "57",
      name: "Maokai",
      title: "the Twisted Treant",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
      blurb:
        "''All around me are empty husks, soulless and unafraid... but I will bring them fear.''<br><br>Maokai is a rageful, towering treant who fights the unnatural horrors of the Shadow Isles. He was twisted into a force of vengeance after a magical ...",
      info: {
        attack: 3,
        defense: 8,
        magic: 6,
        difficulty: 3
      },
      image: {
        full: "Maokai.png",
        sprite: "champion2.png",
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Mage"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    MasterYi: {
      version: "V10.14",
      id: "MasterYi",
      key: "11",
      name: "Master Yi",
      title: "the Wuju Bladesman",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/MasterYi.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg",
      blurb:
        "Through the ancient martial art of Wuju, Master Yi has tempered his body and sharpened his mind until thought and action have become one. Though he chooses to enter into violence as a last resort, the grace and speed with which he wields his blade ...",
      info: {
        attack: 10,
        defense: 4,
        magic: 2,
        difficulty: 4
      },
      image: {
        full: "MasterYi.png",
        sprite: "champion2.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    MissFortune: {
      version: "V10.14",
      id: "MissFortune",
      key: "21",
      name: "Miss Fortune",
      title: "the Bounty Hunter",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/MissFortune.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg",
      blurb:
        "''The bigger the risk, the bigger the bounty.''<br><br>Beauty and danger: There are few who can match Miss Fortune in either. One of Bilgewater's most infamous bounty hunters, she built her legend upon a swathe of bullet-riddled corpses and captured ...",
      info: {
        attack: 8,
        defense: 2,
        magic: 5,
        difficulty: 1
      },
      image: {
        full: "MissFortune.png",
        sprite: "champion2.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Marksman"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    MonkeyKing: {
      version: "V10.14",
      id: "MonkeyKing",
      key: "62",
      name: "Wukong",
      title: "the Monkey King",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/MonkeyKing.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg",
      blurb:
        "During the chaos of the Rune Wars, an enormous runestone was lost deep within the Plague Jungles. It remained there, untouched for centuries, emanating a potent magic which infused nearby wildlife with sentience and vitality. A group of monkeys who ...",
      info: {
        attack: 8,
        defense: 5,
        magic: 2,
        difficulty: 3
      },
      image: {
        full: "MonkeyKing.png",
        sprite: "champion2.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Mordekaiser: {
      version: "V10.14",
      id: "Mordekaiser",
      key: "82",
      name: "Mordekaiser",
      title: "the Iron Revenant",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Mordekaiser.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg",
      blurb:
        "''All things must die... and yet I live on.''<br><br>The baleful revenant Mordekaiser is among the most terrifying and hateful spirits haunting the Shadow Isles. He has existed for countless centuries, shielded from true death by necromantic sorcery ...",
      info: {
        attack: 4,
        defense: 6,
        magic: 7,
        difficulty: 4
      },
      image: {
        full: "Mordekaiser.png",
        sprite: "champion2.png",
        group: "champion",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Fighter"],
      partype: "None",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Morgana: {
      version: "V10.14",
      id: "Morgana",
      key: "25",
      name: "Morgana",
      title: "Fallen Angel",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Morgana.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg",
      blurb:
        "There is a world far away populated by graceful and beautiful winged beings gifted with immortality, where an ancient conflict still rages. Like so many conflicts, this war split families. One side proclaimed themselves as beings of perfect order and ...",
      info: {
        attack: 1,
        defense: 6,
        magic: 8,
        difficulty: 1
      },
      image: {
        full: "Morgana.png",
        sprite: "champion2.png",
        group: "champion",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Support"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Nami: {
      version: "V10.14",
      id: "Nami",
      key: "267",
      name: "Nami",
      title: "the Tidecaller",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Nami.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg",
      blurb:
        "Nami channels the primal energies of the ocean, harnessing its mystical restorative properties and commanding the raw power of the tides themselves. Though many doubted her, Nami had the bravery and determination to take on a dangerous quest when no ...",
      info: {
        attack: 4,
        defense: 3,
        magic: 7,
        difficulty: 5
      },
      image: {
        full: "Nami.png",
        sprite: "champion2.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Support", "Mage"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Nasus: {
      version: "V10.14",
      id: "Nasus",
      key: "75",
      name: "Nasus",
      title: "the Curator of the Sands",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Nasus.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
      blurb:
        "''What was fallen will be great again.''<br><br>Nasus is an imposing, jackal-headed Ascended being from ancient Shurima, a heroic figure regarded as a demigod by the people of the desert. Fiercely intelligent, he was a guardian of knowledge and ...",
      info: {
        attack: 7,
        defense: 5,
        magic: 6,
        difficulty: 6
      },
      image: {
        full: "Nasus.png",
        sprite: "champion2.png",
        group: "champion",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Nautilus: {
      version: "V10.14",
      id: "Nautilus",
      key: "111",
      name: "Nautilus",
      title: "the Titan of the Depths",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Nautilus.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg",
      blurb:
        "Once, Nautilus was a sailor commissioned by the Institute of War to explore the uncharted reaches of the Guardian's Sea. This expedition took him deep into unknown waters where he and his crew found a vast section of black oozing liquid that none of ...",
      info: {
        attack: 4,
        defense: 6,
        magic: 6,
        difficulty: 6
      },
      image: {
        full: "Nautilus.png",
        sprite: "champion2.png",
        group: "champion",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Nidalee: {
      version: "V10.14",
      id: "Nidalee",
      key: "76",
      name: "Nidalee",
      title: "the Bestial Huntress",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Nidalee.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg",
      blurb:
        "There are few dwellers, let alone champions, residing in the blasted and dangerous lands that lie south of the Great Barrier. Much of that world still bears the scars of past Runes Wars, especially the mysterious Kumungu Jungle. There are ...",
      info: {
        attack: 5,
        defense: 4,
        magic: 7,
        difficulty: 8
      },
      image: {
        full: "Nidalee.png",
        sprite: "champion2.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Nocturne: {
      version: "V10.14",
      id: "Nocturne",
      key: "56",
      name: "Nocturne",
      title: "the Eternal Nightmare",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Nocturne.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg",
      blurb:
        "Before Nocturne, people believed that dreams were figments of their imagination, meaningless images that flashed through the mind when one slept. This belief was put to the test when a rash of sleep-related incidents started afflicting summoners of ...",
      info: {
        attack: 9,
        defense: 5,
        magic: 2,
        difficulty: 4
      },
      image: {
        full: "Nocturne.png",
        sprite: "champion2.png",
        group: "champion",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Nunu: {
      version: "V10.14",
      id: "Nunu",
      key: "20",
      name: "Nunu",
      title: "the Yeti Rider",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Nunu.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg",
      blurb:
        "Sometimes bonds of friendship become stronger than even bonds of blood. When those bonds link a fearless boy to a fearsome Yeti, the bond becomes a force to be reckoned with. Given the responsibility of taming a terrifying beast, Nunu forged a ...",
      info: {
        attack: 4,
        defense: 6,
        magic: 7,
        difficulty: 4
      },
      image: {
        full: "Nunu.png",
        sprite: "champion2.png",
        group: "champion",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Support", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Olaf: {
      version: "V10.14",
      id: "Olaf",
      key: "2",
      name: "Olaf",
      title: "the Berserker",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Olaf.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg",
      blurb:
        "Most men would say that death is a thing to be feared; none of those men would be Olaf. The Berserker lives only for the roar of a battle cry and the clash of steel. Spurred on by his hunger for glory and the looming curse of a forgettable death, Olaf ...",
      info: {
        attack: 9,
        defense: 5,
        magic: 3,
        difficulty: 3
      },
      image: {
        full: "Olaf.png",
        sprite: "champion2.png",
        group: "champion",
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Orianna: {
      version: "V10.14",
      id: "Orianna",
      key: "61",
      name: "Orianna",
      title: "the Lady of Clockwork",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Orianna.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg",
      blurb:
        "There once was a Piltovian man named Corin Reveck who had a daughter named Orianna, whom he loved more than anything else in the world. Though Orianna had incredible talent for dancing, she was deeply fascinated by the champions of the League of ...",
      info: {
        attack: 4,
        defense: 3,
        magic: 9,
        difficulty: 7
      },
      image: {
        full: "Orianna.png",
        sprite: "champion2.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Support"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Pantheon: {
      version: "V10.14",
      id: "Pantheon",
      key: "80",
      name: "Pantheon",
      title: "the Artisan of War",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Pantheon.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg",
      blurb:
        "''Bring forth one true champion, or a hundred more like you, and then we shall have a battle that will be spoken of until the end of time.''<br><br>The peerless warrior known as Pantheon is a nigh-unstoppable paragon of battle. He was born among the ...",
      info: {
        attack: 9,
        defense: 4,
        magic: 3,
        difficulty: 4
      },
      image: {
        full: "Pantheon.png",
        sprite: "champion2.png",
        group: "champion",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Assassin"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Poppy: {
      version: "V10.14",
      id: "Poppy",
      key: "78",
      name: "Poppy",
      title: "Keeper of the Hammer",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Poppy.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg",
      blurb:
        "''I'm no hero. Just a yordle with a hammer.''<br><br>Runeterra has no shortage of valiant champions, but few are as tenacious as Poppy. Bearing a hammer twice the length of her body, this determined yordle has spent untold years searching for the ...",
      info: {
        attack: 6,
        defense: 7,
        magic: 2,
        difficulty: 6
      },
      image: {
        full: "Poppy.png",
        sprite: "champion2.png",
        group: "champion",
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Quinn: {
      version: "V10.14",
      id: "Quinn",
      key: "133",
      name: "Quinn",
      title: "Demacia's Wings",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Quinn.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg",
      blurb:
        "Quinn and Valor are an elite ranger team. With crossbow and claw, they undertake their nation's most dangerous missions deep within enemy territory, from swift reconnaissance to lethal strikes. The pair's unbreakable bond is deadly on the battlefield, ...",
      info: {
        attack: 9,
        defense: 4,
        magic: 2,
        difficulty: 5
      },
      image: {
        full: "Quinn.png",
        sprite: "champion2.png",
        group: "champion",
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Marksman", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Rammus: {
      version: "V10.14",
      id: "Rammus",
      key: "33",
      name: "Rammus",
      title: "the Armordillo",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Rammus.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg",
      blurb:
        "''OK.''<br><br>Idolized by many, dismissed by some, mystifying to all, the curious being, Rammus, is an enigma. Protected by a spiked shell, Rammus inspires increasingly disparate theories on his origin wherever he goes - from demigod, to sacred ...",
      info: {
        attack: 4,
        defense: 10,
        magic: 5,
        difficulty: 5
      },
      image: {
        full: "Rammus.png",
        sprite: "champion2.png",
        group: "champion",
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    RekSai: {
      version: "V10.14",
      id: "RekSai",
      key: "421",
      name: "Rek'Sai",
      title: "the Void Burrower",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/RekSai.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg",
      blurb:
        "The largest and fiercest of her species, Rek'Sai is a merciless predator that tunnels through the earth to ambush and devour her prey. Her insatiable hunger has laid waste to entire regions of the once-great Shuriman empire. Merchants, traders and ...",
      info: {
        attack: 8,
        defense: 5,
        magic: 2,
        difficulty: 3
      },
      image: {
        full: "RekSai.png",
        sprite: "champion2.png",
        group: "champion",
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Fighter"],
      partype: "Battlefury",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Renekton: {
      version: "V10.14",
      id: "Renekton",
      key: "58",
      name: "Renekton",
      title: "the Butcher of the Sands",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Renekton.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg",
      blurb:
        "''Blood and vengeance.''<br><br>Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the armies of Shurima to countless victories. However, after the ...",
      info: {
        attack: 8,
        defense: 5,
        magic: 2,
        difficulty: 3
      },
      image: {
        full: "Renekton.png",
        sprite: "champion2.png",
        group: "champion",
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "Rage",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Rengar: {
      version: "V10.14",
      id: "Rengar",
      key: "107",
      name: "Rengar",
      title: "the Pridestalker",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Rengar.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg",
      blurb:
        "On every wall of his den, the trophy hunter Rengar mounts the heads, horns, claws, and fangs of the most lethal creatures in Valoran. Though his collection is extensive, he remains unsatisfied, tirelessly seeking greater game. He takes time with every ...",
      info: {
        attack: 7,
        defense: 4,
        magic: 2,
        difficulty: 8
      },
      image: {
        full: "Rengar.png",
        sprite: "champion2.png",
        group: "champion",
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Assassin", "Fighter"],
      partype: "Ferocity",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Riven: {
      version: "V10.14",
      id: "Riven",
      key: "92",
      name: "Riven",
      title: "the Exile",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Riven.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg",
      blurb:
        "''There is a place between war and murder in which our demons lurk.''<br><br>In Noxus, any citizen may rise to power regardless of race, gender, or social standing - strength is all that matters. It was with committed faith in this ideal that Riven ...",
      info: {
        attack: 8,
        defense: 5,
        magic: 1,
        difficulty: 8
      },
      image: {
        full: "Riven.png",
        sprite: "champion2.png",
        group: "champion",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Assassin"],
      partype: "None",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Rumble: {
      version: "V10.14",
      id: "Rumble",
      key: "68",
      name: "Rumble",
      title: "the Mechanized Menace",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Rumble.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg",
      blurb:
        "''Ugh, it's gonna take forever to scrape your face off my suit!''<br><br>Even amongst yordles, Rumble was always the runt of the litter. As such, he was used to being bullied. In order to survive, he had to be scrappier and more resourceful than his ...",
      info: {
        attack: 3,
        defense: 6,
        magic: 8,
        difficulty: 10
      },
      image: {
        full: "Rumble.png",
        sprite: "champion2.png",
        group: "champion",
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Mage"],
      partype: "Heat",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Ryze: {
      version: "V10.14",
      id: "Ryze",
      key: "13",
      name: "Ryze",
      title: "the Rune Mage",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ryze.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg",
      blurb:
        "''Take care with this world. What is made can be unmade.''<br><br>Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with a boundless constitution and ...",
      info: {
        attack: 2,
        defense: 2,
        magic: 10,
        difficulty: 7
      },
      image: {
        full: "Ryze.png",
        sprite: "champion2.png",
        group: "champion",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mage", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Sejuani: {
      version: "V10.14",
      id: "Sejuani",
      key: "113",
      name: "Sejuani",
      title: "the Winter's Wrath",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Sejuani.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg",
      blurb:
        "Sejuani was weaned on hardship and reared on barbarity. Where others succumbed to the harshness of the Freljord, she was tempered by it until pain became power, hunger an encouragement, and frost an ally in culling the weak. Through her ordeals, she ...",
      info: {
        attack: 5,
        defense: 7,
        magic: 6,
        difficulty: 4
      },
      image: {
        full: "Sejuani.png",
        sprite: "champion2.png",
        group: "champion",
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Shaco: {
      version: "V10.14",
      id: "Shaco",
      key: "35",
      name: "Shaco",
      title: "the Demon Jester",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Shaco.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg",
      blurb:
        "Most would say that death isn't funny. It isn't, unless you're Shaco - then it's hysterical. He is Valoran's first fully functioning homicidal comic; he jests until someone dies, and then he laughs. The figure that has come to be known as the Demon ...",
      info: {
        attack: 8,
        defense: 4,
        magic: 6,
        difficulty: 9
      },
      image: {
        full: "Shaco.png",
        sprite: "champion2.png",
        group: "champion",
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Assassin"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Shen: {
      version: "V10.14",
      id: "Shen",
      key: "98",
      name: "Shen",
      title: "the Eye of Twilight",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Shen.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg",
      blurb:
        "''The Eye is blind to fear, to hate, to love - to all things that would sway equilibrium.''<br><br>Leader of a secret clan of mystic warriors, Shen serves as the Eye of Twilight, entrusted to enforce equilibrium in the world. Longing to remain free ...",
      info: {
        attack: 3,
        defense: 9,
        magic: 3,
        difficulty: 4
      },
      image: {
        full: "Shen.png",
        sprite: "champion3.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Melee"],
      partype: "Energy",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Shyvana: {
      version: "V10.14",
      id: "Shyvana",
      key: "102",
      name: "Shyvana",
      title: "the Half-Dragon",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Shyvana.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg",
      blurb:
        "A half-breed born from the union between dragon and human, Shyvana searched all her life for belonging. Persecution forged her into a brutal warrior, and those who dare stand against Shyvana face the fiery beast lurking just beneath her skin....",
      info: {
        attack: 8,
        defense: 6,
        magic: 3,
        difficulty: 4
      },
      image: {
        full: "Shyvana.png",
        sprite: "champion3.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "Dragonfury",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Singed: {
      version: "V10.14",
      id: "Singed",
      key: "27",
      name: "Singed",
      title: "the Mad Chemist",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Singed.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg",
      blurb:
        "Singed descended from a long line of Zaun's revered chemists. Even in his youth, his talent for concocting potions far outstripped that of his peers, and he quickly distinguished himself from his less extraordinary chemist compatriots. It came as no ...",
      info: {
        attack: 4,
        defense: 8,
        magic: 7,
        difficulty: 5
      },
      image: {
        full: "Singed.png",
        sprite: "champion3.png",
        group: "champion",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Sion: {
      version: "V10.14",
      id: "Sion",
      key: "14",
      name: "Sion",
      title: "The Undead Juggernaut",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Sion.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg",
      blurb:
        "BLOOD.<br><br>SMELL IT.<br><br>WANT. ACHING. NEED!<br><br>CLOSE NOW. THEY COME.<br><br>NO CHAINS? FREE! KILL!<br><br>IN REACH. YES! DIE! DIE!<br><br>Gone. Too quick. No fight. More. I want... more.<br><br>A voice? Unfamiliar. I see him. The Grand ...",
      info: {
        attack: 5,
        defense: 9,
        magic: 3,
        difficulty: 5
      },
      image: {
        full: "Sion.png",
        sprite: "champion3.png",
        group: "champion",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tank", "Fighter"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Sivir: {
      version: "V10.14",
      id: "Sivir",
      key: "15",
      name: "Sivir",
      title: "the Battle Mistress",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Sivir.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg",
      blurb:
        "''I don't care what face is on your coin, as long as it pays.''<br><br>Sivir is a renowned fortune hunter and mercenary captain who plies her trade in the deserts of Shurima. Armed with her legendary jeweled crossblade, she has fought and won ...",
      info: {
        attack: 9,
        defense: 3,
        magic: 1,
        difficulty: 4
      },
      image: {
        full: "Sivir.png",
        sprite: "champion3.png",
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Marksman"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Skarner: {
      version: "V10.14",
      id: "Skarner",
      key: "72",
      name: "Skarner",
      title: "the Crystal Vanguard",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Skarner.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg",
      blurb:
        "''We are one. We cannot be shattered.''<br><br>Skarner is an immense crystalline scorpion from a hidden valley in Shurima. Part of the ancient Brackern race, Skarner and his kin are known for their great wisdom and deep connection to the land, as ...",
      info: {
        attack: 7,
        defense: 6,
        magic: 5,
        difficulty: 5
      },
      image: {
        full: "Skarner.png",
        sprite: "champion3.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Fighter", "Tank"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Sona: {
      version: "V10.14",
      id: "Sona",
      key: "37",
      name: "Sona",
      title: "Maven of the Strings",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Sona.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg",
      blurb:
        "Sona has no memories of her true parents. As an infant, she was found abandoned on the doorstep of an Ionian adoption house, nestled atop an ancient instrument in an exquisite case of unknown origins. She was an unusually well-behaved child, always ...",
      info: {
        attack: 5,
        defense: 2,
        magic: 8,
        difficulty: 4
      },
      image: {
        full: "Sona.png",
        sprite: "champion3.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]}
    },
    Soraka: {
      version: "V10.14",
      id: "Soraka",
      key: "16",
      name: "Soraka",
      title: "the Starchild",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Soraka.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg",
      blurb:
        "A healer gifted with the magic of the stars, Soraka holds all living creatures close to her heart. She was once a celestial being, but she sacrificed her immortality and entered the world of mortals. So long as evil threatens life in Valoran, Soraka ...",
      info: {
        attack: 2,
        defense: 5,
        magic: 7,
        difficulty: 3
      },
      image: {
        full: "Soraka.png",
        sprite: "champion3.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Swain: {
      version: "V10.14",
      id: "Swain",
      key: "50",
      name: "Swain",
      title: "the Master Tactician",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Swain.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg",
      blurb:
        "The earliest account of Swain's existence comes from a Noxian infirmary doctor's notes. According to them, Swain limped into the ward without cry or complaint; his right leg was snapped in half, with bone protruding from the skin. A small, scowling ...",
      info: {
        attack: 2,
        defense: 6,
        magic: 9,
        difficulty: 8
      },
      image: {
        full: "Swain.png",
        sprite: "champion3.png",
        group: "champion",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Luchador"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Syndra: {
      version: "V10.14",
      id: "Syndra",
      key: "134",
      name: "Syndra",
      title: "the Dark Sovereign",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Syndra.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg",
      blurb:
        "Born with immense magical potential, Syndra loves nothing more than exercising the incredible power at her command. With each passing day, her mastery of magical force grows more potent and devastating. Refusing any notion of balance or restraint, ...",
      info: {
        attack: 2,
        defense: 3,
        magic: 9,
        difficulty: 8
      },
      image: {
        full: "Syndra.png",
        sprite: "champion3.png",
        group: "champion",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Soporte"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    TahmKench: {
      version: "V10.14",
      id: "TahmKench",
      key: "223",
      name: "Tahm Kench",
      title: "the River King",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/TahmKench.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg",
      blurb:
        "''The whole world's a river, and I'm its king.''<br>Tahm Kench travels Runeterra's waterways, feeding his insatiable appetite with the misery of the unsuspecting. The singularly charming gourmand savors every moment of his victims' suffering.  A deal ...",
      info: {
        attack: 3,
        defense: 9,
        magic: 6,
        difficulty: 5
      },
      image: {
        full: "TahmKench.png",
        sprite: "champion3.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Tanque"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Taliyah: {
      version: "V10.14",
      id: "Taliyah",
      key: "163",
      name: "Taliyah",
      title: "the Stoneweaver",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Taliyah.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg",
      blurb:
        "Taliyah is a nomadic mage from Shurima who weaves stone with energetic enthusiasm and raw determination. Torn between teenage wonder and adult responsibility, she has crossed nearly all of Valoran on a journey to learn the true nature of her growing ...",
      info: {
        attack: 1,
        defense: 7,
        magic: 8,
        difficulty: 5
      },
      image: {
        full: "Taliyah.png",
        sprite: "champion3.png",
        group: "champion",
        x: 48,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Soporte"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Talon: {
      version: "V10.14",
      id: "Talon",
      key: "91",
      name: "Talon",
      title: "the Blade's Shadow",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Talon.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg",
      blurb:
        "''The three deadliest blademasters in all of Valoran are bound to the house of Du Couteau: my father, myself, and Talon. Challenge us, if you dare.''<br>-- Katarina Du Couteau<br><br>Talon's earliest memories are the darkness of Noxus' underground ...",
      info: {
        attack: 9,
        defense: 3,
        magic: 1,
        difficulty: 7
      },
      image: {
        full: "Talon.png",
        sprite: "champion3.png",
        group: "champion",
        x: 96,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Asesino", "Luchador"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Taric: {
      version: "V10.14",
      id: "Taric",
      key: "44",
      name: "Taric",
      title: "the Shield of Valoran",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Taric.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg",
      blurb:
        "''The best weapons are beautiful.''<br><br>Taric is the Aspect of the Protector, wielding incredible power as Runeterra's guardian of life, love, and beauty. Shamed by a dereliction of duty and exiled from his homeland Demacia, Taric ascended Mount ...",
      info: {
        attack: 4,
        defense: 8,
        magic: 5,
        difficulty: 3
      },
      image: {
        full: "Taric.png",
        sprite: "champion3.png",
        group: "champion",
        x: 144,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Luchador"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Teemo: {
      version: "V10.14",
      id: "Teemo",
      key: "17",
      name: "Teemo",
      title: "the Swift Scout",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Teemo.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg",
      blurb:
        "Teemo is a legend among his yordle brothers and sisters in Bandle City. As far as yordles are concerned, there is something just slightly off about him. While Teemo enjoys the companionship of other yordles, he also insists on frequent solo missions ...",
      info: {
        attack: 5,
        defense: 3,
        magic: 7,
        difficulty: 6
      },
      image: {
        full: "Teemo.png",
        sprite: "champion3.png",
        group: "champion",
        x: 192,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Asesino"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Thresh: {
      version: "V10.14",
      id: "Thresh",
      key: "412",
      name: "Thresh",
      title: "the Chain Warden",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Thresh.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg",
      blurb:
        "''The mind is a wondrous thing to tear apart.''<br><br>Sadistic and cunning, Thresh is a restless spirit who prides himself on tormenting mortals and breaking them with slow, excruciating inventiveness. His victims suffer far beyond the point of death,...",
      info: {
        attack: 5,
        defense: 6,
        magic: 6,
        difficulty: 7
      },
      image: {
        full: "Thresh.png",
        sprite: "champion3.png",
        group: "champion",
        x: 240,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Luchador"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Tristana: {
      version: "V10.14",
      id: "Tristana",
      key: "18",
      name: "Tristana",
      title: "the Yordle Gunner",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Tristana.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg",
      blurb:
        "Greatness comes in all shapes and sizes, as proven by this diminutive, cannon-wielding yordle. In a world fraught with turmoil, Tristana refuses to back down from any challenge. She represents the pinnacle of martial proficiency, unwavering courage, ...",
      info: {
        attack: 9,
        defense: 3,
        magic: 5,
        difficulty: 4
      },
      image: {
        full: "Tristana.png",
        sprite: "champion3.png",
        group: "champion",
        x: 288,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Asesino"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Trundle: {
      version: "V10.14",
      id: "Trundle",
      key: "48",
      name: "Trundle",
      title: "the Troll King",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Trundle.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg",
      blurb:
        "Trundle is a hulking and devious troll with a mischievous streak. There is nothing he can't beat into submission and bend to his will, not even the ice itself. With his massive, frozen club, he chills his enemies to the core and runs them through with ...",
      info: {
        attack: 7,
        defense: 6,
        magic: 2,
        difficulty: 5
      },
      image: {
        full: "Trundle.png",
        sprite: "champion3.png",
        group: "champion",
        x: 336,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Tryndamere: {
      version: "V10.14",
      id: "Tryndamere",
      key: "23",
      name: "Tryndamere",
      title: "the Barbarian King",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Tryndamere.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg",
      blurb:
        "Fueled by his unbridled fury and rage, Tryndamere cuts his way through the tundra, mastering the art of battle by challenging the Freljord's greatest warriors. The wrathful barbarian seeks revenge on the one who decimated his clan and strikes down all ...",
      info: {
        attack: 10,
        defense: 5,
        magic: 2,
        difficulty: 5
      },
      image: {
        full: "Tryndamere.png",
        sprite: "champion3.png",
        group: "champion",
        x: 384,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Asesino"],
      partype: "Battlefury",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    TwistedFate: {
      version: "V10.14",
      id: "TwistedFate",
      key: "4",
      name: "Twisted Fate",
      title: "the Card Master",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Maokai.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg",
      blurb:
        "Twisted Fate is an infamous card sharp and swindler who has gambled and charmed his way across much of the known world, earning the enmity and admiration of the rich and foolish alike. He rarely takes things seriously, greeting each day with a mocking ...",
      info: {
        attack: 6,
        defense: 2,
        magic: 6,
        difficulty: 9
      },
      image: {
        full: "TwistedFate.png",
        sprite: "champion3.png",
        group: "champion",
        x: 432,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Twitch: {
      version: "V10.14",
      id: "Twitch",
      key: "29",
      name: "Twitch",
      title: "the Plague Rat",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Twitch.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg",
      blurb:
        "H.I.V.E. Incident Report<br>Code Violation: Industrial Homicide<br>Casefile Status: Unsolved<br>Investigating Agent: Rol, P.<br><br>Team responded to report of suspicious character, criminal activity; proceeded to Sump Works, Sector 90TZ. Sector 90TZ ...",
      info: {
        attack: 9,
        defense: 2,
        magic: 3,
        difficulty: 6
      },
      image: {
        full: "Twitch.png",
        sprite: "champion3.png",
        group: "champion",
        x: 0,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Asesino"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Udyr: {
      version: "V10.14",
      id: "Udyr",
      key: "77",
      name: "Udyr",
      title: "the Spirit Walker",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Udyr.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg",
      blurb:
        "Udyr is more than a man; he is a vessel for the untamed power of four primal animal spirits. When tapping into the spirits' bestial natures, Udyr can harness their unique strengths: the tiger grants him speed and ferocity, the turtle resilience, the ...",
      info: {
        attack: 8,
        defense: 7,
        magic: 4,
        difficulty: 7
      },
      image: {
        full: "Udyr.png",
        sprite: "champion3.png",
        group: "champion",
        x: 48,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Urgot: {
      version: "V10.14",
      id: "Urgot",
      key: "6",
      name: "Urgot",
      title: "the Headsman's Pride",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Urgot.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg",
      blurb:
        "There are warriors who become great for their strength, cunning, or skill with arms. Others simply refuse to die. Urgot, once a great soldier of Noxus, may constitute a case in support of the latter. Prone to diving headlong into enemy battle lines, ...",
      info: {
        attack: 8,
        defense: 5,
        magic: 3,
        difficulty: 8
      },
      image: {
        full: "Urgot.png",
        sprite: "champion3.png",
        group: "champion",
        x: 96,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Luchador"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Varus: {
      version: "V10.14",
      id: "Varus",
      key: "110",
      name: "Varus",
      title: "the Arrow of Retribution",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Varus.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg",
      blurb:
        "''The life of an arrow is fleeting, built of nothing but direction and intent.''<br><br>For his incomparable skill with the bow and his unquestioned sense of honor, Varus was chosen to be the warden of a sacred Ionian temple. The temple was built to ...",
      info: {
        attack: 7,
        defense: 3,
        magic: 4,
        difficulty: 2
      },
      image: {
        full: "Varus.png",
        sprite: "champion3.png",
        group: "champion",
        x: 144,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Vayne: {
      version: "V10.14",
      id: "Vayne",
      key: "67",
      name: "Vayne",
      title: "the Night Hunter",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Vayne.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg",
      blurb:
        "The world is not always as civilized as people might think. There are still those who would follow the blackest paths of magic and become corrupted by the darker powers that flow through Runeterra. Shauna Vayne knows this fact well.<br><br>As a young ...",
      info: {
        attack: 10,
        defense: 1,
        magic: 1,
        difficulty: 8
      },
      image: {
        full: "Vayne.png",
        sprite: "champion3.png",
        group: "champion",
        x: 192,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Tirador", "Asesino"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Veigar: {
      version: "V10.14",
      id: "Veigar",
      key: "45",
      name: "Veigar",
      title: "the Tiny Master of Evil",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Veigar.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg",
      blurb:
        "To most, thoughts of yordles do not conjure images to be feared. The easygoing half-pint race, though fierce, is often regarded with some degree of joviality. Their high-pitched voices and naturally cute forms inspire something of a protective ...",
      info: {
        attack: 2,
        defense: 2,
        magic: 10,
        difficulty: 7
      },
      image: {
        full: "Veigar.png",
        sprite: "champion3.png",
        group: "champion",
        x: 240,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Velkoz: {
      version: "V10.14",
      id: "Velkoz",
      key: "161",
      name: "Vel'Koz",
      title: "the Eye of the Void",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Velkoz.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg",
      blurb:
        "I pass into the sudden glare. Blink. Blink, blink, blink. My eyes adjust and evaluate the landscape before me.<br><br>There's a scurrying. I look down to find a small, white creature standing on its hind legs, sniffing at my body. It intrigues me....",
      info: {
        attack: 2,
        defense: 2,
        magic: 10,
        difficulty: 8
      },
      image: {
        full: "Velkoz.png",
        sprite: "champion3.png",
        group: "champion",
        x: 288,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Vi: {
      version: "V10.14",
      id: "Vi",
      key: "254",
      name: "Vi",
      title: "the Piltover Enforcer",
      img: "https://www.masterypoints.com/assets/img/lol/champion_icons/Vi.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg",
      blurb:
        "To Vi, every problem is just another brick wall to punch through with her gigantic hextech gauntlets. Though she grew up on the wrong side of the law, Vi now uses her criminal know-how to serve Piltover's police force. Vi's brash attitude, abrasive ...",
      info: {
        attack: 8,
        defense: 5,
        magic: 3,
        difficulty: 4
      },
      image: {
        full: "Vi.png",
        sprite: "champion3.png",
        group: "champion",
        x: 336,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Asesino"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Viktor: {
      version: "V10.14",
      id: "Viktor",
      key: "112",
      name: "Viktor",
      title: "the Machine Herald",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Viktor.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg",
      blurb:
        "Early in life, Viktor discovered his passion for science and invention, particularly in the field of mechanical automation. He attended Zaun's prestigious College of Techmaturgy and led the team that constructed Blitzcrank - a scientific breakthrough ...",
      info: {
        attack: 2,
        defense: 4,
        magic: 10,
        difficulty: 9
      },
      image: {
        full: "Viktor.png",
        sprite: "champion3.png",
        group: "champion",
        x: 384,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Vladimir: {
      version: "V10.14",
      id: "Vladimir",
      key: "8",
      name: "Vladimir",
      title: "the Crimson Reaper",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Vladimir.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg",
      blurb:
        "There is a temple hidden in the mountains between Noxus and the Tempest Flats, where the secrets of an ancient and terrifying sorcery are kept. The area surrounding the temple is littered with the exsanguinated corpses of those who have mistakenly ...",
      info: {
        attack: 2,
        defense: 6,
        magic: 8,
        difficulty: 7
      },
      image: {
        full: "Vladimir.png",
        sprite: "champion3.png",
        group: "champion",
        x: 432,
        y: 96,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Tanque"],
      partype: "Gnarfury",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Volibear: {
      version: "V10.14",
      id: "Volibear",
      key: "106",
      name: "Volibear",
      title: "the Thunder's Roar",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Volibear.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg",
      blurb:
        "The unforgiving northern reaches of the Freljord are home to the Ursine, a fierce and warlike race that has endured the barren tundra for thousands of years. Their leader is a furious adversary who commands the force of lightning to strike fear within ...",
      info: {
        attack: 7,
        defense: 7,
        magic: 4,
        difficulty: 3
      },
      image: {
        full: "Volibear.png",
        sprite: "champion4.png",
        group: "champion",
        x: 0,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Warwick: {
      version: "V10.14",
      id: "Warwick",
      key: "19",
      name: "Warwick",
      title: "the Blood Hunter",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Warwick.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg",
      blurb:
        "Warwick was once a man revered for his ability to track down human specimens for the darkest types of scientific research. When his ambitions exceeded his physical limits, he drank a dangerous elixir to transform himself into an unstoppable manhunter. ...",
      info: {
        attack: 7,
        defense: 4,
        magic: 4,
        difficulty: 3
      },
      image: {
        full: "Warwick.png",
        sprite: "champion4.png",
        group: "champion",
        x: 48,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Xerath: {
      version: "V10.14",
      id: "Xerath",
      key: "101",
      name: "Xerath",
      title: "the Magus Ascendant",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Xerath.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg",
      blurb:
        "''A lifetime as a slave has prepared me for eternity as your master.''<br><br>Xerath is an Ascended Magus of ancient Shurima, a being of arcane energy writhing in the broken shards of a magical sarcophagus. For millennia, he was trapped beneath the ...",
      info: {
        attack: 1,
        defense: 3,
        magic: 10,
        difficulty: 8
      },
      image: {
        full: "Xerath.png",
        sprite: "champion4.png",
        group: "champion",
        x: 96,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Asesino"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    XinZhao: {
      version: "V10.14",
      id: "XinZhao",
      key: "5",
      name: "Xin Zhao",
      title: "the Seneschal of Demacia",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/XinZhao.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg",
      blurb:
        "''Death is inevitable, one can only avoid defeat.''<br><br>Whenever Jarvan III, the king of Demacia, delivers one of his rallying speeches from the glinting marble balcony atop the Royal Palace, Xin Zhao is at his side. Coined the Seneschal of Demacia,...",
      info: {
        attack: 8,
        defense: 6,
        magic: 3,
        difficulty: 2
      },
      image: {
        full: "XinZhao.png",
        sprite: "champion4.png",
        group: "champion",
        x: 144,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Asesino"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Yasuo: {
      version: "V10.14",
      id: "Yasuo",
      key: "157",
      name: "Yasuo",
      title: "the Unforgiven",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Yasuo.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg",
      blurb:
        "Yasuo is a man of resolve, an agile swordsman who wields the wind itself to cut down his foes. This once-proud warrior has been disgraced by a false accusation and forced into a desperate fight for survival. With the world turned against him, he will ...",
      info: {
        attack: 8,
        defense: 4,
        magic: 4,
        difficulty: 10
      },
      image: {
        full: "Yasuo.png",
        sprite: "champion4.png",
        group: "champion",
        x: 192,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Asesino"],
      partype: "Wind",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Yorick: {
      version: "V10.14",
      id: "Yorick",
      key: "83",
      name: "Yorick",
      title: "Shepherd of Souls",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Yorick.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg",
      blurb:
        "''These isles… How they scream.''<br>The last survivor of a long-forgotten religious order, Yorick is both blessed and cursed with power over the dead. Trapped on the Shadow Isles, his only companions are the rotting corpses and shrieking spirits that ...",
      info: {
        attack: 6,
        defense: 6,
        magic: 4,
        difficulty: 6
      },
      image: {
        full: "Yorick.png",
        sprite: "champion4.png",
        group: "champion",
        x: 240,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Luchador", "Tanque"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Zac: {
      version: "V10.14",
      id: "Zac",
      key: "154",
      name: "Zac",
      title: "the Secret Weapon",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Zac.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg",
      blurb:
        "Zac is the product of a Zaun experiment to manufacture a hexchem-engineered supersoldier - the Zaun Amorphous Combatant. Combining brute strength with limitless flexibility, he is a versatile juggernaut: a creative fighter who bounces over obstacles ...",
      info: {
        attack: 3,
        defense: 7,
        magic: 7,
        difficulty: 8
      },
      image: {
        full: "Zac.png",
        sprite: "champion4.png",
        group: "champion",
        x: 288,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Tanque", "Luchador"],
      partype: "None",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Zed: {
      version: "V10.14",
      id: "Zed",
      key: "238",
      name: "Zed",
      title: "the Master of Shadows",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Zed.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg",
      blurb:
        "Zed is the first ninja in 200 years to unlock the ancient, forbidden ways. He defied his clan and master, casting off the balance and discipline that had shackled him all his life. Zed now offers power to those who embrace knowledge of the shadows, ...",
      info: {
        attack: 9,
        defense: 2,
        magic: 1,
        difficulty: 7
      },
      image: {
        full: "Zed.png",
        sprite: "champion4.png",
        group: "champion",
        x: 336,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Asesino", "Luchador"],
      partype: "Energy",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Ziggs: {
      version: "V10.14",
      id: "Ziggs",
      key: "115",
      name: "Ziggs",
      title: "the Hexplosives Expert",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Ziggs.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg",
      blurb:
        "Ziggs was born with a talent for tinkering, but his chaotic, hyperactive nature was unusual among yordle scientists. Aspiring to be a revered inventor like Heimerdinger, he rattled through ambitious projects with manic zeal, emboldened by both his ...",
      info: {
        attack: 2,
        defense: 4,
        magic: 9,
        difficulty: 4
      },
      image: {
        full: "Ziggs.png",
        sprite: "champion4.png",
        group: "champion",
        x: 384,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Zilean: {
      version: "V10.14",
      id: "Zilean",
      key: "26",
      name: "Zilean",
      title: "the Chronokeeper",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Zilean.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg",
      blurb:
        "In the wastelands of Urtistan, there was once a great city. It perished long ago in a terrible Rune War, like most of the lands below the Great Barrier. Nevertheless, one man survived: a sorcerer named Zilean. Being obsessed with time, it was only ...",
      info: {
        attack: 2,
        defense: 5,
        magic: 8,
        difficulty: 6
      },
      image: {
        full: "Zilean.png",
        sprite: "champion4.png",
        group: "champion",
        x: 432,
        y: 0,
        w: 48,
        h: 48
      },
      tags: ["Soporte", "Mago"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    },
    Zyra: {
      version: "V10.14",
      id: "Zyra",
      key: "143",
      name: "Zyra",
      title: "Rise of the Thorns",
      img:
        "https://www.masterypoints.com/assets/img/lol/champion_icons/Zyra.png",
      splash:
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg",
      blurb:
        "Longing to take control of her fate, the ancient, dying plant Zyra transferred her consciousness into a human body for a second chance at life. Centuries ago, she and her kind dominated the Kumungu Jungle, using thorns and vines to consume any animal ...",
      info: {
        attack: 4,
        defense: 3,
        magic: 8,
        difficulty: 7
      },
      image: {
        full: "Zyra.png",
        sprite: "champion4.png",
        group: "champion",
        x: 0,
        y: 48,
        w: 48,
        h: 48
      },
      tags: ["Mago", "Soporte"],
      partype: "MP",
      rangetype:"",
      date: "",
      patch: "",
      graphic :{
        damage:,
        toughness:,
        control:,
        mobility:,
        utility:,
      },
      stats: {
        hp: ,
        hpperlevel: ,
        mp: ,
        mpperlevel: ,
        armor: ,
        armorperlevel: ,
        mrbase: ,
        mrlevel : ,
        hpregen: ,
        hpregenperlevel: ,
        mpregen: ,
        mpregenperlevel: ,
        attackdamage: ,
        attackdamageperlevel:,
        attackspeedoffset: -,
        attackspeedperlevel: ,
        attackrange: ,
        movespeed: 
      },
      skill:[
        {pasive:"",img:"",info:""},
        {q:"",img:"",info:""},
        {w:"",img:"",info:""},
        {e:"",img:"",info:""},
        {r:"",img:"",info:""}
     ]
    }
  }
};
