module.exports = function(sequelize, DataTypes) {
  var Role = sequelize.define("Role", {
    role_name: { type: DataTypes.STRING, allowNull: false},
  });

  Role.associate = function(models) {
    // We're saying that a Role should belong to an Author
    // A Role can't be created without an Author due to the foreign key constraint
    Role.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Role;
};