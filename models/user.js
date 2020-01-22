module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: { type: DataTypes.STRING, allowNull: false},
    name: DataTypes.STRING,
    password: { type: DataTypes.STRING, allowNull: false},
  });

  User.associate = function(models) {
    // We're saying that a User should belong to an Author
    // A User can't be created without an Author due to the foreign key constraint
    User.belongsTo(models.Account, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};