module.exports = function(sequelize, DataTypes) {
    var Privilege = sequelize.define("Privilege", {
      priv_name:{ type: DataTypes.STRING, allowNull: false},
      web:DataTypes.BOOLEAN,
      menu:DataTypes.BOOLEAN,
      menu_print:DataTypes.BOOLEAN,
      reservation_setup:DataTypes.BOOLEAN,
      reservation_view:DataTypes.BOOLEAN
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
  