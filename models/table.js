module.exports = function(sequelize, DataTypes) {
    var Table = sequelize.define("Table", {
      table_number: DataTypes.INTEGER,
      capacity:{ type: DataTypes.INTEGER, allowNull: false},
      section:DataTypes.STRING,
      start_time: DataTypes.DATE,
      reserve_length_id:DataTypes.INTEGER
    });
    return Table;
  };
  