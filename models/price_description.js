module.exports = function(sequelize, DataTypes) {
    var Price_description = sequelize.define("Price_description", {
      price_description:{ type: DataTypes.STRING, allowNull: false}
    });
    return Price_description;
  };
  