function adicionarTarefa() {
    //variáveis que armazenam o valor recebido do input do usuário 
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim() //.value para pegar o valor do input e trim() para apagar os espaços do inicio e fim 

    const mensagem = document.getElementById("mensagem")

    //verificação para caso o usuário não digitar nada no input
    if (tarefa == "") {
        alert("Por favor, insira uma tarefa!")
    }

    else {
    //variáveis para criar novo item (li) e o insere na lista (ul)
    const listaTarefas = document.getElementById("listaTarefas")
    let novaTarefa = document.createElement("li")
    listaTarefas.appendChild(novaTarefa) //o li será filho do pai ul
    novaTarefa.textContent = tarefa
    
    //mensagem de sucesso após adicionar uma tarefa
    let mensagemSucesso = "Tarefa adicionada com sucesso!"
    mensagem.textContent = mensagemSucesso
    mensagem.textContent.style.color = #28A745
    }

    //limpa o que o usuário digitou no input após apertar o botão
    inputTarefa.value = "";
}