window.addEventListener("load", ()=>{
    const sounds=document.querySelectorAll(".sound");
    const pads=document.querySelectorAll(".pads .pad");
    let activeshadow="0px 0px 20px 6px #e5432b"
    let deactiveshadow="0px 0px 0px 0px "

    pads.forEach((pad,index)=>{
    pad.addEventListener("click", ()=>{
        if(sounds[index].paused){
            sounds[index].currentTime=0
            sounds[index].play()
            pad.onmouseout = function() {
                    pad.style.opacity=1
                   pad.style.boxShadow = activeshadow
            };
        }
        else{
            sounds[index].pause()
                     pad.onmouseout = function() {
                    pad.style.opacity=0.2
                    pad.style.boxShadow = "0px 0px 0px 0px"
            };
        }

        sounds[index].onended=function(){
            pad.style.opacity=0.2
            pad.style.boxShadow = deactiveshadow
            pad.onmouseout = function() {
                pad.style.opacity=0.2
                pad.style.boxShadow = deactiveshadow
                
        };
        }

    })

    pad.onmouseover = function (){
        pad.style.opacity=1
        pad.style.boxShadow=activeshadow;
        };
    
    pad.onmouseout = function() {
        pad.style.opacity=0.2
        pad.style.boxShadow=deactiveshadow
    };



})

});