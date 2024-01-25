/*#DESAFIO 03
verifique se a string é um Palíndromo
 
Palíndromo
é uma palavra, frase ou número que permanece igual quando lida de trás para frente e frente para trás.
*/ 

//Função para verificar palindromo
function pali(texto) {
    const textoLowCase = texto.toLowerCase().replace(/\s/g, '');
    const textoReverse = textoLowCase.split('').reverse().join('');
    return textoLowCase === textoReverse;
  }

//teste passando texto como paramentro
  console.log(pali("ovo"));
  console.log(pali("casa"));
  console.log(pali("civic"));