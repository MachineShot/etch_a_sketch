let container = document.getElementById("container");

for(let i = 0; i < 16; i ++) { // create 16x16 div grid
    for(let j = 0; j < 16; j++){
        let div = document.createElement("div");
        div.className = "blocks";
        div.style.backgroundColor = "red";
        container.appendChild(div);
    }
}

function clearColor(){
    for(let i = 0; i < blocks.length; i++){
        blocks[i].style.backgroundColor = "red";
    }
}

let changeColor = function(){
    this.style.backgroundColor = "blue";
}

let blocks = document.getElementsByClassName("blocks");

for(let i = 0; i < blocks.length; i++){
    blocks[i].addEventListener("mouseover", changeColor, false);
}