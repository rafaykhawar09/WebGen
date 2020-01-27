module.exports = function(sequelize, DataTypes) {
    var Table = sequelize.define("Table", {
      table_number: { type: DataTypes.INTEGER, unique: true},
      capacity:{ type: DataTypes.INTEGER, allowNull: false},
      section:DataTypes.STRING,
      start_time: DataTypes.DATE,
      end_time: DataTypes.DATE,
      reserve_minutes: DataTypes.INTEGER,
      reserve_length_id:DataTypes.INTEGER
    });
    Table.associate = function(models) {
      Table.belongsTo(models.Account, {
        foreignKey: {
          allowNull: false
        }
      });
      Table.belongsTo(models.Area, {
        foreignKey: {
          allowNull: false
        }
      });

    };
  
    return Table;
  };
  