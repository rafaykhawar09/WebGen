module.exports = function(sequelize, DataTypes) {
    var Web_content = sequelize.define("Web_content", {
      logo_url: DataTypes.STRING,
      color_scheme: DataTypes.STRING,
      description: { type: DataTypes.TEXT, allowNull: false,defaultValue: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
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
