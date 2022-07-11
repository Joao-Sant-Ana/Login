var u = document.getElementById('logtxt')
var s = document.getElementById('pastxt')
var usuario = "joao"
var senha = "123"
var e = document.getElementById('button')

e.addEventListener("click", logar)


function logar() {
    if(usuario == u.value && senha == s.value) {
        alert('deu certo')
    } else {
        alert('Deu errado')
    }    
}