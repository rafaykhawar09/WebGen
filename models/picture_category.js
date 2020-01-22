module.exports = function(sequelize, DataTypes) {
    var Picture_category = sequelize.define("Picture_category", {
      pic_category_name: DataTypes.STRING
    });
    return Picture_category;
  };
  