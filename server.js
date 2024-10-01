require ('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_CONNECTION)
.then(() => {
        console.log("Conectado a la base de datos");
    }).catch((err) => {
        console.error("Error de conexión a la base de datos: ", err);
});

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const salesRoutes = require('./routes/salesRoutes');
const licenseRoutes = require('./routes/licenseRoutes');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/sales', salesRoutes);
app.use('/license', licenseRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log(`Server connected to port ${PORT}`));