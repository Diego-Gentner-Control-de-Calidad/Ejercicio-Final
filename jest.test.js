const fs = require('fs');
const { processFilesAndWriteCSV } = require('./main.js');

// Prueba para verificar si hay más de 10 valores en el archivo CSV
test('Verificar si hay más de 10 valores en el archivo CSV', () => {
  // Ejecutar la función para procesar los archivos y escribir el CSV
  processFilesAndWriteCSV()
    .then(() => {
      // Leer el archivo CSV
      const csvContents = fs.readFileSync('datos.csv', 'utf-8');
      const rows = csvContents.trim().split('\n');

      // Verificar si hay más de 10 valores
      expect(rows.length - 1).toBeGreaterThan(10);
    })
    .catch((error) => {
      // Capturar cualquier error que ocurra durante la ejecución
      console.error('Error al procesar los archivos y escribir el CSV:', error);
      throw error;
    });
});
