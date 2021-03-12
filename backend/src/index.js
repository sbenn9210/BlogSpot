const express = require('express');
const helmet = require('helmet');
const db = require('../src/db/models');
const bcrypt = require('bcrypt');
const port = 4000;

const app = express();

app.use(helmet());

app.use(express.json({ extended: false }));

// @route     POST  /register
// @desc      Register a user
// @access    Public
app.post('/register', async (req, res) => {
  console.log(req.body);
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

// @route     GET /drafts
// @desc      Get Drafts
// @access    Public
app.get('/drafts', async (req, res) => {
  try {
    let drafts = await db.Story.findAll({
      where: { published: false },
      order: [['updatedAt', 'DESC']],
    });
    res.json({ drafts });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET /published
// @desc      Get Published
// @access    Public
app.get('/publishes', async (req, res) => {
  try {
    let publishes = await db.Story.findAll({
      where: { published: true },
      order: [['updatedAt', 'DESC']],
    });
    res.json({ publishes });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST  /publish
// @desc      Publish a story
// @access    Public
app.post('/publish', async (req, res) => {
  const { author, title, description, image, body, published } = req.body;
  try {
    if (title !== '') {
      let story = await db.Story.create({
        author,
        title,
        description,
        image,
        body,
        published,
      });
      res.json({ story });
    } else {
      res.json({ msg: 'Please enter title' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     PUT  /publish
// @desc      Update a story
// @access    Public
app.put('/publish', async (req, res) => {
  const { id, author, title, description, image, body, published } = req.body;
  try {
    if (title !== '') {
      let story = await db.Story.update(
        { title: title, body: body, published: published },
        { where: { id: id }, returning: true }
      );

      res.json({ story });
    } else {
      res.json({ msg: 'Please enter title' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST  /bookmarks
// @desc      Bookmark a story
// @access    Public
app.post('/bookmarks', async (req, res) => {
  const { email, storyId } = req.body;
  try {
    let user = await db.User.findOne({ where: { email: email } });
    if (user) {
      db.ReadingList.create({
        user_id: user.id,
        story_id: storyId,
      }).then(bookMarked => {
        res.json({ bookMarked });
      });
    } else {
      return res.status(400).json({ msg: 'Invalid Request' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     GET  /bookmarks
// @desc      Get bookmarked stories
// @access    Public
app.get('/bookmarks', async (req, res) => {
  const { email } = req.body;
  try {
    let user = await db.User.findOne({ where: { email: email } });
    if (user) {
      console.log(user);
      db.Story.findAll({
        include: [
          {
            model: db.ReadingList,
            where: { user_id: user.id },
            required: true,
            attributes: [],
          },
        ],
      })
        .then(stories => {
          res.json(stories);
        })
        .catch(err => {
          console.log(err);
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
