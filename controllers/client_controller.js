
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const { Client, Categorie,Quartier, Repa, Modedepayement, Accompagnement } = require('../models');
const categorie = require('../models/categorie');
const clientService = require('../services/client_service');
const categorieController = require('./categorie_controller');
const modedepayementController = require('./modedepayement_controller');
const quartierController = require('./quartier_controller');
const repaController = require('./repa_controller');
const clientController = {}

clientController.includeClient = [
    {
        model:Quartier,
        include:quartierController.includeQuartier
    }

]


clientController.add = async (req, res) => {
    try {
        const response = await Client.create(req.body)
        const client = await Client.findOne({
            include: clientController.includeClient,
            where: {
                id: response.id
            }

        })

        res.status(201).send(client)
    } catch (err) {
        console.log(err.message)
    }
}

clientController.getAll = async (req, res) => {

    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Client.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                order: [['id', 'desc']],
                where: {
                    ...parametresRequete

                },
                include: clientController.includeClient,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

clientController.update = async (req, res) => {
    try {
        const response = await Client.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const client = Client.findOne({
            where: { id: req.params.id },
            include: clientController.includeClient
        })
        res.status(200).send(client)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

clientController.delete = async (req, res) => {
    try {
        const response = await Client.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Client supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

clientController.getById = async (req, res) => {
    try {
        const response = await Client.findOne({
            where: { id: request.params.id },
            include: clientController.includeClient
        })
        if (response == null) {
            res.status(404).send('Client non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}

clientController.getBy = async (req, res) => {
    try {
        const response = await Client.findAndCountAll({
            where: req.body,
            include: clientController.includeClient
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

clientController.bootstrap = async (req, res) => {
    try {
        const quartiers = await Quartier.findAll({
            include: quartierController.includeQuartier
        })
        const repas = await Repa.findAll({
            include: repaController.includeRepa
        })
        const modedepayements = await Modedepayement.findAll({
            include: modedepayementController.includeModedepayement
        })
        const categories = await Categorie.findAll(
            {
                include: categorieController.includeCategorie
            }
        )


const accompagnements = await Accompagnement.findAll()

        retour = {
            categories: categories,
            repas: repas,
            modedepayements: modedepayements,
            quartiers: quartiers,
            accompagnements:accompagnements
        }
        return res.status(200).send(retour)
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)
    }
}

clientController.login = async (req, res) => {
    const { telephone, motdepasse } = req.body
    if (telephone == null) {
        res.status(401).send("Numéro de téléphone requis")
        return
    }
    if (motdepasse == null) {
        res.status(401).send("Mot de passe requis")
        return
    }
    try {

        const client = await Client.findOne({
            where: {
                telephone: telephone,
                motdepasse: motdepasse
            }
        })
        if (client == null) {
            res.status(404).send('téléphone ou mot de passe incorrect')
            return
        }
        if (client.actif == false) {
            res.status(402).send("votre compte est désactivé, veuilez contacter le service client")
            return
        }
        else {
            const data = await clientService.getDataClient(client.id)
            res.status(200).send(data)
        }

    } catch (error) {
        console.log(error)
        res.status(500).send(error.message)

    }


}


module.exports = clientController

