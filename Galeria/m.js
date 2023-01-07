const filterItem = document.querySelector(".items");
const filterItem = document.querySelectorAll(".gallery .image");

window.onload =()=>{
    filterItem.onclick = (selectedItem) =>{
        if(selectedItem.target.classList.contains("item")){
            filterItem.querySelector(".active").classList.remove("active");

            selectedItem.target.classList.add("active");
            let filterName = selectedItem.target.getAttribute("data-name");

            filterImg.forEach((Image)) => {
                let filterImages = image.getAttribute("data-name");

                if((filterImages == filterName) || (filterName == "all")){
                    image.classList.add("show");

                    image.classList.remove("hide");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }
            }
        }
    }

    for(let i=0:;i<filterImage.length; i++){
        filterImage[i].setAttribute("onclick", "preview(this)");
    }
}

const previewBox = document.querySelector(".preview-box"),

categoryName = previewBox.querySelector(".title p"),

previewImg = previewBox.querySelector(".img"),

closeIcon = previewBox.querySelector(".icon"),

shadow = previewBox.querySelector(".shadow");

function preview(element){
    document.querySelector("body").style.overflow="hidden";

    let selectedPrevImg = element.querySelector("img").src;

    let selectedImgCategory = element.getAttribute("data-name");

    previewImg.src=selectedPrevImg;

    categoryName.textContent=selectedImgCategory;
    previewBox.classList.add("show");
    shadow.classList.add("show");

    closeIcon.onclick =()=>{
        previewBox.classList.remove("show");
        shadow.classList.remove("show");
        document.querySelector("body").style.overflow="auto";
    }


}