let selectfield = document.getElementById("selectfield");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");


for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent;
    }
}
