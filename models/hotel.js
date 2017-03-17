const Sequelize = require('sequelize');
const db = require('./db');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.DECIMAL(1, 1),
		allowNull: false,
		validate: {
			min: 1,
			max: 5
		}
	},
	amenities: {
		type: Sequelize.STRING,
		allowNull: false
	}
}, {});

module.exports = Hotel;