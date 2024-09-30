require ('dotenv').config();
const express = require('express');
const mongose = require('mongose');
const session = require('session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Conectado a la base de datos");
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/inventory', inventoryRoutes);
app.use('/sales', salesRoutes);
app.use('/license', licenseRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('Server connected to ${PORT} port'));