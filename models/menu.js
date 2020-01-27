module.exports = function(sequelize, DataTypes) {
    var Menu = sequelize.define("Menu", {
      picture_url: DataTypes.STRING,
      menu_item: { type: DataTypes.STRING, allowNull: false},
      item_description: { type: DataTypes.STRING, allowNull: false},
      price: { type: DataTypes.DECIMAL(10, 2), allowNull: false},
      optional_price: DataTypes.DECIMAL(10, 2),
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

    Menu.associate = function(models) {
      Menu.belongsTo(models.Account, {
        foreignKey: {
          allowNull: false
        }
      });
      Menu.belongsTo(models.Menu_category, {
        foreignKey: {
          allowNull: false
        }
      });
      Menu.belongsTo(models.Menu_sub_category, {
        foreignKey: {
          allowNull: false
        }
      });
      // Menu.hasOne(models.Menu_category, {
      //   onDelete: "cascade"
      // });
      // Menu.hasOne(models.Menu_sub_category, {
      //   onDelete: "cascade"
      // });
  };

    return Menu;
  };
  