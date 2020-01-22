module.exports = function(sequelize, DataTypes) {
  var Privilege = sequelize.define("Privilege", {
    priv_name:{ type: DataTypes.STRING, allowNull: false},
    manage_user:DataTypes.BOOLEAN,
    design_web:DataTypes.BOOLEAN,
    manage_menu:DataTypes.BOOLEAN,
    view_print_menu:DataTypes.BOOLEAN,
    setup_reservation:DataTypes.BOOLEAN,
    view_reservation:DataTypes.BOOLEAN
  });

  Privilege.associate = function(models) {
    // We're saying that a Privilege should belong to an Author
    // A Privilege can't be created without an Author due to the foreign key constraint
    Privilege.belongsTo(models.Role, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Privilege;
};
