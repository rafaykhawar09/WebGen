module.exports = function(sequelize, DataTypes) {
    var Menu_sub_category = sequelize.define("Menu_sub_category", {
      sub_category_name:{ type: DataTypes.STRING, allowNull: false}
    });
    // Menu_sub_category.associate = function(models) {
    //   Menu_sub_category.belongsTo(models.Menu, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
    Menu_sub_category.associate = function(models) {
      Menu_sub_category.hasMany(models.Menu, {
      });
    }
    return Menu_sub_category;
  };
  