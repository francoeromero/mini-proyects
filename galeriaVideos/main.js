const clip = document.querySelectorAll('.clip');

for(let i = 0; i < clip.length; i++){
    clip[i].addEventListener('mouseenter', function(e){
        clip[i].play()
    })

    clip[i].addEventListener('mouseout', function(e){
        clip[i].pause()
    })
}

let shortVideo = document.querySelector(".clip");
let youtubeContainer = document.querySelector(".youtube-video-container");
let youtubeUrl = "https://www.youtube.com/embed/pYpKlBaREII?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0";

shortVideo.addEventListener("click", function(){
    youtubeContainer.style.display = "flex";
    youtubeContainer.querySelector("iframe").src = youtubeUrl;
});


//la x

const closeBtn = document.querySelector('.close-btn');
const videoContainer = document.querySelector('.youtube-video-container');

closeBtn.addEventListener('click', function() {
  
  videoContainer.style.display = 'none';
});