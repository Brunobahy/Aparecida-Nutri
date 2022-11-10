var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", ()=>{
    console.log("buscando pacientes...")

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){
        
        var erroBusca = document.querySelector("#erro-ajax");

        if(xhr.status == 200){

            var retorno = xhr.responseText;
            var pacientes = JSON.parse(retorno);
            pacientes.forEach(function(paciente){
                adicinaPacienteNaTabela(paciente)
            })
            erroBusca.classList.add("esconde")

        }else{

            erroBusca.classList.remove("esconde")
        }
    });


    xhr.send()

})