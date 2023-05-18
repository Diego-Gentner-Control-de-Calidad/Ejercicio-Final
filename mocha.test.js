const fs = require('fs');
const assert = require('assert');
const { processFilesAndWriteCSV } = require('./main.js');

describe('Main', () => {
  it('Debería procesar los archivos y escribir el CSV', async () => {
    const csvFilePath = 'datos.csv';

    // Eliminar el archivo CSV antes de la ejecución de la prueba (si existe)
    if (fs.existsSync(csvFilePath)) {
      fs.unlinkSync(csvFilePath);
    }

    // Ejecutar la función para procesar los archivos y escribir el CSV
    await processFilesAndWriteCSV();

    // Verificar si el archivo CSV ha sido creado exitosamente
    assert.strictEqual(fs.existsSync(csvFilePath), true, 'El archivo CSV no ha sido creado');

    // Leer el contenido del archivo CSV
    const csvContents = fs.readFileSync(csvFilePath, 'utf-8');

    // Verificar si el contenido del archivo CSV es válido (puedes hacer comprobaciones más específicas según tus necesidades)
    assert.notStrictEqual(csvContents.length, 0, 'El archivo CSV está vacío');
  });
});
