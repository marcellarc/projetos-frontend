const botao = document.getElementById('gerar-cor');
const codigo = document.getElementById('codigo-cor');

function gerarCorAleatoria() {
    //gerar 3 numeros aleatorios para r, g, b
    //uma cor no formato hexadecimal tem 6 caracteres, que representam os níveis de vermelho (R), verde (G) e azul (B) na mistura de cores. Cada um desses dois caracteres pode variar entre 00 (zero) e FF (255 em decimal). por isso multiplica por 256.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);;
    const b = Math.floor(Math.random() * 256);;

    //converter esses numeros em hexadecimal 
    const rHex = r.toString(16).padStart(2, '0'); //padstart pra garantir só 2 digitos p cada cor
    const gHex = g.toString(16).padStart(2, '0'); //toString(16) p converter pra base 16 (hexadecimal)
    const bHex = b.toString(16).padStart(2, '0');

    const corHexadecimal = `#${rHex}${gHex}${bHex}`; //concatena todas as partes no formato #RRGGBB

    return corHexadecimal;
}

botao.addEventListener('click', () => {
    const cor = gerarCorAleatoria();
    document.body.style.backgroundColor = cor;
    codigo.textContent = `Cor atual: ${cor}`;
});
