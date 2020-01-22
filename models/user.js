module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      email: { type: DataTypes.STRING, allowNull: false},
      name: DataTypes.STRING,
      password: { type: DataTypes.STRING, allowNull: false},
    });
    return User;
  };
  