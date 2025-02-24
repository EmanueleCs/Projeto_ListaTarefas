let tarefas = []

function adicionarTarefa() {

    // mensagem que aparece ao adicionar (ou não adicionar) uma tarefa
    const mensagem = document.getElementById("mensagem")
    // pegando o valor do input através do value
    const inputTarefa = document.getElementById("inputTarefa")
    let tarefa = inputTarefa.value.trim() //trim retira os espaços vazios no fim e no inicio

    if (tarefa == "") {
        let mensagemErro = "Erro! Por favor, digite uma tarefa."
        mensagem.textContent = mensagemErro
        mensagem.style.color = "#A34743"
    }else{
        let mensagemSucesso = "Tarefa adicionada com sucesso!"
        mensagem.textContent = mensagemSucesso
        mensagem.style.color = "#28a745"

        tarefas.push(tarefa)
        renderizarTarefas()
    }

    inputTarefa.value = ""

}

function renderizarTarefas() {
        const listaTarefas = document.getElementById("listaTarefas")
        listaTarefas.innerHTML = ""

        for (let i = 0; i < tarefas.length; i++) {
            //selecionado a ul e criando uma nova li com createElement
            let novaTarefa = document.createElement("li")
            novaTarefa.textContent = tarefas[i]
            //criar um elemento filho
            listaTarefas.appendChild(novaTarefa)
            
        }

}

function apagarTarefa() {
    
}

function editarTarefa() {
    
}