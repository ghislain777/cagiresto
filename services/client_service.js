const clientController = require("../controllers/client_controller")
const { Client, Lignecommande, Repa, Commande, Adresse, Modedepayement, Quartier, Ligneaccompagnement, Accompagnement } = require("../models")
const adresseController = require("../controllers/adresse_controller")
const modedepayementController = require("../controllers/modedepayement_controller")
const quartierController = require("../controllers/quartier_controller")
const repaController = require("../controllers/repa_controller")



const clientService = {}

clientService.getDataClient = async (idClient) => {
    const profil = await Client.findOne({
        where: {
            id: idClient
        },
        include: [
            {
                model: Quartier,
                include: quartierController.includeQuartier
            }

        ]
    })

    const mescommandes = await Commande.findAll({
        include: [
            { model: Client },
            { model: Adresse, include: adresseController.includeAdresse },
            { model: Modedepayement },
            {
                model: Lignecommande, include: [
                    { model: Commande },
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
    const mesadresses = await Adresse.findAll({
        include: [
            { model: Client, where: { id: idClient } },
            { model: Quartier, include: quartierController.includeQuartier }
        ]
    })

    const retour = {
        profil: profil,
        mescommandes: mescommandes,
        mesadresses: mesadresses,
    }
    return retour

}

module.exports = clientService