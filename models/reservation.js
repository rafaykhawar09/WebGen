module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
      date: DataTypes.DATEONLY,
      start_time: DataTypes.DATE,
      guest_name:DataTypes.STRING,
      special_request:DataTypes.STRING,
      party_size:DataTypes.INTEGER
    });
    return Reservation;
  };
  