module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DatanhjbjTypes.TEXT
  });
  return Example;
};
