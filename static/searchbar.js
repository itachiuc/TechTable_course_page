// JavaScript code 
let div = document.querySelector('.results');
let y = document.getElementsByClassName('animals');
// for (i=0; i<y.length; i++){
//     y[i].style.display="none";
// }

div.style.color = "yellow";

function search_animal() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
     

    let x = ['machine learning','android','kotlin','flutter','java','javascript','python','artificial intelligence','ethical hacking','c','web development']
     
    

    for (i = 0; i < y.length; i++) {  
        if (!x[i].includes(input)) { 
            y[i].style.display="none"; 
        } 
        else {
            
            div.style.display = "inline";
            y[i].style.display="list-item"; 
            // y[i].textContent = x[i];                 
        } 
    } 

    if(input === ""){
        for (i=0; i<y.length; i++){
            div.style.display = "none";
            // y[i].style.display="none";
        }
    }
} 

function changeimg(thi){
    
    
    thi.setAttribute("src", "images/user.png");
    thi.style.width='50px';
    thi.style.height='40px';
    thi.style.float="right";
    thi.innerHTML = "";
    thi.outerHTML = thi.outerHTML.replace(/button/g, "img");
}