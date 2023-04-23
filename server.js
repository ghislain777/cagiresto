const express = require('express')
const cors = require('cors');
const { Role } = require('./models')
const roleRoutes = require('./routes/role_routes');
const utilisateurRoutes = require('./routes/utilisateur_routes');
const bodyParser = require('body-parser');
const menuRoutes = require('./routes/menu_route');
const activiteRoutes = require('./routes/activite_routes');
const privilegeRoutes = require('./routes/privilege_routes');
 const centreRoutes = require('./routes/centre_routes.js')
 const dpeRoutes = require('./routes/dpe_routes.js')
 const ireRoutes = require('./routes/ire_routes.js')
 const profileRoutes = require('./routes/profile_routes.js')
 const examenRoutes = require('./routes/examen_routes.js')
 const profildexamenRoutes = require('./routes/profildexamen_routes.js')
 const parametreRoutes = require('./routes/parametre_routes.js')
 const disciplineRoutes = require('./routes/discipline_routes.js')
 const importationRoutes = require('./routes/importation_routes.js')
 const resultatRoutes = require('./routes/resultat_routes.js')
 const noteresultatRoutes = require('./routes/noteresultat_routes.js')



const PORT = process.env.PORT || 8000
const app = express()
const path = require('path');

app.use(express.static('public')); // servir les fichiers du repertoire public comme statiques
app.use(express.static('.well-known')); // servir les fichiers du repertoire public comme statiques
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
app.use('/api/centres', centreRoutes); 
app.use('/api/dpes', dpeRoutes); 
app.use('/api/ires', ireRoutes); 
app.use('/api/profiles', profileRoutes); 
app.use('/api/examens', examenRoutes); 
app.use('/api/profildexamens', profildexamenRoutes); 
app.use('/api/parametres', parametreRoutes); 
app.use('/api/disciplines', disciplineRoutes); 
app.use('/api/importations', importationRoutes); 
app.use('/api/resultats', resultatRoutes); 
app.use('/api/noteresultats', noteresultatRoutes); 















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
  logger.info(`Express server listening on port ${PORT}`)
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