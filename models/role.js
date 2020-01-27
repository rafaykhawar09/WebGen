module.exports = function (sequelize, DataTypes) {
  var Role = sequelize.define("Role", {
    role_name: { type: DataTypes.STRING, allowNull: false },
  });

  Role.associate = function (models) {
    //   Role.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    // });
    Role.belongsTo(models.Privilege,{
      foreignKey: { allowNull: false}
    });
    Role.hasMany(models.User, {
      foreignKey: { allowNull: false}
    // Role.hasOne(models.Privilege, { onDelete: "cascade" });
  })
}

  return Role;
};