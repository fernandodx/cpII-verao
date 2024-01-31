function checkPalindromo(palavra) {
    const palavraFormatada = palavra.toLowerCase().replace(/\s/g, '');
    const palavraInvertida = palavraFormatada.split('').reverse().join('');
    return palavraFormatada === palavraInvertida;
  }
  console.log(checkPalindromo("ovo"));
  console.log(checkPalindromo("casa"));
  console.log(checkPalindromo("civic"));