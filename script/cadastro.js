async function cadastroUser(){

    let response = await fetch("https://api-go-wash-efc9c9582687.herokuapp.com/api/user&quot;,
     {
         method:"POST",
         body: JSON.stringify({
             name: "Carlos",
             email: "carlos@gmail.com",
             user_type_id: 1,
             password: "123456",
             cpf_cnpj: "62418247406",
             terms: 1,
             birthday: "2000-10-12"
           }),
         headers:{
             "Content-Type": "application/json"
         },
     });
 
     let dados = await response.json();
 
     console.log(dados)
 }
 
 cadastroUser()