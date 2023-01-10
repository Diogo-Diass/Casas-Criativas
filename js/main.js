const botaoTopo = document.getElementById("topo")

botaoTopo.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener("scroll", ocultar)

function ocultar(){

    console.log(screen)

    if(window.scrollY > 10 && screen.width > 310){

        botaoTopo.style.display = "flex"
    
    }else if(screen.width > 0 || screen.width < 309){

        botaoTopo.style.display = "none"

    }
 
} 
ocultar()