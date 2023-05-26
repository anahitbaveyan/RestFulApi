const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type:
    DataTypes.STRING,
    allowNull: false,
  },
});

// User.prototype.comparePassword = async function (password) {
//   return bcrypt.compare(password, this.password);
// };

module.exports = User;
