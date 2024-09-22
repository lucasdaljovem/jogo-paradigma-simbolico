alert("Jogo do paradigma simbólico faça com que as sequencias totalizem 15 sem repetir numeros de 1 a 9");


function checkSum() {
    const resultDiv = document.querySelector('.result');

    // Obtém os valores de todas as células, ou 0 se estiverem vazias
    const A1 = parseInt(document.getElementById('A1').value) || 0;
    const B1 = parseInt(document.getElementById('B1').value) || 0;
    const C1 = parseInt(document.getElementById('C1').value) || 0;
    const A2 = parseInt(document.getElementById('A2').value) || 0;
    const B2 = parseInt(document.getElementById('B2').value) || 0;
    const C2 = parseInt(document.getElementById('C2').value) || 0;
    const A3 = parseInt(document.getElementById('A3').value) || 0;
    const B3 = parseInt(document.getElementById('B3').value) || 0;
    const C3 = parseInt(document.getElementById('C3').value) || 0;

    // Verifica se todas as células estão preenchidas (nenhuma é zero)
    if ([A1, B1, C1, A2, B2, C2, A3, B3, C3].includes(0)) {
        resultDiv.textContent = "Preencha todas as células!";
        resultDiv.className = 'result error';
        return;
    }

    // Arrays das linhas e colunas
    const rows = [
        [A1, B1, C1],
        [A2, B2, C2],
        [A3, B3, C3]
    ];

    const cols = [
        [A1, A2, A3],
        [B1, B2, B3],
        [C1, C2, C3]
    ];

    // Função para verificar se a soma de uma linha ou coluna é 15
    function isSumFifteen(array) {
        return array.reduce((a, b) => a + b, 0) === 15;
    }

    // Verifica se todas as linhas têm soma 15
    const allRowsValid = rows.every(isSumFifteen);

    // Verifica se todas as colunas têm soma 15
    const allColsValid = cols.every(isSumFifteen);

    // Exibe o resultado e lança confetes se ganhar
    if (allRowsValid && allColsValid) {
        resultDiv.textContent = "Parabéns! Todas as somas são 15!";
        resultDiv.className = 'result success'; // Adiciona classe de sucesso
        launchConfetti();
    } else {
        resultDiv.textContent = "Tente novamente!";
    }
}

// Função para lançar confetti
function launchConfetti() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
}
