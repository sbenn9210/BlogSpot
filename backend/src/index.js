const express = require('express');
const helmet = require('helmet');
const db = require('../src/db/models');

const port = 4000;

const app = express();

app.use(helmet());

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// REGISTER
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    let user = await db.User.create({
      name,
      email,
      password,
    });
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
