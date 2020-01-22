module.exports = function(sequelize, DataTypes) {
    var Menu_sub_category = sequelize.define("Menu_sub_category", {
      menu_sub_category:{ type: DataTypes.STRING, allowNull: false}
    });
    return Menu_sub_category;
  };
  