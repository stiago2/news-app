(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{S4EX:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class u{}var i=t("pMnS"),s=t("SVse");class o{constructor(n){this.eRef=n,this.defaultImage="assets/default-image.jpg"}setDefaultImage(){this.eRef.nativeElement.src=this.defaultImage}}var r=function(n){return n.Sports="success",n.Politics="danger",n.HumanRights="info",n.International="warning",n}({});class a{constructor(){this.onDelete=new e.m,this.onEdit=new e.m}ngOnInit(){this.colorClass=r[this.news.category]}edit(){this.onEdit.emit(this.news.id)}delete(){this.onDelete.emit({id:this.news.id,title:this.news.title})}}var c=e.tb({encapsulation:0,styles:[[".card[_ngcontent-%COMP%]{max-width:18rem}.card[_ngcontent-%COMP%]   .card-img-top[_ngcontent-%COMP%]{min-height:300px}.card[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.card[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}"]],data:{}});function b(n){return e.Rb(0,[e.Jb(0,s.p,[]),(n()(),e.vb(1,0,null,null,20,"div",[],null,null,null,null,null)),e.Mb(512,null,s.t,s.u,[e.s,e.t,e.k,e.F]),e.ub(3,278528,null,0,s.i,[s.t],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e.Kb(4,{"text-white":0}),(n()(),e.vb(5,0,null,null,1,"img",[["appOnError",""],["class","img-thumbnail"]],[[8,"src",4],[8,"alt",0]],[[null,"error"]],(function(n,l,t){var u=!0;return"error"===l&&(u=!1!==e.Hb(n,6).setDefaultImage()&&u),u}),null,null)),e.ub(6,16384,null,0,o,[e.k],null,null),(n()(),e.vb(7,0,null,null,14,"div",[["class","card-body"]],null,null,null,null,null)),(n()(),e.vb(8,0,null,null,2,"h5",[["class","card-title"]],null,null,null,null,null)),(n()(),e.Pb(9,null,["",""])),e.Lb(10,1),(n()(),e.vb(11,0,null,null,2,"h6",[["class","card-subtitle mb-2"]],null,null,null,null,null)),(n()(),e.Pb(12,null,[" "," "])),e.Lb(13,1),(n()(),e.vb(14,0,null,null,2,"p",[["class","card-text"]],null,null,null,null,null)),(n()(),e.Pb(15,null,["",""])),e.Lb(16,1),(n()(),e.vb(17,0,null,null,4,"div",[["class","card-text action-buttons"]],null,null,null,null,null)),(n()(),e.vb(18,0,null,null,1,"button",[["type","button"]],[[8,"className",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.edit()&&e),e}),null,null)),(n()(),e.Pb(-1,null,[" Edit "])),(n()(),e.vb(20,0,null,null,1,"button",[["type","button"]],[[8,"className",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.delete()&&e),e}),null,null)),(n()(),e.Pb(-1,null,[" Delete "]))],(function(n,l){var t=l.component,u=e.zb(1,"card bg-",t.colorClass,"  mb-3"),i=n(l,4,0,t.news.category);n(l,3,0,u,i)}),(function(n,l){var t=l.component;n(l,5,0,null==t.news?null:t.news.image,e.zb(1,"",null==t.news?null:t.news.description,""));var u=e.Qb(l,9,0,n(l,10,0,e.Hb(l,0),null==t.news?null:t.news.title));n(l,9,0,u);var i=e.Qb(l,12,0,n(l,13,0,e.Hb(l,0),null==t.news?null:t.news.subtitle));n(l,12,0,i);var s=e.Qb(l,15,0,n(l,16,0,e.Hb(l,0),null==t.news?null:t.news.description));n(l,15,0,s),n(l,18,0,e.zb(1,"btn btn",t.news.category?"":"-outline","-primary")),n(l,20,0,e.zb(1,"btn btn",t.news.category?"":"-outline","-secondary"))}))}class d{constructor(n,l,t,e){this.newsApiService=n,this.router=l,this.modalService=t,this.notificationCenter=e}ngOnInit(){this.getNews()}getNews(){this.news$=this.newsApiService.getNews()}edit(n){this.router.navigate(["/news/add",n])}delete(n){this.modalService.showModal({message:`You are about to delete ${n.title}, do you want to continue?`,title:"Delete News"},l=>{l&&this.newsApiService.deleteNews(n.id).subscribe({next:()=>this.onDeleteCompleted(n),error:n=>console.log(n)})})}onDeleteCompleted(n){this.notificationCenter.showSuccess(`${n.title} has been successfuly deleted!`),this.getNews()}}var g=t("LRne"),h=t("lJxs"),p=t("IheW");class m{constructor(n){Object.assign(this,n)}}let v=(()=>{class n{adapt(n){return new m({id:n.id,title:n.title,subtitle:n.subtitle,image:n.image,category:n.category,description:n.description})}}return n.ngInjectableDef=e.Ub({factory:function(){return new n},token:n,providedIn:"root"}),n})(),w=(()=>{class n{constructor(n,l){this.http=n,this.adapter=l,this.BASE_URL="api/news"}createNews(n){return n.id=null,this.http.post(`${this.BASE_URL}`,n)}updateNews(n){return this.http.put(`${this.BASE_URL}/${n.id}`,n)}getNewsById(n){return 0===n?Object(g.a)(this.initNews()):this.http.get(`${this.BASE_URL}/${n}`).pipe(Object(h.a)(n=>this.adapter.adapt(n)))}getNews(){return this.http.get(this.BASE_URL).pipe(Object(h.a)(n=>n.map(n=>this.adapter.adapt(n))))}getNewsCategories(){return this.http.get("api/categories")}deleteNews(n){return this.http.delete(`${this.BASE_URL}/${n}`)}initNews(){return{id:0,title:"",subtitle:"",image:null,description:"",category:null}}}return n.ngInjectableDef=e.Ub({factory:function(){return new n(e.Vb(p.c),e.Vb(v))},token:n,providedIn:"root"}),n})();var f=t("iInd"),C=t("57nu"),y=t("EApP");let P=(()=>{class n{constructor(n){this.toastr=n}showSuccess(n){this.toastr.success(n)}showError(n){this.toastr.error(n)}}return n.ngInjectableDef=e.Ub({factory:function(){return new n(e.Vb(y.j))},token:n,providedIn:"root"}),n})();var k=e.tb({encapsulation:0,styles:[[".news-dashboard-container[_ngcontent-%COMP%]{width:85%;margin:30px auto}"]],data:{}});function H(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"app-news-card",[],null,[[null,"onEdit"],[null,"onDelete"]],(function(n,l,t){var e=!0,u=n.component;return"onEdit"===l&&(e=!1!==u.edit(t)&&e),"onDelete"===l&&(e=!1!==u.delete(t)&&e),e}),b,c)),e.ub(1,114688,null,0,a,[],{news:[0,"news"]},{onDelete:"onDelete",onEdit:"onEdit"})],(function(n,l){n(l,1,0,l.context.$implicit)}),null)}function F(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,4,"div",[["class","news-dashboard-container"]],null,null,null,null,null)),(n()(),e.vb(1,0,null,null,3,"div",[["class","card-deck"]],null,null,null,null,null)),(n()(),e.kb(16777216,null,null,2,null,H)),e.ub(3,278528,null,0,s.j,[e.Q,e.N,e.s],{ngForOf:[0,"ngForOf"]},null),e.Jb(131072,s.b,[e.h])],(function(n,l){var t=l.component;n(l,3,0,e.Qb(l,3,0,e.Hb(l,4).transform(t.news$)))}),null)}function x(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"app-dashboard",[],null,null,null,F,k)),e.ub(1,114688,null,0,d,[w,f.k,C.a,P],null,null)],(function(n,l){n(l,1,0)}),null)}var M=e.rb("app-dashboard",d,x,{},{},[]),_=t("s7LF");class S{constructor(){this.onLoad=new e.m}onFileChange(n){const l=new FileReader;if(n.target.files&&n.target.files.length){const[t]=n.target.files;l.readAsDataURL(t),l.onload=()=>{this.onLoad.emit(l.result)}}}}var O=e.tb({encapsulation:0,styles:[[".news-image[_ngcontent-%COMP%]{margin-top:20px}"]],data:{}});function I(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"img",[["alt","Responsive image"],["appOnError",""],["class","img-fluid news-image"]],[[8,"src",4]],[[null,"error"]],(function(n,l,t){var u=!0;return"error"===l&&(u=!1!==e.Hb(n,1).setDefaultImage()&&u),u}),null,null)),e.ub(1,16384,null,0,o,[e.k],null,null)],null,(function(n,l){n(l,0,0,l.component.imageSource)}))}function N(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.vb(1,0,null,null,1,"label",[["for","subtitle"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Image"])),(n()(),e.vb(3,0,null,null,3,"div",[["class","custom-file"]],null,null,null,null,null)),(n()(),e.vb(4,0,null,null,0,"input",[["accept","image/*"],["class","custom-file-input"],["id","newsImage"],["type","file"]],null,[[null,"change"]],(function(n,l,t){var e=!0;return"change"===l&&(e=!1!==n.component.onFileChange(t)&&e),e}),null,null)),(n()(),e.vb(5,0,null,null,1,"label",[["class","custom-file-label"],["for","newsImage"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Choose Image"])),(n()(),e.kb(16777216,null,null,1,null,I)),e.ub(8,16384,null,0,s.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,8,0,l.component.imageSource)}),null)}class E{constructor(n,l){this.renderer=n,this.hostElement=l}set selectedCategory(n){n!==this.category?(this.renderer.removeClass(this.hostElement.nativeElement,`btn-${r[this.category]}`),this.renderer.removeClass(this.hostElement.nativeElement,"text-white")):(this.renderer.addClass(this.hostElement.nativeElement,`btn-${r[this.category]}`),this.renderer.addClass(this.hostElement.nativeElement,"text-white"))}ngOnInit(){this.renderer.addClass(this.hostElement.nativeElement,`btn-outline-${r[this.category]}`)}}class D{constructor(){this._value="",this.selectedCategory="",this.onChange=()=>{},this.onTouch=()=>{}}set value(n){void 0!==n&&this._value!==n&&(this._value=n,this.onChange(n),this.onTouch(n))}writeValue(n){this.value=n,this.selectedCategory=n}registerOnChange(n){this.onChange=n}registerOnTouched(n){this.onTouch=n}}var R=e.tb({encapsulation:0,styles:[[".radio-button-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;flex-wrap:wrap}.radio-button-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]{width:100%;flex-wrap:wrap}@media only screen and (max-width:600px){.radio-button-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{width:100%}}.radio-button-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin:10px}.radio-button-container[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{opacity:.6;-webkit-transform:scale(1.08);transform:scale(1.08)}"]],data:{}});function A(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,2,"label",[["appSetClassColor",""],["class","btn"],["role","button"],["tabindex","0"],["uncheckable",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.writeValue(n.context.$implicit.value)&&e),e}),null,null)),e.ub(1,81920,null,0,E,[e.F,e.k],{category:[0,"category"],selectedCategory:[1,"selectedCategory"]},null),(n()(),e.Pb(2,null,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.value,l.component.selectedCategory)}),(function(n,l){n(l,2,0,l.context.$implicit.name)}))}function j(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,5,"div",[["class","form-group radio-button-container"]],null,null,null,null,null)),(n()(),e.vb(1,0,null,null,1,"label",[["for","categories"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Categories"])),(n()(),e.vb(3,0,null,null,2,"div",[["btnRadioGroup",""],["class","btn-group"]],null,null,null,null,null)),(n()(),e.kb(16777216,null,null,1,null,A)),e.ub(5,278528,null,0,s.j,[e.Q,e.N,e.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,5,0,l.component.categories)}),null)}function $(n){const l=n.get("title").value||"",t=n.get("subtitle").value||"";return l.length>=t.length&&""!==l?{invalidLength:!0}:null}var L=t("iq5f");class T{constructor(n,l,t,e,u,i){this.newsApiService=n,this.route=l,this.modalService=t,this.formBuilder=e,this.router=u,this.notificationCenter=i,this.subs=new L.SubSink,this.mode="add",this.categories=[],this.newsApiService.getNewsCategories().subscribe(n=>this.categories=n)}ngOnInit(){this.initForm(),this.subs.sink=this.route.params.subscribe(n=>{this.getNewsById(+n.id)})}initForm(){this.newsForm=this.formBuilder.group({title:["",_.o.compose([_.o.required,_.o.pattern("^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$")])],subtitle:[""],image:[""],description:[""],category:[""]},{validators:$})}getNewsById(n){this.newsApiService.getNewsById(n).subscribe({next:n=>this.setFormValues(n).setPageMode(),error:n=>this.setFormValues(this.newsApiService.initNews()).setPageMode()})}canDeactivate(){return this.newsForm.dirty&&this.newsForm.touched}setPageMode(){0===this.news.id?(this.mode="add",this.pageTitle="Add News"):(this.mode="edit",this.pageTitle=`Edit ${this.news.title}`)}setFormValues(n){return this.newsForm&&this.newsForm.reset(),this.news=n,this.newsForm.patchValue({title:n.title,subtitle:n.subtitle,image:n.image,description:n.description,category:n.category}),this.newsForm.markAsUntouched(),this}onSave(){if(this.newsForm.valid){const n=Object.assign({},this.news,this.newsForm.value);0===n.id?this.save(n):this.update(n)}}save(n){this.modalService.showModal({message:"Are you sure you want to save this news?",title:"+ Add News"},l=>{l&&this.newsApiService.createNews(n).subscribe({next:()=>this.onSaveComplete("created"),error:n=>this.notificationCenter.showError(n)})})}update(n){this.modalService.showModal({message:`Are you sure you want to modify ${n.title}?`,title:"Edit News"},l=>{l&&this.newsApiService.updateNews(n).subscribe({next:()=>this.onSaveComplete("updated"),error:n=>this.notificationCenter.showError(n)})})}onSaveComplete(n){this.notificationCenter.showSuccess(`${this.news.title} has been successfuly ${n}!`),this.newsForm.markAsPristine(),this.router.navigate(["news"])}onDelete(){const n={message:`You are about to delete ${this.newsForm.get("title").value}, do you want to continue?`,title:"Delete News"};this.modalService.showModal(n,n=>{n&&this.newsApiService.deleteNews(this.news.id).subscribe({next:()=>this.onSaveComplete("deleted"),error:n=>this.notificationCenter.showError(n)})})}loadFile(n){this.newsForm.patchValue({image:n})}ngOnDestroy(){this.subs.unsubscribe()}}var U=e.tb({encapsulation:0,styles:[[".add-news-form-container[_ngcontent-%COMP%]{width:70%;margin:50px auto}.add-news-form-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:20px}.add-news-form-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end}.add-news-form-container[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:5px}"]],data:{}});function V(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"small",[["class","form-text text-danger"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Title can not be longer than Subtitle"]))],null,null)}function B(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"small",[["class","form-text text-danger"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Title can not contain special characters"]))],null,null)}function Q(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"button",[["class","btn btn-outline-secondary"],["type","button"]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onDelete()&&e),e}),null,null)),(n()(),e.Pb(-1,null,[" Delete "]))],null,null)}function q(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,53,"div",[["class","add-news-form-container"]],null,null,null,null,null)),(n()(),e.vb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),e.Pb(2,null,["",""])),(n()(),e.vb(3,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,t){var u=!0;return"submit"===l&&(u=!1!==e.Hb(n,5).onSubmit(t)&&u),"reset"===l&&(u=!1!==e.Hb(n,5).onReset()&&u),u}),null,null)),e.ub(4,16384,null,0,_.s,[],null,null),e.ub(5,540672,null,0,_.f,[[8,null],[8,null]],{form:[0,"form"]},null),e.Mb(2048,null,_.b,null,[_.f]),e.ub(7,16384,null,0,_.l,[[4,_.b]],null,null),(n()(),e.vb(8,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.vb(9,0,null,null,1,"label",[["for","title"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Title"])),(n()(),e.vb(11,0,null,null,7,"input",[["class","form-control"],["formControlName","title"],["id","title"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.Hb(n,12)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Hb(n,12).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Hb(n,12)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Hb(n,12)._compositionEnd(t.target.value)&&u),u}),null,null)),e.ub(12,16384,null,0,_.c,[e.F,e.k,[2,_.a]],null,null),e.ub(13,16384,null,0,_.n,[],{required:[0,"required"]},null),e.Mb(1024,null,_.h,(function(n){return[n]}),[_.n]),e.Mb(1024,null,_.i,(function(n){return[n]}),[_.c]),e.ub(16,671744,null,0,_.e,[[3,_.b],[6,_.h],[8,null],[6,_.i],[2,_.r]],{name:[0,"name"]},null),e.Mb(2048,null,_.j,null,[_.e]),e.ub(18,16384,null,0,_.k,[[4,_.j]],null,null),(n()(),e.kb(16777216,null,null,1,null,V)),e.ub(20,16384,null,0,s.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.kb(16777216,null,null,1,null,B)),e.ub(22,16384,null,0,s.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null),(n()(),e.vb(23,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.vb(24,0,null,null,1,"label",[["for","subtitle"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Sub Title"])),(n()(),e.vb(26,0,null,null,5,"input",[["class","form-control"],["formControlName","subtitle"],["id","subtitle"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.Hb(n,27)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Hb(n,27).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Hb(n,27)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Hb(n,27)._compositionEnd(t.target.value)&&u),u}),null,null)),e.ub(27,16384,null,0,_.c,[e.F,e.k,[2,_.a]],null,null),e.Mb(1024,null,_.i,(function(n){return[n]}),[_.c]),e.ub(29,671744,null,0,_.e,[[3,_.b],[8,null],[8,null],[6,_.i],[2,_.r]],{name:[0,"name"]},null),e.Mb(2048,null,_.j,null,[_.e]),e.ub(31,16384,null,0,_.k,[[4,_.j]],null,null),(n()(),e.vb(32,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),e.vb(33,0,null,null,1,"label",[["for","subtitle"]],null,null,null,null,null)),(n()(),e.Pb(-1,null,["Description"])),(n()(),e.vb(35,0,null,null,5,"textarea",[["aria-label","With textarea"],["class","form-control"],["formControlName","description"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var u=!0;return"input"===l&&(u=!1!==e.Hb(n,36)._handleInput(t.target.value)&&u),"blur"===l&&(u=!1!==e.Hb(n,36).onTouched()&&u),"compositionstart"===l&&(u=!1!==e.Hb(n,36)._compositionStart()&&u),"compositionend"===l&&(u=!1!==e.Hb(n,36)._compositionEnd(t.target.value)&&u),u}),null,null)),e.ub(36,16384,null,0,_.c,[e.F,e.k,[2,_.a]],null,null),e.Mb(1024,null,_.i,(function(n){return[n]}),[_.c]),e.ub(38,671744,null,0,_.e,[[3,_.b],[8,null],[8,null],[6,_.i],[2,_.r]],{name:[0,"name"]},null),e.Mb(2048,null,_.j,null,[_.e]),e.ub(40,16384,null,0,_.k,[[4,_.j]],null,null),(n()(),e.vb(41,0,null,null,1,"app-file-uploader",[],null,[[null,"onLoad"]],(function(n,l,t){var e=!0;return"onLoad"===l&&(e=!1!==n.component.loadFile(t)&&e),e}),N,O)),e.ub(42,49152,null,0,S,[],{imageSource:[0,"imageSource"]},{onLoad:"onLoad"}),(n()(),e.vb(43,0,null,null,5,"app-radio-button",[["formControlName","category"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,j,R)),e.ub(44,49152,null,0,D,[],{categories:[0,"categories"]},null),e.Mb(1024,null,_.i,(function(n){return[n]}),[D]),e.ub(46,671744,null,0,_.e,[[3,_.b],[8,null],[8,null],[6,_.i],[2,_.r]],{name:[0,"name"]},null),e.Mb(2048,null,_.j,null,[_.e]),e.ub(48,16384,null,0,_.k,[[4,_.j]],null,null),(n()(),e.vb(49,0,null,null,4,"div",[["class","action-buttons"]],null,null,null,null,null)),(n()(),e.vb(50,0,null,null,1,"button",[["class","btn btn-outline-primary"],["type","button"]],[[8,"disabled",0]],[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onSave()&&e),e}),null,null)),(n()(),e.Pb(-1,null,[" Save "])),(n()(),e.kb(16777216,null,null,1,null,Q)),e.ub(53,16384,null,0,s.k,[e.Q,e.N],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,5,0,t.newsForm),n(l,13,0,""),n(l,16,0,"title"),n(l,20,0,null==t.newsForm.errors?null:t.newsForm.errors.invalidLength),n(l,22,0,null==t.newsForm.get("title").errors?null:t.newsForm.get("title").errors.pattern),n(l,29,0,"subtitle"),n(l,38,0,"description"),n(l,42,0,t.newsForm.get("image").value),n(l,44,0,t.categories),n(l,46,0,"category"),n(l,53,0,"edit"===t.mode)}),(function(n,l){var t=l.component;n(l,2,0,t.pageTitle),n(l,3,0,e.Hb(l,7).ngClassUntouched,e.Hb(l,7).ngClassTouched,e.Hb(l,7).ngClassPristine,e.Hb(l,7).ngClassDirty,e.Hb(l,7).ngClassValid,e.Hb(l,7).ngClassInvalid,e.Hb(l,7).ngClassPending),n(l,11,0,e.Hb(l,13).required?"":null,e.Hb(l,18).ngClassUntouched,e.Hb(l,18).ngClassTouched,e.Hb(l,18).ngClassPristine,e.Hb(l,18).ngClassDirty,e.Hb(l,18).ngClassValid,e.Hb(l,18).ngClassInvalid,e.Hb(l,18).ngClassPending),n(l,26,0,e.Hb(l,31).ngClassUntouched,e.Hb(l,31).ngClassTouched,e.Hb(l,31).ngClassPristine,e.Hb(l,31).ngClassDirty,e.Hb(l,31).ngClassValid,e.Hb(l,31).ngClassInvalid,e.Hb(l,31).ngClassPending),n(l,35,0,e.Hb(l,40).ngClassUntouched,e.Hb(l,40).ngClassTouched,e.Hb(l,40).ngClassPristine,e.Hb(l,40).ngClassDirty,e.Hb(l,40).ngClassValid,e.Hb(l,40).ngClassInvalid,e.Hb(l,40).ngClassPending),n(l,43,0,e.Hb(l,48).ngClassUntouched,e.Hb(l,48).ngClassTouched,e.Hb(l,48).ngClassPristine,e.Hb(l,48).ngClassDirty,e.Hb(l,48).ngClassValid,e.Hb(l,48).ngClassInvalid,e.Hb(l,48).ngClassPending),n(l,50,0,!t.newsForm.touched||!t.newsForm.valid)}))}function z(n){return e.Rb(0,[(n()(),e.vb(0,0,null,null,1,"app-add-news",[],null,null,null,q,U)),e.ub(1,245760,null,0,T,[w,f.a,C.a,_.d,f.k,P],null,null)],(function(n,l){n(l,1,0)}),null)}var J=e.rb("app-add-news",T,z,{},{},[]),W=t("5WeU");let Y=(()=>{class n{}return n.entryComponents=[W.a],n})();var Z=t("k0lp");let G=(()=>{class n{}return n.routedComponents=[d,T],n})();t.d(l,"NewsModuleNgFactory",(function(){return K}));var K=e.sb(u,[],(function(n){return e.Eb([e.Fb(512,e.j,e.db,[[8,[i.a,M,J]],[3,e.j],e.y]),e.Fb(4608,s.m,s.l,[e.u,[2,s.w]]),e.Fb(4608,_.q,_.q,[]),e.Fb(4608,_.d,_.d,[]),e.Fb(1073742336,s.c,s.c,[]),e.Fb(1073742336,_.p,_.p,[]),e.Fb(1073742336,_.g,_.g,[]),e.Fb(1073742336,_.m,_.m,[]),e.Fb(1073742336,Y,Y,[]),e.Fb(1073742336,f.o,f.o,[[2,f.t],[2,f.k]]),e.Fb(1073742336,G,G,[]),e.Fb(1073742336,u,u,[]),e.Fb(1024,f.i,(function(){return[[{path:"",component:d},{path:"add/:id",component:T,canDeactivate:[Z.a]}]]}),[])])}))}}]);