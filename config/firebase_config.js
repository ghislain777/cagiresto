
var admin = require("firebase-admin");
var serviceAccount = require("./cagirestau-firebase-adminsdk-7710j-1428ce4a5c.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports.admin = admin