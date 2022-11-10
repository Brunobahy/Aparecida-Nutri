var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente = extraiForm(form);


    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeErro(erros);
        return;
    }

    adicinaPacienteNaTabela(paciente);
    
    form.reset()
    var listaErro = document.querySelector("#mensagens-erro");
    listaErro.innerHTML = "";
})


/* identifica e extrai o form da pagina*/

function extraiForm(form) {
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    
    return paciente;
}

/* cria a TR e atribui os valores na mesma */

function montaTr(paciente) {
    
    /* cria os elementos TR*/
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")
    
    /*adiciona os elementos HTML filhos TD no pai TR */
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    
    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    
    return td
}

function validaPaciente(paciente) {
    
    var erros = []
    
    if(paciente.nome.length == 0){
        erros.push("Nome não pode estar em branco")
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("O peso esta invalido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("A altura esta invalido")
    }
    if(paciente.gordura.length == 0){
        erros.push("A gordura esta invalida")
    }
    
    return erros;
    
}

function exibeErro(erros) {
    
    var listaErro = document.querySelector("#mensagens-erro");
    listaErro.innerHTML = "" 
    
    erros.forEach(function (erro) {
        
        var erroLi = document.createElement("li");
        
        erroLi.textContent = erro;
        
        listaErro.appendChild(erroLi);
    })
    
    return listaErro;
}


function adicinaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    
}