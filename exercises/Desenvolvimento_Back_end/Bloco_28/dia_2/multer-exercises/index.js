require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const { ping, validUpload } = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
  fileFilter: (req, file, callback) => {
    callback()
  }
});

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/uploads'));

const upload = multer({ storage });

app.get('/ping', ping);

app.post('/upload', upload.single('file'), validUpload);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
