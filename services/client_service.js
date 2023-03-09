const clientController = require("../controllers/client_controller")
const {Client, Commande, Adresse, Modedepayement} = require("../models")
const adresseController = require("../controllers/adresse_controller")
const modedepayementController = require("../controllers/modedepayement_controller")



const clientService  = {}

clientService.getDataClient = async (idClient) => {

const profil = await  Client.findOne({
    where:{
        id: idClient
    },
    include:clientController.includeClient
})

const mescommandes = await Commande.findAll({
include:[
{model:Client, where:{id:idClient} }, 
{model:Adresse, include:adresseController.includeAdresse},
{model:Modedepayement, include:modedepayementController.includeModedepayement}
]
})
const mesadresses = await Adresse.findAll({
    include:[
        {model:Client, where:{id:idClient}},
        {model:quartier, include:quartierController.includeQuartier}
    ]
})

const retour = {
    profil:profil,
    mescommandes:mescommandes,
    mesadresses:mesadresses,
}
return retour

}

module.exports = clientService