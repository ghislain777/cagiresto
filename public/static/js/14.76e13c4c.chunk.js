(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[14],{1380:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(3),n=a(0),o=a.n(n),i=a(353),c=a(1372);function l(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(622),i=a(449),c=a(1379);t.a=e=>{const t=e.id,a=e.nom,r=e.label,l=e.valeur,s=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(c.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1379),i=a(1640),c=a(622),l=a(625),s=a(623),u=a(1320);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(s.a,{htmlFor:a},t),n.a.createElement(l.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(17),n=a(0),o=a.n(n),i=a(1379),c=a(1355),l=a(1354);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),g=p[0],b=p[1];return o.a.createElement(l.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:g,onChange:t=>{e.onChange(t.target.checked),b(!g),u(!g)}}))}),label:null==m?t:m})}},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1411),i=a(343),c=a(1682),l=(a(60),a(356)),s=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(s.a,{className:"mt-3"},n.a.createElement(l.a,{value:u}),u,"%"))}},1394:function(e,t,a){"use strict";a(0),a(1379),a(1640),a(622),a(625),a(623),a(1320)},1395:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),o=a.n(n),i=a(622),c=a(1432),l=a(2007),s=a(1384),u=a(1385),m=a(1379);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),g=(e.id,e.handledatechange),b=Object(n.useState)(p),f=Object(r.a)(b,2),h=f[0],j=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(c.a,{utils:s.a,locale:u.a},o.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{j(e),g(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1396:function(e,t,a){"use strict";a(17),a(0),a(622),a(1432),a(1981),a(1384),a(1385),a(1379)},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(n.a.mark((function e(t){var a,r,o,c,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,c=new FormData,console.warn(a),c.append("objet",r),c.append("file",a),e.next=7,i.b.post("/fichier/upload",c,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return l=e.sent,console.log("fichier service::: response.data "+JSON.stringify(l)),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1540:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class c{getTouslesCategories(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/categories?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutCategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/categories",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourCategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/categories/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionCategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/categories/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifCategorie(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/categories/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},2004:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),c=a(1540),l=a(133),s=a(1405),u=a.n(s),m=a(1389),d=a(1325),p=a(1971),g=a(1970),b=a(447),f=a(1972),h=a(451),j=a(1375),v=a(357),E=a(354),O=a(355),C=a(1380),y=a(1409),w=(a(1410),a(75)),S=a(1369),x=a(1383),P=a(353),D=a(1968),k=a(621),A=a(1967),F=a(1966),M=a(1372),R=a(1390),q=(a(1391),a(1392)),T=(a(1393),a(1394),a(1395),a(1396),a(1982));function N(e){var t,a,r,n;const o=e.state,c=e.fonctions,l=e.queries,s=e.useform,u=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(P.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(P.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(S.a,{theme:Object(w.a)()},i.a.createElement(j.a,null,i.a.createElement(D.a,{action:i.a.createElement(k.a,{"aria-label":"",onClick:c.AnnulerEnregistrement},"x"),title:"ajout"===o.pagestate.action?"Nouvelle cat\xe9gorie":"Mise \xe0 jour ",subheader:""}),i.a.createElement(A.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:s.handleSubmit(u)},i.a.createElement(P.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(P.a,{item:!0},i.a.createElement(R.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=o.categorie)||void 0===t?void 0:t.nom,control:s.control,error:s.errors.nom})),i.a.createElement(P.a,{item:!0},i.a.createElement(R.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=o.categorie)||void 0===a?void 0:a.description,control:s.control,error:s.errors.description})),i.a.createElement(P.a,{item:!0},i.a.createElement(q.a,{id:"actif",nom:"actif",control:s.control,coche:Boolean(null!==(r=null===(n=o.categorie)||void 0===n?void 0:n.actif)&&void 0!==r?r:""),onChange:e=>c.handleChangementactif(e),changement:c.handleChangementactif}))))),i.a.createElement(F.a,null,i.a.createElement(P.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(P.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:s.handleSubmit(u)},l.mutationMiseajour.isLoading||l.mutationAjout.isLoading?i.a.createElement(M.a,{color:"inherit"}):i.a.createElement(T.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===o.pagestate.action?i.a.createElement(b.a,null,"Enregistrer"):i.a.createElement(b.a,null,"Mettre \xe0 jour")))),i.a.createElement(P.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:c.AnnulerEnregistrement},"Annuler")))))))))}var L=e=>{var t,a;const n=e.state,o=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,x=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(p.a,{id:""},n.dialoguephoto.titre),i.a.createElement(g.a,null,i.a.createElement("img",{src:w.c+"/fichiers/"+n.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(v.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(b.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvelle cat\xe9gorie"),l.queryCategories.isLoading?i.a.createElement(C.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryCategories.isError?i.a.createElement(C.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryCategories.error,type:"error"}):i.a.createElement(y.a,{tag:"div",blocking:!1},i.a.createElement(S.a,{theme:Object(w.a)()},i.a.createElement(u.a,{title:n.titre,data:l.queryCategories.data.rows,columns:c,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:l.queryCategories.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(j.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(O.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.categorie)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(N,{state:n,fonctions:o,queries:l,useform:s,onSubmit:x}))},I=a(13),z=a(87),Q=a(1983),W=a(1984),B=a(1985),G=a(1986),V=a(343),J=a(1355),U=a(1329),H=a(1640),Y=a(1373);Object(V.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function K(e){const t=Object(V.a)(e=>{e.palette,Object(I.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"ID",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"actif",label:"Actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>i.a.createElement(J.a,{checked:t,onChange:()=>e.handleTogleactif({id:a.rowData[0],actif:t})})}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(z.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(U.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(G.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(Q.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(Q.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(B.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})}]}})({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2],actif:r.rowData[3]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(H.a,{onClick:()=>e.action({id:r.rowData[0],nom:r.rowData[1],description:r.rowData[2],actif:r.rowData[3]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(Y.a,null)))))}}]}var X=a(1379),Z=(a(1397),a(1382));t.default=()=>{const e={categorie:{nom:"",description:"",actif:""},categorie1:null,titre:"Gestion des cat\xe9gories de repas",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(n.a)(t,2),s=a[0],u=a[1];let m=new c.a;const d=Object(l.useQueryClient)(),p={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des cat\xe9gories de repas",alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},s),{},{categorie:null,titre:"Nouvelle cat\xe9gorie ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:Object(r.a)(Object(r.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},s),{},{titre:"Gestion des cat\xe9gories de repas",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{j.mutate(s.categorie)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialoguephoto:Object(r.a)(Object(r.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},s),{},{tableconfig:Object(r.a)(Object(r.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},s),{},{titre:"Mise \xe0 jour ",categorie:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},s),{},{categorie:e,dialogueSuppressionOuvert:!0}))}},handleTogleactif:e=>{h.mutate(e)}},g=Object(l.useQuery)(["Categories",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesCategories(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),b=Object(l.useMutation)(m.ajoutCategorie,{onSuccess:()=>{d.invalidateQueries("Categories"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Categories"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(l.useMutation)(m.miseajourCategorie,{onSuccess:()=>{d.invalidateQueries("Categories"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Categories"),u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(l.useMutation)(m.togleactifCategorie,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Categories")}}),j=Object(l.useMutation)(m.suppressionCategorie,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Categories")}}),v={queryCategories:g,mutationMiseajour:f,mutationAjout:b,mutationSuppression:j},E=K(p),O=x.b().shape({nom:x.c().required("Le champs Nom est requis"),description:x.c().required("Le champs Description est requis")}),C=Object(X.c)({resolver:Object(Z.yupResolver)(O),defaultValues:{categorie:s.categorie}});return i.a.createElement(L,{state:s,fonctions:p,collonnes:E,queries:v,useform:C,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},s.categorie),e);void 0!==(null===(t=s.categorie)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(r.a)({},a)):v.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);