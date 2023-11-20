
var vitorias = parseInt(prompt("Número de Vitórias"));
var derrotas = parseInt(prompt("Número de Derrotas"));

// Confere se os dados inseridos são numeros.
if (isNaN(vitorias) || isNaN(derrotas)) {
    alert("Por favor, insira valores numéricos para vitórias e derrotas.");
} else {
    var resultado = calcularRank(vitorias, derrotas);
}

function calcularRank (vitorias, derrotas){
    var saldoVitorias = vitorias - derrotas;
    var nivel;
    if (vitorias <= 10) {
        nivel = "Ferro";
      } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
      } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
      } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
      } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
      } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
      } else {
        nivel = "Imortal";
      }
      alert(`O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`);
        return nivel;
}




