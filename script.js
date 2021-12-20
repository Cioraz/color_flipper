const Btn = document.getElementById("Btn")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
const Code = document.querySelector('.code')

function randomNumber(){
    return Math.floor(Math.random()*16);
}

Btn.addEventListener('click',function(){
    let code = '#';
    for (let i =0;i<6;i++){
        code += hex[randomNumber()]
    };

    document.body.style.backgroundColor = code;
    Code.innerHTML = code;


})




