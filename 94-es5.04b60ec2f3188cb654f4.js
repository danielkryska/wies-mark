function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{qkvE:function(t,n,e){"use strict";e.r(n),e.d(n,"MarketPageModule",(function(){return O}));var o=e("PCNd"),r=e("TEn/"),c=e("ofXK"),i=e("3Pt+"),a=e("tyNb"),s=e("2qjx"),p=e("DnKK"),u=e("U5Sr"),d=e("fXoL"),g=e("+Efk"),b=e("ioEP");function l(t,n){if(1&t&&d.Lb(0,"app-products-section",4),2&t){var e=d.Zb();d.fc("products",e.marketProducts)}}function f(t,n){if(1&t&&d.Lb(0,"app-products-section",4),2&t){var e=d.Zb();d.fc("products",e.marketProducts)}}var P,h,_,C=[{path:"",component:(P=function(){function t(n,e,o){var r=this;_classCallCheck(this,t),this._productsService=n,this._categoriesService=e,this._modalController=o,this.marketProducts=[],this.categories=[],this.sortProductsBy=function(t){return r._productsService.getProducts([],t.target.value).pipe(Object(p.a)(r)).subscribe((function(t){r.marketProducts=t}))},this._productsService.getProducts().pipe(Object(p.a)(this)).subscribe((function(t){r.marketProducts=t})),this._categoriesService.categories$.pipe(Object(p.a)(this)).subscribe((function(t){r.categories=t}))}return _createClass(t,[{key:"ngOnDestroy",value:function(){}}]),t}(),P.\u0275fac=function(t){return new(t||P)(d.Kb(s.a),d.Kb(u.a),d.Kb(r.x))},P.\u0275cmp=d.Eb({type:P,selectors:[["app-market"]],decls:7,vars:3,consts:[["routerLink","/zakladki/szukaj"],["disabled","true"],[3,"categories"],["title","Popularne","sortBy","popularity","filters","[]",3,"products",4,"ngIf"],["title","Popularne","sortBy","popularity","filters","[]",3,"products"]],template:function(t,n){1&t&&(d.Pb(0,"ion-header"),d.Pb(1,"a",0),d.Lb(2,"ion-searchbar",1),d.Ob(),d.Lb(3,"app-categories-bar",2),d.Ob(),d.Pb(4,"ion-content"),d.nc(5,l,1,1,"app-products-section",3),d.nc(6,f,1,1,"app-products-section",3),d.Ob()),2&t&&(d.zb(3),d.fc("categories",n.categories),d.zb(2),d.fc("ngIf",!!n.marketProducts&&n.marketProducts.length>1),d.zb(1),d.fc("ngIf",!!n.marketProducts&&n.marketProducts.length>1))},directives:[r.g,a.i,r.z,r.q,r.A,g.a,r.e,c.j,b.a],styles:["ion-content[_ngcontent-%COMP%]{padding:10px}ion-content[_ngcontent-%COMP%]   .basket-floating-btn[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .favorite-floating-btn[_ngcontent-%COMP%]{right:25px;position:absolute;border-radius:50%;background-color:hsla(0,0%,100%,.9);font-size:25px;z-index:999}ion-content[_ngcontent-%COMP%]   .basket-floating-btn[_ngcontent-%COMP%]{top:88px;padding:13px 13px 7px;color:green}ion-content[_ngcontent-%COMP%]   .favorite-floating-btn[_ngcontent-%COMP%]{top:25px;padding:12px 13px 8px;color:orange}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:300px;background-repeat:no-repeat;background-position:50%;background-size:cover}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   bar-rating[_ngcontent-%COMP%]{position:absolute;top:-16px;right:-5px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .supplier[_ngcontent-%COMP%]{position:absolute;top:-25px;z-index:999;background-color:#fff;padding:8px;border-top-left-radius:5px;right:0;font-size:12px}ion-content[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{height:72px}"]}),P)}],k=((_=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ib({type:_}),_.\u0275inj=d.Hb({factory:function(t){return new(t||_)},imports:[[a.j.forChild(C)],a.j]}),_),O=((h=function t(){_classCallCheck(this,t)}).\u0275mod=d.Ib({type:h}),h.\u0275inj=d.Hb({factory:function(t){return new(t||h)},imports:[[r.v,c.b,i.a,k,o.a]]}),h)}}]);