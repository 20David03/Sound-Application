window.addEventListener("load", ()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads .pad");


    pads.forEach((pad,index)=>{
    pad.addEventListener("click", ()=>{
        if(sounds[index].paused){
            sounds[index].currentTime=0
            sounds[index].play()
            pad.onmouseout = function() {
                    pad.style.opacity=1

            };
        }
        else{
            sounds[index].pause()
        }

        sounds[index].onended=function(){
            pad.style.opacity=0.2
            pad.onmouseout = function() {
                pad.style.opacity=0.2

        };
        }

    })

    pad.onmouseover = function (){
        pad.style.opacity=1
        };
    
    pad.onmouseout = function() {
        pad.style.opacity=0.2
    };



})

});