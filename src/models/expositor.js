import Sequelize from 'sequelize'
import sequelize from './connection'

const expositorModel = sequelize.define('expositor', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    correo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuenta_github: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

export default expositorModel;