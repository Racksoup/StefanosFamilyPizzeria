const MenuItems = require('../../models/MenuItems');
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

const config = require('config');
const db = config.get('mongoURI');

// Create mongo connection
const conn = mongoose.createConnection(db);

// Init gfs
let gfs;

conn.once('open', () => {
  // Init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('menuitemsImages');
});

// Create storage engine
const storage = new GridFsStorage({
  url: db,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'menuitemsImages',
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

// @route   POST api/menuitems
// @desc    Post menuitem
// @access  Private
router.post('/', [auth, upload.single('file')], async (req, res) => {
  const { title, category, text, price, bestSeller } = req.body;
  const postItem = {
    title,
    category,
    text,
    price,
    bestSeller,
    image_filename: req.file.filename,
  };

  try {
    const item = new MenuItems(postItem);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/menuitems/:_id
// @desc    Update Blog
// @access  Private
router.put('/:_id', [auth, upload.single('file')], async (req, res) => {
  const { title, category, text, price, bestSeller } = req.body;
  const postItem = {
    title,
    category,
    text,
    price,
    bestSeller,
    image_filename: req.file.filename,
  };

  try {
    let oldBlog = await MenuItems.findOne({ _id: req.params._id });
    gfs.remove({ filename: oldBlog.image_filename, root: 'menuitemsImages' }, (err, gridStore) => {
      if (err) {
        return res.status(404).json(err);
      }
    });
    const item = await MenuItems.findOneAndUpdate({ _id: req.params._id }, postItem);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/menuitems/:_id
// @desc    Delete Blog
// @access  Private
router.delete('/:_id', auth, async (req, res) => {
  try {
    let oldBlog = await MenuItems.findOne({ _id: req.params._id });
    await MenuItems.findOneAndRemove({ _id: req.params._id });
    gfs.remove({ filename: oldBlog.image_filename, root: 'menuitemsImages' }, (err, gridStore) => {
      if (err) {
        return res.status(404).json(err);
      }
    });
    res.json({ msg: 'Menu-Item Deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/menuitems
// @desc    Get All MenuItems
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await MenuItems.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/menuitems/category/:category
// @desc    Get Menu-Items by category
// @access  Public
router.get('/category/:category', async (req, res) => {
  try {
    const items = await MenuItems.find({ category: req.params.category });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/menuitems/best-seller
// @desc    Get Menu-Items if best-seller
// @access  Public
router.get('/best-seller', async (req, res) => {
  try {
    const items = await MenuItems.find({ bestSeller: true });
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/menuitems/:_id
// @desc    Get One menuitem by id
// @access  Public
router.get('/:_id', async (req, res) => {
  try {
    const item = await MenuItems.findOne({ _id: req.params._id });
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send;
  }
});

// ===========================
// IMAGE ROUTES
// ===========================

// @route   GET api/menuitems/image/:filename
// @desc    Get MenuItem Image
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

module.exports = router;
