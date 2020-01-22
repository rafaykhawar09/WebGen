module.exports = function(sequelize, DataTypes) {
    var Reserve_time = sequelize.define("Reserve_time", {
      reserve_time: DataTypes.STRING
    });
    return Reserve_time;
  };
  