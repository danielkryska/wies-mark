function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{qkvE:function(t,n,e){"use strict";e.r(n),e.d(n,"MarketPageModule",(function(){return k}));var o=e("PCNd"),r=e("TEn/"),i=e("ofXK"),c=e("3Pt+"),a=e("tyNb"),s=e("2qjx"),p=e("DnKK"),u=e("U5Sr"),g=e("fXoL"),l=e("+Efk"),d=e("ioEP");function b(t,n){if(1&t&&g.Lb(0,"app-products-section",4),2&t){var e=g.Zb();g.gc("products",e.marketProducts)}}var f,P,h,C=[{path:"",component:(f=function(){function t(n,e,o){var r=this;_classCallCheck(this,t),this._productsService=n,this._categoriesService=e,this._modalController=o,this.marketProducts=[],this.categories=[],this.sortProductsBy=function(t){return r._productsService.getProducts$([],t.target.value).pipe(Object(p.a)(r)).subscribe((function(t){r.marketProducts=t}))},this._productsService.getProducts$().pipe(Object(p.a)(this)).subscribe((function(t){r.marketProducts=t})),this._categoriesService.categories$.pipe(Object(p.a)(this)).subscribe((function(t){r.categories=t}))}return _createClass(t,[{key:"ngOnDestroy",value:function(){}}]),t}(),f.\u0275fac=function(t){return new(t||f)(g.Kb(s.a),g.Kb(u.a),g.Kb(r.z))},f.\u0275cmp=g.Eb({type:f,selectors:[["app-market"]],decls:6,vars:2,consts:[["routerLink","/zakladki/szukaj"],["placeholder","Jakiego produktu szukasz?","disabled","true"],[3,"categories"],["title","Popularne","sortBy","popularity","filters","[]",3,"products",4,"ngIf"],["title","Popularne","sortBy","popularity","filters","[]",3,"products"]],template:function(t,n){1&t&&(g.Pb(0,"ion-header"),g.Pb(1,"a",0),g.Lb(2,"ion-searchbar",1),g.Ob(),g.Lb(3,"app-categories-bar",2),g.Ob(),g.Pb(4,"ion-content"),g.oc(5,b,1,1,"app-products-section",3),g.Ob()),2&t&&(g.zb(3),g.gc("categories",n.categories),g.zb(2),g.gc("ngIf",!!n.marketProducts&&n.marketProducts.length>1))},directives:[r.i,a.i,r.B,r.s,r.C,l.a,r.g,i.k,d.a],styles:["ion-content[_ngcontent-%COMP%]{padding:10px}ion-content[_ngcontent-%COMP%]   .basket-floating-btn[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .favorite-floating-btn[_ngcontent-%COMP%]{right:25px;position:absolute;border-radius:50%;background-color:hsla(0,0%,100%,.9);font-size:25px;z-index:999}ion-content[_ngcontent-%COMP%]   .basket-floating-btn[_ngcontent-%COMP%]{top:88px;padding:13px 13px 7px;color:green}ion-content[_ngcontent-%COMP%]   .favorite-floating-btn[_ngcontent-%COMP%]{top:25px;padding:12px 13px 8px;color:orange}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:300px;background-repeat:no-repeat;background-position:50%;background-size:cover}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   bar-rating[_ngcontent-%COMP%]{position:absolute;top:-16px;right:-5px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .supplier[_ngcontent-%COMP%]{position:absolute;top:-25px;z-index:999;background-color:#fff;padding:8px;border-top-left-radius:5px;right:0;font-size:12px}ion-content[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{height:72px}"]}),f)}],_=((h=function t(){_classCallCheck(this,t)}).\u0275mod=g.Ib({type:h}),h.\u0275inj=g.Hb({factory:function(t){return new(t||h)},imports:[[a.j.forChild(C)],a.j]}),h),k=((P=function t(){_classCallCheck(this,t)}).\u0275mod=g.Ib({type:P}),P.\u0275inj=g.Hb({factory:function(t){return new(t||P)},imports:[[r.x,i.b,c.a,_,o.a]]}),P)}}]);