const ProductModel = require('../models/product-model');
const ProductViewModel = require('../view-models/product-view-model');

const getProducts = async (req, res) => {
  const productDocs = await ProductModel.find();
  res.status(200).json({
    product: productDocs.map((product) => new ProductViewModel(product)),
  });
};

const createProduct = async (req, res) => {
  const { title, price, desc, weight, spicinessLevel, imgSrc, category } = req.body;
  const productDoc = await ProductModel({
    title,
    price,
    desc,
    weight,
    spicinessLevel,
    imgSrc,
    category
  });

  try {
    await productDoc.save();
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: `Product '${title}' already exists`,
    });
  }
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await ProductModel.findById(id);
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: `Element with id: '${id}' not found`,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDoc = await ProductModel.findByIdAndDelete(id);
    const product = new ProductViewModel(productDoc);
    res.status(200).json(product);
  } catch (error) {
    res.status(404).json({
      message: "Product not found",
    });
  }
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, desc, weight, spicinessLevel, imgSrc, category } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      const productDoc = await ProductModel.findByIdAndUpdate(
        id,
        { title, price, desc, weight, spicinessLevel, imgSrc, category },
        { new: true }
      );
      const product = new ProductViewModel(productDoc);
      res.status(200).json(product);
    } catch (error) {
      res.status(400).json({ message: "Invalid parameters" });
    }
  } catch (error) {
    res.status(404).json({ message: "This product does not exist" });
  }
};

const replaceProduct = async (req, res) => {
  const { id } = req.params;
  const { title, price, desc, weight, spicinessLevel, imgSrc, category } = req.body;
  try {
    await ProductModel.findById(id);

    try {
      if (title) {
        const productDoc = await ProductModel.findByIdAndUpdate(
          { _id: id },
          { title, price, desc, weight, spicinessLevel, imgSrc, category },
          {
            new: true,
            runValidators: true,
          }
        );
        const product = new ProductViewModel(productDoc);
        res.status(200).json(product);
      } else {
        throw new Error();
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid parameters" });
    }
  } catch (error) {
    res.status(404).json({ message: "This product does not exist" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  replaceProduct,
};
