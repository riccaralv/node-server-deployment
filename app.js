import express from 'express';
// para poder pasar nuestras variables secretas dentro del objeto .env --> npm i dotenv
import dotenv from 'dotenv';
import axios from 'axios';

// this method config() loads our environment variables intro process.env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

console.log(process.env);
// ahora sí aparece "SECRET_KEY"
// si quiero meter nuevas environment variables tengo que restart el servidor

app.get('/weather', async (req, res) => {
  // proxy server
  // aquí no podemos usar fetch (porque eso viene del objeto windows. Se supone que fetch sí aparece desde la versión 18)
  // por esto instalamos axios --> npm i axios
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=${process.env.SECRET_KEY}`
  );
  res.send(response.data);
});

app.listen(PORT, () => console.log('Server is running on port: ', PORT));
