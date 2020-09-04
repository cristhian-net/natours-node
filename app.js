const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello from express', app: 'Natours' });
});

const tours = require('./dev-data/data/tours.json')

app.get('/api/v1/tours', (req, res) => {
    res.status(200).json({
        status: 'success',
        results: tours.length,
        data: {
            tours
        }
    })
})

app.post('/', (req, res) => {
  res.send('You can send requests to this endpoint');
});

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
