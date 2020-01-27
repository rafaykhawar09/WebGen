module.exports = function(sequelize, DataTypes) {
    var Area = sequelize.define("Area", {
      area_name:  { type: DataTypes.STRING, allowNull: false}
    });
    Area.associate = function(models) {
      Area.hasMany(models.Table, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Area;
  };
  