// Carga el archivo JSON
fetch('datos.json')
  .then(response => response.json())
  .then(data => {
    // Filtra los datos según los parámetros
    const filteredData = data.filter(item => item.parametro === 'valor');

    // Muestra los datos filtrados en la página
    const outputElement = document.getElementById('output');
    filteredData.forEach(item => {
      const p = document.createElement('p');
      p.textContent = `Nombre: ${item.nombre}, Parámetro: ${item.parametro}`;
      outputElement.appendChild(p);
    });
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });
