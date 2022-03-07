// const ProductViewModel = require('./product-view-model');

class CategoryViewModel {
  constructor({ title, imgSrc, createdAt, updatedAt }) {
    this.title = title;
    this.imgSrc = imgSrc;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = CategoryViewModel;
