// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
const Product = require("./Product");
// Categories have many Products
const Category = require("./Category");
// Products belongToMany Tags (through ProductTag)
const ProductTag = require("./ProductTag");
// Tags belongToMany Products (through ProductTag)
const Tag = require("./Tag");

Product.hasMany(Category, Tag, ProductTag, {
  foreignKey: "product_name",
});

Category.hasMany(Product, {
  foreignKey: "category_name",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
