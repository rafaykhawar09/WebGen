module.exports = function(sequelize, DataTypes) {
    var Privilege = sequelize.define("Privilege", {
      priv_name:{ type: DataTypes.STRING, allowNull: false},
      user:DataTypes.BOOLEAN,
      web:DataTypes.BOOLEAN,
      menu:DataTypes.BOOLEAN,
      menu_print:DataTypes.BOOLEAN,
      schedule:DataTypes.BOOLEAN,
      reservation:DataTypes.BOOLEAN
    });
    return Privilege;
  };
  