module.exports = function(sequelize, DataTypes) {
    var Role = sequelize.define("Role", {
      role_name: { type: DataTypes.STRING, allowNull: false},
    });
    return Role;
  };
  