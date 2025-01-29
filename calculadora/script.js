const texto = document.querySelector('#resultado'); // Refere-se ao texto do display (span)
const botoes = document.querySelectorAll('button'); // Seleciona todos os botões

// Itera sobre cada botão
botoes.forEach(button => {
    button.addEventListener('click', () => {
        const valor = button.textContent;

        // Se o botão clicado for "C" (limpar)
        if (valor === 'C') {
            texto.textContent = '0'; // Limpa o display
        } 
        
        // Se o botão clicado for "=" (calcular)
        else if (valor === '=') {
            try {
                texto.textContent = eval(texto.textContent); // Calcula o resultado
            } catch {
                texto.textContent = 'Erro'; // Caso a expressão seja inválida
            }
        } 
        
        // Se o botão clicado for "Apagar" (classe .apagar)
        else if (button.classList.contains('apagar')) {
            texto.textContent = texto.textContent.length > 1
                ? texto.textContent.slice(0, -1) // Remove o último caractere
                : '0'; // Se só tiver um caractere, volta para "0"
        } 
        
        // Para qualquer outro botão (números e operadores)
        else {
            texto.textContent = texto.textContent === '0' 
                ? valor // Substitui o "0" pelo valor do botão
                : texto.textContent + valor; // Concatena o valor ao texto existente
        }
    });
});
