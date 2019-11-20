import express from 'express'
import charlaModel from './../models/charla'
import expositorModel from './../models/expositor'

var routerCharla = express.Router();
//Presenta todos los registros
routerCharla.get('/', (req, res) => {
    charlaModel.findAll({
            include: {
                model: expositorModel
            }
        })
        .then(charla => {
            res.send(charla);
        })
        .catch(error => {
            res.send(error);
        })

});
//Presenta el registro indicado por un ID
routerCharla.get('/:id', (req, res) => {
    charlaModel.findAll({
            where: {
                id: req.params.id
            }
        })
        .then(charla => {
            res.send(charla);
        })
        .catch(error => {
            res.send(error);
        })
});
//Permite introducir registros a la tabla charla
routerCharla.post('/', (req, res) => {
    charlaModel.create(req.body)
        .then(charla => {
            res.send(charla);
        })
        .catch(error => {
            res.status(400).send(error);
        })
});
//Permite Actualiza un registro mediante un identificador
routerCharla.put('/:id', (req, res) => {
    let updateEvent = req.body;
    updateEvent.updatedAt = Date.now();
    charlaModel.update(updateEvent, {
            where: {
                id: req.params.id
            }
        })
        .then(charla => {
            res.send(charla);
        })
        .catch(error => {
            res.status(400).send('Error in insert new record');
        })
})
//Permite Eliminar un registro mediante un identificador
routerCharla.delete('/:id', (req, res) => {

    charlaModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send();
        })
        .catch(error => {
            res.status(400).send(error);
        })
})

export default routerCharla;