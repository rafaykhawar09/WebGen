module.exports = function(sequelize, DataTypes) {
    var Hours = sequelize.define("Hours", {
      open:DataTypes.TIME,
      close:DataTypes.TIME,
    });
    return Hours;
  };
  