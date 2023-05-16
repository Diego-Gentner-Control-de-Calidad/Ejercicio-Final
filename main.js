const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Función para leer los archivos TXT y escribir los datos en un archivo CSV
function processFilesAndWriteCSV() {
  const files = ['archivo1.txt', 'archivo2.txt'];
  const data = [];

  files.forEach((file) => {
    const contents = fs.readFileSync(file, 'utf-8');
    const values = contents.split('|');
    const entry = {};
    values.forEach((value) => {
      const [key, val] = value.split(' ');
      entry[key] = val;
    });
    data.push(entry);
  });

  const csvWriter = createCsvWriter({
    path: 'datos.csv',
    header: Object.keys(data[0]).map((key) => ({ id: key, title: key }))
  });

  return csvWriter.writeRecords(data);
}

module.exports = { processFilesAndWriteCSV };
processFilesAndWriteCSV();
