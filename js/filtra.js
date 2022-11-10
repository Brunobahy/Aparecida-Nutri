var filtro = document.querySelector("#filtrar-tabela")

filtro.addEventListener("input", function () {

    var pacientes = document.querySelectorAll(".paciente");

    
    
    for(var i = 0; i < pacientes.length ; i++){

        var paciente = pacientes[i]

        var nome = paciente.querySelector(".info-nome").textContent;

        var expressao = new RegExp(this.value, "i");

        if(expressao.test(nome)){
            paciente.classList.remove("esconde");
        }else{
            paciente.classList.add("esconde");
        }
    }
})
