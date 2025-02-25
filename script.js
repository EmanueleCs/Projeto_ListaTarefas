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

        //verifica se existe elemento com a classe botao_lista, caso não tenh, é criado um botão
        if (!document.querySelector(".botao_lista")) {
            let botaoLimpaLista = document.createElement("button")
            botaoLimpaLista.className = "botao_lista"
            botaoLimpaLista.textContent = "Limpar tudo"
            botaoLimpaLista.onclick = () => limparLista()

            //pega a div em que estão os botões e adiciona o botapLimpaTudo 
            let botoes = document.getElementById("botoes")
            botoes.appendChild(botaoLimpaLista)
        }
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
            
            //criando botao remover tarefa
            let botaoRemover = document.createElement("button")
            botaoRemover.className = "remover"
            botaoRemover.textContent = "Remover"
            botaoRemover.onclick = () => removerTarefa(i) //arrow function
            
            let botaoEditar = document.createElement("button")
            botaoEditar.className = "editar"
            botaoEditar.textContent = "Editar"
            botaoEditar.onclick = () => editarTarefa(i)

            novaTarefa.appendChild(botaoRemover)
            novaTarefa.appendChild(botaoEditar)
            //criar um elemento filho
            listaTarefas.appendChild(novaTarefa)
            
        }

        

}

function removerTarefa(i) {
    tarefas.splice(i, 1) //i = indice e 1 é quantidade
    renderizarTarefas()

}

function editarTarefa(i) { 
    let tarefaEditada = prompt("Edite a tarefa:")

    if (tarefaEditada.trim() !== "") {
        tarefas[i] = tarefaEditada
        renderizarTarefas()
    }

}

function limparLista(){
    tarefas.length = 0
    renderizarTarefas()

    mensagem.textContent = "Lista de tarefas limpa com sucesso!"
    removerBotaoLimparLista()
}

function removerBotaoLimparLista() {
    document.querySelector(".botao_lista").remove()
}

// ao limpar a lista o botao limpar tudo deve sumir 
// ele está sendo adicionado diversas vezes