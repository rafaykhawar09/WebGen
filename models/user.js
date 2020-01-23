module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: { type: DataTypes.STRING, allowNull: false},
    name: DataTypes.STRING,
    password: { type: DataTypes.STRING, allowNull: false},
  });

  User.associate = function(models) {
    User.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};