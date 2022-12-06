const Blogs = require('../../models/Blogs');
const auth = require('../../middleware/auth');

const express = require('express');
const router = express.Router();
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const mongoose = require('mongoose');

// ========================
// DATABASE STORAGE METHOD
// ========================

// Create mongo connection
const conn = mongoose.createConnection(process.env.MONGOURI);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('blogImages');
});

// Create storage engine
const storage = new GridFsStorage({
  url: process.env.MONGOURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'blogImages',
          //metadata: req.body,
        };
        resolve(fileInfo);
      });
    });
  },
});
const upload = multer({ storage });

// ========================
// DATABASE STORAGE METHOD
// ========================

// @route   POST api/blogs
// @desc    Post blog
// @access  Private
router.post('/', [auth, upload.single('file')], async (req, res) => {
  const { title, poster, category, date, text, favorite } = req.body;
  const postItem = {
    title,
    poster,
    category,
    date,
    text,
    favorite,
    image_filename: req.file.filename,
  };

  try {
    const item = new Blogs(postItem);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/blogs/:_id
// @desc    Update Blog
// @access  Private
router.put('/:_id', [auth, upload.single('file')], async (req, res) => {
  const { title, poster, category, date, text, favorite } = req.body;
  const postItem = {
    title,
    poster,
    category,
    date,
    text,
    favorite,
  };

  if (req.file) {
    postItem.image_filename = req.file.filename;
  }

  try {
    const item = await Blogs.findOneAndUpdate({ _id: req.params._id }, postItem);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/blogs/:_id
// @desc    Delete Blog
// @access  Private
router.delete('/:_id', auth, async (req, res) => {
  try {
    let oldBlog = await Blogs.findOne({ _id: req.params._id });
    await Blogs.findOneAndRemove({ _id: req.params._id });
    gfs.remove({ filename: oldBlog.image_filename, root: 'blogImages' }, (err, gridStore) => {
      if (err) {
        return res.status(404).json(err);
      }
    });
    res.json(oldBlog);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/blogs
// @desc    Get All Blogs
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await Blogs.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/blogs/three
// @desc    Get 3 blogs by most recent
// @access  Public
router.get('/three', async (req, res) => {
  try {
    const items = await Blogs.find().sort({ date: 1 }).limit(3);
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/blogs/favorite
// @desc    Get Favorite Blogs
// @access  Public
router.get('/favorite', async (req, res) => {
  try {
    const items = await Blogs.find({ favorite: 'true' }).limit(3);
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/blogs/:_id
// @desc    Get One blog by id
// @access  Public
router.get('/:_id', async (req, res) => {
  try {
    const item = await Blogs.findOne({ _id: req.params._id });
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send;
  }
});

// ===========================
// IMAGE ROUTES
// ===========================

// @route   GET api/blogs/image/:filename
// @desc    Get Blog Image
// @access  Private
router.get('/image/:filename', async (req, res) => {
  await gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if files
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'No Files Exist',
      });
    }
    // Check if image
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      // Read output to browser
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not jpeg or pgn Image',
      });
    }
  });
});

// @route   DELETE api/blogs/deleteimage/:filename
// @desc    Delete Image By Name
// @access  private
router.delete('/deleteimage/:filename', auth, async (req, res) => {
  const delImage = await gfs.remove(
    { filename: req.params.filename, root: 'blogImages' },
    (err, GridFSBucket) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
    }
  );
  res.json(delImage);
});

// @route   DELETE api/blogs/deleteimage/id/:files_id
// @desc    Delete Image By id
// @access  Private
router.delete('/deleteimage/id/:files_id', auth, async (req, res) => {
  const delImage = await gfs.remove(
    { _id: req.params.files_id, root: 'blogImages' },
    (err, GridFSBucket) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
    }
  );
  res.json(delImage);
});

// @route   POST api/blogs/uploadimage
// @desc    Upload image
// @access  Private
router.post('/uploadimage', [auth, upload.single('file')], (req, res) => {
  res.json({ file: req.file });
});

module.exports = router;
