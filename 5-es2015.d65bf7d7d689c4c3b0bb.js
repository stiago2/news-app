(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{S4EX:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class u{}var i=t("pMnS"),s=t("SVse");class o{constructor(n){this.eRef=n,this.defaultImage="../../assets/default-image.jpg"}setDefaultImage(){this.eRef.nativeElement.src=this.defaultImage}}var r=function(n){return n.Sports="success",n.Politics="danger",n.HumanRights="info",n.International="warning",n}({});class a{constructor(){this.onDelete=new e.m,this.onEdit=new e.m}ngOnInit(){this.colorClass=r[this.news.category]}edit(){this.onEdit.emit(this.news.id)}delete(){this.onDelete.emit({id:this.news.id,title:this.news.title})}}var c=e.pb({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{max-width:18rem}.card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{min-height:300px}.card[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.card[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}"]],data:{}});function b(n){return e.Nb(0,[e.Fb(0,s.o,[]),(n()(),e.rb(1,0,null,null,17,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),e.rb(2,0,null,null,1,"img",[["appOnError",""],["class","img-thumbnail"]],[[8,"src",4],[8,"alt",0]],[[null,"error"]],(function(n,l,t){var u=!0;return"error"===l&&(u=!1!==e.Db(n,3).setDefaultImage()&&u),u}),null,null)),e.qb(3,16384,null,0,o,[e.k],null,null),(n()(),e.rb(4,0,null,null,14,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.rb(5,0,null,null,2,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Lb(6,null,["",""])),e.Hb(7,1),(n()(),e.rb(8,0,null,null,2,"h6",[["class","card-subtitle mb-2 text-muted"]],null,null,null,null,null)),(n()(),e.Lb(9,null,[" "," "])),e.Hb(10,1),(n()(),e.rb(11,0,null,null,2,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),e.Lb(12,null,["",""])),e.Hb(13,1),(n()(),e.rb(14,0,null,null,4,"div",[["class","card-text action-buttons"]],null,null,null,null,null)),(n()(),e.rb(15,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.edit()&&e),e}),null,null)),(n()(),e.Lb(-1,null,[" Edit "])),(n()(),e.rb(17,0,null,null,1,"button",[["class","btn btn-outline-secondary"],["type","button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.delete()&&e),e}),null,null)),(n()(),e.Lb(-1,null,[" Delete "]))],null,(function(n,l){var t=l.component;n(l,1,0,e.vb(1,"card border-",t.colorClass," mb-3")),n(l,2,0,null==t.news?null:t.news.image,e.vb(1,"",null==t.news?null:t.news.description,""));var u=e.Mb(l,6,0,n(l,7,0,e.Db(l,0),null==t.news?null:t.news.title));n(l,6,0,u);var i=e.Mb(l,9,0,n(l,10,0,e.Db(l,0),null==t.news?null:t.news.subtitle));n(l,9,0,i);var s=e.Mb(l,12,0,n(l,13,0,e.Db(l,0),null==t.news?null:t.news.description));n(l,12,0,s)}))}class d{constructor(n,l,t){this.newsApiService=n,this.router=l,this.notificationCenterService=t,this.news=[]}ngOnInit(){this.getNews()}getNews(){this.newsApiService.getNews().subscribe(n=>{this.news=n,console.log("DATA",n)})}edit(n){this.router.navigate(["/news/add",n])}delete(n){this.notificationCenterService.showNotification({message:`You are about to delete ${n.title}, do you want to continue?`,title:"Delete News"},()=>this.newsApiService.deleteNews(n.id).subscribe({next:()=>this.getNews(),error:n=>console.log(n)}))}}var g=t("LRne"),p=t("lJxs"),h=t("IheW");class m{constructor(n){Object.assign(this,n)}}let f=(()=>{class n{adapt(n){return new m({id:n.id,title:n.title,subtitle:n.subtitle,image:n.image,category:n.category,description:n.description})}}return n.ngInjectableDef=e.Qb({factory:function(){return new n},token:n,providedIn:"root"}),n})(),w=(()=>{class n{constructor(n,l){this.http=n,this.adapter=l,this.BASE_URL="api/news"}createNews(n){return n.id=null,this.http.post(`${this.BASE_URL}`,n)}updateNews(n){return this.http.put(`${this.BASE_URL}/${n.id}`,n)}getNewsById(n){return 0===n?Object(g.a)(this.initNews()):this.http.get(`${this.BASE_URL}/${n}`).pipe(Object(p.a)(n=>this.adapter.adapt(n)))}getNews(){return this.http.get(this.BASE_URL).pipe(Object(p.a)(n=>n.map(n=>this.adapter.adapt(n))))}getNewsCategories(){return this.http.get("api/categories")}deleteNews(n){return this.http.delete(`${this.BASE_URL}/${n}`)}initNews(){return{id:0,title:"",subtitle:"",image:null,description:"",category:null}}}return n.ngInjectableDef=e.Qb({factory:function(){return new n(e.Rb(h.c),e.Rb(f))},token:n,providedIn:"root"}),n})();var v=t("iInd"),C=t("5WeU"),D=t("LqlI");let y=(()=>{class n{constructor(n){this.modalService=n}showNotification(n,l){this.bsModalRef=this.modalService.show(C.a,{initialState:{settings:n}}),this.bsModalRef.content.onConfirm.subscribe(l)}}return n.ngInjectableDef=e.Qb({factory:function(){return new n(e.Rb(D.b))},token:n,providedIn:"root"}),n})();var I=e.pb({encapsulation:0,styles:[[".news-dashboard-container[_ngcontent-%COMP%]{width:85%;margin:30px auto}"]],data:{}});function N(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"app-news-card",[],null,[[null,"onEdit"],[null,"onDelete"]],(function(n,l,t){var e=!0,u=n.component;return"onEdit"===l&&(e=!1!==u.edit(t)&&e),"onDelete"===l&&(e=!1!==u.delete(t)&&e),e}),b,c)),e.qb(1,114688,null,0,a,[],{news:[0,"news"]},{onDelete:"onDelete",onEdit:"onEdit"})],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function S(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,3,"div",[["class","news-dashboard-container"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"div",[["class","card-deck"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,N)),e.qb(3,278528,null,0,s.i,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,3,0,l.component.news)}),null)}function k(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"app-dashboard",[],null,null,null,S,I)),e.qb(1,114688,null,0,d,[w,v.k,y],null,null)],(function(n,l){n(l,1,0)}),null)}var x=e.nb("app-dashboard",d,k,{},{},[]),O=t("s7LF");class _{constructor(){this.onLoad=new e.m}onFileChange(n){const l=new FileReader;if(n.target.files&&n.target.files.length){const[t]=n.target.files;l.readAsDataURL(t),l.onload=()=>{this.onLoad.emit(l.result)}}}}var q=e.pb({encapsulation:0,styles:[[".news-image[_ngcontent-%COMP%]{margin-top:20px}"]],data:{}});function L(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"img",[["alt","Responsive image"],["appOnError",""],["class","img-fluid news-image"]],[[8,"src",4]],[[null,"error"]],(function(n,l,t){var u=!0;return"error"===l&&(u=!1!==e.Db(n,1).setDefaultImage()&&u),u}),null,null)),e.qb(1,16384,null,0,o,[e.k],null,null)],null,(function(n,l){n(l,0,0,l.component.imageSource)}))}function F(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"label",[["for","subtitle"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Image"])),(n()(),e.rb(3,0,null,null,3,"div",[["class","custom-file"]],null,null,null,null,null)),(n()(),e.rb(4,0,null,null,0,"input",[["class","custom-file-input"],["id","newsImage"],["type","file"]],null,[[null,"change"]],(function(n,l,t){var e=!0;return"change"===l&&(e=!1!==n.component.onFileChange(t)&&e),e}),null,null)),(n()(),e.rb(5,0,null,null,1,"label",[["class","custom-file-label"],["for","newsImage"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Choose Image"])),(n()(),e.gb(16777216,null,null,1,null,L)),e.qb(8,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,8,0,l.component.imageSource)}),null)}class P{constructor(n,l){this.renderer=n,this.hostElement=l}ngOnInit(){this.renderer.addClass(this.hostElement.nativeElement,`btn-${r[this.category]}`)}}class M{constructor(){this._value="",this.onChange=()=>{},this.onTouch=()=>{}}set value(n){void 0!==n&&this._value!==n&&(this._value=n,this.onChange(n),this.onTouch(n))}writeValue(n){this.value=n,this.selectedCategory=n}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouch=n}}var A=e.pb({encapsulation:0,styles:[[".radio-button-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap}.radio-button-container[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:10px}.radio-button-container[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{opacity:.6;-webkit-transform:scale(1.15);transform:scale(1.15)}"]],data:{}});function j(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,5,"label",[["appSetClassColor",""],["class","btn"],["role","button"],["tabindex","0"],["uncheckable",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.writeValue(n.context.$implicit.value)&&e),e}),null,null)),e.Ib(512,null,s.s,s.t,[e.r,e.s,e.k,e.D]),e.qb(2,278528,null,0,s.h,[s.s],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Gb(3,{selected:0}),e.qb(4,81920,null,0,P,[e.D,e.k],{category:[0,"category"]},null),(n()(),e.Lb(5,null,["",""]))],(function(n,l){var t=n(l,3,0,l.component.selectedCategory===l.context.$implicit.value);n(l,2,0,"btn",t),n(l,4,0,l.context.$implicit.value)}),(function(n,l){n(l,5,0,l.context.$implicit.name)}))}function B(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,5,"div",[["class","form-group radio-button-container"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"label",[["for","categories"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Categories"])),(n()(),e.rb(3,0,null,null,2,"div",[["btnRadioGroup",""],["class","btn-group"]],null,null,null,null,null)),(n()(),e.gb(16777216,null,null,1,null,j)),e.qb(5,278528,null,0,s.i,[e.O,e.L,e.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,5,0,l.component.categories)}),null)}function E(n){const l=n.get("title"),t=n.get("subtitle");return l.value&&t.value&&l.value.length>=t.value.length&&""!==l.value?{invalidLength:!0}:null}var R=t("iq5f");class T{constructor(n,l,t,e,u){this.newsApiService=n,this.route=l,this.notificationCenterService=t,this.formBuilder=e,this.router=u,this.subs=new R.SubSink,this.mode="add",this.categories=[],this.newsApiService.getNewsCategories().subscribe(n=>this.categories=n)}ngOnInit(){this.initForm(),this.subs.sink=this.route.params.subscribe(n=>{this.getNewsById(+n.id)})}initForm(){this.newsForm=this.formBuilder.group({title:["",O.o.compose([O.o.required,O.o.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")])],subtitle:["",O.o.compose([O.o.required])],image:[""],description:[""],category:[""]},{validators:E})}getNewsById(n){this.newsApiService.getNewsById(n).subscribe({next:n=>this.setFormValues(n).setPageMode(),error:n=>this.setFormValues(this.newsApiService.initNews()).setPageMode()})}canDeactivate(){return!(this.newsForm.touched&&this.newsForm.dirty&&this.newsForm.touched)||confirm("Discard changes for movie?")}setPageMode(){0===this.news.id?(this.mode="add",this.pageTitle="Add News"):(this.mode="edit",this.pageTitle=`Edit ${this.news.title}`)}setFormValues(n){return this.newsForm&&this.newsForm.reset(),this.news=n,this.newsForm.patchValue({title:n.title,subtitle:n.subtitle,image:n.image,description:n.description,category:n.category}),this}onSave(){if(this.newsForm.valid){const n=Object.assign({},this.news,this.newsForm.value),l={message:"",title:""};0===n.id?(l.message="Are you sure you want to save this news?",l.title="+ Add News",this.notificationCenterService.showNotification(l,()=>this.newsApiService.createNews(n).subscribe({next:()=>this.onSaveComplete(),error:n=>console.log(n)}))):(l.title="Edit News",l.message=`Are you sure you want to modify ${n.title}?`,this.notificationCenterService.showNotification(l,()=>this.newsApiService.updateNews(n).subscribe({next:()=>this.onSaveComplete(),error:n=>console.log(n)})))}}onSaveComplete(){this.newsForm.markAsUntouched(),this.router.navigate(["news"])}onDelete(){const n={message:`You are about to delete ${this.newsForm.get("title").value}, do you want to continue?`,title:"Delete News"};this.notificationCenterService.showNotification(n,()=>this.newsApiService.deleteNews(this.news.id).subscribe({next:()=>this.onSaveComplete(),error:n=>console.log(n)}))}loadFile(n){this.newsForm.patchValue({image:n})}selectCategory(n){this.newsForm.patchValue({category:n})}ngOnDestroy(){this.subs.unsubscribe()}}var $=e.pb({encapsulation:0,styles:[[".add-news-form-container[_ngcontent-%COMP%]{width:70%;margin:50px auto}.add-news-form-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:20px}.add-news-form-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.add-news-form-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}"]],data:{}});function U(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"small",[["class","form-text text-danger"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Title can not be longer than Subtitle"]))],null,null)}function V(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"small",[["class","form-text text-danger"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Title can not contain special characters"]))],null,null)}function H(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"button",[["class","btn btn-outline-secondary"],["type","button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onDelete()&&e),e}),null,null)),(n()(),e.Lb(-1,null,[" Delete "]))],null,null)}function J(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,53,"div",[["class","add-news-form-container"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Lb(2,null,["",""])),(n()(),e.rb(3,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var u=!0;return"submit"===l&&(u=!1!==e.Db(n,5).onSubmit(t)&&u),"reset"===l&&(u=!1!==e.Db(n,5).onReset()&&u),u}),null,null)),e.qb(4,16384,null,0,O.s,[],null,null),e.qb(5,540672,null,0,O.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Ib(2048,null,O.b,null,[O.f]),e.qb(7,16384,null,0,O.l,[[4,O.b]],null,null),(n()(),e.rb(8,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.rb(9,0,null,null,1,"label",[["for","title"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Title"])),(n()(),e.rb(11,0,null,null,7,"input",[["class","form-control"],["formControlName","title"],["id","title"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.Db(n,12)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Db(n,12).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Db(n,12)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Db(n,12)._compositionEnd(t.target.value)&&u),u}),null,null)),e.qb(12,16384,null,0,O.c,[e.D,e.k,[2,O.a]],null,null),e.qb(13,16384,null,0,O.n,[],{required:[0,"required"]},null),e.Ib(1024,null,O.h,(function(n){return[n]}),[O.n]),e.Ib(1024,null,O.i,(function(n){return[n]}),[O.c]),e.qb(16,671744,null,0,O.e,[[3,O.b],[6,O.h],[8,null],[6,O.i],[2,O.r]],{name:[0,"name"]},null),e.Ib(2048,null,O.j,null,[O.e]),e.qb(18,16384,null,0,O.k,[[4,O.j]],null,null),(n()(),e.gb(16777216,null,null,1,null,U)),e.qb(20,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.gb(16777216,null,null,1,null,V)),e.qb(22,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null),(n()(),e.rb(23,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.rb(24,0,null,null,1,"label",[["for","subtitle"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Sub Title"])),(n()(),e.rb(26,0,null,null,5,"input",[["class","form-control"],["formControlName","subtitle"],["id","subtitle"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.Db(n,27)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Db(n,27).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Db(n,27)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Db(n,27)._compositionEnd(t.target.value)&&u),u}),null,null)),e.qb(27,16384,null,0,O.c,[e.D,e.k,[2,O.a]],null,null),e.Ib(1024,null,O.i,(function(n){return[n]}),[O.c]),e.qb(29,671744,null,0,O.e,[[3,O.b],[8,null],[8,null],[6,O.i],[2,O.r]],{name:[0,"name"]},null),e.Ib(2048,null,O.j,null,[O.e]),e.qb(31,16384,null,0,O.k,[[4,O.j]],null,null),(n()(),e.rb(32,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.rb(33,0,null,null,1,"label",[["for","subtitle"]],null,null,null,null,null)),(n()(),e.Lb(-1,null,["Description"])),(n()(),e.rb(35,0,null,null,5,"textarea",[["aria-label","With textarea"],["class","form-control"],["formControlName","description"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.Db(n,36)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Db(n,36).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Db(n,36)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Db(n,36)._compositionEnd(t.target.value)&&u),u}),null,null)),e.qb(36,16384,null,0,O.c,[e.D,e.k,[2,O.a]],null,null),e.Ib(1024,null,O.i,(function(n){return[n]}),[O.c]),e.qb(38,671744,null,0,O.e,[[3,O.b],[8,null],[8,null],[6,O.i],[2,O.r]],{name:[0,"name"]},null),e.Ib(2048,null,O.j,null,[O.e]),e.qb(40,16384,null,0,O.k,[[4,O.j]],null,null),(n()(),e.rb(41,0,null,null,1,"app-file-uploader",[],null,[[null,"onLoad"]],(function(n,l,t){var e=!0;return"onLoad"===l&&(e=!1!==n.component.loadFile(t)&&e),e}),F,q)),e.qb(42,49152,null,0,_,[],{imageSource:[0,"imageSource"]},{onLoad:"onLoad"}),(n()(),e.rb(43,0,null,null,5,"app-radio-button",[["formControlName","category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,B,A)),e.qb(44,49152,null,0,M,[],{categories:[0,"categories"]},null),e.Ib(1024,null,O.i,(function(n){return[n]}),[M]),e.qb(46,671744,null,0,O.e,[[3,O.b],[8,null],[8,null],[6,O.i],[2,O.r]],{name:[0,"name"]},null),e.Ib(2048,null,O.j,null,[O.e]),e.qb(48,16384,null,0,O.k,[[4,O.j]],null,null),(n()(),e.rb(49,0,null,null,4,"div",[["class","action-buttons"]],null,null,null,null,null)),(n()(),e.rb(50,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onSave()&&e),e}),null,null)),(n()(),e.Lb(-1,null,[" Save "])),(n()(),e.gb(16777216,null,null,1,null,H)),e.qb(53,16384,null,0,s.j,[e.O,e.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,5,0,t.newsForm),n(l,13,0,""),n(l,16,0,"title"),n(l,20,0,null==t.newsForm.errors?null:t.newsForm.errors.invalidLength),n(l,22,0,null==t.newsForm.get("title").errors?null:t.newsForm.get("title").errors.pattern),n(l,29,0,"subtitle"),n(l,38,0,"description"),n(l,42,0,t.newsForm.get("image").value),n(l,44,0,t.categories),n(l,46,0,"category"),n(l,53,0,"edit"===t.mode)}),(function(n,l){var t=l.component;n(l,2,0,t.pageTitle),n(l,3,0,e.Db(l,7).ngClassUntouched,e.Db(l,7).ngClassTouched,e.Db(l,7).ngClassPristine,e.Db(l,7).ngClassDirty,e.Db(l,7).ngClassValid,e.Db(l,7).ngClassInvalid,e.Db(l,7).ngClassPending),n(l,11,0,e.Db(l,13).required?"":null,e.Db(l,18).ngClassUntouched,e.Db(l,18).ngClassTouched,e.Db(l,18).ngClassPristine,e.Db(l,18).ngClassDirty,e.Db(l,18).ngClassValid,e.Db(l,18).ngClassInvalid,e.Db(l,18).ngClassPending),n(l,26,0,e.Db(l,31).ngClassUntouched,e.Db(l,31).ngClassTouched,e.Db(l,31).ngClassPristine,e.Db(l,31).ngClassDirty,e.Db(l,31).ngClassValid,e.Db(l,31).ngClassInvalid,e.Db(l,31).ngClassPending),n(l,35,0,e.Db(l,40).ngClassUntouched,e.Db(l,40).ngClassTouched,e.Db(l,40).ngClassPristine,e.Db(l,40).ngClassDirty,e.Db(l,40).ngClassValid,e.Db(l,40).ngClassInvalid,e.Db(l,40).ngClassPending),n(l,43,0,e.Db(l,48).ngClassUntouched,e.Db(l,48).ngClassTouched,e.Db(l,48).ngClassPristine,e.Db(l,48).ngClassDirty,e.Db(l,48).ngClassValid,e.Db(l,48).ngClassInvalid,e.Db(l,48).ngClassPending),n(l,50,0,!t.newsForm.touched||!t.newsForm.valid)}))}function Z(n){return e.Nb(0,[(n()(),e.rb(0,0,null,null,1,"app-add-news",[],null,null,null,J,$)),e.qb(1,245760,null,0,T,[w,v.a,y,O.d,v.k],null,null)],(function(n,l){n(l,1,0)}),null)}var z=e.nb("app-add-news",T,Z,{},{},[]);let Q=(()=>{class n{}return n.entryComponents=[C.a],n})();var W=t("k0lp");let Y=(()=>{class n{}return n.routedComponents=[d,T],n})();t.d(l,"NewsModuleNgFactory",(function(){return G}));var G=e.ob(u,[],(function(n){return e.Ab([e.Bb(512,e.j,e.Z,[[8,[i.a,x,z]],[3,e.j],e.x]),e.Bb(4608,s.l,s.k,[e.t,[2,s.v]]),e.Bb(4608,O.q,O.q,[]),e.Bb(4608,O.d,O.d,[]),e.Bb(1073742336,s.b,s.b,[]),e.Bb(1073742336,O.p,O.p,[]),e.Bb(1073742336,O.g,O.g,[]),e.Bb(1073742336,O.m,O.m,[]),e.Bb(1073742336,Q,Q,[]),e.Bb(1073742336,v.o,v.o,[[2,v.t],[2,v.k]]),e.Bb(1073742336,Y,Y,[]),e.Bb(1073742336,u,u,[]),e.Bb(1024,v.i,(function(){return[[{path:"",component:d},{path:"add/:id",component:T,canDeactivate:[W.a]}]]}),[])])}))}}]);