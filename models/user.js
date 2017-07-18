const Sequelize = require('sequelize');


const sequelize = new Sequelize('databasenew', 'aws_user', '7068125692', {
  host: 'dbinstance.cqnqcy54rxmz.us-east-1.rds.amazonaws.com',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const UserSchema= sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING
  },
  lastName: {
    type: Sequelize.STRING
  }
 },{
  	timestamps:false
 });

var User = module.exports = sequelize.model('user',UserSchema);

module.exports.createUser = function(newUser, callback){
	newUser.save(callback);
}
