const url = 'https://go-wash-api.onrender.com/api/login';

async function loginUsuario() {
   let email = document.getElementById('email').value;
   let senha = document.getElementById('senha').value;

   if (email === "" || senha === ""){
    alert('Por favor preencha todos os campos!');
    return;
   }

   let resposta = await fetch(url, {
    method: "POST",
    body: JSON.stringify({   
        "email": email,
        "password": senha,
        "user_type_id": 1
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
    let data = await resposta.json();
    if (data.access_token) {
  
        localStorage.setItem('token', data.access_token);

        alert("Login feito com sucesso");
        window.location.href = "view/home.html";
        document.getElementById('form').reset();
    } else {
        alert("Email ou senha incorreto, verifique suas informações");
    }
}