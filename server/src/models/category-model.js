const Mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
// const { isEmail } = require('validator');

const categorySchema = new Mongoose.Schema(
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
    imgSrc: {
      type: "string",
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

categorySchema.plugin(uniqueValidator);

const CategoryModel = Mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
