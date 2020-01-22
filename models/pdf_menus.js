module.exports = function(sequelize, DataTypes) {
    var Pdf_menus = sequelize.define("Pdf_menus", {
      menu_name: { type: DataTypes.STRING, allowNull: false},
      menu_url: { type: DataTypes.STRING, allowNull: false}
    });
    return Pdf_menus;
  };
  