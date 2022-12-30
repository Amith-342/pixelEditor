var getTab = document.querySelector("table");
var getTr = document.querySelector("table tr");
var getDiv = document.querySelector("div.tab");

var wrtBtn = document.querySelector("button.pen");
var eraseBtn = document.querySelector("button.erase");
var clrBtn = document.querySelector("button.clrBtn");


var getTd = document.querySelector("td");
var width1 = getDiv.clientWidth;
var height1 = getDiv.clientHeight;
var no=0;


var clrPick = document.querySelector("input.clrPick");
var clrVal = "black";
clrPick.addEventListener("input",()=>{
clrVal = clrPick.value;
console.log(clrVal);
});

console.log(height1);

for(var j=0;j<height1-1;j+=7){
    var tr = document.createElement('tr');
    for(var i=0;i<width1/5-20;i++){
        var td = document.createElement('td');
      td.setAttribute('id','td'+i+"-"+j);
        tr.appendChild(td);

    }
getDiv.appendChild(tr);
}
var getClass;
var clicked = 0;

wrtBtn.addEventListener("click",()=>{
animate(wrtBtn);
clicked = 1;
console.log("yes cldked");
});
document.addEventListener("keypress",(event)=>{
    console.log(event.key);
    if(event.key === 'W'||event.key === 'w'){
        if(clicked === 1){
            clicked = 0;
        }
        else{
            clicked = 1;
        }
    }
    else if(event.key === 'R'|| event.key === 'r'){
        
        clearTable();
    }
    else if(event.key === 'E'|| event.key === 'e'){
        if(clicked === 2){
            clicked = 0;
        }
        else{
            clicked = 2;
        }
    }
})



clrBtn.addEventListener("click",()=>{
animate(clrBtn);
  clearTable();
    })


eraseBtn.addEventListener("click",()=>{
animate(eraseBtn);
clicked = 2;
})

getDiv.addEventListener("mouseover",(e)=>{
console.log(e.target.nodeName);
if(clicked===1&&e.target.nodeName === "TD"){
    getClass = e.target.id;
    
    document.querySelector("#"+getClass).style.backgroundColor = clrVal;
}
else if(clicked===2&&e.target.nodeName === "TD"){
    getClass = e.target.id;
    console.log(getClass);
    document.querySelector("#"+getClass).style.backgroundColor = "white";

}

});


function animate(clss){

clss.style.backgroundColor = "#3366ff";
clss.style.borderWidth = 3;

setTimeout(()=>{
    console.log("Tmout");
    clss.style.backgroundColor = "#2a79a3";
    clss.style.borderWidth = "0";
},150);

};


function clearTable(){
    var tds =   document.querySelectorAll("td");
    for(var i=0;i<tds.length;i++){
        tds[i].style.backgroundColor = "white";
    }
    clicked = 0;
}





