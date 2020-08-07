//console.log(Math);
/*
          1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

          2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
           pe. miFuncion("Hola Mundo", 4) 
          devolverá "Hola".

          3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
           pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

          4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
          
          */

/*-------------------------*/
/* const exercise = () => {
              do{
                texto = prompt("Ingresa un texto")
                alert("Debe ingresar un texto valido.")
              }while(!isNaN(texto))
               console.log(texto.length)
          }          
          exercise() */
/*-------------------------*/
  
const exercise = () => {
  do{
    text = prompt("Ingrese Texto")
   
  }while(!isNaN(text))
  console.log(text.substring(0,4))
    
}
exercise();


