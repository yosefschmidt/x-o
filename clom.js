let sumcards=3
const cardsw=[]
let creatdiv= document.createElement("div")

for(v = 0; v < sumcards; v++){
    // debugger
    cardsw[v]=[]
    for(i = 0; i < sumcards; i++){
       a=creatdiv

    cardsw[v][i]={div:a,id:i,class:"notclass"}
    }
    }
console.log(cardsw);


const board = document.getElementById("board");
function creatgame(v, i, arr) {
    
    const element = document.createElement("div");
    element.innerHTML ="y";
    
    element.id =v.id;
    element.className = "board";
    //   board.appendChild(element);
    return document.getElementById("board").appendChild(element)
    
}
for(i in cardsw){
    cardsw[i].forEach(creatgame)
}
repeatcard= "auto ".repeat(sumcards)
document.getElementById("board").style.gridTemplateColumns=repeatcard;