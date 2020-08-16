const Sequelize  = require('sequelize');
const { INTEGER } = require('sequelize'); 

module.exports = (sequelize) => {


    class Book extends Sequelize.Model{}

    Book.init({

        id:{type: Sequelize.INTEGER, primarykey : true, autoIncrement: true},
        title:{type: Sequelize.VARCHAR, allowNull: false}, 
        author:{type: Sequelize.VARCHAR, allowNull: false}, 
        genre:{type: Sequelize.VARCHAR, allowNull: false}, 
        year:{type: Sequelize.INTEGER}

    },{});

    return Book; 

}; 

