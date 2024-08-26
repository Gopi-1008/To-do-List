const inputbox = document.getElementById("input-box");
const listitems = document.getElementById("list");


function addtask() {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listitems.appendChild(li);
    let cross = document.createElement("cross");
    cross.innerHTML = "&#10006";
    li.appendChild(cross);

}

listitems.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");

    }
    else if (e.target.tagName === "CROSS"){
        e.target.parentElement.remove();
    }

},false);





