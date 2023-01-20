document.addEventListener("DOMContentLoaded", function() {
    const inputMensaje = document.getElementById("mensaje");
    const inputResultado = document.getElementById("resultado");
    const btnEncriptar = document.getElementById("encriptar");
    const btnDesencriptar = document.getElementById("desencriptar");
    const btnCopiar = document.getElementById("copiar");

    btnEncriptar.addEventListener("click", function() {
        const mensaje = inputMensaje.value;
        const mensajeEncriptado = mensaje.replace("e", 'enter').
        replace("i", "imes").
        replace("o", "ober").
        replace("a", "ai").
        replace("u", "ufat");
        
        inputResultado.value = mensajeEncriptado;
    });

    btnDesencriptar.addEventListener("click", function() {
        mensaje = inputMensaje.value;
        const mensajeDesencriptado = mensaje.replace("enter", "e").
        replace("imes", 'i').
        replace("ober", 'o').
        replace("ai", 'a').
        replace("ufat", 'u');
        
        inputResultado.value = mensajeDesencriptado;
    });

    btnCopiar.addEventListener("click", function() {
        var mensajeEncriptado = inputResultado.value;
        navigator.clipboard.writeText(mensajeEncriptado);
    });
});
