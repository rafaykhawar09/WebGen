module.exports = function(sequelize, DataTypes) {
    var Picture = sequelize.define("Picture", {
      hero_image_url: DataTypes.STRING,
      logo_url: DataTypes.STRING,
      story_background_url: DataTypes.STRING,
      story_pic1_url: DataTypes.STRING,
      story_pic2_url: DataTypes.STRING
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
  