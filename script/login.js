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
        console.log(data)
        if (resposta.status === 401) {
            alert(data.data.errors);
            return;
        }

        localStorage.setItem('user', JSON.stringify(data));
        alert("Login feito com sucesso");
        window.location.href = "home.html";
        
}
