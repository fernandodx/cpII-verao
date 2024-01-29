function determinarSeculo(ano) {
    var seculo = Math.ceil(ano / 100);
    return seculo;
}
var anoUsuario = prompt("Digite um ano:");
var anoInteiro = parseInt(anoUsuario);
if (!isNaN(anoInteiro)) {
    var seculoResultado = determinarSeculo(anoInteiro);
    alert("O ano de" + anoInteiro + " pertence ao século " + seculoResultado + ".");
} else {
    alert("Insira um ano válido!");
}