const imgs=document.querySelectorAll('.slider>img')
imgs.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(!document.fullscreenElement){
            e.target.requestFullscreen();
        }else{
            document.exitFullscreen();
        }
    })
})