const express   = require('express');
const mongoose  = require('mongoose');
const morgan    = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const EmployeeRoute = require('./routes/EmployeeRoute');
const AuhthorRoute = require('./routes/AuthorRoute');
const BooksRoute = require('./routes/BooksRoute');
const AuthRoute = require('./routes/AuthRoute');

mongoose.connect('mongodb://localhost:27017/testdb', {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
});

db.once('open', () => {
    console.log('Database Connection Established!');
});

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/employee', EmployeeRoute);
app.use('/api/author', AuhthorRoute);
app.use('/api/books', BooksRoute);
app.use('/api/auth', AuthRoute);