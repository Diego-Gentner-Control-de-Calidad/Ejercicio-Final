const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Ruta de los archivos TXT
const files = ['archivo1.txt', 'archivo2.txt'];

// Arreglo para almacenar los datos
const data = [];

// Leer los archivos TXT
files.forEach((file) => {
  const contents = fs.readFileSync(file, 'utf-8');

  // Obtener los valores del archivo
  const values = contents.split('|');

  // Objeto para almacenar los valores
  const entry = {};

  // Separar los valores clave y valor
  values.forEach((value) => {
    const [key, val] = value.split(' ');
    entry[key] = val;
  });

  // Agregar la entrada al arreglo de datos
  data.push(entry);
});

// Escribir los datos en un archivo CSV
const csvWriter = createCsvWriter({
  path: 'datos.csv',
  header: Object.keys(data[0]).map((key) => ({ id: key, title: key }))
});

csvWriter.writeRecords(data)
  .then(() => console.log('Datos exportados a CSV'))
  .catch((error) => console.error('Error al exportar los datos:', error));
