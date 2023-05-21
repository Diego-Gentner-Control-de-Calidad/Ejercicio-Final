const express = require('express');
const csv = require('csv-parser');
const fs = require('fs');
const Chart = require('chart.js');

const app = express();

// Ruta para obtener los datos y generar las gráficas
app.get('/', (req, res) => {
  const data = [];
  fs.createReadStream('datos.csv')
    .pipe(csv())
    .on('data', (row) => {
      data.push(row);
    })
    .on('end', () => {
      const columns = Object.keys(data[0]).filter((key) => !isNaN(parseFloat(data[0][key])));

      const chartData = {
        labels: columns,
        datasets: [
          {
            label: 'Suma de Valores',
            data: columns.map((column) => data.reduce((sum, row) => sum + parseFloat(row[column]), 0)),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      const html = `
        <html>
        <head>
          <title>Gráficas</title>
          <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
        </head>
        <body>
          <canvas id="chart"></canvas>
          <script>
            const ctx = document.getElementById('chart').getContext('2d');
            new Chart(ctx, {
              type: 'bar',
              data: ${JSON.stringify(chartData)},
              options: {
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            });
          </script>
        </body>
        </html>
      `;

      res.send(html);
    });
});

// Iniciar el servidor en el puerto 3000
app.listen(80, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
