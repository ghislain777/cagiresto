(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[16],{1380:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(3),r=a(0),o=a.n(r),i=a(353),c=a(1372);function l(e){const t=Object(n.a)({},e),a=t.message,r=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(c.a,{color:"error"===r?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1390:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(622),i=a(449),c=a(1379);t.a=e=>{const t=e.id,a=e.nom,n=e.label,l=e.valeur,s=e.control,u=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{fullWidth:!0},r.a.createElement(c.a,{name:a,as:r.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:n,error:!!u})),control:s,defaultValue:l,rules:{required:"Required"}})))}},1391:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(1379),i=a(1640),c=a(622),l=a(625),s=a(623),u=a(1320);const m=e=>{const t=e.label,a=e.nom,n=e.table,o=e.options,m=(e.valeur,e.error);return r.a.createElement(c.a,{fullWidth:!0,error:m?"error":""},r.a.createElement(s.a,{htmlFor:a},t),r.a.createElement(l.a,Object.assign({id:a},e),o.map(e=>r.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===n&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===n&&" ("+e.typederequete.nom+")","utilisateur"===n&&" "+e.prenom,"tarif"===n&&"("+e.montant+")","contrat"===n&&e.client.nom+"("+e.produit.nom+")","offre"===n&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),r.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,n=e.control,i=(e.table,e.valeur);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({name:t,as:m,control:n,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(17),r=a(0),o=a.n(r),i=a(1379),c=a(1355),l=a(1354);function s(e){const t=e.nom,a=e.coche,s=e.control,u=e.changement,m=e.label,d=Object(r.useState)(a),p=Object(n.a)(d,2),b=p[0],g=p[1];return o.a.createElement(l.a,{control:o.a.createElement(i.a,{name:t,control:s,render:e=>o.a.createElement(c.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),o=a(1411),i=a(343),c=a(1682),l=(a(60),a(356)),s=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,n=e.titre,u=e.progress,m=Object(i.a)(e=>Object(c.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==n&&void 0!==n?n:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let n="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(n+="Type de fichier non support\xe9"),e.size>a&&(n+="Fichier trop volumineux."),n},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),r.a.createElement(s.a,{className:"mt-3"},r.a.createElement(l.a,{value:u}),u,"%"))}},1394:function(e,t,a){"use strict";a(0),a(1379),a(1640),a(622),a(625),a(623),a(1320)},1395:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(17),r=a(0),o=a.n(r),i=a(622),c=a(1432),l=a(2006),s=a(1385),u=a(1386),m=a(1379);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(r.useState)(p),f=Object(n.a)(g,2),h=f[0],v=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(c.a,{utils:s.a,locale:u.a},o.a.createElement(l.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),b(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1396:function(e,t,a){"use strict";a(17),a(0),a(622),a(1432),a(1981),a(1385),a(1386),a(1379)},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a.n(n),o=a(39),i=a(75);function c(e){return l.apply(this,arguments)}function l(){return(l=Object(o.a)(r.a.mark((function e(t){var a,n,o,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,n=t.objet,o=t.handleprogress,c=new FormData,console.warn(a),c.append("objet",n),c.append("file",a),e.next=7,i.b.post("/fichier/upload",c,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return l=e.sent,console.log("fichier service::: response.data "+JSON.stringify(l)),e.abrupt("return",l.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1534:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(20),r=a.n(n),o=a(39),i=a(75);class c{getTouslesMenus(e,t,a,n){return Object(o.a)(r.a.mark((function n(){var o;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e+=1,n.next=3,i.b.get("/menus?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})))()}ajoutMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/menus",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/menus/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionMenu(e){return Object(o.a)(r.a.mark((function t(){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/menus/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1997:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(17),o=a(0),i=a.n(o),c=a(1534),l=a(133),s=a(1408),u=a.n(s),m=a(1389),d=a(1325),p=a(1971),b=a(1970),g=a(447),f=a(1972),h=a(451),v=a(1375),j=a(357),E=a(354),O=a(355),y=a(1380),w=a(1409),C=(a(1410),a(75)),S=a(1384),M=a(353),x=a(1968),P=a(621),D=a(1967),q=a(1966),R=a(1372),k=a(1390),A=(a(1391),a(1392),a(1393),a(1394),a(1395),a(1396),a(1369)),F=a(1982);function N(e){var t,a,n,r;const o=e.state,c=e.fonctions,l=e.queries,s=e.useform,u=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(M.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(M.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(A.a,{theme:Object(C.a)()},i.a.createElement(v.a,null,i.a.createElement(x.a,{action:i.a.createElement(P.a,{"aria-label":"",onClick:c.AnnulerEnregistrement},"x"),title:"ajout"===o.pagestate.action?"Nouveau menu":"Mise \xe0 jour ",subheader:""}),i.a.createElement(D.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:s.handleSubmit(u)},i.a.createElement(M.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(M.a,{item:!0},i.a.createElement(k.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=o.menu)||void 0===t?void 0:t.nom,control:s.control,error:s.errors.nom})),i.a.createElement(M.a,{item:!0},i.a.createElement(k.a,{id:"description",nom:"description",label:"Description",valeur:null===(a=o.menu)||void 0===a?void 0:a.description,control:s.control,error:s.errors.description})),i.a.createElement(M.a,{item:!0},i.a.createElement(k.a,{id:"icone",nom:"icone",label:"Icone",valeur:null===(n=o.menu)||void 0===n?void 0:n.icone,control:s.control,error:s.errors.icone})),i.a.createElement(M.a,{item:!0},i.a.createElement(k.a,{id:"position",nom:"position",label:"Position",valeur:null===(r=o.menu)||void 0===r?void 0:r.position,control:s.control,error:s.errors.position}))))),i.a.createElement(q.a,null,i.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(M.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:s.handleSubmit(u)},l.mutationMiseajour.isLoading||l.mutationAjout.isLoading?i.a.createElement(R.a,{color:"inherit"}):i.a.createElement(F.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===o.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(M.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:c.AnnulerEnregistrement},"Annuler")))))))))}var T=e=>{var t,a;const r=e.state,o=e.fonctions,c=e.collonnes,l=e.queries,s=e.useform,S=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:r.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:r.dialoguephoto.objet},i.a.createElement(p.a,{id:""},r.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:C.c+"/fichiers/"+r.dialoguephoto.objet+"/"+r.dialoguephoto.fichier,alt:"{objet}",srcset:""}))),i.a.createElement(j.a,{message:r.alert.message,severity:r.alert.severity,open:r.alert.open,handleAlertClose:!0===r.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:r.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},r.titre)),"affichage"===r.pagestate.mode?i.a.createElement(f.a,{in:r.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouveau menu"),l.queryMenus.isLoading?i.a.createElement(y.a,{message:"Chargement des donn\xe9es...",type:"info"}):l.queryMenus.isError?i.a.createElement(y.a,{message:"Erreur lors du chargement des donn\xe9es::"+l.queryMenus.error,type:"error"}):i.a.createElement(w.a,{tag:"div",blocking:!1},i.a.createElement(u.a,{title:r.titre,data:l.queryMenus.data.rows,columns:c,options:Object(n.a)(Object(n.a)({},m.a),{},{serverSide:!0,count:l.queryMenus.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:r.tableconfig.rowsPerPage,textLabels:Object(n.a)(Object(n.a)({},m.a.textLabels),{},{toolbar:Object(n.a)(Object(n.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})})),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(O.a,{open:r.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=r.menu)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(N,{state:r,fonctions:o,queries:l,useform:s,onSubmit:S}))},L=a(13),I=a(87),z=a(1983),W=a(1984),B=a(1985),Q=a(1986),G=a(343),V=a(1329),J=a(1640),U=a(1373);Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function H(e){const t=Object(G.a)(e=>{e.palette,Object(L.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"description",label:"Description",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"icone",label:"Icone",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"position",label:"Position",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var n;return null!==(n=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==n?n:""}}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,n,r)=>i.a.createElement("div",null,i.a.createElement(I.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(V.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Q.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(B.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(W.a,{color:"primary"})}]}})({id:n.rowData[0],nom:n.rowData[1],description:n.rowData[2],icone:n.rowData[3],position:n.rowData[4]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{onClick:()=>e.action({id:n.rowData[0],nom:n.rowData[1],description:n.rowData[2],icone:n.rowData[3],position:n.rowData[4]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(U.a,null)))))}}]}var Y=a(1379),K=(a(1397),a(1383));t.default=()=>{const e={menu:{nom:"",description:"",icone:"",position:0},menu1:null,titre:"Gestion des menus",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""}},t=Object(o.useState)(e),a=Object(r.a)(t,2),s=a[0],u=a[1];let m=new c.a;const d=Object(l.useQueryClient)(),p={handleFermetureAlerte:()=>{u(Object(n.a)(Object(n.a)({},s),{},{titre:"Gestion des menus",alert:Object(n.a)(Object(n.a)({},s.alert),{},{open:!1}),pagestate:Object(n.a)(Object(n.a)({},s.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(n.a)(Object(n.a)({},s),{},{menu:null,titre:"Nouveau menu ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(n.a)(Object(n.a)({},s),{},{alert:Object(n.a)(Object(n.a)({},s.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(n.a)(Object(n.a)({},s),{},{titre:"Gestion des menus",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(n.a)(Object(n.a)({},s),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{h.mutate(s.menu)},handleCloseDialoguephoto:()=>{u(Object(n.a)(Object(n.a)({},s),{},{dialoguephoto:Object(n.a)(Object(n.a)({},s.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(n.a)(Object(n.a)({},s),{},{tableconfig:Object(n.a)(Object(n.a)({},s.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(n.a)(Object(n.a)({},s),{},{tableconfig:Object(n.a)(Object(n.a)({},s.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(n.a)(Object(n.a)({},s),{},{tableconfig:Object(n.a)(Object(n.a)({},s.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(n.a)(Object(n.a)({},s),{},{titre:"Mise \xe0 jour ",menu:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(n.a)(Object(n.a)({},s),{},{menu:e,dialogueSuppressionOuvert:!0}))}}},b=Object(l.useQuery)(["Menus",s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre],()=>m.getTouslesMenus(s.tableconfig.page,s.tableconfig.rowsPerPage,s.tableconfig.recherche,s.tableconfig.filtre),{keepPreviousData:!0}),g=Object(l.useMutation)(m.ajoutMenu,{onSuccess:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),f=Object(l.useMutation)(m.miseajourMenu,{onSuccess:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{d.invalidateQueries("Menus"),u(Object(n.a)(Object(n.a)({},s),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),h=Object(l.useMutation)(m.suppressionMenu,{onSuccess:()=>{u(Object(n.a)(Object(n.a)({},s),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{d.invalidateQueries("Menus")}}),v={queryMenus:b,mutationMiseajour:f,mutationAjout:g,mutationSuppression:h},j=H(p),E=S.b().shape({nom:S.c().required("Le champs Nom est requis"),description:S.c().required("Le champs Description est requis"),icone:S.c().required("Le champs Icone est requis"),position:S.a().required("position requis").positive("Le position doit \xeatre positif").integer("Le position doit \xeatre un nombre entier")}),O=Object(Y.c)({resolver:Object(K.yupResolver)(E),defaultValues:{menu:s.menu}});return i.a.createElement(T,{state:s,fonctions:p,collonnes:j,queries:v,useform:O,onSubmit:e=>{var t;let a=Object(n.a)(Object(n.a)({},s.menu),e);void 0!==(null===(t=s.menu)||void 0===t?void 0:t.id)?v.mutationMiseajour.mutate(Object(n.a)({},a)):v.mutationAjout.mutate(Object(n.a)({},a))}})}}}]);