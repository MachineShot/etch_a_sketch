let container = document.getElementById("container");

let answer = 'blue';

createGrid(16);

function createGrid(num){
    for(let i = 0; i < num; i ++) { // create 16x16 div grid
        for(let j = 0; j < num; j++){
            let div = document.createElement("div");
            div.className = "blocks";

            div.style.backgroundColor = "red";
            div.style.height = 100/num + "%";
            div.style.width = 100/num + "%";

            container.appendChild(div);
        }
    }
}

function clearColor(){
    for(let i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = "red";
    }
}

function changeSize(){
    let size = prompt('Enter size of pixels 2-64', 16);
    
    if(size > 1 && size < 65){
        let list = document.querySelectorAll(".blocks")
        list.forEach(el => container.removeChild(el));
        createGrid(size);

        for(let i = 0; i < blocks.length; i++){
            blocks[i].addEventListener("mouseover", changeColor, false);
        }
    }
    else{
        changeSize();
    }
}

function changeColor(){
    this.style.backgroundColor = answer;
}

function changePrimaryColor(){
    let option = prompt('Choose blue, green or yellow');
    
    if(answer == 'blue' || answer == 'green' || answer == 'yellow'){
        answer = option;
    }
    else{
        changePrimaryColor();
    }
}

let blocks = document.getElementsByClassName("blocks");

for(let i = 0; i < blocks.length; i++){
    blocks[i].addEventListener("mouseover", changeColor, false);
}