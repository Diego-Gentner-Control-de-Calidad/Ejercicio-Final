const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Función para leer los archivos TXT y devolver el número de respuestas
function getNumberOfResponses() {
  const files = ['archivo1.txt', 'archivo2.txt', 'archivo3.txt'];
  return files.length;
}

// Prueba para verificar si hay más de 10 respuestas
test('Verificar si hay más de 10 respuestas', () => {
  const numberOfResponses = getNumberOfResponses();
  expect(numberOfResponses).toBeGreaterThan(10);
});
