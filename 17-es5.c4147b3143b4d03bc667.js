function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{N7YL:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var o=t("lJxs"),a=t("AytR"),i=t("fXoL"),r=t("tk/3"),s=function(){var e=function(){function e(n){var t=this;_classCallCheck(this,e),this._http=n,this.conversations=[],this.getMessagesGroups$=function(){return t._http.get("".concat(a.a.API_URL)).pipe(Object(o.a)((function(e){return e.messages})))},this.getMessagesPage$=function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return t._http.get("".concat(a.a.API_URL)).pipe((function(e){return e.messages}))},this.addMessage=function(e,n){n.messages.push({creationDate:(new Date).getTime(),content:e}),t.conversations.some((function(e){return e.user.name===n.user.name}))||t.conversations.unshift(n)},this.getMessagesGroups$().subscribe((function(e){return t.conversations=e}))}return _createClass(e,[{key:"markAsRead",value:function(e){e.messages.filter((function(e){return!e.readDate})).forEach((function(e){return e.readDate=(new Date).getTime()}))}},{key:"getConversationBy",value:function(e){var n=this._existingConversationBy(e);return!!n&&n||this._newConversationBy(e)}},{key:"_existingConversationBy",value:function(e){return this.conversations.find((function(n){return n.user.name===e}))}},{key:"_newConversationBy",value:function(e){return{user:{name:e},messages:[],viewDate:(new Date).getTime()}}},{key:"hasNewReceived",get:function(){return this.conversations.some((function(e){return e.messages.some((function(e){return!e.readDate&&e.isResponse}))}))}},{key:"hasUserVisitedMessages",get:function(){return this.conversations.some((function(e){return!e.viewDate}))}}]),e}();return e.\u0275fac=function(n){return new(n||e)(i.Ub(r.a))},e.\u0275prov=i.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},hO9l:function(e,n,t){"use strict";t.r(n),t.d(n,"TabsPageModule",(function(){return p}));var o=t("TEn/"),a=t("ofXK"),i=t("3Pt+"),r=t("tyNb"),s=t("N7YL"),c=t("fXoL");function u(e,n){1&e&&c.Mb(0,"ion-badge",12)}var l,b,f,h=[{path:"",component:(l=function(){function e(n){_classCallCheck(this,e),this._messagesService=n}return _createClass(e,[{key:"hasUserVisitedMessages",get:function(){return this._messagesService.hasUserVisitedMessages}}]),e}(),l.\u0275fac=function(e){return new(e||l)(c.Lb(s.a))},l.\u0275cmp=c.Fb({type:l,selectors:[["app-tabs"]],decls:23,vars:1,consts:[["slot","bottom"],["tab","jarmark"],["name","leaf-outline"],["tab","szukaj"],["name","search-outline"],["tab","koszyk"],["name","basket-outline"],["tab","wiadomosci"],["name","chatbox-outline"],["color","success",4,"ngIf"],["tab","profil"],["name","person-circle-outline"],["color","success"]],template:function(e,n){1&e&&(c.Qb(0,"ion-tabs"),c.Qb(1,"ion-tab-bar",0),c.Qb(2,"ion-tab-button",1),c.Mb(3,"ion-icon",2),c.Qb(4,"ion-label"),c.pc(5,"Jarmark"),c.Pb(),c.Pb(),c.Qb(6,"ion-tab-button",3),c.Mb(7,"ion-icon",4),c.Qb(8,"ion-label"),c.pc(9,"Szukaj"),c.Pb(),c.Pb(),c.Qb(10,"ion-tab-button",5),c.Mb(11,"ion-icon",6),c.Qb(12,"ion-label"),c.pc(13,"Koszyk"),c.Pb(),c.Pb(),c.Qb(14,"ion-tab-button",7),c.Mb(15,"ion-icon",8),c.Qb(16,"ion-label"),c.pc(17,"Wiadomo\u015bci"),c.Pb(),c.nc(18,u,1,0,"ion-badge",9),c.Pb(),c.Qb(19,"ion-tab-button",10),c.Mb(20,"ion-icon",11),c.Qb(21,"ion-label"),c.pc(22,"Profil"),c.Pb(),c.Pb(),c.Pb(),c.Pb()),2&e&&(c.zb(18),c.gc("ngIf",n.hasUserVisitedMessages))},directives:[o.A,o.y,o.z,o.m,o.q,a.k,o.e],styles:[".tab-selected[_ngcontent-%COMP%], ion-tab-button[_ngcontent-%COMP%]:hover{color:green}.basket-products-number[_ngcontent-%COMP%]{font-size:smaller;padding:4px;margin-top:-5px}"]}),l),children:[{path:"",redirectTo:"jarmark",pathMatch:"full"},{path:"jarmark",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(19)]).then(t.bind(null,"qkvE")).then((function(e){return e.MarketPageModule}))}},{path:"koszyk",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(18)]).then(t.bind(null,"SCLQ")).then((function(e){return e.BasketModule}))}},{path:"szukaj",loadChildren:function(){return Promise.all([t.e(1),t.e(0),t.e(25)]).then(t.bind(null,"RmqX")).then((function(e){return e.SearchModule}))}},{path:"profil",loadChildren:function(){return t.e(24).then(t.bind(null,"cRhG")).then((function(e){return e.ProfileModule}))}},{path:"wiadomosci",loadChildren:function(){return Promise.all([t.e(1),t.e(20)]).then(t.bind(null,"TdLt")).then((function(e){return e.MessagesModule}))}}]},{path:"",redirectTo:"zakladki/jarmark",pathMatch:"full"}],d=((f=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:f}),f.\u0275inj=c.Ib({factory:function(e){return new(e||f)},imports:[[r.j.forChild(h)],r.j]}),f),p=((b=function e(){_classCallCheck(this,e)}).\u0275mod=c.Jb({type:b}),b.\u0275inj=c.Ib({factory:function(e){return new(e||b)},imports:[[o.F,a.b,i.a,d]]}),b)}}]);