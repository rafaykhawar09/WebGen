module.exports = function(sequelize, DataTypes) {
    var Picture = sequelize.define("Picture", {
      picture_name: DataTypes.STRING,
      picture_url: DataTypes.STRING
    });
    Picture.associate = function(models) {
      Picture.belongsTo(models.Web_content, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Picture;
  };
  