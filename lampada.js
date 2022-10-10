var turnOn = document.getElementById("turnOn");
var turnOff = document.getElementById("turnOff");
var lampada = document.getElementById("lamp");

function lampQuebrada(){
    return lamp.src.indexOf ('quebrada') >-1;
}


function lampOn(){
    if(!lampQuebrada()){
        lampada.src = "./img/ligada.jpg";
    }
    
}

function lampOff(){
    if(!lampQuebrada()){
        lampada.src = "./img/desligada.jpg";    
    }
    
}

function lampBroken(){
    lampada.src = "./img/quebrada.jpg";
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lampada.addEventListener("mouseover", lampOn);
lampada.addEventListener("mouseleave", lampOff);
lampada.addEventListener("dblclick", lampBroken);