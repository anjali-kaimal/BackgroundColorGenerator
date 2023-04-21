let css=document.querySelector("h3");
let color1=document.getElementById("color1");
let color2=document.getElementById("color2");
let randomButton=document.getElementById("random");
// or
// if we give class name as color1 we can use the following
// let color1=document.querySelector(".color1")
let body=document.querySelector("body");
// body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+");";
function changeColor(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent=body.style.background+";";
}

function getRandomColor(){
    let c1=[],c2=[];
    for(let i=0;i<3;i++){
        c1.push(Math.floor(Math.random() * 255));
        c2.push(Math.floor(Math.random() * 255));
    }
     // body.style.background="linear-gradient(to right,rgb("+c1[0]+","+c1[1]+","+c1[2]+"),rgb("+c2[0]+","+c2[1]+","+c2[2]+"))";
  
}

// change color
color1.addEventListener("input",changeColor);
color2.addEventListener("input",changeColor);
randomButton.addEventListener("click",getRandomColor);

