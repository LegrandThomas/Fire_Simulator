const DivResult=document.querySelector("#resultat");
let divReceveur=document.querySelector("#receveur");
let divtimer=document.querySelector("#timer");
const btn=document.getElementById("generate");
let f=document.getElementById("SelectNbreArbre").value;
btn.addEventListener("click",log);
let nbreARbreVoulu=0;
let couleur=" 🍥 ";
let compteurARBREsprox=0;
let tableauIDbutton=[];
const delay = ms => new Promise(res => setTimeout(res, ms));
let choix="";
let tabForet= [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
let rnd=0;

let NumMap;
ChoixMap();
function ChoixMap() {
    NumMap=prompt("enter le format de map désiré:\n enter 4 pour 16 parcelles (✔️DISPONIBLE)\n enter 6 pour 36 parcelles (🚧IN PROGRESS)\n enter 8 pour 64 parcelles (⛔️EN PANNE)\n  ");
    console.log(NumMap);
    if(NumMap!=='4'){
        if (NumMap!=='6') {
            if (NumMap!=='8') {
                alert("vous n'avez pas saisi '4','6' ou '8'");
                ChoixMap() 
            }
        }
       
    }
    if((NumMap=='6')||(NumMap=='8')){
        alert("vous avez était redirigé sur le seul mode actuellement disponible : 4par4\nMerci de votre compréhension 😕")
        tabForet= [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
    }
}

// switch (NumMap) {
//     case "4":
//         tabForet= [
//             [0,0,0,0],
//             [0,0,0,0],
//             [0,0,0,0],
//             [0,0,0,0]
//         ];
//         break;

//         case "6":
//             tabForet= [
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0]
//             ];
//             break;

//             case "8":
//             tabForet= [
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0]
//             ];
//             break;


//     default:
//         break;
// }

let NewForet=tabForet;

function log(){
    nbreARbreVoulu=0;
   tabForet= [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0]
];
//    switch (NumMap) {
//     case "4":
//         tabForet= [
//             [0,0,0,0],
//             [0,0,0,0],
//             [0,0,0,0],
//             [0,0,0,0]
//         ];
//         break;

//         case "6":
//             tabForet= [
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0],
//                 [0,0,0,0,0,0]
//             ];
//             break;

//             case "8":
//             tabForet= [
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0],
//                 [0,0,0,0,0,0,0,0]
//             ];
//             break;


//     default:
//         break;
// }
    f=document.getElementById("SelectNbreArbre").value;
    divReceveur.innerHTML="nbre d(arbres sélectionné(s): "+f ;
    switch (f) {
        case "un":
            nbreARbreVoulu=1;
            break;
            case "deux":
            nbreARbreVoulu=2;
            break;
            case "trois":
            nbreARbreVoulu=3;
            break;
            case "quatre":
            nbreARbreVoulu=4;
            break;
            case "cinq":
            nbreARbreVoulu=5;
            break;
            case "six":
            nbreARbreVoulu=6;
            break;
            case "sept":
            nbreARbreVoulu=7;
            break;
            case "huit":
            nbreARbreVoulu=8;
            break;
            case "neuf":
            nbreARbreVoulu=9;
            break;
            case "dix":
            nbreARbreVoulu=10;
            break;
            case "onze":
            nbreARbreVoulu=11;
            break;
            case "douze":
            nbreARbreVoulu=12;
            break;
            case "treize":
            nbreARbreVoulu=13;
            break;
            case "quatorze":
            nbreARbreVoulu=14;
            break;
            case "quinze":
            nbreARbreVoulu=15;
            break;
            case "seize":
            nbreARbreVoulu=16;
            break;
    
        default:
            nbreARbreVoulu=0;
            break;
    }
console.log("nbre arbres selectionné : "+nbreARbreVoulu);
k=nbreARbreVoulu;
afficheForetActualised();
}


 function afficheforest(){
    let txt="";
    for (let i = 0; i < tabForet.length; i++) {
        txt+="<div>";
           for (let j = 0; j < tabForet[i].length; j++) {
            txt+="<button class=' btn btn-primary m-2 style:'width:100px;height:100px   >🍥</buton>";
 }
   txt+="</div>";
}
    DivResult.innerHTML=txt;
}

function afficheforestMAJ(){
    let txt="";
    for (let i = 0; i < tabForet.length; i++) {
        txt+="<div>";
           for (let j = 0; j < tabForet[i].length; j++) {
            txt+="<button class=' btn btn-primary m-2 style:'width:100px;height:100px   >🍥</buton>";
 }
   txt+="</div>";
}
    DivResult.innerHTML=txt;
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function afficheForetActualised(){
nbreARbreVoulu=k;
let txt="";
console.log(nbreARbreVoulu);
let compteur=0;

for (let i = 0; i < tabForet.length; i++) {
txt+="<div>";
   for (let j = 0; j < tabForet[i].length; j++) {
compteur+=1;
    if (tabForet[i][j]===0) {
        
       if (nbreARbreVoulu>0) {
            console.log("nombre d'🌲 à planter : "+nbreARbreVoulu);
            rnd=getRandomInt(2);
    if(( compteur+ nbreARbreVoulu)>=16){
    console.log("un 🌲 planté ");
    couleur=" 🌲 ";
    nbreARbreVoulu=nbreARbreVoulu-1;
    NewForet[i][j]=1;
    }else{
console.log(rnd);
        if (rnd==0) {
            console.log("un 🌲 planté ");
            couleur=" 🌲 ";
            nbreARbreVoulu=nbreARbreVoulu-1;
            NewForet[i][j]=1;
        }else{
            console.log("un 🍥 posé ");
            couleur=" 🍥 ";
            NewForet[i][j]=0;
        } }   
            }else if(tabForet[i][j]===0){
                console.log("un 🍥 posé ");
                couleur=" 🍥 ";
                NewForet[i][j]=0;
            }else if(tabForet[i][j]===3){
                console.log("un 🔥 posé ");
                couleur=" 🔥 ";
                NewForet[i][j]=3; 
            }
        }
        txt+="<button class=' btn btn-primary m-2 test style:'width:100px;height:100px   >"+couleur+"</buton>";
    }
    txt+="</div>";
   }
   DivResult.innerHTML=txt;
   tabForet=NewForet;
   load()
}


function load() {
    buttons = document.getElementsByClassName('test');

    for (i = 0; i < buttons.length; i++) {
        element = buttons[i];
        buttons[i].id = i;
      
        element.addEventListener("click", test);
    }
};

function test(){
    buttons = document.getElementsByClassName('test');
  let id=  this.id;

switch (id) {
    case '0':
        choix="case A4";
        NewForet[0][0]=3;
        break;
        case '1':
            choix="case B4";
            NewForet[0][1]=3;
            break;
            case '2':
            choix="case C4";
            NewForet[0][2]=3;
            break;
            case '3':
            choix="case D4";
            NewForet[0][3]=3;
            break;
            case '4':
            choix="case A3";
            NewForet[1][0]=3;
            break;
            case '5':
            choix="case B3";
            NewForet[1][1]=3;
            break;
            case '6':
            choix="case C3";
            NewForet[1][2]=3;
            break;
            case '7':
            choix="case D3";
            NewForet[1][3]=3;
            break;
            case '8':
            choix="case A2";
            NewForet[2][0]=3;
            break;
            case '9':
            choix="case B2";
            NewForet[2][1]=3;
            break;
            case '10':
            choix="case C2";
            NewForet[2][2]=3;
            break;
            case '11':
            choix="case D2";
            NewForet[2][3]=3;
            break;
            case '12':
            choix="case A1";
            NewForet[3][0]=3;
            break;
            case '13':
            choix="case B1";
            NewForet[3][1]=3;
            break;
            case '14':
            choix="case C1";
            NewForet[3][2]=3;
            break;
            case '15':
                choix="case D1";
                NewForet[3][3]=3;
                break;
            default:
                console.log("error");
                break;
                
}

if(buttons[id].textContent==" 🍥 "){

    alert("vous n'avez pas sélectionné un arbre !!! recommencé!!");
    load();
    
}else{


buttons[id].innerHTML=" 🔥 ";


    alert("Choix pris en compte,Vous avez cliquer sur la "+choix+" pour mettre le feu\n 🌟🌟ATTENTION🌟🌟 vous ne pouvez plus cliquer ailleurs !");
    buttons = document.getElementsByClassName('test');
    for (i = 0; i < buttons.length; i++) {
        tableauIDbutton[i]=buttons[i];
        element = buttons[i];
            element.removeEventListener("click",test);
            setInterval(myTimer, 1000);
    }
    incendiePropagation(NewForet);
}}


function myTimer() {
  let d = new Date();
  d=d.toLocaleTimeString()
  divtimer.innerHTML= "🕔 "+d+"";
}

function incendiePropagation(params) {
    let tab= params;

for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab[i].length; j++) {

        if(tab[i][j]===3){
        console.log("feu détecté en ligne"+ i+" colonne "+j);
        if((i>0)&&(j>0)) {
            if(tab[i-1][j]==1){
                compteurARBREsprox+=1;
                console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
                console.log("sur la case du dessus "+tab[i-1][j]);

            } if (tab[i+1][j]==1) {
                compteurARBREsprox+=1;
                console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
                console.log("sur la case du dessous "+tab[i+1][j]);
            
            } if (tab[i][j-1]==1) {
                compteurARBREsprox+=1;
                console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
                console.log("sur la case de gauche "+tab[i][j-1]);
                
            } if (tab[i][j+1]==1) {
                compteurARBREsprox+=1;
                console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
                console.log("sur la case de droite "+tab[i][j+1]);
                
            }if(compteurARBREsprox==0){
                console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
                compteurARBREsprox=0;
                break;
            }

        }
   else if((i==0)&&(j==0)){
        if (tab[i+1][j]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessous "+tab[i+1][j]);
        
        } 
        if (tab[i][j+1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de droite "+tab[i][j+1]);
            
        }if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            break;
        }

    }else if((i==0)&&(j==3)){
        if (tab[i+1][j]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessous "+tab[i+1][j]);
        
        } if (tab[i][j-1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de gauche "+tab[i][j-1]);
            
        } if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            compteurARBREsprox=0;
            break;
        }

    }else if((i==3)&&(j==0)){
        if(tab[i-1][j]==1){
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessus "+tab[i-1][j]);

        } if (tab[i][j+1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de droite "+tab[i][j+1]);
            
        }if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            break;
        }
    }else if((i==3)&&(j==3)){
        if(tab[i-1][j]==1){
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessus "+tab[i-1][j]);

        }if (tab[i][j-1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de gauche "+tab[i][j-1]);
            
        } if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            compteurARBREsprox=0;
            break;
        }

    }else if((i==0)&&((j==1)||(j==2))){
        if (tab[i][j-1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de gauche "+tab[i][j-1]);
            
        }if (tab[i][j+1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de droite "+tab[i][j+1]);
            
        }if (tab[i+1][j]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessous "+tab[i+1][j]);
        
        }if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            compteurARBREsprox=0;
            break;
        }

    }else if((j==0)&&((i==1)||(i==2))){
        if(tab[i-1][j]==1){
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessus "+tab[i-1][j]);

        }if (tab[i][j+1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de droite "+tab[i][j+1]);
            
        }if (tab[i+1][j]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessous "+tab[i+1][j]);
        
        }if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            compteurARBREsprox=0;
            break;
        }

    }else if((i==3)&&((j==1)||(j==2))){
        if (tab[i][j-1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de gauche "+tab[i][j-1]);
            
        }if (tab[i][j+1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de droite "+tab[i][j+1]);
            
        }if (tab[i+1][j]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessous "+tab[i+1][j]);
        
        }if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            compteurARBREsprox=0;
            break;
        }
    }else if((j==3)&&((i==1)||(i==2))){
        if (tab[i][j-1]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case de gauche "+tab[i][j-1]);
                        
        }if(tab[i-1][j]==1){
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessus "+tab[i-1][j]);

        }if (tab[i+1][j]==1) {
            compteurARBREsprox+=1;
            console.log("+1 arbre detecté à portée de l'incendie, donc arbre(s) à proximité(s): "+compteurARBREsprox);
            console.log("sur la case du dessous "+tab[i+1][j]);
        
        }if(compteurARBREsprox==0){
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            compteurARBREsprox=0;
            break;
        }
    }else if(compteurARBREsprox==0){
        console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
        compteurARBREsprox=0;
        break;
}else{
    end();
}
    }
    
}
    
}
fire(tab);
}

async function fire(tablo){
    let tab=tablo;
    let c=0;
    buttons = document.getElementsByClassName('test');
    // console.log(tableauIDbutton);


    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {
    
            if(tab[i][j]===3){

            if((i>0)&&(j>0)) {
                if(tab[i-1][j]==1){
                    console.log("Tentative de propagation case du dessus, avec 80% de chance");
                    c=getRandomInt(4);
                    if(c<1){
                    console.log("Tentative échouée");
                                        await delay(5000);
                    fire(tab)
                    }else{
                        console.log("Tentative réussie ! l'arbre du dessus s'enflamme");
                        tab[i-1][j]=3;
                        tabForet=tab;
                        await delay(5000);
                        maj(tab);
                    }
                     }
                      if (tab[i+1][j]==1) {
                    console.log("Tentative de propagation case du dessous, avec 80% de chance");
                    c=getRandomInt(4);
                    if(c<1){
                    console.log("Tentative échouée");
                    await delay(5000);
                    fire(tab)
                    }else{
                        console.log("Tentative réussie ! l'arbre du dessous s'enflamme");
                        tab[i+1][j]=3;
                        tabForet=tab;
                        await delay(5000);
                        maj(tab);
                    }
                
                } if (tab[i][j-1]==1) {
                    console.log("Tentative de propagation case de gauche, avec 80% de chance");
                    c=getRandomInt(4);
                    if(c<1){
                    console.log("Tentative échouée");
                    await delay(5000);
                    fire(tab)
                    }else{
                        console.log("Tentative réussie ! l'arbre de gauche s'enflamme");
                        tab[i][j-1]=3;
                        tabForet=tab;
                        await delay(5000);
                        maj(tab);
                    }
                } if (tab[i][j+1]==1) {
                    console.log("Tentative de propagation case de droite, avec 80% de chance");
                    c=getRandomInt(4);
                    if(c<1){
                    console.log("Tentative échouée");
                    await delay(5000);
                    fire(tab)
                    }else{
                        console.log("Tentative réussie ! l'arbre du droite s'enflamme");
                        tab[i][j+1]=3;
                        tabForet=tab;
                        await delay(5000);
                        maj(tab);
                    }
                }
    
            }
       else if((i==0)&&(j==0)){
            if (tab[i+1][j]==1) {
                console.log("Tentative de propagation case du dessous, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab)
                }else{
                    console.log("Tentative réussie ! l'arbre du dessous s'enflamme");
                    tab[i+1][j]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            
            } 
            if (tab[i][j+1]==1) {
                console.log("Tentative de propagation case de droite, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab)
                }else{
                    console.log("Tentative réussie ! l'arbre du droite s'enflamme");
                    tab[i][j+1]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            
            }
    
        }else if((i==0)&&(j==3)){
            if (tab[i+1][j]==1) {
                console.log("Tentative de propagation case du dessous, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab)
                }else{
                    console.log("Tentative réussie ! l'arbre du dessous s'enflamme");
                    tab[i+1][j]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            
            } if (tab[i][j-1]==1) {
                console.log("Tentative de propagation case de gauche, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab)
                }else{
                    console.log("Tentative réussie ! l'arbre de gauche s'enflamme");
                    tab[i][j-1]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
            
            }
    
        }else if((i==3)&&(j==0)){
            if(tab[i-1][j]==1){
                console.log("Tentative de propagation case du dessus, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab)
                }else{
                    console.log("Tentative réussie ! l'arbre du dessus s'enflamme");
                    tab[i-1][j]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
    
            } if (tab[i][j+1]==1) {
                console.log("Tentative de propagation case de droite, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre de droite s'enflamme");
                    tab[i][j+1].innerHTML=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            }
        }else if((i==3)&&(j==3)){
            if(tab[i-1][j]==1){
                console.log("Tentative de propagation case du dessus, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre du dessus s'enflamme");
                    tab[i-1][j]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
    
            }if (tab[i][j-1]==1) {
                console.log("Tentative de propagation case de gauche, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre de gauche s'enflamme");
                    tab[i][j-1]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
            } 
    
        }else if((i==0)&&((j==1)||(j==2))){
            if (tab[i][j-1]==1) {
                console.log("Tentative de propagation case de gauche, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab)
                }else{
                    console.log("Tentative réussie ! l'arbre de gauche s'enflamme");
                    tab[i][j-1]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
                
            }if (tab[i][j+1]==1) {
                console.log("Tentative de propagation case de droite, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab)
                }else{
                    console.log("Tentative réussie ! l'arbre du droite s'enflamme");
                    tab[i][j+1]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            }if (tab[i+1][j]==1) {
                console.log("Tentative de propagation case du dessous, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre du dessous s'enflamme");
                    tab[i+1][j]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
            
            }
    
        }else if((j==0)&&((i==1)||(i==2))){
            if(tab[i-1][j]==1){
                console.log("Tentative de propagation case du dessus, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre du dessus s'enflamme");
                    tab[i-1][j]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
    
            }if (tab[i][j+1]==1) {
                console.log("Tentative de propagation case de droite, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre de droite s'enflamme");
                    tab[i][j+1]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            }if (tab[i+1][j]==1) {
                console.log("Tentative de propagation case du dessous, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre du dessous s'enflamme");
                    tab[i+1][j]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
            }
    
        }else if((i==3)&&((j==1)||(j==2))){
            if (tab[i][j-1]==1) {
                console.log("Tentative de propagation case de gauche, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre de gauche s'enflamme");
                    tab[i][j-1]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
                
            }if (tab[i][j+1]==1) {
                console.log("Tentative de propagation case de droite, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre de droite s'enflamme");
                    tab[i][j+1]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
                
            }if (tab[i+1][j]==1) {
                console.log("Tentative de propagation case du dessous, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre du dessous s'enflamme");
                    tab[i+1][j]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            
            }
        }else if((j==3)&&((i==1)||(i==2))){
            if (tab[i][j-1]==1) {
                console.log("Tentative de propagation case de gauche, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre de gauche s'enflamme");
                    tab[i][j-1]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
                            
            }if(tab[i-1][j]==1){
                console.log("Tentative de propagation case du dessus, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre du dessus s'enflamme");
                    tab[i-1][j]=3;
                    tabForet=tab;
                        await delay(5000);
                        maj(tab);
                }
            }if (tab[i+1][j]==1) {
                console.log("Tentative de propagation case du dessous, avec 80% de chance");
                c=getRandomInt(4);
                if(c<1){
                console.log("Tentative échouée");
                await delay(5000);
                fire(tab);
                }else{
                    console.log("Tentative réussie ! l'arbre du dessous s'enflamme");
                    tab[i+1][j]=3;
                    tabForet=tab;
                    await delay(5000);
                    maj(tab);
                }
            }
        }else{
            console.log("pas d'arbes à proximité de l'incendie, le feu s'éteint donc! Partie terminée");
            end();
        }
        }
        
    }
        
    }}

function end() {
    alert("incendie terminé!");
    
}

function maj(param){
    buttons = document.getElementsByClassName('test');
    tab=param;
    for (let i = 0; i < tab.length; i++) {
        for (let j = 0; j < tab[i].length; j++) {

    if(tab[i][j]===3){
        switch (i) {
            case 0:
            switch (j) {
                case 0:
                    buttons[0].innerHTML=" 🔥 ";
                    break;
                    case 1:
                    buttons[1].innerHTML=" 🔥 ";
                    break;
                    case 2:
                        buttons[2].innerHTML=" 🔥 ";
                    break;
                    case 3:
                        buttons[3].innerHTML=" 🔥 ";
                    break;
            
                default:
                    break;
            }    

                break;
                case 1:
                    switch (j) {
                        case 0:
                            buttons[4].innerHTML=" 🔥 ";
                            break;
                            case 1:
                            buttons[5].innerHTML=" 🔥 ";
                            break;
                            case 2:
                                buttons[6].innerHTML=" 🔥 ";
                            break;
                            case 3:
                                buttons[7].innerHTML=" 🔥 ";
                            break;
                    
                        default:
                            break;
                    }    
                    break;
                    case 2:
                        switch (j) {
                            case 0:
                                buttons[8].innerHTML=" 🔥 ";
                                break;
                                case 1:
                                buttons[9].innerHTML=" 🔥 ";
                                break;
                                case 2:
                                    buttons[10].innerHTML=" 🔥 ";
                                break;
                                case 3:
                                    buttons[11].innerHTML=" 🔥 ";
                                break;
                        
                            default:
                                break;
                        }    
                break;
                case 3:
                    switch (j) {
                        case 0:
                            buttons[12].innerHTML=" 🔥 ";
                            break;
                            case 1:
                            buttons[13].innerHTML=" 🔥 ";
                            break;
                            case 2:
                                buttons[14].innerHTML=" 🔥 ";
                            break;
                            case 3:
                                buttons[15].innerHTML=" 🔥 ";
                            break;
                    
                        default:
                            break;
                    }    
                break;
            default:
                break;
        }

  
}

}}
setInterval(incendiePropagation(tab), 1000);
;
}