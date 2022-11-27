//Definindo Função para adicionar nova linha na tabela
function addToTable(){

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let work = document.getElementById('work').value;
    let table = document.getElementById('myTable');

    let tableSize = table.rows.length; //CALCULANDO O TAMANHO DA TABELA
    let row = table.insertRow(tableSize); //insere uma linha abaixo da tabela
    let cell1 = row.insertCell(0); //Inserindo as celulas da linha
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    row.id = tableSize; //Adiciona o id no elemento a ser criado

    //Criando o codigo do botão para remover a linha
    let btnCode = "<button class='remove-btn' onclick='removeToTable(this)'>Remover</button>";

    //Preencher as celulas da linha
    cell1.innerHTML = tableSize;
    cell2.innerHTML = name;
    cell3.innerHTML = email;
    cell4.innerHTML = phone;
    cell5.innerHTML = work;
    cell6.innerHTML = btnCode;

    //Limpando os campos de inserção de dados
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('work').value = "";

    //Retornando "false" para impedir o reload da pagina       
}

function removeToTable(id){

    let row = id.parentNode.parentNode.id; //Pegando o ID do AVÔ do botão
    row = document.getElementById(row); // Recebendo o elemento da linha pelo ID
    row.parentNode.removeChild(row); // removendo a linha

    return false //para impedir o reload da pagina
}