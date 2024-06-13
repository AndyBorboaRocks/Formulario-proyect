const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const edad = document.getElementById('edad').value;
  const sexo = document.querySelector('input[name="sexo"]:cheked').value;

  if (nombre === '' || apellido === '' || edad === '' || sexo === '') {
    alert('Por favor llena todos los campos');
    return
  }

  console.log('Datos del formulario:');
  console.log('Nombre:', nombre);
  console.log('Apellido:', apellido);
  console.log('Edad:', edad);
  console.log('Sexo:', sexo);
  