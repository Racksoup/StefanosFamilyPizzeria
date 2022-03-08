const mongoose = require('mongoose');

const SaleImagesSchema = new mongoose.Schema({
  image_filename: { type: String },
});

module.exports = SaleImages = mongoose.model('saleImages', SaleImagesSchema);
