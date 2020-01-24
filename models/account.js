module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    account_owner:{ type: DataTypes.STRING, allowNull: false},
    business_type:{
      type: DataTypes.STRING,
      defaultValue: "Restaurant"
    },
    company_name:{ type: DataTypes.STRING, allowNull: false},

    address: { type: DataTypes.STRING, allowNull: false},
    phone:{ type: DataTypes.TEXT, allowNull: false},
    route:DataTypes.STRING
  });

  Account.associate = function(models) {
    Account.hasMany(models.User, {
      onDelete: "cascade"
    });
    Account.hasMany(models.Hours, {
      onDelete: "cascade"
    });
    Account.hasMany(models.Pdf_menus, {
      onDelete: "cascade"
    });
    Account.hasMany(models.Web_content, {
      onDelete: "cascade"
    });
    Account.hasMany(models.Menu, {
      onDelete: "cascade"
    });
    Account.hasMany(models.Table, {
      onDelete: "cascade"
    });
  };

  return Account;
};