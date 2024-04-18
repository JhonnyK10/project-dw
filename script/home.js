const url = 'https://go-wash-api.onrender.com/api/auth/address';

async function endereco(){

let token = localStorage.getItem('token');


let resposta = await fetch(url, {
    method:"GET",
    headers:{
        'Content-Type': 'application/json',
        'Authorization': "Bearer "+token
    }
});
    let data = await resposta.json()

    console.log(data);
}

endereco()