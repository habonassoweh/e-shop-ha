// Products belongsTo Category
const Product = require("./Product");
// Categories have many Products
const Category = require("./Category");
// Products belongToMany Tags (through ProductTag)
const ProductTag = require("./ProductTag");
// Tags belongToMany Products (through ProductTag)
const Tag = require("./Tag");

Product.hasMany(Category, Tag, ProductTag, {
  foreignKey: "product_id",
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
