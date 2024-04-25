async function cadastroEndereco(){
    const url = 'https://go-wash-api.onrender.com/api/auth/address'
    let title = document.getElementById('title').value;
    let cep = document.getElementById('cep').value;
    let address = document.getElementById('address').value; 
    let number = document.getElementById('number').value;
    let complement = document.getElementById('complement').value;

    let token = localStorage.getItem('token');
}


let resposta = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
        "title": title,
        "cep": cep,
        "address": address,
        "password": password,
        "number": number,
        "complement": complement,
    }),
    headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token
    }
});
let data = await resposta.json();