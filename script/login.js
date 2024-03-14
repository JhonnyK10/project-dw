const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';

async function cadastroUsuario() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('senha').value; // Corrigido de password para senha
    var cpf_cnpj = document.getElementById('cpf_cnpj').value;

    if (name === "" || email === "" || password === "" || cpf_cnpj === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    let resposta = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            "name": name,
            "email": email,
            "user_type_id": 1,
            "password": password,
            "cpf_cnpj": cpf_cnpj,
            "terms": 1,
            "birthday": "2000-10-12"
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await resposta.json();


    if (data.data.statusCode === 404) { 
        alert('Não encontrou nenhum resultado');
        return data;
    }
    alert("Cadastro feito com sucesso");
    window.location.href = "login.html";

    print(data)

    document.getElementById('form-cadastro').reset();
}