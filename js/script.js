
const enpoint = 'https://flynn.boolean.careers/exercises/api/random/mail';

for (let i = 0; i < 10; i++){
  generateMail()
}

function generateMail(){
  axios.get(enpoint)
    .then(response => {document.getElementById('mail-ul').innerHTML += `<li class="text-center list-unstyled">${response.data.response}</li>`})
    .catch(error => {console.log(`Errore! `, error)})
}

