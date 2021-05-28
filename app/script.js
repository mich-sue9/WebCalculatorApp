
 var elements = document.getElementsByClassName("a-button");

 var numberRegex = new RegExp('^[0-9]$');
 var n1 = '';
 var operatorPressed = false;
 var equalOpLastPressed =false;
 var plus = false;
 var minus = false;
 var divide = false;
 var multiply = false;
 var equals = false;
 var n2 = ''; 

 var buttonClick = function(e){
    
    e.preventDefault();
     let valPressed = e.srcElement.innerText;
     if (valPressed === 'DEL'){
         if (operatorPressed == false){
             if (n1.length > 1){
                 n1 = n1.slice(0, -1);
             } else {
                 n1 = '';
             }
             document.querySelector(".result>h1").innerHTML = n1;
         } else {
             if (n2.length >1 ){
                 n2 = n2.slice(0, -1);
             } else {
                 n2 = '';
             }
             document.querySelector(".result>h1").innerHTML = n2;
         }
    } else if (valPressed === 'RESET'){
        n1 = '';
        n2 = '';
        equalOpLastPressed = false;
        operatorPressed = false;
        plus = false;
        minus = false; 
        divide = false; 
        multiply = false;
        equals = false;
        document.querySelector(".result>h1").innerHTML = 0;
    } else if (valPressed === '='){
        if (operatorPressed == false){
            equals = true;
            operatorPressed = true;
        } else {
            if (equals && n2 !== ''){
                n1 = n2;
                n2 = '';
            } else {
                if (n1 === ''){
                    n1 = 0;
                }
                if (plus){
                    n1 = parseFloat(n1) + parseFloat(n2);
                } else if (minus){
                    n1 = parseFloat(n1) - parseFloat(n2);
                } else if (divide){
                    n1 = parseFloat(n1) / parseFloat(n2);
                } else if (multiply){
                    n1 = parseFloat(n1) * parseFloat(n2);
                }
            }
        }
        document.querySelector(".result>h1").innerHTML = n1;
        equalOpLastPressed = true;
    } else if (numberRegex.test(valPressed) || valPressed === ".") {
        if (!operatorPressed){
            n1 += valPressed;
            document.querySelector(".result>h1").innerHTML = n1;
        } else {
            if (equalOpLastPressed){
                n2 = valPressed;
            } else {
                n2 += valPressed;
            }
            
            document.querySelector(".result>h1").innerHTML = n2;
        }  
        equalOpLastPressed = false;    
    } else if (valPressed === "+"){
        operatorPressed = true;
        equals = false;
        plus = false;
        minus = false;
        divide = false;
        multiply = false;
        plus = true; 
        equalOpLastPressed = true;
    } else if (valPressed === "-"){
        operatorPressed = true;
        equals = false;
        plus = false;
        minus = true;
        divide = false;
        multiply = false;
        plus = false; 
        equalOpLastPressed = true;
    } else if (valPressed === "X"){
        operatorPressed = true;
        equals = false;
        plus = false;
        minus = false;
        divide = false;
        multiply = true;
        plus = false; 
        equalOpLastPressed = true;
    } else if (valPressed === "/"){
        operatorPressed = true;
        equals = false;
        plus = false;
        minus = false;
        divide = true;
        multiply = false;
        plus = false; 
        equalOpLastPressed = true;
    }
    return false;
 }

 for (var i =0; i < elements.length; i++){
    elements[i].addEventListener('click', buttonClick );
}

/*** Toggle attempt */
var togglePosition = 0; 
var toggleArea = document.getElementsByClassName("toggle-grid");
console.log(toggleArea);
toggleArea[0].addEventListener('click', toggleClick);

function toggleClick(){
    console.log('click');
    if(togglePosition === 0){
        togglePosition = 1;
        document.querySelector(".red-dot").style.setProperty('transform', 'translateX(4em)');
        document.querySelector("body").className= "theme2";
    } else if (togglePosition === 1){
        togglePosition = 2;
        document.querySelector(".red-dot").style.setProperty('transform', 'translateX(7.5em)');
        document.querySelector("body").className= "theme3";
    } else {
        togglePosition = 0
        document.querySelector(".red-dot").style.setProperty('transform', 'translateX(0em)');
        document.querySelector("body").className= "theme1";
    }
    console.log("click : " + togglePosition);
}