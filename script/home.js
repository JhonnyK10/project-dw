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

    if (responseApi.data && responseApi.data.length > 0) {

        let tableContainer = document.getElementById('endereco-table');

        let table = document.createElement('table');
        table.classList.add('endereco-table');

        let headerRow = table.insertRow();
        headerRow.innerHTML = `
            <th>Título</th>
            <th>CEP</th>
            <th>Endereço</th>
            <th>Número</th>
            <th>Complemento</th>
        `;

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

        tableContainer.appendChild(table);
    } else {

        alert("Nenhum endereço cadastrado.");
    }
}

window.onload = endereco;
