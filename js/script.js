
const enpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

for (let i = 0; i < 10; i++){
  generateMail()
}

const button = document.querySelector('.btn');

function generateMail(){
  axios.get(enpoint)
    .then(response => {document.getElementById('mail-ul').innerHTML += `<li class="list-group-item list-group-item-success text-center list-unstyled py-2 my-1">${response.data.response}</li>`})
    .catch(error => {console.log(`Errore! `, error)})
}



