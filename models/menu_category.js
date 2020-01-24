module.exports = function(sequelize, DataTypes) {
    var Menu_category = sequelize.define("Menu_category", {
      category_name:  { type: DataTypes.STRING, allowNull: false}
    });
    // Menu_category.associate = function(models) {
    //   Menu_category.belongsTo(models.Menu, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    Menu_category.associate = function(models) {
      Menu_category.hasMany(models.Menu, {
      });
      // Menu.hasOne(models.Menu_sub_category, {
      //   onDelete: "cascade"
      // });
  };

    return Menu_category;
  };
  