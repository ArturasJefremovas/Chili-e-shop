// const CategoryViewModel = require('./category-view-model');

class ProductViewModel {
  constructor({ title, price, desc, weight, spicinessLevel, imgSrc, category, createdAt, updatedAt}) {
    this.title = title;
    this.price = price;
    this.desc = desc;
    this.weight = weight;
    this.spicinessLevel = spicinessLevel;
    this.imgSrc = imgSrc;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = ProductViewModel;
