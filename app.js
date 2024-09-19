const textoIntro = document.querySelector(".text-intro");
const textoOut = document.querySelector(".text-out");

//encriptar codigo

function botonEncriptar()
{
    const textoEncriptado = encriptar(textoIntro.value);
    textoOut.value = textoEncriptado;
   if (textoEncriptado.length>0)
    {
        textoIntro.value = "";
        textoOut.style.backgroundImage = "none";
        document.querySelector(".boxCopy").style.display = "flex";
    }    
}


function encriptar(stringEncriptar)
{
    let letras=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptar = stringEncriptar.toLowerCase();
    for (let i = 0; i < letras.length; i++)
    {
        if (stringEncriptar.includes(letras[i][0]))
        {
            stringEncriptar=stringEncriptar.replaceAll(letras[i][0], letras[i][1]);

        }
    }
    return stringEncriptar
}

//desencriptar codigo

function botonDesencriptar()
{
    const textoEncriptado = desencriptar(textoIntro.value);
    textoOut.value = textoEncriptado;
    if (textoEncriptado.length>0)
    {
        textoIntro.value = "";
        textoOut.style.backgroundImage = "none";
        document.querySelector(".boxCopy").style.display = "flex";
    }    
}


function desencriptar(stringDesencriptar)
{
    let letras=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();
    for (let i = 0; i<letras.length; i++)
    {
        if (stringDesencriptar.includes(letras[i][1]))
        {
            stringDesencriptar = stringDesencriptar.replaceAll(letras[i][1], letras[i][0]);

        }
    }
    return stringDesencriptar
}

//copiar codigo

function copiarTexto(){
 
   const copiar = document.querySelector(".text-out");
   copiar.select();
   document.execCommand("copy");
   botonCopiar.textContent = "copiado";


}




