const SaleImages = require('../../models/SaleImages');
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
  gfs.collection('saleImages');
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
          bucketName: 'saleImages',
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

// @route   POST api/saleImages
// @desc    Post saleImage
// @access  Private
router.post('/', [auth, upload.single('file')], async (req, res) => {
  const postItem = {
    image_filename: req.file.filename,
  };

  try {
    const item = new SaleImages(postItem);
    await item.save();
    res.json(item);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/saleImages/:_id
// @desc    Delete Blog
// @access  Private
router.delete('/:_id', auth, async (req, res) => {
  try {
    let oldSaleImage = await SaleImages.findOne({ _id: req.params._id });

    res.json(oldSaleImage);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/saleImages
// @desc    Get All SaleImages
// @access  Public
router.get('/', async (req, res) => {
  try {
    const items = await SaleImages.find();
    res.json(items);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/saleImages/image/:filename
// @desc    Get MenuItem Image
// @access  Public
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

// @route   DELETE api/menuitem/deleteimage/:filename
// @desc    Delete Image By Name
// @access  private
router.delete('/deleteimage/:filename', auth, async (req, res) => {
  const delImage = await gfs.remove(
    { filename: req.params.filename, root: 'saleImages' },
    (err, GridFSBucket) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
    }
  );
  res.json(delImage);
});

// @route   DELETE api/menuitem/deleteimage/id/:files_id
// @desc    Delete Image By id
// @access  Private
router.delete('/deleteimage/id/:files_id', auth, async (req, res) => {
  const delImage = await gfs.remove(
    { files_id: req.params.files_id, root: 'saleImages' },
    (err, GridFSBucket) => {
      if (err) {
        return res.status(404).json({ err: err });
      }
    }
  );
  res.json(delImage);
});

module.exports = router;
