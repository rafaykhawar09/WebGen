module.exports = function(sequelize, DataTypes) {
    var Menu = sequelize.define("Menu", {
      picture_url: DataTypes.STRING,
      menu_item: { type: DataTypes.STRING, allowNull: false},
      item_description: { type: DataTypes.STRING, allowNull: false},
      price: { type: DataTypes.DECIMAL, allowNull: false},
      optional_price: DataTypes.DECIMAL,
      gluten_free_ind:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vegan_ind:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      vegetarian_ind:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
    });
    return Menu;
  };
  