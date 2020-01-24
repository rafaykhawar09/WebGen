module.exports = function(sequelize, DataTypes) {
    var Pdf_menus = sequelize.define("Pdf_menus", {
      menu_name: { type: DataTypes.STRING, allowNull: false},
      menu_url: { type: DataTypes.STRING, allowNull: false}
    });
    Pdf_menus.associate = function(models) {
      Pdf_menus.belongsTo(models.Account, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Pdf_menus;
  };
  