const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require("sequelize");
const fonctions = require('../fonctions');
const { Role, Utilisateur, Activite, Privilege } = require("../models");

const roleController = {}

roleController.includeRole = []

roleController.add = async (req, res) => {
    try {
        const response = await Role.create(req.body)

        var listeActivites = await Activite.findAll()
        // console.log(listeActivites)

        listeActivites.forEach(async activite => {
            await Privilege.create({
                activite: activite.id,
                role: response.id,
                actif: true,
                description: `privilege du role ${response.name} sur l'activite ${activite.nom}`
            })
        });

        res.status(201).send(response)
    } catch (err) {
        console.log(err.message)
    }
}



roleController.getAll = async (req, res) => {

    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)

    // console.log(JSON.stringify(parametres))
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Role.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                where: {
                    ...parametresRequete
                },
                include: roleController.includeRole
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

roleController.update = async (req, res) => {
    try {
        const response = await Role.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        const role = await Role.findOne({
            where: { id: rew.params.id },
            include: roleController.includeRole
        })
        res.status(200).send(role)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

roleController.delete = async (req, res) => {
    try {
        const response = await Role.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send("Role supprimé avec succès")
    } catch (err) {
        res.status(500).send(err.message)
    }
}

roleController.getById = async (req, res) => {
    try {
        const response = await Role.findone({
            where:{id: req.params.id},
            include: roleController.includeRole
        })
        if (response == null) {
            res.status(404).send("role non trouvé")
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


roleController.getBy = async (req, res) => {

    try {
        response = await Role.findAll({
            where: req.body,
            include:roleController.includeRole
        })
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = roleController

