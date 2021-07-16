let form = document.getElementById('formulario')
let campoNome = document.getElementById('nome')
let campoEmail = document.getElementById('email')

form.addEventListener('submit', e => {
  // alerta o valor do campo
  alert(campoNome.value)
  alert(campoEmail.value)

  // impede o envio do form
  e.preventDefault()
})
