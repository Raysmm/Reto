const campo_texto =document.querySelector("#texto-area");
const campo_mensaje =document.querySelector("#resultado");

const matriz_code = [
    ["e","enter"], 
    ["i","imes"], 
    ["a","ai"],  
    ["o","ober"], 
    ["u","ufat"] 
];

function botonEncriptar(){
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    document.querySelector('#resultado').value = ('');
}

function botonDesencriptar(){
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value =texto;
    document.querySelector('#resultado').value = ('');
}

function copiar() {
    navigator.clipboard.writeText(campo_mensaje.value); 
}

function encriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],
                matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function desencriptar(fraseEncriptada){
    for (let i = 0; i < matriz_code.length; i++){
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada;
}
