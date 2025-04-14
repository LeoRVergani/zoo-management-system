const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/database');
const animalRoutes = require('./routes/animalRoutes');
const cuidadoRoutes = require('./routes/cuidadoRoutes');


app.use(express.json());
app.use('/animais', animalRoutes);
app.use('/cuidados', cuidadoRoutes);
app.use(cors());

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000 🐾');
    });
});
