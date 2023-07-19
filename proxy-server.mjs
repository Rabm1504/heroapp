import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
app.use(cors());

const baseUrl = 'https://superheroapi.com/api/2044740539205997';

app.get('/api/search/:name', async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(`${baseUrl}/search/${name}`);
    res.json(response.data.results);
  } catch (error) {
    console.error('Error al obtener los superhéroes:', error);
    res.json([]);
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor proxy en ejecución en http://localhost:${PORT}`);
});
