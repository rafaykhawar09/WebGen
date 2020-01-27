module.exports = function(sequelize, DataTypes) {
    var Price_description = sequelize.define("Price_description", {
      price_description:{ type: DataTypes.STRING, allowNull: false}
    });

    Price_description.associate = function(models) {
      Price_description.belongsTo(models.Menu, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Price_description;
  };
  