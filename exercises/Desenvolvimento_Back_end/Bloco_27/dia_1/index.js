const express = require('express');
const { addAutor } = require('./models/connection.mongo');


const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/user', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    
    const id = await addAutor(firstName, lastName, email, password);

    const result = {
      id,
      firstName,
      lastName,
      email,
      password,
    };

    return res.status(200).json(result);
    
  } catch (error) {
    console.error("deu erro", error.message);
    return res.status(500).json({ message: "error" });
    
  }
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
