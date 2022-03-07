const Mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// const { isEmail } = require('validator');

const productSchema = new Mongoose.Schema(
  {
    id: {
      type: 'number',
      required: true,
      unique: true,
    },
    title: {
      type: "string",
      required: true,
      unique: true,
    },
    price: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
      required: true,
    },
    weight: {
      type: "string",
      required: true,
    },
    spicinessLevel: {
      type: "string",
      required: true,
    },
    imgSrc: {
      type: "string",
      required: true,
    },
    category: {
      type: Mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  { timestamps: true }
);

productSchema.plugin(uniqueValidator);

const ProductModel = Mongoose.model("Product", productSchema);

module.exports = ProductModel;
