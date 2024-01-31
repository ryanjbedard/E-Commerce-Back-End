// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category, {
  foreignKey: 'Product_id',
  onDelete: 'CASCADE',
});


// Categories have many Products
Category.belongsTo(Product, {
  foreignKey: 'Product_id',
});


// Products belongToMany Tags (through ProductTag)
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Tags belongToMany Products (through ProductTag)
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
