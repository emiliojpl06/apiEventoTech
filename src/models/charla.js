import Sequelize from 'sequelize'
import sequelize from './connection'
import expositorModel from './expositor'

const charlaModel = sequelize.define('charlas', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expositor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    hora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
})

charlaModel.belongsTo(expositorModel)

export default charlaModel;