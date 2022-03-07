const CategoryModel = require('../models/category-model');
const CategoryViewModel = require('../view-models/category-view-model');

const getCategories = async (req, res) => {
  const categoryDocs = await CategoryModel.find();
  res.status(200).json({
    category: categoryDocs.map((category) => new CategoryViewModel(category)),
  });
};

const createCategory = async (req, res) => {
  const { title, imgSrc } = req.body;
  const categoryDoc = await CategoryModel({
    title,
    imgSrc,
  });

  try {
    await categoryDoc.save();
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: `Category '${title}' already exists`,
    });
  }
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryDoc = await CategoryModel.findById(id);
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' not found`,
    });
  }
};

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const categoryDoc = await CategoryModel.findByIdAndDelete(id);
    const category = new CategoryViewModel(categoryDoc);
    res.status(200).json(category);
  } catch (error) {
    res.status(404).json({
      message: "Category not found",
    });
  }
};
const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { title, imgSrc } = req.body;
  try {
    await CategoryModel.findById(id);

    try {
      const categoryDoc = await CategoryModel.findByIdAndUpdate(
        id,
        { title, imgSrc },
        { new: true }
      );
      const category = new CategoryViewModel(categoryDoc);
      res.status(200).json(category);
    } catch (error) {
      res.status(400).json({ message: "Invalid parameters" });
    }
  } catch (error) {
    res.status(404).json({ message: "This category does not exist" });
  }
};

const replaceCategory = async (req, res) => {
  const { id } = req.params;
  const { title, imgSrc } = req.body;
  try {
    await CategoryModel.findById(id);

    try {
      if (title) {
        const categoryDoc = await CategoryModel.findByIdAndUpdate(
          { _id: id },
          { title, imgSrc },
          {
            new: true,
            runValidators: true,
          }
        );
        const category = new CategoryViewModel(categoryDoc);
        res.status(200).json(category);
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid parameters" });
    }
  } catch (error) {
    res.status(404).json({ message: "This category does not exist" });
  }
};

module.exports = {
  getCategories,
  createCategory,
  getCategory,
  deleteCategory,
  updateCategory,
  replaceCategory,
};
