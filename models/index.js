// Products belongsTo Category
const Product = require("./Product");
// Categories have many Products
const Category = require("./Category");
// Products belongToMany Tags (through ProductTag)
const ProductTag = require("./ProductTag");
// Tags belongToMany Products (through ProductTag)
const Tag = require("./Tag");

Product.hasMany(Category, {
  foreignKey: "product_id",
});
Product.hasMany(Tag, {
  foreignKey: "product_id",
});
Product.hasMany(ProductTag, {
  foreignKey: "product_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
