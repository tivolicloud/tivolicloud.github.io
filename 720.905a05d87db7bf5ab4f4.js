"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[720],{3720:(le,x,s)=>{s.r(x),s.d(x,{AdminModule:()=>ce});var p=s(9243),u=s(8583),l=s(3679),d=s(4655),k=s(3191),y=s(8086),e=s(7716),g=s(6627),Z=s(1095);let O=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-admin"]],decls:26,vars:0,consts:[[2,"background","rgba(0, 0, 0, 0.05)"],[1,"container-fluid",2,"padding-top","0px","display","flex","align-items","center"],[2,"margin-right","32px"],[1,"menu"],[2,"display","flex","flex-direction","row","align-items","center","margin-right","8px"],[2,"margin","0","margin-left","4px"],["mat-button","","routerLink","/admin/users/all","routerLinkActive","active",2,"margin","0"],["mat-button","","routerLink","/admin/users/online","routerLinkActive","active",2,"margin","0"],["mat-button","","routerLink","/admin/users/banned","routerLinkActive","active",2,"margin","0"],[1,"pipe"],["mat-button","","routerLink","/admin/openai-tokens","routerLinkActive","active"],[1,"container-fluid"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"h2",2),e._uU(3,"\u{1f338}\u{1f389}\u{1f363} Secret fairy admin page"),e.qZA(),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"mat-icon"),e._uU(7,"people"),e.qZA(),e.TgZ(8,"h4",5),e._uU(9,"Users"),e.qZA(),e.qZA(),e.TgZ(10,"button",6),e._uU(11," All "),e.qZA(),e.TgZ(12,"button",7),e._uU(13," Online "),e.qZA(),e.TgZ(14,"button",8),e._uU(15," Banned "),e.qZA(),e.TgZ(16,"span",9),e._uU(17,"|"),e.qZA(),e.TgZ(18,"button",10),e.TgZ(19,"mat-icon"),e._uU(20,"auto_stories"),e.qZA(),e._uU(21," OpenAI tokens "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(22,"div",11),e._UZ(23,"br"),e._UZ(24,"router-outlet"),e._UZ(25,"br"),e.qZA())},directives:[g.Hw,Z.lW,d.rH,d.Od,d.lC],styles:[".container-fluid[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto;max-width:1600px}.menu[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.menu[_ngcontent-%COMP%]   .pipe[_ngcontent-%COMP%]{font-size:24px;opacity:.2;margin:0 8px}.menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 4px}.menu[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{background-color:#0000000d}"]}),i})();var A=s(9123),_=s(8734),U=s(2238),m=s(8295),f=s(9983),w=s(3738);function M(i,o){if(1&i&&(e.TgZ(0,"mat-card",8),e.TgZ(1,"mat-icon",9),e._uU(2," error_outline "),e.qZA(),e._uU(3),e.qZA()),2&i){const t=e.oxw();e.xp6(3),e.hij(" ",t.error,"\n")}}function S(i,o){1&i&&(e.TgZ(0,"mat-error"),e._uU(1," Name is required "),e.qZA())}let N=(()=>{class i{constructor(t,n){this.adminService=t,this.dialogRef=n,this.onUpdated=new e.vpe,this.isLoading=!1,this.error="",this.form=new l.cw({name:new l.NI("",[l.kI.required])})}ngOnInit(){this.form.invalid||(this.isLoading=!0,this.form.disable())}onSubmit(){this.adminService.createOpenaiToken(this.form.value.name).subscribe(()=>{this.onUpdated.emit(),this.dialogRef.close()},t=>{this.error=t,this.isLoading=!1,this.form.enable()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_.l),e.Y36(U.so))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-create-openai-token"]],outputs:{onUpdated:"onUpdated"},decls:12,vars:4,consts:[[2,"margin-top","0"],["class","bg-warn","style","\n\t\tmargin-bottom: 16px;\n\t\tcolor: #fff;\n\t\tdisplay: flex;\n\t\tvertical-align: middle;\n\t",4,"ngIf"],[3,"formGroup","ngSubmit"],[2,"width","100%"],["matInput","","placeholder","Name","required","","formControlName","name"],[4,"ngIf"],[2,"margin","8px 0"],["type","submit","mat-flat-button","","color","primary",3,"disabled"],[1,"bg-warn",2,"margin-bottom","16px","color","#fff","display","flex","vertical-align","middle"],[2,"margin-top","-3px","margin-right","8px"]],template:function(t,n){1&t&&(e.TgZ(0,"h2",0),e._uU(1,"Creating a new OpenAI token"),e.qZA(),e.YNc(2,M,4,1,"mat-card",1),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(4,"mat-form-field",3),e._UZ(5,"input",4),e.YNc(6,S,2,0,"mat-error",5),e.qZA(),e._UZ(7,"div",6),e.TgZ(8,"button",7),e.TgZ(9,"mat-icon"),e._uU(10,"add"),e.qZA(),e._uU(11," Create OpenAI token "),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",n.error),e.xp6(1),e.Q6J("formGroup",n.form),e.xp6(3),e.Q6J("ngIf",n.form.hasError("required","name")),e.xp6(2),e.Q6J("disabled",n.form.invalid||n.form.pristine||n.isLoading))},directives:[u.O5,l._Y,l.JL,l.sg,m.KE,f.Nt,l.Fj,l.Q7,l.JJ,l.u,Z.lW,g.Hw,w.a8,m.TO],styles:[""]}),i})();var J=s(4785),a=s(6052);function I(i,o){if(1&i&&(e.ynx(0),e.TgZ(1,"b"),e._uU(2),e.qZA(),e._uU(3," tokens "),e._UZ(4,"br"),e.BQk()),2&i){const t=o.$implicit,n=e.oxw().$implicit;e.xp6(2),e.AsE("",t,": ",n.totalTokens[t],"")}}function F(i,o){if(1&i&&(e.ynx(0),e.TgZ(1,"b"),e._uU(2),e.qZA(),e._uU(3," tokens "),e._UZ(4,"br"),e.BQk()),2&i){const t=o.$implicit,n=e.oxw().$implicit,r=e.oxw();e.xp6(2),e.AsE(" ",t,": ",r.getMonthlyToken(n,0).tokens[t]," ")}}function Q(i,o){if(1&i&&(e.ynx(0),e.TgZ(1,"b"),e._uU(2),e.qZA(),e._uU(3," tokens "),e._UZ(4,"br"),e.BQk()),2&i){const t=o.$implicit,n=e.oxw().$implicit,r=e.oxw();e.xp6(2),e.AsE(" ",t,": ",r.getMonthlyToken(n,-1).tokens[t]," ")}}function D(i,o){if(1&i&&(e.ynx(0),e.TgZ(1,"b"),e._uU(2),e.qZA(),e._uU(3," tokens "),e._UZ(4,"br"),e.BQk()),2&i){const t=o.$implicit,n=e.oxw().$implicit,r=e.oxw();e.xp6(2),e.AsE(" ",t,": ",r.getMonthlyToken(n,-2).tokens[t]," ")}}function Y(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"tr",8),e.TgZ(1,"td",9),e.TgZ(2,"mat-form-field",10),e.TgZ(3,"mat-label"),e._uU(4,"Name"),e.qZA(),e.TgZ(5,"input",11,12),e.NdJ("change",function(){const c=e.CHM(t).$implicit,T=e.MAs(6);return e.oxw().renameToken(c,T.value)}),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"td",9),e.TgZ(8,"b"),e._uU(9),e.qZA(),e._uU(10," api calls "),e._UZ(11,"br"),e.YNc(12,I,5,2,"ng-container",13),e.qZA(),e.TgZ(13,"td",9),e.TgZ(14,"b"),e._uU(15),e.qZA(),e._uU(16," api calls "),e._UZ(17,"br"),e.YNc(18,F,5,2,"ng-container",13),e.qZA(),e.TgZ(19,"td",9),e.TgZ(20,"b"),e._uU(21),e.qZA(),e._uU(22," api calls "),e._UZ(23,"br"),e.YNc(24,Q,5,2,"ng-container",13),e.qZA(),e.TgZ(25,"td",9),e.TgZ(26,"b"),e._uU(27),e.qZA(),e._uU(28," api calls "),e._UZ(29,"br"),e.YNc(30,D,5,2,"ng-container",13),e.qZA(),e.TgZ(31,"td",9),e.TgZ(32,"div",14),e.TgZ(33,"mat-form-field",15),e._UZ(34,"input",16),e.qZA(),e._UZ(35,"div",17),e.TgZ(36,"button",18),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().copyToClipboard(c)}),e.TgZ(37,"mat-icon"),e._uU(38,"content_copy"),e.qZA(),e.qZA(),e.TgZ(39,"button",18),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().refreshToken(c)}),e.TgZ(40,"mat-icon"),e._uU(41,"refresh"),e.qZA(),e.qZA(),e.TgZ(42,"button",18),e.NdJ("click",function(){const c=e.CHM(t).$implicit;return e.oxw().deleteToken(c)}),e.TgZ(43,"mat-icon"),e._uU(44,"delete"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&i){const t=o.$implicit,n=e.oxw();e.xp6(5),e.Q6J("value",t.name),e.xp6(4),e.Oqu(t.totalCalls),e.xp6(3),e.Q6J("ngForOf",n.getKeys(t.totalTokens)),e.xp6(3),e.Oqu(n.getMonthlyToken(t,0).calls),e.xp6(3),e.Q6J("ngForOf",n.getKeys(n.getMonthlyToken(t,0).tokens)),e.xp6(3),e.Oqu(n.getMonthlyToken(t,-1).calls),e.xp6(3),e.Q6J("ngForOf",n.getKeys(n.getMonthlyToken(t,-1).tokens)),e.xp6(3),e.Oqu(n.getMonthlyToken(t,-2).calls),e.xp6(3),e.Q6J("ngForOf",n.getKeys(n.getMonthlyToken(t,-2).tokens)),e.xp6(4),e.Q6J("value",t.token)}}let H=(()=>{class i{constructor(t,n,r){this.dialog=t,this.adminService=n,this.clipboard=r,this.tokens=[]}getDateStringForMonth(t){const n=new Date;return n.setMonth(n.getMonth()+t),n.getFullYear()+"-"+String(n.getMonth()+1).padStart(2,"0")}prettyPrintDateString(t){const[n,r]=t.split("-");return["January","February","March","April","May","June","July","August","September","October","November","December"][Number(r)-1]+" "+n}getKeys(t){return Object.keys(t)}refresh(){this.adminService.getOpenaiTokens().subscribe(t=>{this.tokens=t})}ngOnInit(){this.refresh()}getMonthlyToken(t,n){const r=this.getDateStringForMonth(n),c=t.monthly[r];return null==c?{tokens:0,calls:0}:c}createToken(){this.dialog.open(N,{width:"600px"}).componentInstance.onUpdated.subscribe(()=>{this.refresh()})}deleteToken(t){this.dialog.open(A.i,{data:{message:"Are you sure you want to delete token "+t.name+"?"}}).componentInstance.deleted.subscribe(()=>{this.adminService.deleteOpenaiToken(t._id).subscribe(()=>{this.refresh()},()=>{this.refresh()})})}refreshToken(t){this.dialog.open(A.i,{data:{yes:"Refresh",yesIcon:"refresh",message:"Are you sure you want to refresh token "+t.name+"?"}}).componentInstance.deleted.subscribe(()=>{this.adminService.refreshOpenaiToken(t._id).subscribe(()=>{this.refresh()},()=>{this.refresh()})})}renameToken(t,n){this.adminService.renameOpenaiToken(t._id,n).subscribe(()=>{this.refresh()},()=>{this.refresh()})}copyToClipboard(t){this.clipboard.copy(t.token)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(U.uw),e.Y36(_.l),e.Y36(J.TU))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-openai-tokens"]],decls:25,vars:4,consts:[[2,"display","flex","align-items","center","margin-bottom","16px"],["mat-button","",3,"click"],[2,"width","100%"],["mdcDataTableTable",""],["mdcDataTableHeaderRow",""],["mdcDataTableHeaderCell",""],["mdcDataTableContent",""],["mdcDataTableRow","",4,"ngFor","ngForOf"],["mdcDataTableRow",""],["mdcDataTableCell",""],["appearance","outline",2,"width","100%","margin-bottom","-18px"],["matInput","",3,"value","change"],["tokenName",""],[4,"ngFor","ngForOf"],[2,"display","flex","flex-direction","row"],[2,"margin-bottom","-18px","width","280px"],["matInput","","placeholder","Token","disabled","",3,"value"],[2,"margin","0 8px"],["mat-icon-button","",1,"mat-elevation-z0",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return n.createToken()}),e.TgZ(2,"mat-icon"),e._uU(3,"add"),e.qZA(),e._uU(4," Create token "),e.qZA(),e.TgZ(5,"button",1),e.NdJ("click",function(){return n.refresh()}),e.TgZ(6,"mat-icon"),e._uU(7,"refresh"),e.qZA(),e._uU(8," Refresh "),e.qZA(),e.qZA(),e.TgZ(9,"mdc-data-table",2),e.TgZ(10,"table",3),e.TgZ(11,"thead"),e.TgZ(12,"tr",4),e.TgZ(13,"th",5),e._uU(14,"Name"),e.qZA(),e.TgZ(15,"th",5),e._uU(16,"Total"),e.qZA(),e.TgZ(17,"th",5),e._uU(18),e.qZA(),e.TgZ(19,"th",5),e._uU(20),e.qZA(),e.TgZ(21,"th",5),e._uU(22),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"tbody",6),e.YNc(24,Y,45,10,"tr",7),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(18),e.hij(" ",n.prettyPrintDateString(n.getDateStringForMonth(0))," "),e.xp6(2),e.hij(" ",n.prettyPrintDateString(n.getDateStringForMonth(-1))," "),e.xp6(2),e.hij(" ",n.prettyPrintDateString(n.getDateStringForMonth(-2))," "),e.xp6(2),e.Q6J("ngForOf",n.tokens))},directives:[Z.lW,g.Hw,a.TW,a.Wh,a.qN,a.TG,a.GR,u.sg,a.dC,a.v0,m.KE,m.hX,f.Nt],styles:[""]}),i})();var b=s(2575),v=s(3204),j=s(2178),q=s(1928),C=s(5773),L=s(1792);function z(i,o){1&i&&(e.TgZ(0,"div",1),e.TgZ(1,"h1"),e._uU(2,"Loading user..."),e.qZA(),e._UZ(3,"mat-progress-bar",2),e.qZA())}function R(i,o){1&i&&(e.TgZ(0,"span",28),e._uU(1,"(admin)"),e.qZA())}function P(i,o){1&i&&(e.TgZ(0,"span",29),e._uU(1,"banned"),e.qZA())}function $(i,o){if(1&i&&(e.TgZ(0,"div",3),e._UZ(1,"img",30),e.TgZ(2,"p",31),e._uU(3),e.qZA(),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.Q6J("src","/api/domain/"+t.id+"/image",e.LSH),e.xp6(2),e.hij(" ",t.name," ")}}function E(i,o){1&i&&(e.TgZ(0,"p"),e._uU(1," No worlds "),e.qZA())}function B(i,o){if(1&i&&(e.TgZ(0,"div",9),e.TgZ(1,"h2"),e._uU(2,"Current world"),e.qZA(),e.TgZ(3,"mdc-data-table"),e.TgZ(4,"table",10),e.TgZ(5,"tbody",11),e.TgZ(6,"tr",12),e.TgZ(7,"th",13),e._uU(8,"Location"),e.qZA(),e.TgZ(9,"td",14),e._uU(10),e.qZA(),e.qZA(),e.TgZ(11,"tr",12),e.TgZ(12,"th",13),e._uU(13,"Online time"),e.qZA(),e.TgZ(14,"td",14),e._uU(15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){const t=e.oxw(2);e.xp6(10),e.hij(" ",t.user.session.location," "),e.xp6(5),e.hij(" ",t.utilsService.displayMinutes(t.user.session.minutes)," ")}}function W(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",1),e._UZ(1,"br"),e.TgZ(2,"div",3),e._UZ(3,"app-user-image",4),e._UZ(4,"div",5),e.TgZ(5,"h1"),e._uU(6),e.YNc(7,R,2,0,"span",6),e.qZA(),e.YNc(8,P,2,0,"span",7),e.qZA(),e.TgZ(9,"div",8),e.TgZ(10,"div",9),e.TgZ(11,"h2"),e._uU(12,"Details"),e.qZA(),e.TgZ(13,"mdc-data-table"),e.TgZ(14,"table",10),e.TgZ(15,"tbody",11),e.TgZ(16,"tr",12),e.TgZ(17,"th",13),e._uU(18,"Username"),e.qZA(),e.TgZ(19,"td",14),e._uU(20),e.qZA(),e.qZA(),e.TgZ(21,"tr",12),e.TgZ(22,"th",13),e._uU(23,"Email"),e.qZA(),e.TgZ(24,"td",14),e._uU(25),e.TgZ(26,"span",15),e._uU(27),e.qZA(),e.TgZ(28,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().onToggleVerify()}),e.TgZ(29,"mat-icon"),e._uU(30,"email"),e.qZA(),e._uU(31," Toggle verified "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(32,"tr",12),e.TgZ(33,"th",13),e._uU(34,"Created"),e.qZA(),e.TgZ(35,"td",14),e._uU(36),e.ALo(37,"date"),e.qZA(),e.qZA(),e.TgZ(38,"tr",12),e.TgZ(39,"th",13),e._uU(40,"Admin"),e.qZA(),e.TgZ(41,"td",14),e.TgZ(42,"mdc-form-field"),e._UZ(43,"mdc-checkbox",17),e.TgZ(44,"label"),e._uU(45),e.qZA(),e.qZA(),e.TgZ(46,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().onToggleAdmin()}),e.TgZ(47,"mat-icon"),e._uU(48,"build"),e.qZA(),e._uU(49," Toggle admin "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(50,"tr",12),e.TgZ(51,"th",13),e._uU(52,"Supporter"),e.qZA(),e.TgZ(53,"td",14),e.TgZ(54,"mdc-form-field"),e._UZ(55,"mdc-checkbox",17),e.TgZ(56,"label"),e._uU(57),e.qZA(),e.qZA(),e.TgZ(58,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().onToggleSupporter()}),e.TgZ(59,"mat-icon"),e._uU(60,"favorite"),e.qZA(),e._uU(61," Toggle supporter "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(62,"tr",12),e.TgZ(63,"th",13),e._uU(64,"Dev"),e.qZA(),e.TgZ(65,"td",14),e.TgZ(66,"mdc-form-field"),e._UZ(67,"mdc-checkbox",17),e.TgZ(68,"label"),e._uU(69),e.qZA(),e.qZA(),e.TgZ(70,"button",16),e.NdJ("click",function(){return e.CHM(t),e.oxw().onToggleDev()}),e.TgZ(71,"mat-icon"),e._uU(72,"build"),e.qZA(),e._uU(73," Toggle dev "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(74,"tr",12),e.TgZ(75,"th",13),e._uU(76,"Total time"),e.qZA(),e.TgZ(77,"td",14),e._uU(78),e.qZA(),e.qZA(),e.TgZ(79,"tr",12),e.TgZ(80,"th",13),e._uU(81,"Max files size"),e.qZA(),e.TgZ(82,"td",14),e.TgZ(83,"mat-form-field",18),e._UZ(84,"input",19,20),e.TgZ(86,"span",21),e._uU(87,"GB"),e.qZA(),e.qZA(),e.TgZ(88,"button",22),e.NdJ("click",function(){e.CHM(t);const r=e.MAs(85);return e.oxw().onUpdateMaxFilesSize(r)}),e.TgZ(89,"mat-icon"),e._uU(90,"save"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(91,"tr",12),e.TgZ(92,"th",13),e._uU(93,"ID"),e.qZA(),e.TgZ(94,"td",14),e._uU(95),e.qZA(),e.qZA(),e.TgZ(96,"tr",12),e.TgZ(97,"th",13),e._uU(98,"Worlds"),e.qZA(),e.TgZ(99,"td",14),e.YNc(100,$,4,2,"div",23),e.YNc(101,E,2,0,"p",24),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(102,"div",25),e.TgZ(103,"button",26),e.NdJ("click",function(){return e.CHM(t),e.oxw().onImpersonate()}),e.TgZ(104,"mat-icon"),e._uU(105,"camera"),e.qZA(),e._uU(106," Impersonate "),e.qZA(),e._UZ(107,"span",5),e.TgZ(108,"button",26),e.NdJ("click",function(){return e.CHM(t),e.oxw().onToggleBanned()}),e.TgZ(109,"mat-icon"),e._uU(110,"do_disturb"),e.qZA(),e._uU(111," Toggle banned "),e.qZA(),e.qZA(),e.YNc(112,B,16,2,"div",27),e.qZA(),e.qZA()}if(2&i){const t=e.MAs(85),n=e.oxw();e.xp6(3),e.Q6J("username",n.user.username)("online",n.user.session),e.xp6(3),e.hij(" ",n.user.username," "),e.xp6(1),e.Q6J("ngIf",n.user.admin),e.xp6(1),e.Q6J("ngIf",n.user.banned),e.xp6(12),e.hij(" ",n.user.username," "),e.xp6(5),e.hij(" ",n.user.email," "),e.xp6(1),e.ekj("not",!n.user.emailVerified),e.xp6(1),e.Oqu(n.user.emailVerified?"verified":"not verified"),e.xp6(9),e.hij(" ",e.xi3(37,24,n.user.created,"MMM d, y, HH:mm")," "),e.xp6(7),e.Q6J("checked",n.user.admin),e.xp6(2),e.hij(" ",n.user.admin?"Yes":"No"," "),e.xp6(10),e.Q6J("checked",n.user.supporter),e.xp6(2),e.hij(" ",n.user.supporter?"Yes":"No"," "),e.xp6(10),e.Q6J("checked",n.user.dev),e.xp6(2),e.hij(" ",n.user.dev?"Yes":"No"," "),e.xp6(9),e.hij(" ",n.utilsService.displayMinutes(n.user.minutes)," "),e.xp6(6),e.Q6J("value",n.user.maxFilesSize),e.xp6(4),e.Q6J("disabled",n.user.maxFilesSize==t.value),e.xp6(7),e.Oqu(n.user.id),e.xp6(5),e.Q6J("ngForOf",n.user.domains),e.xp6(1),e.Q6J("ngIf",0==n.user.domains.length),e.xp6(11),e.Q6J("ngIf",n.user.session)}}let G=(()=>{class i{constructor(t,n,r,c){this.route=t,this.adminService=n,this.authService=r,this.utilsService=c,this.user=null}refreshUser(t){null==t&&null!=this.user&&(t=this.user.username),this.adminService.getUser(t).subscribe(n=>{this.user=n})}ngOnInit(){this.route.params.subscribe(t=>{const n=t.username;if(null==n)return this.user=null;this.refreshUser(n)})}onImpersonate(){this.authService.impersonateUser(this.user)}onToggleVerify(){window.confirm("Are you sure you want to toggle verified?")&&this.adminService.toggleVerifyUser(this.user.id).subscribe(()=>{this.refreshUser()})}onToggleAdmin(){window.confirm("Are you sure you want to toggle admin?")&&window.confirm("Are you REALLY SURE you want to toggle admin?")&&this.adminService.toggleAdminUser(this.user.id).subscribe(()=>{this.refreshUser()})}onToggleSupporter(){window.confirm("Are you sure you want to toggle supporter?")&&this.adminService.toggleSupporterUser(this.user.id).subscribe(()=>{this.refreshUser()})}onToggleDev(){window.confirm("Are you sure you want to toggle dev?")&&this.adminService.toggleDevUser(this.user.id).subscribe(()=>{this.refreshUser()})}onToggleBanned(){window.confirm("Are you sure you want to toggle banned?")&&this.adminService.toggleBannedUser(this.user.id).subscribe(()=>{this.refreshUser()})}onUpdateMaxFilesSize(t){const n=Number(t.value);if(Number.isNaN(n))return window.alert("Invalid max files size");window.confirm("Are you sure you want to update max files size to "+n+" GB?")&&this.adminService.updateMaxFilesSize(this.user.id,n).subscribe(()=>{this.refreshUser()})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(d.gz),e.Y36(_.l),e.Y36(b.e),e.Y36(v.F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-user"]],decls:2,vars:2,consts:[["class","container",4,"ngIf"],[1,"container"],["mode","indeterminate"],[2,"display","flex","align-items","center"],["size","64",3,"username","online"],[2,"margin","0 8px"],["style","color: #f44336;",4,"ngIf"],["class","not verified big","style","margin-left: 16px;",4,"ngIf"],[1,"row"],[1,"col-md-6"],["mdcDataTableTable",""],["mdcDataTableContent",""],["mdcDataTableRow",""],["mdcDataTableHeaderCell",""],["mdcDataTableCell",""],[1,"verified"],["mat-stroked-button","",2,"margin-left","16px",3,"click"],["disabled","",2,"margin-left","-8px",3,"checked"],["appearance","outline",1,"no-title-input",2,"width","100px","margin-bottom","-18px"],["matInput","","type","number",3,"value"],["maxFilesSizeInput",""],["matSuffix",""],["mat-icon-button","",1,"mat-elevation-z0",2,"margin-left","8px",3,"disabled","click"],["style","display: flex; align-items: center;",4,"ngFor","ngForOf"],[4,"ngIf"],[2,"margin","16px 0"],["mat-flat-button","","color","primary",3,"click"],["class","col-md-6",4,"ngIf"],[2,"color","#f44336"],[1,"not","verified","big",2,"margin-left","16px"],[2,"height","32px","border-radius","4px",3,"src"],[2,"margin-left","8px"]],template:function(t,n){1&t&&(e.YNc(0,z,4,0,"div",0),e.YNc(1,W,113,27,"div",0)),2&t&&(e.Q6J("ngIf",!n.user),e.xp6(1),e.Q6J("ngIf",n.user))},directives:[u.O5,j.pW,q.l,a.TW,a.Wh,a.GR,a.dC,a.TG,a.v0,Z.lW,g.Hw,C.UF,L.qC,m.KE,f.Nt,m.R9,u.sg],pipes:[u.uU],styles:[".avatar[_ngcontent-%COMP%]{border-radius:999999px;width:64px;height:64px}.verified[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:4px 8px;border-radius:4px;margin-left:4px}.verified.not[_ngcontent-%COMP%]{background-color:#f44336}.verified.big[_ngcontent-%COMP%]{font-size:1.5em}mdc-data-table[_ngcontent-%COMP%]{width:100%}  .no-title-input .mat-form-field-infix{border-top:.5em solid transparent}"]}),i})();var V=s(3395);function K(i,o){if(1&i){const t=e.EpF();e.ynx(0),e.TgZ(1,"mdc-form-field"),e.TgZ(2,"mdc-text-field",9),e.NdJ("keyup",function(r){return e.CHM(t),e.oxw().onSearch(r)}),e.qZA(),e.qZA(),e._UZ(3,"div",10),e.BQk()}}function X(i,o){1&i&&(e.TgZ(0,"span",17),e._uU(1," banned "),e.qZA())}function ee(i,o){1&i&&(e.TgZ(0,"span",18),e._uU(1," verified "),e.qZA())}function te(i,o){1&i&&(e.TgZ(0,"span",17),e._uU(1," not verified "),e.qZA())}function ne(i,o){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit,n=e.oxw();e.xp6(1),e.hij(" ",n.utilsService.displayMinutes(t.session.minutes)," ")}}function ie(i,o){1&i&&(e.TgZ(0,"span",19),e._uU(1," Offline "),e.qZA())}function oe(i,o){if(1&i&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&i){const t=e.oxw().$implicit;e.xp6(1),e.hij(" ",t.session.location," ")}}function re(i,o){1&i&&(e.TgZ(0,"span",19),e._uU(1," Offline "),e.qZA())}function se(i,o){if(1&i&&(e.TgZ(0,"tr",11),e.TgZ(1,"td",12),e._UZ(2,"app-user-image",13),e.qZA(),e.TgZ(3,"td",12),e._uU(4),e.YNc(5,X,2,0,"span",14),e.qZA(),e.TgZ(6,"td",12),e._uU(7),e.YNc(8,ee,2,0,"span",15),e.YNc(9,te,2,0,"span",14),e.qZA(),e.TgZ(10,"td",12),e._uU(11),e.ALo(12,"date"),e.qZA(),e.TgZ(13,"td",12),e._uU(14),e.qZA(),e.TgZ(15,"td",12),e.YNc(16,ne,2,1,"span",1),e.YNc(17,ie,2,0,"span",16),e.qZA(),e.TgZ(18,"td",12),e.YNc(19,oe,2,1,"span",1),e.YNc(20,re,2,0,"span",16),e.qZA(),e.qZA()),2&i){const t=o.$implicit,n=e.oxw();e.Q6J("routerLink","/admin/user/"+t.username.toLowerCase()),e.xp6(2),e.Q6J("size",32)("username",t.username)("online",t.session),e.xp6(2),e.hij(" ",t.username," "),e.xp6(1),e.Q6J("ngIf",t.banned),e.xp6(2),e.hij(" ",t.email," "),e.xp6(1),e.Q6J("ngIf",t.emailVerified),e.xp6(1),e.Q6J("ngIf",!t.emailVerified),e.xp6(2),e.hij(" ",e.xi3(12,15,t.created,"MMM d, y, HH:mm")," "),e.xp6(3),e.hij(" ",n.utilsService.displayMinutes(t.minutes)," "),e.xp6(2),e.Q6J("ngIf",t.session),e.xp6(1),e.Q6J("ngIf",!t.session),e.xp6(2),e.Q6J("ngIf",t.session),e.xp6(1),e.Q6J("ngIf",!t.session)}}let h=(()=>{class i{constructor(t,n,r,c){this.adminService=t,this.authService=n,this.route=r,this.utilsService=c,this.users=[],this.search="",this.type="all"}ngOnInit(){this.route.url.subscribe(t=>{t.some(n=>n.path.includes("online"))&&(this.type="online"),t.some(n=>n.path.includes("banned"))&&(this.type="banned"),this.loadMore()})}loadMore(t=0){const n=r=>{this.users=0===t?r:[...this.users,...r]};"all"==this.type?this.adminService.getUsers(t,this.search).subscribe(n):"online"==this.type?this.adminService.getOnlineUsers(t,this.search).subscribe(n):"banned"==this.type&&this.adminService.getBannedUsers(t,this.search).subscribe(n)}scrolledIndexChanged(t){this.users.length>0&&t>this.users.length-50&&this.loadMore(this.users.length-1)}onSearch(t){const n=t.target.value;this.search!==n&&(this.search=n,this.loadMore())}onRefresh(){this.loadMore()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_.l),e.Y36(b.e),e.Y36(d.gz),e.Y36(v.F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-users"]],viewQuery:function(t,n){if(1&t&&e.Gf(p.N7,5),2&t){let r;e.iGM(r=e.CRH())&&(n.viewport=r.first)}},decls:26,vars:2,consts:[[2,"display","flex","align-items","center","margin-bottom","16px"],[4,"ngIf"],["mat-button","",3,"click"],["itemSize","50",2,"height","calc(100vh - 200px)",3,"scrolledIndexChange"],["mdcDataTableTable",""],["mdcDataTableHeaderRow",""],["mdcDataTableHeaderCell",""],["mdcDataTableContent",""],["mdcDataTableRow","","style","cursor: pointer;",3,"routerLink",4,"cdkVirtualFor","cdkVirtualForOf"],["label","Search for user",3,"keyup"],[2,"margin","0 8px"],["mdcDataTableRow","",2,"cursor","pointer",3,"routerLink"],["mdcDataTableCell",""],[3,"size","username","online"],["class","not verified",4,"ngIf"],["class","verified",4,"ngIf"],["style","opacity: 0.5;",4,"ngIf"],[1,"not","verified"],[1,"verified"],[2,"opacity","0.5"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,K,4,0,"ng-container",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return n.onRefresh()}),e.TgZ(3,"mat-icon"),e._uU(4,"refresh"),e.qZA(),e._uU(5," Refresh "),e.qZA(),e.qZA(),e.TgZ(6,"cdk-virtual-scroll-viewport",3),e.NdJ("scrolledIndexChange",function(c){return n.scrolledIndexChanged(c)}),e.TgZ(7,"mdc-data-table"),e.TgZ(8,"table",4),e.TgZ(9,"thead"),e.TgZ(10,"tr",5),e._UZ(11,"th",6),e.TgZ(12,"th",6),e._uU(13,"Username"),e.qZA(),e.TgZ(14,"th",6),e._uU(15,"Email"),e.qZA(),e.TgZ(16,"th",6),e._uU(17,"Created"),e.qZA(),e.TgZ(18,"th",6),e._uU(19,"Total time"),e.qZA(),e.TgZ(20,"th",6),e._uU(21,"Online time"),e.qZA(),e.TgZ(22,"th",6),e._uU(23,"Current location"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(24,"tbody",7),e.YNc(25,se,21,18,"tr",8),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf","all"==n.type),e.xp6(24),e.Q6J("cdkVirtualForOf",n.users))},directives:[u.O5,Z.lW,g.Hw,p.N7,p.xd,a.TW,a.Wh,a.qN,a.TG,a.GR,p.x0,C.UF,V.dh,a.dC,d.rH,a.v0,q.l],pipes:[u.uU],styles:["mdc-data-table[_ngcontent-%COMP%]{width:100%}.verified[_ngcontent-%COMP%]{background-color:#4caf50;color:#fff;padding:4px 8px;border-radius:4px;margin-left:4px}.verified.not[_ngcontent-%COMP%]{background-color:#f44336}"]}),i})();const ae=[{path:"",component:O,children:[{path:"users",children:[{path:"all",component:h},{path:"online",component:h},{path:"banned",component:h}]},{path:"user/:username",component:G},{path:"openai-tokens",component:H},{path:"**",redirectTo:"users/all"}]}];let ce=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[u.ez,d.Bz.forChild(ae),k.q,y.W,p.Cl,l.UX]]}),i})()}}]);