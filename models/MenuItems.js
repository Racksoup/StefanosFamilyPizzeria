const mongoose = require('mongoose');

const MenuItemsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image_filename: {
    type: String,
    required: true,
  },
});

module.exports = MenuItems = mongoose.model('menuitems', MenuItemsSchema);
