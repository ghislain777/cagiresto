const express = require('express')
const cors = require('cors');
const winston = require('winston');
const { Role } = require('./models')
const roleRoutes = require('./routes/role_routes');
const utilisateurRoutes = require('./routes/utilisateur_routes');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu_route');
const activiteRoutes = require('./routes/activite_routes');
const privilegeRoutes = require('./routes/privilege_routes');
const payRoutes = require('./routes/pay_routes.js')
const villeRoutes = require('./routes/ville_routes.js')
const communeRoutes = require('./routes/commune_routes.js')
const quartierRoutes = require('./routes/quartier_routes.js')
 const categorieRoutes = require('./routes/categorie_routes.js')
 const repaRoutes = require('./routes/repa_routes.js')
 const commandeRoutes = require('./routes/commande_routes.js')
 const lignecommandeRoutes = require('./routes/lignecommande_routes.js')
 const modedepayementRoutes = require('./routes/modedepayement_routes.js')
 const adresseRoutes = require('./routes/adresse_routes.js')
 const clientRoutes = require('./routes/client_routes.js')
 const accompagnementRoutes = require('./routes/accompagnement_routes.js')
 const ligneaccompagnementRoutes = require('./routes/ligneaccompagnement_routes.js')
 const livreurRoutes = require('./routes/livreur_routes.js')
 const prixlivraisonRoutes = require('./routes/prixlivraison_routes.js')






const logger = winston.createLogger({
  transports: [
    new winston.transports.File({ filename: 'logs.log' })
  ]
});



const PORT = process.env.PORT || 8000
const app = express()
const path = require('path');


app.use(express.static('public')); // servir les fichiers du repertoire public comme statiques
//app.use(express.static(path.join(__dirname, 'public')));
// app.use((req, res, next) => {
//   logger.info(`${req.method} ${req.url}`);
//   next();
// });

app.use(bodyParser.json())
app.use(cors({
  origin: '*'
}));

app.use('/api/roles', roleRoutes);
app.use('/api/utilisateurs', utilisateurRoutes);
app.use('/api/menus', menuRoutes);
app.use('/api/activites', activiteRoutes);
app.use('/api/privileges', privilegeRoutes);
app.use('/api/pays', payRoutes);
app.use('/api/villes', villeRoutes);
app.use('/api/communes', communeRoutes);
app.use('/api/quartiers', quartierRoutes); 
app.use('/api/categories', categorieRoutes); 
app.use('/api/repas', repaRoutes); 
app.use('/api/commandes', commandeRoutes);
app.use('/api/commandes', commandeRoutes); 
app.use('/api/lignecommandes', lignecommandeRoutes); 
app.use('/api/modedepayements', modedepayementRoutes); 
app.use('/api/adresses', adresseRoutes); 
app.use('/api/clients', clientRoutes); 
app.use('/api/accompagnements', accompagnementRoutes); 
app.use('/api/ligneaccompagnements', ligneaccompagnementRoutes); 
app.use('/api/livreurs', livreurRoutes); 
app.use('/api/prixlivraisons', prixlivraisonRoutes); 






app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


const multer = require('multer');
const fonctions = require('./fonctions');

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(req.body);
    const objet = req.body.objet  // objet de l'upload
    const ext = file.mimetype.split("/")[0];
     cb(null, `public/fichiers/`)
  },
  filename: (req, file, cb) => {
    const extension = file.originalname.slice(
      ((file.originalname.lastIndexOf('.') - 1) >>> 0) + 2
    );
    const nouveauNom = fonctions.uniqid()
    const nouveauFichier = `${nouveauNom}.${extension}`
    cb(null, `${req.body.objet}/${nouveauFichier}`)
  },
});
  const upload = multer({ storage: multerStorage,limits : {fileSize : 4000000}  }); // 4 Mégas

  app.post("/api/fichier/upload", upload.single("file"), (req, res) => {
    console.log(req.file.filename)
    res.json(`${req.file.filename}`);
  });


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express server listening on port `, PORT)
});

// app.get('/', (req, res) => {
//   res.send("working!!")
// })

// app.get('/public/fichiers/temp/:fichier', (req, res) => {
//   res.send("working!!")
// })


// app.get('/roles', async (req, res) => {
//   const roles = await Role.findAll()
//   res.json(roles)
// })