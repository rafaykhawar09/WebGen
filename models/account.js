module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    account_owner:{ type: DataTypes.STRING, allowNull: false},
    business_type:{
      type: DataTypes.STRING,
      defaultValue: "Restaurant"
    },
    company_name:{ type: DataTypes.STRING, allowNull: false},
    phone:{ type: DataTypes.INTEGER, allowNull: false},
    route:DataTypes.STRING
  });

  Account.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Account.hasMany(models.User, {
      onDelete: "cascade"
    });
  };

  return Account;
};
