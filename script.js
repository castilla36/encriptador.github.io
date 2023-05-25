const textoingresado=document.querySelector(".textoingresado");
const textoresultado=document.querySelector(".textoresultado");
const copia=document.querySelector("#botoncopiar");
const text=document.querySelector(".texto");
copia.style.display="none"


/*-----------Función de Validación del Texto-----------*/
function validarTexto(){
    let textoEscrito=document.querySelector(".textoingresado").value;
    let verificador=textoEscrito.match(/^[a-z- ]*$/);
    if(!verificador||verificador===0){
        Swal.fire({
            title: 'Solo se permiten letras minúsculas y sin acentos',
            icon: 'warning'
        });
        document.querySelector(".textoingresado").value = "";
        // return true;
    }
}


/*-----------Funciones de Encriptación-----------*/
function encriptar(stringEncriptada){
    let codigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()
    for(let i=0; i<codigo.length; i++){
        if(stringEncriptada.includes(codigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(codigo[i][0], codigo[i][1])
        }
    }
    return stringEncriptada
}

function botonencriptar(){
    if(!validarTexto()){
        const textoEncriptado=encriptar(textoingresado.value)
        textoresultado.value=textoEncriptado
        textoresultado.style.backgroundImage="none"
        textoingresado.value="";
        copia.style.display="block"
    }
}


/*-----------Funciones de Desencriptación-----------*/
function desencriptar(stringDesencriptada){
    let codigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada=stringDesencriptada.toLowerCase()
    for(let i=0; i<codigo.length; i++){
        if(stringDesencriptada.includes(codigo[i][1])){
            stringDesencriptada=stringDesencriptada.replaceAll(codigo[i][1], codigo[i][0])
        }
    }
    return stringDesencriptada
}

function botondesencriptar(){
    const textoEncriptado=desencriptar(textoingresado.value)
    textoresultado.value=textoEncriptado
    textoresultado.style.backgroundImage="none"
    textoingresado.value="";
    copia.style.display="block"
}


/*-----------Función Copiar-----------*/
function copiar(){
    textoresultado.select();
    navigator.clipboard.writeText(textoresultado.value);
    textoresultado.value="";
    Swal.fire({
        title: 'Texto Copiado!',
        icon: 'success'
    });
}

/*-----------Año automatico en footer-----------*/
const year=document.querySelector('#current-year');
year.innerHTML=new Date().getFullYear();