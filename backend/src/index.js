const express = require('express');
const helmet = require('helmet');
const db = require('../src/db/models');
const bcrypt = require('bcrypt');
const user = require('./db/models/user');
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
      password: await bcrypt.hash(password, 10),
    });
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET STORIES
app.get('/stories', async (req, res) => {
  try {
    let stories = await db.Story.findAll();
    res.json({ stories });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST NEW STORY
app.post('/newstory', async (req, res) => {
  const { author, title, description, image, body } = req.body;
  try {
    let story = await db.Story.create({
      author,
      title,
      description,
      image,
      body,
    });
    res.json({ story });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// SAVE A BOOKMARKED STORY
app.post('/bookmarks', async (req, res) => {
  const { email } = req.body;
  try {
    let user = await db.User.findOne({ where: { email: email } });
    if (user) {
      db.ReadingList.create({ user_id: user.id, story_id: 5});
    }
    res.json({ user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET BOOKMARKED STORY
app.get('/bookmarks', async (req, res) => {
  const { email } = req.body;

  try {
    let user = await db.User.findOne({ where: { email: email } });
    if (user) {
      db.Story.findAll({
        include: [
          {
            model: db.ReadingList,
            where: { user_id: user.id },
            required: true,
            attributes: [] 
          },
        ],
      }).then(stories => {
        res.json(stories);
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
