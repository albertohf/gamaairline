let form = document.getElementById('formulario')
let campoNome = document.getElementById('nome')
let campoEmail = document.getElementById('email')

form.addEventListener('submit', e => {
  // alerta o valor do campo
  if (campoNome.value === '' || campoEmail.value === '') {
    alert('Preencher o Formulário!!!')
  } else {
    localStorage.setItem('name', campoNome.value)
    localStorage.setItem('email', campoEmail.value)

    console.log(localStorage)
  }

  // impede o envio do form
  e.preventDefault()
})
