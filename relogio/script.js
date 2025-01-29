let cronometroInterval; // Declara uma variável global para armazenar o intervalo do cronômetro
let segundos = 0, minutos = 0, horas = 0; // Variáveis para armazenar horas, minutos e segundos
let temporizadorInterval; // Variável para armazenar o intervalo do temporizador
let tempoRestante = 0; // Variável para armazenar o tempo restante em segundos

// Função que formata e exibe o tempo do cronômetro
function formatarTempo() {
  // A função retorna a hora, minuto e segundo formatados com dois dígitos
  return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Função para iniciar o cronômetro
function iniciarCronometro() {
  // Verifica se o cronômetro já está em execução para evitar múltiplos intervalos
  if (cronometroInterval) return;

  cronometroInterval = setInterval(() => {
    segundos++; // Incrementa o contador de segundos

    if (segundos >= 60) { // Se os segundos atingirem 60
      segundos = 0; // Reinicia os segundos
      minutos++; // Incrementa os minutos
    }

    if (minutos >= 60) { // Se os minutos atingirem 60
      minutos = 0; // Reinicia os minutos
      horas++; // Incrementa as horas
    }

    document.getElementById('cronometro-display').innerText = formatarTempo(); // Atualiza a exibição do cronômetro
  }, 1000); // Atualiza o cronômetro a cada 1 segundo
}

// Função para pausar o cronômetro
function pausarCronometro() {
  clearInterval(cronometroInterval); // Interrompe o intervalo do cronômetro
  cronometroInterval = null; // Limpa a variável do intervalo
}

// Função para zerar o cronômetro
function zerarCronometro() {
  clearInterval(cronometroInterval); // Interrompe o intervalo do cronômetro
  cronometroInterval = null; // Limpa a variável do intervalo
  segundos = 0; // Zera os segundos
  minutos = 0; // Zera os minutos
  horas = 0; // Zera as horas
  document.getElementById('cronometro-display').innerText = formatarTempo(); // Atualiza a exibição para 00:00:00
}

// Eventos dos botões
document.getElementById('iniciar-cronometro').addEventListener('click', iniciarCronometro); // Inicia o cronômetro ao clicar no botão
document.getElementById('pausar-cronometro').addEventListener('click', pausarCronometro); // Pausa o cronômetro ao clicar no botão
document.getElementById('zerar-cronometro').addEventListener('click', zerarCronometro); // Zera o cronômetro ao clicar no botão



// Função para formatar o tempo do temporizador no formato hh:mm:ss
function formatarTempoTemporizador(tempo) {
  const horas = Math.floor(tempo / 3600); // Calcula as horas (1 hora = 3600 segundos)
  const minutos = Math.floor((tempo % 3600) / 60); // Calcula os minutos
  const segundos = tempo % 60; // Calcula os segundos restantes

  // Retorna o tempo formatado
  return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

// Função para iniciar o temporizador
function iniciarTemporizador() {
  // Obtém o valor do input e converte para número (em segundos)
  const inputValor = parseInt(document.getElementById('temporizador-input').value, 10);
  
  if (isNaN(inputValor) || inputValor <= 0) {
    alert('Por favor, insira um valor válido em segundos.');
    return;
  }

  // Define o tempo restante com o valor do input
  tempoRestante = inputValor;

  // Atualiza a exibição inicial do temporizador
  document.getElementById('temporizador-display').innerText = formatarTempoTemporizador(tempoRestante);

  // Interrompe qualquer temporizador anterior
  clearInterval(temporizadorInterval);

  // Inicia o temporizador
  temporizadorInterval = setInterval(() => {
    if (tempoRestante > 0) {
      tempoRestante--; // Decrementa o tempo restante
      document.getElementById('temporizador-display').innerText = formatarTempoTemporizador(tempoRestante); // Atualiza a exibição
    } else {
      clearInterval(temporizadorInterval); // Interrompe o intervalo quando o tempo chega a 0
      alert('O tempo acabou!'); // Exibe um alerta
    }
  }, 1000); // Executa a cada segundo
}

// Eventos do botão do temporizador
document.getElementById('iniciar-temporizador').addEventListener('click', iniciarTemporizador); // Inicia o temporizador

