(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[17],{1381:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),i=a.n(n),o=a(354),s=a(1373);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},i.a.createElement(o.a,{item:!0}),i.a.createElement(s.a,{color:"error"===n?"secondary":"primary"})," ",i.a.createElement("span",null,a,".")))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(623),o=a(450),s=a(1380);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,c=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,{fullWidth:!0},n.a.createElement(s.a,{name:a,as:n.a.createElement(o.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:c,defaultValue:l,rules:{required:"Required"}})))}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1380),o=a(1657),s=a(623),l=a(626),c=a(624),u=a(1321);const m=e=>{const t=e.label,a=e.nom,r=e.table,i=e.options,m=(e.valeur,e.error);return n.a.createElement(s.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(c.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),i.map(e=>n.a.createElement(o.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,o=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:o,rules:{required:"Required"}},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(0),i=a.n(n),o=a(1380),s=a(1356),l=a(1355);function c(e){const t=e.nom,a=e.coche,c=e.control,u=e.changement,m=e.label,p=Object(n.useState)(a),d=Object(r.a)(p,2),b=d[0],g=d[1];return i.a.createElement(l.a,{control:i.a.createElement(o.a,{name:t,control:c,render:e=>i.a.createElement(s.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),i=a(1407),o=a(344),s=a(1708),l=(a(60),a(357)),c=a(354);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(o.a)(e=>Object(s.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1394:function(e,t,a){"use strict";a(0),a(1380),a(1657),a(623),a(626),a(624),a(1321)},1395:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(17),n=a(0),i=a.n(n),o=a(623),s=a(1437),l=a(2086),c=a(1385),u=a(1386),m=a(1380);function p(e){const t=e.nom,a=e.label,p=e.control,d=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(d),v=Object(r.a)(g,2),f=v[0],h=v[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{fullWidth:!0},i.a.createElement(m.a,Object.assign({name:t,as:i.a.createElement(s.a,{utils:c.a,locale:u.a},i.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:f,onChange:e=>(e=>{h(e),b(e)})(e)})),control:p,rules:{required:"Required"}},e))))}},1396:function(e,t,a){"use strict";a(17),a(0),a(623),a(1437),a(2058),a(1385),a(1386),a(1380)},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(20),n=a.n(r),i=a(39),o=a(75);function s(e){return l.apply(this,arguments)}function l(){return(l=Object(i.a)(n.a.mark((function e(t){var a,r,i,s,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,i=t.handleprogress,s=new FormData,console.warn(a),s.append("objet",r),s.append("file",a),e.next=7,o.b.post("/fichier/upload",s,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:i});case 7:return l=e.sent,console.log("fichier service::: response.data "+JSON.stringify(l)),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1471:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(20),n=a.n(r),i=a(39),o=a(75);class s{getTouslesCommunes(e,t,a,r){return Object(i.a)(n.a.mark((function r(){var i;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,o.b.get("/communes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return i=r.sent,r.abrupt("return",i.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCommune(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.post("/communes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCommune(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.put("/communes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCommune(e){return Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.delete("/communes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2069:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),i=a(0),o=a.n(i),s=a(20),l=a.n(s),c=a(39),u=a(75);class m{getTouslesPrixlivraisons(e,t,a,r){return Object(c.a)(l.a.mark((function r(){var n;return l.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,u.b.get("/prixlivraisons?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return n=r.sent,r.abrupt("return",n.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutPrixlivraison(e){return Object(c.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.post("/prixlivraisons",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourPrixlivraison(e){return Object(c.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.put("/prixlivraisons/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionPrixlivraison(e){return Object(c.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.delete("/prixlivraisons/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}var p=a(133),d=a(1403),b=a.n(d),g=a(1389),v=a(1326),f=a(2048),h=a(2047),j=a(448),E=a(2049),O=a(452),x=a(1376),w=a(358),y=a(355),P=a(356),C=a(1381),S=a(1405),D=(a(1406),a(1370)),k=a(1384),q=a(354),A=a(2045),F=a(622),M=a(2044),R=a(2043),T=a(1373),L=a(1390),N=a(1391),I=(a(1392),a(1393),a(1394),a(1395),a(1396),a(2059));function z(e){var t,a,r,n,i,s,l;const c=e.state,m=e.fonctions,p=e.queries,d=e.useform,b=e.onSubmit;return o.a.createElement("div",null,o.a.createElement(q.a,{container:!0,spacing:1,justify:"center"},o.a.createElement(q.a,{item:!0,lg:6,md:6,sm:12,xs:12},o.a.createElement(D.a,{theme:Object(u.a)()},o.a.createElement(x.a,null,o.a.createElement(A.a,{action:o.a.createElement(F.a,{"aria-label":"",onClick:m.AnnulerEnregistrement},"x"),title:"ajout"===c.pagestate.action?"Nouveau prix":"Mise \xe0 jour ",subheader:""}),o.a.createElement(M.a,{className:" px-6 pt-6 pb-6"}," ",o.a.createElement("form",{onSubmit:d.handleSubmit(b)},o.a.createElement(q.a,{container:!0,spacing:4,direction:"column"},o.a.createElement(q.a,{item:!0},o.a.createElement(L.a,{id:"montant",nom:"montant",label:"Montant",valeur:null===(t=c.prixlivraison)||void 0===t?void 0:t.montant,control:d.control,error:d.errors.montant})),o.a.createElement(q.a,{item:!0},o.a.createElement(L.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=c.prixlivraison)||void 0===a?void 0:a.description,control:d.control,error:d.errors.description})),o.a.createElement(q.a,{item:!0},p.queryCommunes.isLoading?o.a.createElement(C.a,{message:"chargement des roles"}):o.a.createElement(N.a,{id:"commune",name:"commune",label:"Commune",table:"commune",control:d.control,options:p.queryCommunes.data.rows,error:d.errors.commune,defaultValue:null!==(r=null===(n=c.prixlivraison)||void 0===n||null===(i=n.commune)||void 0===i?void 0:i.id)&&void 0!==r?r:"1",valeur:null!==(s=null===(l=c.prixlivraison)||void 0===l?void 0:l.commune)&&void 0!==s?s:""}))))),o.a.createElement(R.a,null,o.a.createElement(q.a,{container:!0,alignItems:"center",justify:"space-between"},o.a.createElement(q.a,{item:!0},o.a.createElement(O.a,{color:"primary",variant:"contained",type:"submit",onClick:d.handleSubmit(b)},p.mutationMiseajour.isLoading||p.mutationAjout.isLoading?o.a.createElement(T.a,{color:"inherit"}):o.a.createElement(I.a,null),o.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===c.pagestate.action?o.a.createElement(j.a,null,"Enregistrer"):o.a.createElement(j.a,null,"Mettre \xe0 jour")))),o.a.createElement(q.a,{item:!0},o.a.createElement(O.a,{variant:"outlined",color:"secondary",onClick:m.AnnulerEnregistrement},"Annuler")))))))))}var Q=e=>{var t,a;const n=e.state,i=e.fonctions,s=e.collonnes,l=e.queries,c=e.useform,m=e.onSubmit;return o.a.createElement("div",{className:"m-sm-30"},o.a.createElement(v.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:i.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},o.a.createElement(f.a,{id:""},n.dialoguephoto.titre),o.a.createElement(h.a,null,o.a.createElement("img",{src:u.c+"/fichiers/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),o.a.createElement(w.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>i.handleFermetureAlerte():()=>i.fermerAlerte()}),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(y.a,{routeSegments:[{name:n.titre}]})),o.a.createElement("div",{className:"mb-sm-30"},o.a.createElement(j.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?o.a.createElement(E.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},o.a.createElement("div",null,o.a.createElement(O.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>i.handleClicksurNouveau()},"Nouveau prix"),l.queryPrixlivraisons.isLoading?o.a.createElement(C.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryPrixlivraisons.isError?o.a.createElement(C.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryPrixlivraisons.error,type:"error"}):o.a.createElement(S.a,{tag:"div",blocking:!1},o.a.createElement(D.a,{theme:Object(u.a)()},o.a.createElement(b.a,{title:n.titre,data:l.queryPrixlivraisons.data.rows,columns:s,options:Object(r.a)(Object(r.a)({},g.a),{},{serverSide:!0,count:l.queryPrixlivraisons.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},g.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},g.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>i.handleChangePage(e),onChangeRowsPerPage:e=>i.handleChangeRowPerPage(e),onSearchChange:e=>i.handleSearchChange(e),onFilterChange:()=>i.handleFilterChange()})}))),o.a.createElement(x.a,{className:"w-full overflow-auto",elevation:8},o.a.createElement(P.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:i.fermerDialogueSuppression,onYesClick:i.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.prixlivraison)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):o.a.createElement(z,{state:n,fonctions:i,queries:l,useform:c,onSubmit:m}))},W=a(13),B=a(87),V=a(2060),J=a(2061),U=a(2062),G=a(2063),H=a(344),Y=a(1330),K=a(1657),X=a(1374);Object(H.a)(e=>{e.palette,Object(W.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function Z(e){const t=Object(H.a)(e=>{e.palette,Object(W.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"montant",label:"Montant",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"Commune",label:"Commune",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" "}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>o.a.createElement("div",null,o.a.createElement(B.j,{menuButton:o.a.createElement("div",{className:t.userMenu},o.a.createElement(Y.a,{xsDown:!0},o.a.createElement(O.a,{size:"small",variant:"outlined",color:"primary",endIcon:o.a.createElement(G.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(V.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:o.a.createElement(V.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(J.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:o.a.createElement(U.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:o.a.createElement(J.a,{color:"primary"})}]}})({id:r.rowData[0],montant:r.rowData[1],description:r.rowData[2],commune:r.rowData[3]}).map(e=>o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a,{onClick:()=>e.action({id:r.rowData[0],montant:r.rowData[1],description:r.rowData[2],commune:r.rowData[3]}),key:e.id,value:e.statut},e.icon,"   ",o.a.createElement("span",{className:"ml-5"},e.nom)),o.a.createElement(X.a,null)))))}}]}var $=a(1380),_=(a(1397),a(1383)),ee=a(1471);t.default=()=>{const e={prixlivraison:{montant:0,description:"",commune:"1"},prixlivraison1:null,titre:"Prix de livraison",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(i.useState)(e),a=Object(n.a)(t,2),s=a[0],l=a[1];let c=new m,u=new ee.a;const d=Object(p.useQueryClient)(),b={handleFermetureAlerte:()=>{l(Object(r.a)(Object(r.a)({},s),{},{titre:"Prix de livraison",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{l(Object(r.a)(Object(r.a)({},s),{},{prixlivraison:null,titre:"Nouveau prix ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{l(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),l(Object(r.a)(Object(r.a)({},s),{},{titre:"Prix de livraison",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{l(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(s.prixlivraison)},handleCloseDialoguephoto:()=>{l(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{l(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{l(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{l(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":l(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",prixlivraison:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":l(Object(r.a)(Object(r.a)({},s),{},{prixlivraison:e,dialogueSuppressionOuvert:!0}))}}},g=Object(p.useQuery)(["Prixlivraisons",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>c.getTouslesPrixlivraisons(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),v=Object(p.useQuery)(["Communes",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>u.getTouslesCommunes(0,1e3,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),f=Object(p.useMutation)(c.ajoutPrixlivraison,{onSuccess:()=>{d.invalidateQueries("Prixlivraisons"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Prixlivraisons"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(p.useMutation)(c.miseajourPrixlivraison,{onSuccess:()=>{d.invalidateQueries("Prixlivraisons"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Prixlivraisons"),l(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(p.useMutation)(c.suppressionPrixlivraison,{onSuccess:()=>{l(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{l({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Prixlivraisons")}}),E={queryPrixlivraisons:g,mutationMiseajour:h,mutationAjout:f,mutationSuppression:j,queryCommunes:v},O=Z(b),x=k.b().shape({montant:k.a().required("montant requis").positive("Le montant doit \xeatre positif").integer("Le montant doit \xeatre un nombre entier"),description:k.c().required("Le champs Description est requis"),commune:k.c().required("Le champs Commune est requis")}),w=Object($.c)({resolver:Object(_.yupResolver)(x),defaultValues:{prixlivraison:s.prixlivraison}});return o.a.createElement(Q,{state:s,fonctions:b,collonnes:O,queries:E,useform:w,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.prixlivraison),e);void 0!==(null===(t=s.prixlivraison)||void 0===t?void 0:t.id)?E.mutationMiseajour.mutate(Object(r.a)({},a)):E.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);