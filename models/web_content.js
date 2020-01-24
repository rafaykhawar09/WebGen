module.exports = function(sequelize, DataTypes) {
    var Web_content = sequelize.define("Web_content", {
      logo_url: DataTypes.STRING,
      color_scheme: DataTypes.STRING,
      description: { type: DataTypes.TEXT, allowNull: false},
      announcement: DataTypes.STRING,
      advance_reservation_limit:{ type: DataTypes.INTEGER, defaultValue: 90},
    });

    Web_content.associate = function(models) {
      Web_content.belongsTo(models.Account, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Web_content;
  };
