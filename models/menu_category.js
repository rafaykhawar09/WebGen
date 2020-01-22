module.exports = function(sequelize, DataTypes) {
    var Menu_category = sequelize.define("Menu_category", {
      menu_category:  { type: DataTypes.STRING, allowNull: false}
    });
    return Menu_category;
  };
  