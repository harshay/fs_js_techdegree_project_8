const Sequelize  = require('sequelize');
const { INTEGER } = require('sequelize'); 

module.exports = (sequelize) => {


    class Book extends Sequelize.Model{}

    Book.init({

        id:{type: Sequelize.INTEGER, primaryKey : true, autoIncrement: true},
        title:{type: Sequelize.STRING, allowNull: false}, 
        author:{type: Sequelize.STRING, allowNull: false}, 
        genre:{type: Sequelize.STRING, allowNull: false}, 
        year:{type: Sequelize.INTEGER}

    },{sequelize});

    return Book; 

}; 

