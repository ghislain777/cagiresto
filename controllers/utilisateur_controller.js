const { response } = require('express');
var Sequelize = require('sequelize');
const fonctions = require('../fonctions');

const { Utilisateur, Role, Privilege, Menu, Activite, Commande, Quartier, Modedepayement, Categorie, Prixlivraison, Accompagnement, Client, Livreur, Repa } = require("../models");
const clientController = require('./client_controller');
const commandeController = require('./commande_controller');
const livreurController = require('./livreur_controller');
const modedepayementController = require('./modedepayement_controller');
const repaController = require('./repa_controller');

const utilisateurController = {

    add: async (req, res) => {

        try {
            const response = await Utilisateur.create(req.body)
            res.status(201).send(response)
        } catch (err) {
            console.log(err.message)
        }
    },

    getAll: async (req, res) => {

        const parametres = fonctions.removeNullValues(req.query)
        const parametresRequete = fonctions.removePaginationkeys(parametres)
        try {
            const { itemsPerPage = 30, page = 1 } = req.params
            const resultat = await Utilisateur.findAndCountAll(
                {
                    offset: (page - 1) * itemsPerPage,
                    limit: itemsPerPage,
                    where: {
                        ...parametresRequete
                        //    nom: {
                        //        [Op.like]: '%' + parametres.nom + '%'
                        //    }
                    },
                    include: Role
                }
            )
            res.send(resultat)
        } catch (err) {
            console.log(err)
        }
    },


    update: async (req, res) => {
        try {
            const response = await Utilisateur.update(req.body, {
                where: {
                    id: req.params.id
                }
            })
            res.status(200).send(response)
        } catch (err) {
            res.status(500).send(err.message)
        }
    },

    getById: async (req, res) => {
        try {
            const response = await Utilisateur.findByPk(req.params.id)
            if (response == null) {
                res.status(402).send("Item not found")
            }
            else {
                res.status(200).send(response)
            }
        } catch (err) {
            res.status(500).send(err.message)

        }
    },

    delete: async (req, res) => {
        try {
            const response = await Utilisateur.destroy({
                where: {
                    id: res.params.id
                }
            })
            res.status(200).send("Item deleted successfully")
        } catch (err) {
            res.status(500).send(err.message)
        }
    },

    login: async (req, res) => {
        try {
            if (!req.body.email) {
                res.status(402).send("Adresse email requise")
                return
            }
            if (!req.body.motdepasse) {
                res.status(402).send("le mot de passe est requis")
                return
            }
            // console.log(req.body)
            const utilisateur = await Utilisateur.findOne({
                where: {
                    email: req.body.email
                },
                include: [Role]
            })
            if (!utilisateur) {
                res.status(200).send({code: 401, message:"Adresse Email ou mot de passe incorrect"})
                return
            }
            if (utilisateur.motdepasse == req.body.motdepasse) {

                if (utilisateur.actif == false) {
                    res.status(200).send({code:403, message:"Utilisateur désactivé, veuillez contacter l'administrateur"})
                    return
                }

                // on envoi les privileges privileges/menus de l'utilisateur


                // liste des privileges de l'utilisateur
                var navigation = []
                var listeprivileges = await Privilege.findAll({
                    where: {
                        actif: true,
                        role: utilisateur.role
                    },
                    include: [{ model: Role }, { model: Activite, include: [{ model: Menu }] }]
                    //   include:[{all:true}]
                })
                //res.status(200).send({ listeprivileges })

                var listemenus = await Menu.findAll()
                console.log("liste des privileges")
                //res.status(200).send({ privileges: listeprivileges, menus: listemenus })

                //console.log(listeprivileges);
                listemenus.forEach(menu => {
                    let leMenu = {}
                    leMenu.id = menu.id
                    leMenu.name = menu.nom
                    leMenu.description = menu.description
                    leMenu.position = menu.position
                    leMenu.icon = menu.icone
                    leMenu.children = []
                    listeprivileges.forEach(privilege => {
                        // console.error(privilege)
                        if (privilege.Activite.Menu.id == leMenu.id) {
                            leMenu.children.push({
                                id: privilege.Activite.id,
                                name: privilege.Activite.nom,
                                description: privilege.Activite.description,
                                path: privilege.Activite.chemain,
                                position: privilege.Activite.position,
                                icon: privilege.Activite.icon,
                            })
                        }
                    });
                    navigation.push(leMenu)
                });
                res.status(200).send({ utilisateur: utilisateur, privileges: listeprivileges, navigation: navigation,code:200 })
            }
            else {
                res.status(403).send("Nom d'utilisateur ou mot passe incorrecte.")
            }

        }
        catch (error) {
            console.error(error)
            res.send(error.message)
        }
    },

    loginmobile: async (req, res) => {
try {
    if (!req.body.email) {
        res.status(402).send("Adresse email requise")
        return
    }
    if (!req.body.motdepasse) {
        res.status(402).send("le mot de passe est requis")
        return
    }
    // console.log(req.body)
    const utilisateur = await Utilisateur.findOne({
        where: {
            email: req.body.email
        },
        include: [Role]
    })
    if (!utilisateur) {
        res.status(200).send({code: 401, message:"Adresse Email ou mot de passe incorrect"})
        return
    }
    if (utilisateur.motdepasse == req.body.motdepasse) {

        if (utilisateur.actif == false) {
            res.status(200).send({code:403, message:"Utilisateur désactivé, veuillez contacter l'administrateur"})
            return
        }

const commandes = await Commande.findAll({
    order: [["id", "desc"]],
    include: commandeController.includeCommande
})

const repas = await Repa.findAll({
    include:repaController.includeRepa
})
const livreurs = await Livreur.findAll({
include: livreurController.includeLivreur
})

const modedepayements = await Modedepayement.findAll({
    include: modedepayementController.includeModedepayement
})

const accompagnements = await Accompagnement.findAll()
const clients = await Client.findAll({
    include: clientController.includeClient
})

const retour = {
    commandes:commandes,
    repas:repas,
    livreurs:livreurs,
    accompagnements:accompagnements,
    modedepayements:modedepayements,
    profil:utilisateur,
    clients:clients

}

res.send(retour)


        }


} catch (error) {
    console.log(error)
    res.status(500).send(error.message)
}


    } 

}


module.exports = utilisateurController

