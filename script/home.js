const url = 'https://go-wash-api.onrender.com/api/auth/address';

async function endereco() {
    let user = localStorage.getItem('user');
    let token = JSON.parse(user).access_token;

    let resposta = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + token
        }
    });

    let responseApi = await resposta.json();

    // Verifica se há dados na resposta
    if (responseApi.data && responseApi.data.length > 0) {
        // Seleciona o elemento HTML onde a tabela será inserida
        let tableContainer = document.getElementById('endereco-table');

        // Cria a tabela
        let table = document.createElement('table');
        table.classList.add('endereco-table');

        // Cria a linha de cabeçalho da tabela
        let headerRow = table.insertRow();
        headerRow.innerHTML = `
            <th>Título</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Complemento</th>
        `;

        // Itera sobre os endereços e adiciona-os à tabela
        responseApi.data.forEach(endereco => {
            let row = table.insertRow();
            row.innerHTML = `
                <td>${endereco.title}</td>
                <td>${endereco.cep}</td>
                <td>${endereco.address}</td>
                <td>${endereco.number}</td>
                <td>${endereco.complement}</td>
            `;
        });

        // Adiciona a tabela ao contêiner
        tableContainer.appendChild(table);
    } else {
        // Caso não haja endereços cadastrados, exibe uma mensagem adequada
        alert("Nenhum endereço cadastrado.");
    }
}

// Chama a função endereco() quando a página é carregada
window.onload = endereco;
