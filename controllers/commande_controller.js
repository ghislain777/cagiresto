
const { response, request } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const {  Commande, Lignecommande } = require('../models');
const commandeController = {}

commandeController.includeCommande = [

]


commandeController.add = async (req, res) => {
const {lignecommandes,datelivraison, prixtotal,prixrepa,prixlivraison, client, adresse, modedepayement} = req.body;
try {
    const commande = await Commande.create({
        datelivraison: Date.parse(datelivraison),
        prixtotal:prixtotal, 
        prixrepa:prixrepa,
        prixlivraison:prixlivraison,
        statut:"Nouveau", 
        client:client,
        adresse:adresse
    })
    
    const lignes = JSON.parse(lignecommandes);
    lignes.forEach(async lignecommande => {
        lignecommande.commande = commande.id
        await lignecommande.create(lignecommande)
        
    });
    
    retour = await Commande.findOne({
        where:{id: commande.id},
        include:commandeController.includeCommande
    })
    
    res.status(200).send(retour)
} catch (error) {
    console.log(error)
    res.status(500).send(error.message)
}



}

commandeController.getAll = async (req, res) => {

const parametres = fonctions.removeNullValues(req.query)
const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Commande.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage*1,
                order:[['id', 'desc']],
                where: {
                    ...parametresRequete
                 
                },
                include: commandeController.includeCommande,
            }
        )
        res.send(resultat)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

commandeController.update = async (req, res) => {
    try {
        const response = await Commande.update(req.body, {
            where: {
                id: req.params.id
            }
        })

        const commande = Commande.findOne({
            where: { id: req.params.id },
            include: commandeController.includeCommande
        })
        res.status(200).send(commande)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

commandeController.delete = async (req, res) => {
    try {
        const response = await Commande.destroy({
            where: {
                id: res.params.id
            }
        })
        res.status(200).send('Commande supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

commandeController.getById = async (req, res) => {
    try {
        const response = await Commande.findOne({
            where: { id: request.params.id },
            include: commandeController.includeCommande
        })
        if (response == null) {
            res.status(404).send('Commande non trouvé')
        }
        else {
            res.status(200).send(response)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


commandeController.getBy = async (req, res) => {
    try {
      const  response = await Commande.findAndCountAll({
            where: req.body,
            include:commandeController.includeCommande
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = commandeController

