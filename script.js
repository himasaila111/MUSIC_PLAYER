const song = document.querySelector(".audio");
const range = document.querySelector(".range");
const ctrlIcon = document.getElementById("control-icon");

song.onloadedmetadata = function(){
    range.max = song.duration;
    range.value = song.currentTime;
    maxTime.innerHTML = "-"+max;
    max = (song.duration/60).toFixed(2);
}

const controlSong = ()=>{
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause()
        ctrlIcon.classList.remove("fa-pause")
        ctrlIcon.classList.add("fa-play")
    }
    else{
        song.play ()
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
    }
}

if(song.play()){
    setInterval(()=>{
        range.value = song.currentTime;
    },100)
}

range.onchange = ()=>{
    song.currentTime = range.value;
}

song.pause()



