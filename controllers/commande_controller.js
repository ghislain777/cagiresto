
const { response, request, response } = require('express');
const { where } = require('sequelize');
const { Sequelize, Op } = require('sequelize');
const fonctions = require('../fonctions');
const { Commande, Client, Utilisateur, Livreur, Adresse, Modedepayement, Repa, Lignecommande, sequelize, Ligneaccompagnement, Accompagnement } = require('../models');
const adresseController = require('./adresse_controller');
const clientController = require('./client_controller');
const modedepayementController = require('./modedepayement_controller');
const repaController = require('./repa_controller');
const notificationService = require('../services/notification_service')
const commandeController = {}

commandeController.includeCommande = [
    { model: Livreur },
    { model: Client },
    { model: Adresse, include: adresseController.includeAdresse },
    { model: Modedepayement },
    {
        model: Lignecommande, include: [


            // {model: Commande},
            { model: Repa, include: repaController.includeRepa },
            {
                model: Ligneaccompagnement, include: [
                    { model: Accompagnement }
                ]
            }
        ]
    }
]
//panier -> lignePanier->ligneaccompagnement
commandeController.add = async (req, res) => {
    const { client, panier, commande } = req.body;
    const lignepaniers = panier.lignepaniers;
    //const transaction = await sequelize.transaction();

    var lacommande = await Commande.create({
        client: client,
        adresse: commande.adresse,
        statut: "Nouveau",
        prixtotal: panier.prixtotal + commande.prixlivraison,
        prixlivraison: commande.prixlivraison,
        prixrepa: panier.prixtotal,
        modedepayement: commande.modedepayement,
        noteclient: commande.noteclient,
        datelivraison: Date.parse(commande.datelivraison)
    })

    for (const lignepanier of lignepaniers) {
        const lalignecommande = await Lignecommande.create({
            commande: lacommande.id,
            quantite: lignepanier.quantite,
            repa: lignepanier.repa.id,
            prixunitaire: lignepanier.ligneaccompagnements.reduce((value, element) => { return { prix: element.prix + value.prix } }, { prix: 0 }).prix + lignepanier.repa.prix, // le prix d'une lignepanier accompagnements + repas
            prixtotal: lignepanier.prixtotal

        })
        //console.log(lignepanier.prixtotal)
        lignepanier.ligneaccompagnements.forEach(async ligneaccompagnement => {

            const laligneaccompagnement = await Ligneaccompagnement.create({
                lignecommande: lalignecommande.id,
                quantite: 1,
                accompagnement: ligneaccompagnement.accompagnement,
                prix: ligneaccompagnement.prix,
                prixtotal: ligneaccompagnement.prixtotal
            })
        }); // tous les ligneaccompagnements sont créées, on caclule le cot de la lignecommande.
    }
    //transaction.commit()
// notification du cuisinier de la commande
const  cuisiniers = await Utilisateur.findAll({
    where: {
        role: [1, 2]
    }
})

// notification de tous les cuisiniers d'une nouvelle commande
cuisiniers.forEach(cuisinier => {
    notificationService.NotifierNouvelleCommandeUtilisateur(lacommande, cuisinier)

})

    const retour = await Commande.findOne({
        where: {
            id: lacommande.id
        },
        include: [
            { model: Client },
            { model: Adresse, include: adresseController.includeAdresse },
            { model: Modedepayement },
            {
                model: Lignecommande, include: [
                    // {model: Commande},
                    { model: Repa, include: repaController.includeRepa },
                    {
                        model: Ligneaccompagnement, include: [
                            { model: Accompagnement }
                        ]
                    }
                ]
            }
        ]
    })
    //  console.log(retour)
    return res.status(201).send(retour)

}

commandeController.getAll = async (req, res) => {

    const parametres = fonctions.removeNullValues(req.query)
    const parametresRequete = fonctions.removePaginationkeys(parametres)
    try {
        const { itemsPerPage = 30, page = 1 } = req.query
        const resultat = await Commande.findAndCountAll(
            {
                offset: (page - 1) * itemsPerPage,
                limit: itemsPerPage * 1,
                order: [['id', 'desc']],
                where: {
                    ...parametresRequete
                },
                include: [
                    { model: Livreur },
                    { model: Client },
                    { model: Adresse, include: adresseController.includeAdresse },
                    { model: Modedepayement },
                    {
                        model: Lignecommande, include: [
                            { model: Repa, include: repaController.includeRepa },
                            {
                                model: Ligneaccompagnement, include: [
                                    { model: Accompagnement }
                                ]
                            }
                        ]
                    }
                ]

            }
        )
        res.send(resultat)
    } catch (err) {
        console.log(err)
        res.status(500).send(err.message)
    }
}

// Mise à jour de la commande
commandeController.update = async (req, res) => {

    const ancienneCommande = await Commande.findByPk(req.params.id)

    const idRoleCuisinier = 2;

    const cuisiniers = await Utilisateur.findAll({
        where: {
            role: [1, 2]
        }
    })

    try {
        const response = await Commande.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        const c = await Commande.findOne({
            where: { id: req.params.id },
            include: commandeController.includeCommande
        })
        // on envoi la notification push à tous les cuisiniers et des administrateur
        cuisiniers.forEach(cuisinier => {
            notificationService.NotifierMisajourCommandeUtilisateur(c, cuisinier)

        })

        if (ancienneCommande.statut != c.statut) {
            // on envoi une notification push en cas de update du statut
            notificationService.NotifierMisajourCommande(c)
        }


        res.status(200).send(c)
    } catch (err) {
        res.status(500).send(err.message)
    }
}

commandeController.delete = async (req, res) => {
    try {
        const response = await Commande.destroy({
            where: {
                id: response.params.id
            }
        })
        res.status(200).send('Commande supprimé avec succès')
    } catch (err) {
        res.status(500).send(err.message)
    }
}

commandeController.getById = async (req, res) => {
    try {
        const retour = await Commande.findOne({
            where: {
                id: req.params.id
            },
            include: [
                { model: Client },
                { model: Adresse, include: adresseController.includeAdresse },
                { model: Modedepayement },
                {
                    model: Lignecommande, include: [
                        // {model: Commande},
                        { model: Repa, include: repaController.includeRepa },
                        {
                            model: Ligneaccompagnement, include: [
                                { model: Accompagnement }
                            ]
                        }
                    ]
                }
            ]
        })
        if (response == null) {
            res.status(404).send('Commande non trouvé')
        }
        else {
            res.status(200).send(retour)
        }
    } catch (err) {
        res.status(500).send(err.message)

    }
}


commandeController.getBy = async (req, res) => {
    try {
        const response = await Commande.findAndCountAll({
            where: req.body,
            include: [
                { model: Client },
                { model: Adresse, include: adresseController.includeAdresse },
                { model: Modedepayement },
                {
                    model: Lignecommande, include: [
                        // {model: Commande},
                        { model: Repa, include: repaController.includeRepa },
                        {
                            model: Ligneaccompagnement, include: [
                                { model: Accompagnement }
                            ]
                        }
                    ]
                }
            ]
        })
        res.send(response)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
module.exports = commandeController

