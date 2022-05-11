let sumcards=3
let countsumcards=0
const cardsw=[]
let countsteps=0
let creatdiv= document.createElement("div")
eix="www.google.com/url?sa=i&url=https%3A%2F%2Fwww.emojiall.com%2Fhe%2Femoji%2F%25E2%259D%258C&psig=AOvVaw2YC5c3yb6DBtzv5h0Do80C&ust=1652357588598000&source=images&cd=vfe&ved=2ahUKEwiUuZPqtdf3AhWRQEEAHbnmBwEQjRx6BAgAEAs"
eigol= "www.google.com/url?sa=i&url=https%3A%2F%2Fhe-il.facebook.com%2Fsholefet%2Fposts%2F%25D7%2599%25D7%25A6%25D7%25A8%25D7%25AA%25D7%2599-%25D7%25A2%25D7%2599%25D7%2592%25D7%2595%25D7%259C-%25D7%259B%25D7%2596%25D7%2594-%25D7%2591-powerpoint-%25D7%2590%25D7%25AA%25D7%259E%25D7%2595%25D7%259C-%25D7%259B%25D7%2593%25D7%2599-%25D7%259C%25D7%25A1%25D7%259E%25D7%259F-%25D7%25AA%25D7%259E%25D7%2595%25D7%25A0%25D7%2594-%25D7%25A2%25D7%259D-%25D7%259E%25D7%25A1%25D7%25A4%25D7%25A8-%25D7%2590%25D7%2591%25D7%259C-%25D7%259E%25D7%25A8%25D7%259B%25D7%2596-%25D7%2594%25D7%25A1%25D7%2599%25D7%2595%25D7%25A2-%25D7%259C%25D7%25A0%25D7%25A4%25D7%2592%25D7%25A2%25D7%2595%25D7%25AA%2F2346373775581917%2F&psig=AOvVaw1FosDwG1cg2dEUV6V2usRd&ust=1652357460630000&source=images&cd=vfe&ved=2ahUKEwjS95Cttdf3AhWLTMAKHT2gBU4QjRx6BAgAEAs"

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
    // element.innerHTML ="y";
    
    element.id =countsumcards++;
    element.className = "board";
    return document.getElementById("board").appendChild(element)
    
}


board.addEventListener("click",(i)=>{imgX(i)})
function imgX(i){
        console.log();
  const immg=document.createElement("img")
    immg.src=(countsteps%2==0)?("https://img.rami-levy.co.il/product/7290112191878/small.jpg"):("https://img.rami-levy.co.il/product/7290002053088/small.jpg");
    immg.id="toimg"
    countsteps++
    console.log(i.target);
    return document.getElementById(i.target.id).appendChild(immg)
    }


for(i in cardsw){
    forid=i
    cardsw[i].forEach(creatgame)
}

repeatcard= "auto ".repeat(sumcards)
document.getElementById("board").style.gridTemplateColumns=repeatcard;