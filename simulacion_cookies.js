
    function ocultar_cookies(){
        document.getElementById("web").style.opacity="1";
        document.getElementById("cookies").style.visibility="hidden";
    
    }

function mostrar_cookies(){
    document.getElementById("web").style.opacity="0.5";
    setTimeout("ocultar_cookies()",10000); //Espera 10 segundos a que se oculten las cookies
}


