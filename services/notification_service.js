var  {admin} = require(  "../config/firebase_config")
var notificationService = {}


notificationService.NotifierMisajourCommande = (commande) => {

    console.error("Notification de la mise à jour de la commande "+commande.id)
    const notificationpush = {
        notification: notificationService.getNotification(commande),
        data:{
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
    admin.messaging().send(notificationpush)
}

    notificationService.getNotification = (commande) => {
        switch (commande.statut) {
            case "Validée":
                return {
                    title: `Validation de votre commande`,
                    body: `Votre commande ${commande.id} a été validée et est en cours de préparation`
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