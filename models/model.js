const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/tripplanner')



var Place = db.define('place', {},{});


var Hotel = db.define('hotel', {}, {})

var Activity = db.define('activity', {}, {});


var Restaurant = db.define('restaurant', {}, {})



















module.exports = {
  Place:Place,
  Hotel: Hotel,
  Activity: Activity ,
  Restaurant: Restaurant
}
