(this["webpackJsonpmatx-react-pro"]=this["webpackJsonpmatx-react-pro"]||[]).push([[6],{1380:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(3),n=a(0),o=a.n(n),i=a(353),l=a(1372);function s(e){const t=Object(r.a)({},e),a=t.message,n=t.type;return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{container:!0,spacing:0,alignContent:"center",justify:"center"},o.a.createElement(i.a,{item:!0}),o.a.createElement(l.a,{color:"error"===n?"secondary":"primary"})," ",o.a.createElement("span",null,a,".")))}},1389:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={selectableRows:"none",textLabels:{body:{noMatch:"Auccun enregistrement trouv\xe9",toolTip:"tri",columnHeaderTooltip:e=>"tri pour ".concat(e.label)},pagination:{next:"Page suivante",previous:"Page pr\xe9c\xe9dente",rowsPerPage:"Lignes par page:",displayRows:"sur"},toolbar:{search:"Rechercher",downloadCsv:"T\xe9l\xe9charger en CSV",print:"Imprimer",viewColumns:"Afficher les collones",filterTable:"Fiiltrer la table"},filter:{all:"Tout",title:"FILTRES",reset:"RESET"},viewColumns:{title:"Afficher les collones",titleAria:"Afficher/Cacher les collones"},selectedRows:{text:"lignes(s) s\xe9lection\xe9es",delete:"Supprimer",deleteAria:"Supprimer les lignes s\xe9lectionn\xe9es"}}}},1390:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(622),i=a(449),l=a(1379);t.a=e=>{const t=e.id,a=e.nom,r=e.label,s=e.valeur,c=e.control,u=e.error;return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{fullWidth:!0},n.a.createElement(l.a,{name:a,as:n.a.createElement(i.a,Object.assign({},e,{id:t,type:"text",helperText:u?u.message:null,label:r,error:!!u})),control:c,defaultValue:s,rules:{required:"Required"}})))}},1391:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(1379),i=a(1640),l=a(622),s=a(625),c=a(623),u=a(1320);const m=e=>{const t=e.label,a=e.nom,r=e.table,o=e.options,m=(e.valeur,e.error);return n.a.createElement(l.a,{fullWidth:!0,error:m?"error":""},n.a.createElement(c.a,{htmlFor:a},t),n.a.createElement(s.a,Object.assign({id:a},e),o.map(e=>n.a.createElement(i.a,{key:e.id,value:e.id},e.nom,"vehicule"===r&&e.marque+" "+e.modele+"("+e.client.nom+" "+e.client.prenom+")","categoriederequete"===r&&" ("+e.typederequete.nom+")","utilisateur"===r&&" "+e.prenom,"tarif"===r&&"("+e.montant+")","contrat"===r&&e.client.nom+"("+e.produit.nom+")","offre"===r&&e.prospect.nom+"("+e.prospect.quartier.nom+")"))),n.a.createElement(u.a,null,m?m.message:null))};t.a=function(e){const t=e.nom,a=e.label,r=e.control,i=(e.table,e.valeur);return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({name:t,as:m,control:r,nom:t,label:a,valeur:i,rules:{required:"Required"}},e)))}},1392:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(17),n=a(0),o=a.n(n),i=a(1379),l=a(1355),s=a(1354);function c(e){const t=e.nom,a=e.coche,c=e.control,u=e.changement,m=e.label,d=Object(n.useState)(a),p=Object(r.a)(d,2),b=p[0],g=p[1];return o.a.createElement(s.a,{control:o.a.createElement(i.a,{name:t,control:c,render:e=>o.a.createElement(l.a,Object.assign({},e,{checked:b,onChange:t=>{e.onChange(t.target.checked),g(!b),u(!b)}}))}),label:null==m?t:m})}},1393:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(0),n=a.n(r),o=a(1411),i=a(343),l=a(1682),s=(a(60),a(356)),c=a(353);function u(e){const t=e.onUpload,a=e.onSupprimer,r=e.titre,u=e.progress,m=Object(i.a)(e=>Object(l.a)({previewChip:{minWidth:160,maxWidth:210},height:"20%"}))();return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,Object.assign({},e,{style:{width:"100%",height:"10%"},maxFileSize:2097152e4,showPreviews:!1,filesLimit:1,showFileNamesInPreview:!0,showFileNames:!0,dropzoneText:null!==r&&void 0!==r?r:"Faire glisser le fichier ou clickez ici pour charger",showPreviewsInDropzone:!0,getFileAddedMessage:e=>"Fichier "+e+" ajout\xe9 avec succ\xe8s",getFileRemovedMessage:e=>"Fichier "+e+" supprim\xe9 avec succ\xe8s",getDropRejectMessage:(e,t,a)=>{let r="le fichier ".concat(e.name," a \xe9t\xe9 rej\xe9t\xe9. ");return t.includes(e.type)||(r+="Type de fichier non support\xe9"),e.size>a&&(r+="Fichier trop volumineux."),r},previewGridProps:{container:{spacing:1,direction:"row"}},previewChipProps:{classes:{root:m.previewChip}},previewText:"Fichier s\xe9lectionn\xe9:",onChange:e=>{var a;return t(null!==(a=e[0])&&void 0!==a?a:null)},onDelete:a})),n.a.createElement(c.a,{className:"mt-3"},n.a.createElement(s.a,{value:u}),u,"%"))}},1394:function(e,t,a){"use strict";a(0),a(1379),a(1640),a(622),a(625),a(623),a(1320)},1395:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(17),n=a(0),o=a.n(n),i=a(622),l=a(1432),s=a(2006),c=a(1385),u=a(1386),m=a(1379);function d(e){const t=e.nom,a=e.label,d=e.control,p=(e.error,e.valeur),b=(e.id,e.handledatechange),g=Object(n.useState)(p),f=Object(r.a)(g,2),h=f[0],v=f[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{fullWidth:!0},o.a.createElement(m.a,Object.assign({name:t,as:o.a.createElement(l.a,{utils:c.a,locale:u.a},o.a.createElement(s.a,{id:t,label:a,format:"dd/MM/yyyy \xe0 hh:mm",minDate:new Date,ampm:!1,label:a,inputVariant:"outlined",value:h,onChange:e=>(e=>{v(e),b(e)})(e)})),control:d,rules:{required:"Required"}},e))))}},1396:function(e,t,a){"use strict";a(17),a(0),a(622),a(1432),a(1981),a(1385),a(1386),a(1379)},1397:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(75);function l(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(n.a.mark((function e(t){var a,r,o,l,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fichier,r=t.objet,o=t.handleprogress,l=new FormData,console.warn(a),l.append("objet",r),l.append("file",a),e.next=7,i.b.post("/fichier/upload",l,{herdears:{"Content-Type":"multipart/form-data"},onUploadProgress:o});case 7:return s=e.sent,console.log("fichier service::: response.data "+JSON.stringify(s)),e.abrupt("return",s.data);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},1425:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class l{getTouslesQuartiers(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/quartiers?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutQuartier(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/quartiers",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourQuartier(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/quartiers/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionQuartier(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/quartiers/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1492:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(1398),n=a(132),o={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},i=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,l=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,s=/^([+-])(\d{2})(?::?(\d{2}))?$/;function c(e,t){Object(n.a)(1,arguments);var a=t||{},o=null==a.additionalDigits?2:Object(r.a)(a.additionalDigits);if(2!==o&&1!==o&&0!==o)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!==typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,l=u(e);if(l.date){var s=m(l.date,o);i=d(s.restDateString,s.year)}if(isNaN(i)||!i)return new Date(NaN);var c,p=i.getTime(),g=0;if(l.time&&(g=b(l.time),isNaN(g)||null===g))return new Date(NaN);if(!l.timezone){var h=new Date(p+g),v=new Date(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate(),h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds());return v.setFullYear(h.getUTCFullYear()),v}return c=f(l.timezone),isNaN(c)?new Date(NaN):new Date(p+g+c)}function u(e){var t,a={},r=e.split(o.dateTimeDelimiter);if(r.length>2)return a;if(/:/.test(r[0])?(a.date=null,t=r[0]):(a.date=r[0],t=r[1],o.timeZoneDelimiter.test(a.date)&&(a.date=e.split(o.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var n=o.timezone.exec(t);n?(a.time=t.replace(n[1],""),a.timezone=n[1]):a.time=t}return a}function m(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(a);if(!r)return{year:null};var n=r[1]&&parseInt(r[1]),o=r[2]&&parseInt(r[2]);return{year:null==o?n:100*o,restDateString:e.slice((r[1]||r[2]).length)}}function d(e,t){if(null===t)return null;var a=e.match(i);if(!a)return null;var r=!!a[4],n=p(a[1]),o=p(a[2])-1,l=p(a[3]),s=p(a[4]),c=p(a[5])-1;if(r)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,s,c)?function(e,t,a){var r=new Date(0);r.setUTCFullYear(e,0,4);var n=r.getUTCDay()||7,o=7*(t-1)+a+1-n;return r.setUTCDate(r.getUTCDate()+o),r}(t,s,c):new Date(NaN);var u=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(h[t]||(v(e)?29:28))}(t,o,l)&&function(e,t){return t>=1&&t<=(v(e)?366:365)}(t,n)?(u.setUTCFullYear(t,o,Math.max(n,l)),u):new Date(NaN)}function p(e){return e?parseInt(e):1}function b(e){var t=e.match(l);if(!t)return null;var a=g(t[1]),r=g(t[2]),n=g(t[3]);return function(e,t,a){if(24===e)return 0===t&&0===a;return a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(a,r,n)?36e5*a+6e4*r+1e3*n:NaN}function g(e){return e&&parseFloat(e.replace(",","."))||0}function f(e){if("Z"===e)return 0;var t=e.match(s);if(!t)return 0;var a="+"===t[1]?-1:1,r=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,n)?a*(36e5*r+6e4*n):NaN}var h=[31,null,31,30,31,30,31,31,30,31,30,31];function v(e){return e%400===0||e%4===0&&e%100}},1536:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(20),n=a.n(r),o=a(39),i=a(75);class l{getTouslesAbonnes(e,t,a,r){return Object(o.a)(n.a.mark((function r(){var o;return n.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e+=1,r.next=3,i.b.get("/abonnes?itemsPerPage="+t+"&page="+e+"&id="+a);case 3:return o=r.sent,r.abrupt("return",o.data);case 5:case"end":return r.stop()}}),r)})))()}ajoutAbonne(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.post("/abonnes",e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}miseajourAbonne(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/abonnes/"+e.id,e);case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}suppressionAbonne(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.delete("/abonnes/"+e.id,{method:"DELETE",herdears:{Accept:"application/json"},data:e.id});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}togleactifAbonne(e){return Object(o.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.put("/abonnes/"+e.id,{actif:!e.actif});case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()}}},1999:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(17),o=a(0),i=a.n(o),l=a(1536),s=a(133),c=a(1408),u=a.n(c),m=a(1389),d=a(1325),p=a(1971),b=a(1970),g=a(447),f=a(1972),h=a(451),v=a(1375),j=a(357),E=a(354),O=a(355),w=a(1380),y=a(1409),D=(a(1410),a(75)),C=a(1369),A=a(1384),x=a(353),S=a(1968),q=a(621),N=a(1967),T=a(1966),P=a(1372),k=a(1390),M=a(1391),R=(a(1392),a(1393)),F=(a(1394),a(1395),a(1396),a(1982));function Q(e){var t,a,r,n,o,l,s,c,u,m,d;const p=e.state,b=e.fonctions,f=e.queries,j=e.useform,E=e.onSubmit;return i.a.createElement("div",null,i.a.createElement(x.a,{container:!0,spacing:1,justify:"center"},i.a.createElement(x.a,{item:!0,lg:6,md:6,sm:12,xs:12},i.a.createElement(C.a,{theme:Object(D.a)()},i.a.createElement(v.a,null,i.a.createElement(S.a,{action:i.a.createElement(q.a,{"aria-label":"",onClick:b.AnnulerEnregistrement},"x"),title:"ajout"===p.pagestate.action?"Nouvau quartier":"Mise \xe0 jour ",subheader:""}),i.a.createElement(N.a,{className:" px-6 pt-6 pb-6"}," ",i.a.createElement("form",{onSubmit:j.handleSubmit(E)},i.a.createElement(x.a,{container:!0,spacing:4,direction:"column"},i.a.createElement(x.a,{item:!0},i.a.createElement(R.a,{progress:p.progressphoto,acceptedFiles:[".png"],onUpload:e=>b.uploaderphoto(e),onSupprimer:()=>b.supprimerphoto(),titre:"Fichier photo .png(faire glisser ou cliquez ici pour charger)"})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"nom",nom:"nom",label:"Nom",valeur:null===(t=p.abonne)||void 0===t?void 0:t.nom,control:j.control,error:j.errors.nom})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"prenom",nom:"prenom",label:"Prenom",valeur:null===(a=p.abonne)||void 0===a?void 0:a.prenom,control:j.control,error:j.errors.prenom})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"adresse",nom:"adresse",label:"Adresse",valeur:null===(r=p.abonne)||void 0===r?void 0:r.adresse,control:j.control,error:j.errors.adresse})),i.a.createElement(x.a,{item:!0},f.queryQuartiers.isLoading?i.a.createElement(w.a,{message:"chargement des roles"}):i.a.createElement(M.a,{id:"quartier",name:"quartier",label:"quartier",table:"quartier",control:j.control,options:f.queryQuartiers.data.rows,error:j.errors.quartier,defaultValue:null!==(n=null===(o=p.abonne)||void 0===o||null===(l=o.quartier)||void 0===l?void 0:l.id)&&void 0!==n?n:"1",valeur:null!==(s=null===(c=p.abonne)||void 0===c?void 0:c.quartier)&&void 0!==s?s:""})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"telephone",nom:"telephone",label:"T\xe9l\xe9phone",valeur:null===(u=p.abonne)||void 0===u?void 0:u.telephone,control:j.control,error:j.errors.telephone})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"email",nom:"email",label:"Email",valeur:null===(m=p.abonne)||void 0===m?void 0:m.email,control:j.control,error:j.errors.email})),i.a.createElement(x.a,{item:!0},i.a.createElement(k.a,{id:"motdepasse",nom:"motdepasse",label:"Mot de passe",valeur:null===(d=p.abonne)||void 0===d?void 0:d.motdepasse,control:j.control,error:j.errors.motdepasse}))))),i.a.createElement(T.a,null,i.a.createElement(x.a,{container:!0,alignItems:"center",justify:"space-between"},i.a.createElement(x.a,{item:!0},i.a.createElement(h.a,{color:"primary",variant:"contained",type:"submit",onClick:j.handleSubmit(E)},f.mutationMiseajour.isLoading||f.mutationAjout.isLoading?i.a.createElement(P.a,{color:"inherit"}):i.a.createElement(F.a,null),i.a.createElement("span",{className:"pl-2 capitalize"},"ajout"===p.pagestate.action?i.a.createElement(g.a,null,"Enregistrer"):i.a.createElement(g.a,null,"Mettre \xe0 jour")))),i.a.createElement(x.a,{item:!0},i.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:b.AnnulerEnregistrement},"Annuler")))))))))}var L=e=>{var t,a;const n=e.state,o=e.fonctions,l=e.collonnes,s=e.queries,c=e.useform,A=e.onSubmit;return i.a.createElement("div",{className:"m-sm-30"},i.a.createElement(d.a,{open:n.dialoguephoto.open,"aria-labelledby":"",maxWidth:"md",onClose:o.handleCloseDialoguephoto,objet:n.dialoguephoto.objet},i.a.createElement(p.a,{id:""},n.dialoguephoto.titre),i.a.createElement(b.a,null,i.a.createElement("img",{src:D.c+"/fichiers/"+n.dialoguephoto.fichier,alt:n.dialoguephoto.objet,srcset:""}))),i.a.createElement(j.a,{message:n.alert.message,severity:n.alert.severity,open:n.alert.open,handleAlertClose:!0===n.alert.automaticClose?()=>o.handleFermetureAlerte():()=>o.fermerAlerte()}),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(E.a,{routeSegments:[{name:n.titre}]})),i.a.createElement("div",{className:"mb-sm-30"},i.a.createElement(g.a,{variant:"h4"},n.titre)),"affichage"===n.pagestate.mode?i.a.createElement(f.a,{in:n.pagestate.affichageTable,direction:"right",unmountOnExit:!0},i.a.createElement("div",null,i.a.createElement(h.a,{className:"mb-4",variant:"contained",color:"primary",onClick:()=>o.handleClicksurNouveau()},"Nouvau quartier"),s.queryAbonnes.isLoading?i.a.createElement(w.a,{message:"Chargement des donn\xe9es...",type:"info"}):s.queryAbonnes.isError?i.a.createElement(w.a,{message:"Erreur lors du chargement des donn\xe9es::"+s.queryAbonnes.error,type:"error"}):i.a.createElement(y.a,{tag:"div",blocking:!1},i.a.createElement(C.a,{theme:Object(D.a)()},i.a.createElement(u.a,{title:n.titre,data:s.queryAbonnes.data.rows,columns:l,options:Object(r.a)(Object(r.a)({},m.a),{},{serverSide:!0,count:s.queryAbonnes.data.count,rowsPerPageOptions:[20,30,50],rowsPerPage:n.tableconfig.rowsPerPage,textLabels:Object(r.a)(Object(r.a)({},m.a.textLabels),{},{toolbar:Object(r.a)(Object(r.a)({},m.a.textLabels.toolbar),{},{search:"Rechercher par id"})}),onChangePage:e=>o.handleChangePage(e),onChangeRowsPerPage:e=>o.handleChangeRowPerPage(e),onSearchChange:e=>o.handleSearchChange(e),onFilterChange:()=>o.handleFilterChange()})}))),i.a.createElement(v.a,{className:"w-full overflow-auto",elevation:8},i.a.createElement(O.a,{open:n.dialogueSuppressionOuvert,onConfirmDialogClose:o.fermerDialogueSuppression,onYesClick:o.confirmerSuppression,text:null!==(t="Confirmez la suppression de "+(null===(a=n.abonne)||void 0===a?void 0:a.nom))&&void 0!==t?t:""})))):i.a.createElement(Q,{state:n,fonctions:o,queries:s,useform:c,onSubmit:A}))},U=a(13),I=a(87),z=a(1983),B=a(1984),W=a(1985),Y=a(1986),Z=a(343),V=a(1545),$=a(1377),G=a(1355),H=a(1329),J=a(1640),K=a(1373),X=a(1962),_=a(1492);Object(Z.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}});function ee(e){const t=Object(Z.a)(e=>{e.palette,Object(U.a)(e,["palette"]);return{userMenu:{display:"flex",alignItems:"center",cursor:"pointer",borderRadius:24,padding:4,"& span":{margin:"0 8px"}},menuItem:{display:"flex",alignItems:"center",minWidth:185}}}),a=(t,a)=>{e.handleClickSurAction(t,a)};return[{name:"id",label:"",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r;return null!==(r=null===e||void 0===e?void 0:e.toLocaleString("fr-FR"))&&void 0!==r?r:""}}},{name:"photo",label:"Abonne",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>{var n,o;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"flex items-center"},i.a.createElement(V.a,{onClick:()=>e.handleClickSurphoto({photo:t})},i.a.createElement(h.a,null,i.a.createElement($.a,{variant:"rounded",className:"w-48 h-48",src:D.c+"/fichiers/"+t}))),i.a.createElement("div",{className:"ml-3"},i.a.createElement("h5",{className:"my-0 text-15"},(null!==(n=a.rowData[2])&&void 0!==n?n:"")+" "+(null!==(o=a.rowData[3])&&void 0!==o?o:"")),i.a.createElement("small",{className:"text-muted"},a.rowData[6]+"/"+a.rowData[7]),i.a.createElement("br",null))))}}},{name:"nom",label:"Nom",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"prenom",label:"Prenom",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"adresse",label:"Adresse",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>e}},{name:"Quartier",label:"quartier",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>{var r,n,o;return(null!==(r=null===e||void 0===e?void 0:e.nom)&&void 0!==r?r:" ")+"/"+(null!==(n=null===e||void 0===e||null===(o=e.Commune)||void 0===o?void 0:o.nom)&&void 0!==n?n:" ")}}},{name:"telephone",label:"T\xe9l\xe9phone",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"email",label:"Email",options:{filter:!1,sort:!1,display:!1,customBodyRender:(e,t,a)=>e}},{name:"actif",label:"Actif",options:{filter:!1,sort:!1,display:!0,customBodyRender:(t,a,r)=>i.a.createElement(G.a,{checked:t,onChange:()=>e.handleTogleactif({id:a.rowData[0],actif:t})})}},{name:"createdAt",label:"Cr\xe9\xe9 le",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,t,a)=>null==e?" ":Object(X.a)(Object(_.a)(e),"dd/MM/yyyy HH:mm")}},{name:"token",label:"Token",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"motdepasse",label:"Mot de passe",options:{filter:!1,sort:!1,display:"excluded",customBodyRender:(e,t,a)=>e}},{name:"action",label:"Actions",options:{filter:!1,sort:!1,display:!0,customBodyRender:(e,r,n)=>i.a.createElement("div",null,i.a.createElement(I.j,{menuButton:i.a.createElement("div",{className:t.userMenu},i.a.createElement(H.a,{xsDown:!0},i.a.createElement(h.a,{size:"small",variant:"outlined",color:"primary",endIcon:i.a.createElement(Y.a,null)},"Actions")))},(e=>{switch(e.statut){case"Annul\xe9":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})}];case"Nouveau":return[{id:1,nom:"D\xe9tails",action:e=>a(e,"D\xe9tails"),icon:i.a.createElement(z.a,{color:"primary"})},{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})},{id:3,nom:"Supprimer",action:e=>a(e,"Supprimer"),icon:i.a.createElement(W.a,{color:"error"})}];default:return[{id:2,nom:"Modifier",action:e=>a(e,"Modifier"),icon:i.a.createElement(B.a,{color:"primary"})}]}})({id:r.rowData[0],photo:r.rowData[1],nom:r.rowData[2],prenom:r.rowData[3],adresse:r.rowData[4],quartier:r.rowData[5],telephone:r.rowData[6],email:r.rowData[7],actif:r.rowData[8],createdAt:r.rowData[9],token:r.rowData[10],motdepasse:r.rowData[11]}).map(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement(J.a,{onClick:()=>e.action({id:r.rowData[0],photo:r.rowData[1],nom:r.rowData[2],prenom:r.rowData[3],adresse:r.rowData[4],quartier:r.rowData[5],telephone:r.rowData[6],email:r.rowData[7],actif:r.rowData[8],createdAt:r.rowData[9],token:r.rowData[10],motdepasse:r.rowData[11]}),key:e.id,value:e.statut},e.icon,"   ",i.a.createElement("span",{className:"ml-5"},e.nom)),i.a.createElement(K.a,null)))))}}]}var te=a(1379),ae=a(1397),re=a(1383),ne=a(1425);t.default=()=>{const e={abonne:{photo:"",nom:"",prenom:"",adresse:"",quartier:"1",telephone:"",email:"",actif:"",createdAt:"",token:"",motdepasse:""},abonne1:null,titre:"Gestion des abonn\xe9s",tableconfig:{page:0,rowsPerPage:30,recherche:"",filtre:""},pagestate:{mode:"affichage",action:"ajout",affichageTable:!0},alert:{severity:"severity",message:"",open:!1,automaticClose:!1},dialogueSuppressionOuvert:!1,dialoguephoto:{open:!1,fichier:"",titre:"",objet:""},progressphoto:0},t=Object(o.useState)(e),a=Object(n.a)(t,2),c=a[0],u=a[1];let m=new l.a,d=new ne.a;const p=Object(s.useQueryClient)(),b=e=>{var t=Math.round(100*e.loaded/e.total);u(Object(r.a)(Object(r.a)({},c),{},{progressphoto:t}))},g={handleFermetureAlerte:()=>{u(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des abonn\xe9s",alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1}),pagestate:Object(r.a)(Object(r.a)({},c.pagestate),{},{mode:"affichage",affichageTable:!0})}))},handleClicksurNouveau:()=>{u(Object(r.a)(Object(r.a)({},c),{},{abonne:null,titre:"Nouvau quartier ",pagestate:{mode:"edition",action:"ajout",affichageTable:!1}}))},fermerAlerte:()=>{u(Object(r.a)(Object(r.a)({},c),{},{alert:Object(r.a)(Object(r.a)({},c.alert),{},{open:!1})}))},AnnulerEnregistrement:()=>{console.log("Annulation de l'enregistrement"),u(Object(r.a)(Object(r.a)({},c),{},{titre:"Gestion des abonn\xe9s",pagestate:{mode:"affichage",action:"ajout",affichageTable:!0}}))},fermerDialogueSuppression:()=>{u(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1}))},confirmerSuppression:()=>{w.mutate(c.abonne)},handleCloseDialoguephoto:()=>{u(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:Object(r.a)(Object(r.a)({},c.dialoguephoto),{},{open:!1})}))},handleChangeRowPerPage:e=>{u(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{rowsPerPage:e})}))},handleSearchChange:e=>{u(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{recherche:e})}))},handleChangePage:e=>{u(Object(r.a)(Object(r.a)({},c),{},{tableconfig:Object(r.a)(Object(r.a)({},c.tableconfig),{},{page:e})}))},handleClickSurAction:(e,t)=>{switch(console.log(t),t){case"D\xe9tails":console.log("action details");break;case"Modifier":u(Object(r.a)(Object(r.a)({},c),{},{titre:"Mise \xe0 jour ",abonne:e,pagestate:{mode:"edition",action:"misajour",affichageTable:!1}}));break;case"Supprimer":u(Object(r.a)(Object(r.a)({},c),{},{abonne:e,dialogueSuppressionOuvert:!0}))}},handleProgressphoto:b,uploaderphoto:e=>{e&&E.mutate({fichier:e,objet:"photoabonne",handleprogress:b})},supprimerphoto:()=>{console.log("Suppression du fichier")},handleClickSurphoto:e=>{u(Object(r.a)(Object(r.a)({},c),{},{dialoguephoto:{open:!0,titre:"photo",fichier:e.photo,objet:"photoabonne"}}))},handleTogleactif:e=>{O.mutate(e)},handledatecreatedAtchange:e=>{u(Object(r.a)(Object(r.a)({},c),{},{abonne:Object(r.a)(Object(r.a)({},c.abonne),{},{createdAt:e})}))}},f=Object(s.useQuery)(["Abonnes",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>m.getTouslesAbonnes(c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),h=Object(s.useQuery)(["Quartiers",c.tableconfig.page,c.tableconfig.rowsPerPage,c.tableconfig.recherche,c.tableconfig.filtre],()=>d.getTouslesQuartiers(0,1e3,c.tableconfig.recherche,c.tableconfig.filtre),{keepPreviousData:!0}),v=Object(s.useMutation)(m.ajoutAbonne,{onSuccess:()=>{p.invalidateQueries("Abonnes"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Enregistrement r\xe9ussi",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Abonnes"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de l'enregistrement",open:!0,severity:"error",automaticClose:!0}}))}}),j=Object(s.useMutation)(m.miseajourAbonne,{onSuccess:()=>{p.invalidateQueries("Abonnes"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Mise \xe0 jour R\xe9ussie...",open:!0,severity:"success",automaticClose:!0}}))},onError:()=>{p.invalidateQueries("Abonnes"),u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"Echec lors de la mise \xe0 jour",open:!0,severity:"error",automaticClose:!0}}))}}),E=Object(s.useMutation)(ae.a,{onSuccess:e=>{u(Object(r.a)(Object(r.a)({},c),{},{abonne:Object(r.a)(Object(r.a)({},c.abonne),{},{photo:e}),alert:{message:"Upload du fichier r\xe9ussi",open:!0,severity:"success",automaticClose:!1},progressphoto:100}))},onError:()=>{u(Object(r.a)(Object(r.a)({},c),{},{alert:{automaticClose:!1,message:"Echec de chargement du fichier sur le serveur",open:!0,severity:"error"}}))}}),O=Object(s.useMutation)(m.togleactifAbonne,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},c),{},{alert:{message:"op\xe9ration r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de l op\xe9ration",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Abonnes")}}),w=Object(s.useMutation)(m.suppressionAbonne,{onSuccess:()=>{u(Object(r.a)(Object(r.a)({},c),{},{dialogueSuppressionOuvert:!1,alert:{message:"Supr\xe9ssion r\xe9ussie",open:!0,severity:"success"}}))},onError:()=>{u({alert:{message:"Echec lors de la supr\xe9ssion",open:!0,severity:"error"}})},onSettled:()=>{p.invalidateQueries("Abonnes")}}),y={queryAbonnes:f,mutationMiseajour:j,mutationAjout:v,mutationSuppression:w,mutationUploadphoto:E,queryQuartiers:h},D=ee(g),C=A.b().shape({nom:A.c().required("Le champs Nom est requis"),prenom:A.c().required("Le champs Prenom est requis"),quartier:A.c().required("Le champs Quartier est requis"),telephone:A.c().required("Le champs Telephone est requis")}),x=Object(te.c)({resolver:Object(re.yupResolver)(C),defaultValues:{abonne:c.abonne}});return i.a.createElement(L,{state:c,fonctions:g,collonnes:D,queries:y,useform:x,onSubmit:e=>{var t;let a=Object(r.a)(Object(r.a)({},c.abonne),e);void 0!==(null===(t=c.abonne)||void 0===t?void 0:t.id)?y.mutationMiseajour.mutate(Object(r.a)({},a)):y.mutationAjout.mutate(Object(r.a)({},a))}})}}}]);