'use strict';
module.exports = function(sequelize, DataTypes) {
  var Cart = sequelize.define('Cart', {
    userid: DataTypes.INTEGER,
    itemid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Cart;
};
