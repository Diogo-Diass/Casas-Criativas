const botaoTopo = document.getElementById("topo")

botaoTopo.addEventListener("click", function(){
    window.scrollTo(0,0)
})

document.addEventListener("scroll", ocultar)

function ocultar(){

    if(window.scrollY > 10){

        botaoTopo.style.display = "flex"
    
    }else{

        botaoTopo.style.display = "none"

    }
 
} 
ocultar()