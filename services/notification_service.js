var { admin } = require("../config/firebase_config")
var notificationService = {}


notificationService.NotifierMisajourCommande = async (commande) => {

    console.error("Notification de la mise à jour de la commande " + commande.id)
    try {
        const notificationpush = {
            notification: notificationService.getNotification(commande),
            data: {
                id: commande.id.toString(),
                model: "commande",
                objet: "misajour"
            },
            android: {
                priority: "high",
                ttl: 86400000
            },
            token: commande.Client.token
        }
        await admin.messaging().send(notificationpush)

    }
    catch (error) {
        console.log(error)

    }
}



notificationService.NotifierMisajourCommandeUtilisateur = async (commande, utilisateur) => {

    console.log(`Notification de l'utilisateur ${utilisateur.nom}`)
    try {
        const notificationpush = {
            notification: notificationService.getNotificationMisajourCommandeUtilisateur(commande),
            data: {
                id: commande.id.toString(),
                model: "commande",
                objet: "misajour"
            },
            android: {
                priority: "high",
                ttl: 86400000
            },
            token: utilisateur.token
        }
        await admin.messaging().send(notificationpush).then((`Envoi de la notification push réussie`))

    }
    catch (error) {

        console.log(`Problème lors de l'envoi de la notification push...`)
        console.log(error)
    }
}

notificationService.NotifierNouvelleCommandeUtilisateur = async (commande, utilisateur) => {

    console.log(`Notification de l'utilisateur ${utilisateur.nom} pour une nouvelle commande`)
    try {
        const notificationpush = {
            notification: notificationService.getNotificationNouvelleCommandeUtilisateur(commande),
            data: {
                id: commande.id.toString(),
                model: "commande",
                objet: "nouveau"
            },
            android: {
                priority: "high",
                ttl: 86400000
            },
            token: utilisateur.token
        }
        await admin.messaging().send(notificationpush).then((`Envoi de la notification push réussie`))

    }
    catch (error) {

        console.log(`Problème lors de l'envoi de la notification push...`)
        console.log(error)
    }
}
//Notification pour les administrateurs et les cuisiiers
notificationService.getNotificationMisajourCommandeUtilisateur = (commande) => {

    return {
        title: `Mise à jour de la commande #${commande.id}`,
        body: `La commande # ${commande.id} est mise à jour. nouveau Statut: ${commande.statut}`
    }
}

notificationService.getNotificationNouvelleCommandeUtilisateur = (commande) => {

    return {
        title: `Nouvelle commande de repas #${commande.id}`,
        body: `une nouvelle commande de repas ID: ${commande.id}, merci de valider.`
    }
}

//Notification por le client de la commande
notificationService.getNotification = (commande) => {
    switch (commande.statut) {
        case "Validée":
            return {
                title: `Validation de votre commande`,
                body: `Votre commande # ${commande.id} a été validée et est en cours de préparation`
            }

        case "Annulée":
            return {
                title: `Annulation de votre commande`,
                body: `Votre commande ${commande.id} a été annulée`
            }

        case "Expédié":
            return {
                title: `Expédition de votre commande`,
                body: `Votre commande ${commande.id} a été expédiée`
            }

        default:
            return {
                title: `Mise à jour de votre commande`,
                body: `Votre commande ${commande.id} a été mise à jour. Nouveau statut: ${commande.statut}`
            }
    }
}

module.exports = notificationService