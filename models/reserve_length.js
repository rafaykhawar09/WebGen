module.exports = function(sequelize, DataTypes) {
    var Reserve_length = sequelize.define("Reserve_length", {
      capacity: DataTypes.INTEGER,
      reserve_length:DataTypes.INTEGER
    });
    return Reserve_length;
  };
  