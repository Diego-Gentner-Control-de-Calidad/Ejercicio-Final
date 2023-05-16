const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const { processFilesAndWriteCSV } = require('./main');

fixture`Probar la escritura en CSV`.page`about:blank`;

test('Verificar si se envían valores al archivo CSV', async (t) => {
  // Ejecutar la función para procesar los archivos y escribir el CSV
  await processFilesAndWriteCSV();

  // Verificar si el archivo CSV existe
  await t.expect(fs.existsSync('datos.csv')).ok('El archivo CSV no se ha creado');

  // Leer el contenido del archivo CSV
  const csvContents = fs.readFileSync('datos.csv', 'utf-8');

  // Verificar si el contenido tiene los valores esperados
  await t
    .expect(csvContents)
    .contains('ResourceLeveragingScore')
    .expect(csvContents)
    .contains('CollaborationScore')
    .expect(csvContents)
    .contains('SustainabilityScore')
    .expect(csvContents)
    .contains('EquitableAccessScore')
    .expect(csvContents)
    .contains('SupportAndRegulation')
    .expect(csvContents)
    .contains('PreservationCultureScore')
    .expect(csvContents)
    .contains('CultureInnovationScore')
    .expect(csvContents)
    .contains('NegativeImpacts')
    .expect(csvContents)
    .contains('Infrastructure')
    .expect(csvContents)
    .contains('GoodsAndBenefits');
});
