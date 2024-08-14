const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: "https://images.unsplash.com/photo-1564135624576-c5c88640f235",
    set: (v) =>
      v === ""
        ? "https://images.unsplash.com/photo-1564135624576-c5c88640f235"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
