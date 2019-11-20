import express from 'express'
import expositorModel from './../models/expositor'

var routerExpositor = express.Router();
//Presenta todos los registros
routerExpositor.get('/', (req, res) => {
    expositorModel.findAll()
        .then(expositor => {
            res.send(expositor);
        })
        .catch(error => {
            res.send(error);
        })

});
//Presenta el registro indicado por un ID
routerExpositor.get('/:id', (req, res) => {
    expositorModel.findAll({
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
//Permite introducir registros a la tabla expositor
routerExpositor.post('/', (req, res) => {
    let newEvent = req.body;
    expositorModel.create(newEvent)
        .then(charla => {
            res.send(charla);
        })
        .catch(error => {
            res.status(400).send(error.errors);
        })
});
//Permite Actualiza un registro mediante un identificador
routerExpositor.put('/:id', (req, res) => {
    let updateEvent = req.body;
    expositorModel.update(updateEvent, {
            where: {
                id: req.params.id
            }
        })
        .then(charla => {
            res.send(charla);
        })
        .catch(error => {
            res.status(400).send(error.errors);
        })
})
//Permite Eliminar un registro mediante un identificador
routerExpositor.delete('/:id', (req, res) => {
    expositorModel.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => {
            res.send();
        })
        .catch(error => {
            res.status(400).send(error.errors);
        })
})
export default routerExpositor;