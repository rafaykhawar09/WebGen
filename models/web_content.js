module.exports = function(sequelize, DataTypes) {
    var Web_content = sequelize.define("Web_content", {
      logo_url: DataTypes.STRING,
      color_scheme: DataTypes.STRING,
      description: { type: DataTypes.STRING, allowNull: false},
      address: { type: DataTypes.STRING, allowNull: false},
      announcement: DataTypes.STRING,
      advance_reservation_limit:{ type: DataTypes.INTEGER, defaultValue: 90},
    });
    return Web_content;
  };
