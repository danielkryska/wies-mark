(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{qkvE:function(t,n,o){"use strict";o.r(n),o.d(n,"MarketPageModule",(function(){return k}));var e=o("PCNd"),r=o("TEn/"),c=o("ofXK"),i=o("3Pt+"),s=o("tyNb"),a=o("2qjx"),p=o("DnKK"),g=o("U5Sr"),u=o("fXoL"),d=o("+Efk"),b=o("ioEP");function l(t,n){if(1&t&&u.Lb(0,"app-products-section",4),2&t){const t=u.Zb();u.gc("products",t.marketProducts)}}function P(t,n){if(1&t&&u.Lb(0,"app-products-section",4),2&t){const t=u.Zb();u.gc("products",t.marketProducts)}}const f=[{path:"",component:(()=>{class t{constructor(t,n,o){this._productsService=t,this._categoriesService=n,this._modalController=o,this.marketProducts=[],this.categories=[],this.sortProductsBy=t=>this._productsService.getProducts$([],t.target.value).pipe(Object(p.a)(this)).subscribe(t=>{this.marketProducts=t}),this._productsService.getProducts$().pipe(Object(p.a)(this)).subscribe(t=>{this.marketProducts=t}),this._categoriesService.categories$.pipe(Object(p.a)(this)).subscribe(t=>{this.categories=t})}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(u.Kb(a.a),u.Kb(g.a),u.Kb(r.z))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-market"]],decls:7,vars:3,consts:[["routerLink","/zakladki/szukaj"],["placeholder","Jakiego produktu szukasz?","disabled","true"],[3,"categories"],["title","Popularne","sortBy","popularity","filters","[]",3,"products",4,"ngIf"],["title","Popularne","sortBy","popularity","filters","[]",3,"products"]],template:function(t,n){1&t&&(u.Pb(0,"ion-header"),u.Pb(1,"a",0),u.Lb(2,"ion-searchbar",1),u.Ob(),u.Lb(3,"app-categories-bar",2),u.Ob(),u.Pb(4,"ion-content"),u.oc(5,l,1,1,"app-products-section",3),u.oc(6,P,1,1,"app-products-section",3),u.Ob()),2&t&&(u.zb(3),u.gc("categories",n.categories),u.zb(2),u.gc("ngIf",!!n.marketProducts&&n.marketProducts.length>1),u.zb(1),u.gc("ngIf",!!n.marketProducts&&n.marketProducts.length>1))},directives:[r.i,s.i,r.B,r.s,r.C,d.a,r.g,c.k,b.a],styles:["ion-content[_ngcontent-%COMP%]{padding:10px}ion-content[_ngcontent-%COMP%]   .basket-floating-btn[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .favorite-floating-btn[_ngcontent-%COMP%]{right:25px;position:absolute;border-radius:50%;background-color:hsla(0,0%,100%,.9);font-size:25px;z-index:999}ion-content[_ngcontent-%COMP%]   .basket-floating-btn[_ngcontent-%COMP%]{top:88px;padding:13px 13px 7px;color:green}ion-content[_ngcontent-%COMP%]   .favorite-floating-btn[_ngcontent-%COMP%]{top:25px;padding:12px 13px 8px;color:orange}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:300px;background-repeat:no-repeat;background-position:50%;background-size:cover}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   bar-rating[_ngcontent-%COMP%]{position:absolute;top:-16px;right:-5px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .supplier[_ngcontent-%COMP%]{position:absolute;top:-25px;z-index:999;background-color:#fff;padding:8px;border-top-left-radius:5px;right:0;font-size:12px}ion-content[_ngcontent-%COMP%]   .space[_ngcontent-%COMP%]{height:72px}"]}),t})()}];let h=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(n){return new(n||t)},imports:[[s.j.forChild(f)],s.j]}),t})(),k=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(n){return new(n||t)},imports:[[r.x,c.b,i.a,h,e.a]]}),t})()}}]);