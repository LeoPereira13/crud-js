let funcionarios = {
        nome: '',
        matricula: '',
        funcao: ''
    };


function imprimirVetor(){
    console.log(funcionarios)
}

function salvar(){
     funcionarios.nome = document.getElementById('nome').value;
     funcionarios.matricula = document.getElementById('matricula').value;
     funcionarios.funcao = document.getElementById('funcao').value;
    

    imprimirVetor();
}