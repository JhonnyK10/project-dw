async function cadastroUsuario() {
    const url = 'https://api-go-wash-efc9c9582687.herokuapp.com/api/user';
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('senha').value; 
    let cpf_cnpj = document.getElementById('cpf_cnpj').value;
    let dataNasc = document.getElementById('dataNasc').value;

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
            "birthday": dataNasc,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    let data = await resposta.json();

    console.log(data);
    if(data.data.statusCode == 422){
        if(data.data.errors.cpf_cnpj && data.data.errors.email){
            alert("O CPF e o email já estão sendo utilizados");
            return 
         }
        if(data.data.errors.cpf_cnpj){
           alert("O CPF já está sendo utilizado");
           return 
        }
       if(data.data.errors.email){
            alert("O email já está sendo utilizado");
            return
         } 
    }
    alert("Cadastro feito com sucesso!");
    
    window.location.href = "login.html";
    document.getElementById('form-cadastro').reset();
}