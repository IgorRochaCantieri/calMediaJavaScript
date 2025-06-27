
        function jogoMedia() {
            let quantidade = parseInt(prompt('Quantos números você quer digitar?'));

            if (isNaN(quantidade) || quantidade <= 0) {
                document.getElementById('resultado').innerText = 'Quantidade inválida.';
                return;
            }

            let soma = 0;

            for (let i = 1; i <= quantidade; i++) {
                let numero = parseFloat(prompt(`Digite o ${i}º número`));

                if (isNaN(numero)) {
                    document.getElementById('resultado').innerText = 'Valor inválido digitado.';
                    return;
                }

                soma += numero;
            }

            let media = soma / quantidade;

            document.getElementById('resultado').innerText = 'A média é: ' + media;
        }
    