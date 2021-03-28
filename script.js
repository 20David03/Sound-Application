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
                   pad.style.boxShadow = "0px 0px 20px 6px #e5432b"
            };
        }
        else{
            sounds[index].pause()
            pad.onmouseover=()=>{
                pad.style.opacity=1
                pad.style.boxShadow = "0px 0px 20px 6px #e5432b"
            }
                     pad.onmouseout = function() {
                    pad.style.opacity=0.2
                    pad.style.boxShadow = "0px 0px 0px 0px"
            };
        }

        sounds[index].onended=function(){
            pad.style.opacity=0.2
            pad.style.boxShadow = "0px 0px 0px 0px"
            pad.onmouseout = function() {
                pad.style.opacity=0.2
                
        };
        }

    })





})

});