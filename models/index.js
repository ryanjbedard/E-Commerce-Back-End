// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Products.hasOne(Category, {
  foreignKey: 'Product_id',
  onDelete: 'CASCADE',
});


// Categories have many Products
Cagegory.belongsTo(Products, {
  foreignKey: 'Product_id',
});


// Products belongToMany Tags (through ProductTag)
Products.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Tags belongToMany Products (through ProductTag)
Catetgories.hasMany(Products, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
