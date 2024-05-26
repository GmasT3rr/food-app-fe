import{b as $,c as ee,d as Ce,e as Me,f as Pe,g as he}from"./chunk-7SS5IIXQ.js";import{a as xe,b as we}from"./chunk-CU2IRGLH.js";import{a as Oe,b as Se,c as be,d as ye}from"./chunk-RVX4EV57.js";import{a as Ie}from"./chunk-SKOYYYX5.js";import{Ba as fe,Da as V,Ga as ve,Ha as _e,M as te,S as ne,T as ie,V as oe,W as re,X as ae,g as Z,ja as le,la as ce,m as j,na as se,oa as de,qa as me,ta as ge,va as pe,xa as ue}from"./chunk-XSFGOYPC.js";import{$a as b,$b as F,Cb as t,Db as r,Eb as O,Ib as Y,Ic as X,Lb as y,Nb as S,Oc as E,Rb as U,Sb as G,Tb as Q,Ub as J,Wb as n,Xb as d,Yb as f,Zb as T,_a as l,ac as A,bc as z,cc as K,da as D,dc as C,f as L,fc as q,hc as H,ia as N,ic as g,jc as p,na as v,oa as k,qa as R,qb as w,sb as _,wa as P,xa as h,xb as I}from"./chunk-H5MRGXXC.js";var W=L(xe());var Te=a=>({disabled:a});function je(a,i){if(a&1&&(t(0,"span"),n(1),r()),a&2){let m=S();l(),d(m.data.food==null?null:m.data.food.brand_name)}}function Ve(a,i){if(a&1&&(t(0,"span"),n(1),r()),a&2){let m=S();l(),f(" ",m.data.food==null?null:m.data.food.food_type," ")}}var Ee=(()=>{let i=class i{constructor(c,o,e){this._entryService=c,this.dialogRef=o,this.data=e,this.servingSize="1",this.originalServing={calories:0,protein:0,carbs:0,fat:0},this.currentServing={calories:0,protein:0,carbs:0,fat:0},this.servingSize=this.isGrams()?"100":"1",this.selectedDate=(0,W.default)().format("YYYY-MM-DD"),this.mealEntryPlace=this._entryService.getMealEntryPlace();let s=this._entryService.getSelectedDate();this.selectedDate=(0,W.default)(s).format("YYYY-MM-DD")}ngOnInit(){let c=Number(this.data.serving.calories),o=Number(this.data.serving.protein),e=Number(this.data.serving.carbohydrate),s=Number(this.data.serving.fat);this.originalServing&&(this.originalServing.calories=c,this.originalServing.protein=o,this.originalServing.carbs=e,this.originalServing.fat=s,this.currentServing.calories=c,this.currentServing.protein=o,this.currentServing.carbs=e,this.currentServing.fat=s)}isGrams(){return this.data.serving.measurement_description==="g"}openSelector(){this.mySelector.open()}calculateNutritionalValues(){this.currentServing.calories=this.originalServing.calories*Number(this.servingSize),this.currentServing.protein=this.originalServing.protein*Number(this.servingSize),this.currentServing.carbs=this.originalServing.carbs*Number(this.servingSize),this.currentServing.fat=this.originalServing.fat*Number(this.servingSize);let c=parseFloat(this.data.serving.metric_serving_amount||"1");this.data.serving.measurement_description==="g"&&(!isNaN(c)&&c!==0?(this.currentServing.calories/=c,this.currentServing.protein/=c,this.currentServing.carbs/=c,this.currentServing.fat/=c):console.error("Invalid metric serving amount:",this.data.serving.metric_serving_amount)),this.currentServing.calories=parseFloat(this.currentServing.calories.toFixed(2)),this.currentServing.protein=parseFloat(this.currentServing.protein.toFixed(2)),this.currentServing.carbs=parseFloat(this.currentServing.carbs.toFixed(2)),this.currentServing.fat=parseFloat(this.currentServing.fat.toFixed(2))}};i.\u0275fac=function(o){return new(o||i)(b(we),b(Ce),b(Me))},i.\u0275cmp=v({type:i,selectors:[["app-action-dialog"]],viewQuery:function(o,e){if(o&1&&U(V,5),o&2){let s;G(s=Q())&&(e.mySelector=s.first)}},standalone:!0,features:[K([te()]),C],decls:60,vars:16,consts:[["picker",""],[1,"dialog-container"],[1,"title-and-brand"],[1,"info-container"],[1,"kcals"],[1,"protein"],[1,"carbs"],[1,"fat"],[1,"select-amount-container"],[1,"type"],[1,"serving"],["type","number","placeholder","100",3,"input","ngModelChange","ngModel"],[1,"date-picker"],["matInput","",3,"ngModelChange","ngModel","matDatepicker"],["matIconSuffix","",3,"for"],[1,"add-to-container"],[1,"button-container"],[1,"add",3,"click","ngClass"],["mat-icon-button","",1,"select",3,"click"],[1,"dropdown-menu",3,"valueChange","value"],["value","Breakfast"],["value","Morning Snack"],["value","Lunch"],["value","Afternoon Snack"],["value","Dinner"],[1,"close-button-container"],["mat-button","",3,"click"]],template:function(o,e){if(o&1){let s=Y();t(0,"div",1)(1,"div",2)(2,"h1"),n(3),r(),w(4,je,2,1,"span")(5,Ve,2,1),r(),t(6,"div",3)(7,"div",4)(8,"span"),n(9),r(),t(10,"span"),n(11,"calories"),r()(),t(12,"div",5)(13,"span"),n(14),r(),t(15,"span"),n(16,"protein"),r()(),t(17,"div",6)(18,"span"),n(19),r(),t(20,"span"),n(21,"carbs"),r()(),t(22,"div",7)(23,"span"),n(24),r(),t(25,"span"),n(26,"fat"),r()()(),t(27,"div",8)(28,"div",9),n(29),r(),t(30,"div",10)(31,"input",11),y("input",function(){return P(s),h(e.calculateNutritionalValues())}),z("ngModelChange",function(u){return P(s),A(e.servingSize,u)||(e.servingSize=u),h(u)}),r()()(),t(32,"mat-form-field",12)(33,"mat-label"),n(34,"Choose a date"),r(),t(35,"input",13),z("ngModelChange",function(u){return P(s),A(e.selectedDate,u)||(e.selectedDate=u),h(u)}),r(),O(36,"mat-datepicker-toggle",14)(37,"mat-datepicker",null,0),r(),t(39,"div",15)(40,"div",16)(41,"button",17),y("click",function(){return P(s),h(e.dialogRef.close({food:e.data.food,currentServing:e.currentServing,mealEntryPlace:e.mealEntryPlace,servingSize:e.servingSize,serving:e.data.serving,selectedDate:e.selectedDate}))}),n(42),r(),t(43,"button",18),y("click",function(){return P(s),h(e.openSelector())}),t(44,"mat-icon"),n(45,"keyboard_arrow_down"),r()()(),t(46,"mat-select",19),z("valueChange",function(u){return P(s),A(e.mealEntryPlace,u)||(e.mealEntryPlace=u),h(u)}),t(47,"mat-option",20),n(48,"Breakfast"),r(),t(49,"mat-option",21),n(50,"Morning Snack"),r(),t(51,"mat-option",22),n(52,"Lunch"),r(),t(53,"mat-option",23),n(54,"Afternoon Snack"),r(),t(55,"mat-option",24),n(56,"Dinner"),r()()(),t(57,"div",25)(58,"button",26),y("click",function(){return P(s),h(e.dialogRef.close())}),n(59,"Cancel"),r()()()}if(o&2){let s=J(38);l(3),d(e.data.food.food_name),l(),I(4,(e.data.food==null?null:e.data.food.food_type)==="Brand"?4:5),l(5),d(e.currentServing.calories),l(5),f("",e.currentServing.protein,"g"),l(5),f("",e.currentServing.carbs,"g"),l(5),f("",e.currentServing.fat,"g"),l(5),f(" ",e.isGrams()?"g":e.data.serving.measurement_description+" "+e.data.serving.serving_description," "),l(2),F("ngModel",e.servingSize),l(4),F("ngModel",e.selectedDate),_("matDatepicker",s),l(),_("for",s),l(5),_("ngClass",q(14,Te,!e.mealEntryPlace||!e.servingSize)),l(),f(" Add to ",e.mealEntryPlace," "),l(4),F("value",e.mealEntryPlace)}},dependencies:[E,X,fe,me,ue,ge,pe,ae,oe,re,ie,V,ne,de,se,le,ce,_e,ve,ye,Oe,Se,be],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.dialog-container[_ngcontent-%COMP%]{transition:all .3s;color:var(--text);background:var(--default-lighten);width:33%;border-radius:.5rem;padding:2rem;box-shadow:0 0 2rem 1.5rem #00000080}.dialog-container[_ngcontent-%COMP%]   .date-picker[_ngcontent-%COMP%]{width:100%;margin:1rem 0 -1rem}.dialog-container[_ngcontent-%COMP%]   .title-and-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.4rem;color:var(--text);line-height:1}.dialog-container[_ngcontent-%COMP%]   .title-and-brand[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:.25rem}.dialog-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin:2rem 0}.dialog-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;background-color:var(--default);padding:1rem;margin-right:.5rem;border-radius:.5rem}.dialog-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.8rem}.dialog-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type{font-weight:700;margin-bottom:.25rem;font-size:1.1rem}.dialog-container[_ngcontent-%COMP%]   .select-amount-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:stretch;flex-direction:row}.dialog-container[_ngcontent-%COMP%]   .select-amount-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border:1px solid var(--default-alt);border-radius:.25rem;padding:.75rem 1.5rem}.dialog-container[_ngcontent-%COMP%]   .select-amount-container[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{width:fit-content;margin-right:1rem;padding:.75rem 1.5rem}.dialog-container[_ngcontent-%COMP%]   .select-amount-container[_ngcontent-%COMP%]   .serving[_ngcontent-%COMP%]{width:100%}.dialog-container[_ngcontent-%COMP%]   .select-amount-container[_ngcontent-%COMP%]   .serving[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;height:100%;outline:none;border:none;background-color:inherit;color:var(--text);text-align:center}.dialog-container[_ngcontent-%COMP%]   .select-amount-container[_ngcontent-%COMP%]   .serving[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{width:100%;text-align:center}.dialog-container[_ngcontent-%COMP%]   .add-to-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:stretch;margin:1rem 0;flex-wrap:wrap;position:relative}.dialog-container[_ngcontent-%COMP%]   .add-to-container[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{position:absolute;bottom:0;visibility:hidden}.dialog-container[_ngcontent-%COMP%]   .add-to-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:stretch;width:100%;margin-top:1rem}.dialog-container[_ngcontent-%COMP%]   .add-to-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border-radius:.25rem;padding:.6rem;font-size:1.2rem;border:none;outline:none;cursor:pointer;color:var(--text)}.dialog-container[_ngcontent-%COMP%]   .add-to-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .add[_ngcontent-%COMP%]{width:100%;margin-right:1rem;transition:all .3s;background-color:inherit;background-color:var(--secondary);border:2px solid var(--secondary)}.dialog-container[_ngcontent-%COMP%]   .add-to-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .add.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.6}.dialog-container[_ngcontent-%COMP%]   .add-to-container[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;background-color:var(--secondary);border:2px solid var(--secondary)}.dialog-container[_ngcontent-%COMP%]   .close-button-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-top:6rem}.dialog-container[_ngcontent-%COMP%]   .close-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:.5rem 2rem;outline:none;cursor:pointer;border:none;font-size:1rem;border-radius:.25rem;background-color:inherit;color:var(--text);border:1px solid var(--default-alt);background-color:var(--default-alt);transition:all .3s}input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}@media (max-width: 1250px){.dialog-container[_ngcontent-%COMP%]{width:50%}}@media (max-width: 1024px){.dialog-container[_ngcontent-%COMP%]{width:66%}}@media (max-width: 550px){.dialog-container[_ngcontent-%COMP%]{width:75%}.dialog-container[_ngcontent-%COMP%]   .title-and-brand[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2rem}.dialog-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{display:grid!important;grid-template-columns:repeat(2,1fr)}.dialog-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:.5rem}}"]});let a=i;return a})();var B=L(xe());var De=(()=>{let i=class i{constructor(c,o){this.dialog=c,this._snackBar=o,this.savedMeal={day:new Date,meal:this.meal};let e=localStorage.getItem("AllUserSavedMeals");if(e){let s=JSON.parse(e);this.allUserSavedMeals=s}else this.allUserSavedMeals=[]}openSnackBar(c,o,e){this._snackBar.open(c,o,e)}openDialog(){this.dialog.open(Ee,{width:"100%",height:"100vh",data:{food:this.food,serving:this.serving}}).closed.subscribe(o=>{if(o){let e=o;this.saveMeal(e),this.openSnackBar("Added successfully.","Close",{duration:5e3})}else console.log("closed without data")})}saveMeal(c){let o=(0,B.default)().startOf("day"),e=(0,B.default)();o.add(e.hours(),"hours"),o.add(e.minutes(),"minutes"),o.add(e.seconds(),"seconds");let s={day:o.toDate(),meal:c};c.selectedDate&&(o=(0,B.default)(c.selectedDate).startOf("day"),o.add(e.hours(),"hours"),o.add(e.minutes(),"minutes"),o.add(e.seconds(),"seconds"),s.day=o.toDate()),this.allUserSavedMeals.push(s),localStorage.setItem("AllUserSavedMeals",JSON.stringify(this.allUserSavedMeals))}};i.\u0275fac=function(o){return new(o||i)(b(Pe),b(Ie))},i.\u0275cmp=v({type:i,selectors:[["app-button-add-to"]],inputs:{food:"food",serving:"serving"},standalone:!0,features:[C],decls:3,vars:0,consts:[[1,"button-container"],[3,"click"]],template:function(o,e){o&1&&(t(0,"div",0)(1,"button",1),y("click",function(){return e.openDialog()}),n(2,"Add to"),r()())},dependencies:[he],styles:[".button-container[_ngcontent-%COMP%]{display:flex;margin-bottom:2rem}.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:fit-content;margin-left:auto;border:none;outline:none;cursor:pointer;padding:.75rem 5rem;background-color:var(--secondary);border-radius:.5rem;font-size:1.2rem;color:var(--text)}"]});let a=i;return a})();var We=(a,i,m)=>({protein:a,carbs:i,fats:m});function Le(a,i){if(a&1&&n(0),a&2){let m=S();T(" ",m.food==null?null:m.food.brand_name,", ",m.serving==null?null:m.serving.serving_description," ")}}function Re(a,i){if(a&1&&n(0),a&2){let m=S();T(" ",m.food==null?null:m.food.food_type,", ",m.serving==null?null:m.serving.serving_description," ")}}var ke=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=v({type:i,selectors:[["app-food-info"]],inputs:{loading:"loading",food:"food",serving:"serving",nutrientsPercentage:"nutrientsPercentage"},standalone:!0,features:[C],decls:35,vars:17,consts:[[1,"food-description"],[1,"brand-and-serving"],[1,"item-container"],[1,"info-container"],[1,"title"],[1,"macros-wheel"],[3,"showKcalSpan","calories","nutrients"],[1,"macros-info"],[1,"info"],[1,"percentage","Carbs"],[1,"amount"],[1,"type"],[1,"percentage","Fats"],[1,"percentage","Proteins"],[3,"food","serving"]],template:function(o,e){o&1&&(t(0,"div",0)(1,"h1"),n(2),r(),t(3,"div",1),w(4,Le,1,2)(5,Re,1,2),r()(),t(6,"div",2)(7,"div",3)(8,"h2",4),n(9,"Calories and macronutrients"),r(),t(10,"div",5),O(11,"app-nutrient-circle",6),r(),t(12,"div",7)(13,"div",8)(14,"p",9),n(15),r(),t(16,"p",10),n(17),r(),t(18,"p",11),n(19,"Carbohidrates"),r()(),t(20,"div",8)(21,"p",12),n(22),r(),t(23,"p",10),n(24),r(),t(25,"p",11),n(26,"Fats"),r()(),t(27,"div",8)(28,"p",13),n(29),r(),t(30,"p",10),n(31),r(),t(32,"p",11),n(33,"Proteins"),r()()()()(),O(34,"app-button-add-to",14)),o&2&&(l(2),d(e.food==null?null:e.food.food_name),l(2),I(4,(e.food==null?null:e.food.food_type)==="Brand"?4:5),l(7),_("showKcalSpan",!0)("calories",e.serving==null?null:e.serving.calories)("nutrients",H(13,We,e.serving==null?null:e.serving.protein,e.serving==null?null:e.serving.carbohydrate,e.serving==null?null:e.serving.fat)),l(4),f("",e.nutrientsPercentage==null?null:e.nutrientsPercentage.carbs,"%"),l(2),f("",e.serving==null?null:e.serving.carbohydrate,"g"),l(5),f("",e.nutrientsPercentage==null?null:e.nutrientsPercentage.fats,"%"),l(2),f("",e.serving==null?null:e.serving.fat,"g"),l(5),f("",e.nutrientsPercentage==null?null:e.nutrientsPercentage.protein,"%"),l(2),f("",e.serving==null?null:e.serving.protein,"g"),l(3),_("food",e.food)("serving",e.serving))},dependencies:[E,ee,De],styles:[".food-description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:2rem 0 1rem;color:var(--primary);font-size:3rem;font-weight:700;line-height:1}.food-description[_ngcontent-%COMP%]   .brand-and-serving[_ngcontent-%COMP%]{color:var(--text);font-size:1.1rem;padding-left:.125rem}.item-container[_ngcontent-%COMP%]{width:100%;margin:2rem 0;position:relative;border-radius:.75rem;color:var(--text);background-color:var(--default-lighten);transition:all .3s}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;transition:all .3s;padding:1rem}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin:0 0 1.5rem;font-size:1.4rem;padding-bottom:2rem;color:var(--text);width:100%;padding:.25rem .5rem;transition:all .3s}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]{display:flex;flex:row;transition:all .3s}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;padding:0 1.5rem;transition:all .3s;text-align:center}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{font-size:1rem;transition:all .3s}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{transition:all .3s;font-size:1.8rem}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{font-size:.9rem;padding-top:.5rem;transition:all .3s;color:var(--text-secondary)}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .Carbs[_ngcontent-%COMP%]{color:var(--carbs)}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .Fats[_ngcontent-%COMP%]{color:var(--fats)}.item-container[_ngcontent-%COMP%]   .info-container[_ngcontent-%COMP%]   .macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .Proteins[_ngcontent-%COMP%]{color:var(--proteins)}.item-container[_ngcontent-%COMP%]   .macros-wheel[_ngcontent-%COMP%]{height:100%;display:flex;transition:all .3s;align-items:center}.item-container[_ngcontent-%COMP%]   .macros-wheel[_ngcontent-%COMP%]   app-nutrient-circle[_ngcontent-%COMP%]  .calories{font-weight:400;transition:all .3s;font-size:2.2rem}.item-container[_ngcontent-%COMP%]   .macros-wheel[_ngcontent-%COMP%]   app-nutrient-circle[_ngcontent-%COMP%]  .calories span{transition:all .3s;font-size:1rem}.item-container[_ngcontent-%COMP%]   .macros-wheel[_ngcontent-%COMP%]   app-nutrient-circle[_ngcontent-%COMP%]  .circle-container{position:relative;width:9rem;height:9rem;display:flex;justify-content:center;align-items:center}.item-container[_ngcontent-%COMP%]   .macros-wheel[_ngcontent-%COMP%]   app-nutrient-circle[_ngcontent-%COMP%]  .circle-container .circle-svg .background-circle{stroke:var(--default-lighten)}@media (max-width: 1024px){.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:0 1rem!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{font-size:.85rem!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{font-size:1.6rem!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{font-size:.75rem!important}}@media (max-width: 768px){.macros-wheel[_ngcontent-%COMP%]   app-nutrient-circle[_ngcontent-%COMP%]  .calories{font-weight:400;font-size:1.8rem!important}.macros-wheel[_ngcontent-%COMP%]   app-nutrient-circle[_ngcontent-%COMP%]  .calories span{font-size:.9rem!important}.macros-wheel[_ngcontent-%COMP%]   app-nutrient-circle[_ngcontent-%COMP%]  .circle-container{width:8rem!important;height:8rem!important}}@media (max-width: 650px){.macros-wheel[_ngcontent-%COMP%]{width:100%!important;justify-content:center!important;margin-top:1rem}.title[_ngcontent-%COMP%]{font-size:1.2rem!important}.macros-info[_ngcontent-%COMP%]{margin-top:1.5rem;width:100%;justify-content:space-around}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:0!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{font-size:.75rem!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{font-size:1.75rem!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{font-size:.75rem!important}}@media (max-width: 400px){.macros-wheel[_ngcontent-%COMP%]{width:100%!important;justify-content:center!important;margin-top:1rem}.title[_ngcontent-%COMP%]{font-size:1.2rem!important}.macros-info[_ngcontent-%COMP%]{margin-top:1.5rem;width:100%;justify-content:space-around}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{padding:0!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{font-size:.75rem!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%]{font-size:1.3rem!important}.macros-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{font-size:.75rem!important}}"]});let a=i;return a})();var Fe=(()=>{let i=class i{transform(c,o){return c!=null?`${c}${o}`:"Not available"}};i.\u0275fac=function(o){return new(o||i)},i.\u0275pipe=R({name:"displayIfAvailable",type:i,pure:!0,standalone:!0});let a=i;return a})();var Ae=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=v({type:i,selectors:[["app-nutri-info"]],inputs:{serving:"serving"},standalone:!0,features:[C],decls:99,vars:72,consts:[[1,"nutritional-info"],[1,"nutrition-container"],[1,"carbs"],[1,"s-p-c"],[1,"fat"],[1,"vitamins"],[1,"protein"]],template:function(o,e){o&1&&(t(0,"div",0)(1,"h1"),n(2,"Nutritional info:"),r(),t(3,"div",1)(4,"ul",2)(5,"li"),n(6," Carbohidrates"),t(7,"span"),n(8),g(9,"displayIfAvailable"),r()(),t(10,"li"),n(11," Fiber"),t(12,"span"),n(13),g(14,"displayIfAvailable"),r()(),t(15,"li"),n(16," Total Sugar"),t(17,"span"),n(18),g(19,"displayIfAvailable"),r()(),t(20,"li"),n(21," Added Sugar"),t(22,"span"),n(23),g(24,"displayIfAvailable"),r()()(),t(25,"ul",3)(26,"li"),n(27," Sodium "),t(28,"span"),n(29),g(30,"displayIfAvailable"),r()(),t(31,"li"),n(32," Potasium "),t(33,"span"),n(34),g(35,"displayIfAvailable"),r()(),t(36,"li"),n(37," Calcium "),t(38,"span"),n(39),g(40,"displayIfAvailable"),r()()(),t(41,"ul",4)(42,"li"),n(43," Total Fat "),t(44,"span"),n(45),g(46,"displayIfAvailable"),r()(),t(47,"li"),n(48," Saturated Fat "),t(49,"span"),n(50),g(51,"displayIfAvailable"),r()(),t(52,"li"),n(53," Polyunsaturated Fat "),t(54,"span"),n(55),g(56,"displayIfAvailable"),r()(),t(57,"li"),n(58," Monounsaturated Fat "),t(59,"span"),n(60),g(61,"displayIfAvailable"),r()(),t(62,"li"),n(63," Trans Fat "),t(64,"span"),n(65),g(66,"displayIfAvailable"),r()(),t(67,"li"),n(68," Cholesterol "),t(69,"span"),n(70),g(71,"displayIfAvailable"),r()()(),t(72,"ul",5)(73,"li"),n(74," Vitamin A "),t(75,"span"),n(76),g(77,"displayIfAvailable"),r()(),t(78,"li"),n(79," Vitamin C "),t(80,"span"),n(81),g(82,"displayIfAvailable"),r()(),t(83,"li"),n(84," Vitamin D "),t(85,"span"),n(86),g(87,"displayIfAvailable"),r()(),t(88,"li"),n(89," Iron "),t(90,"span"),n(91),g(92,"displayIfAvailable"),r()()(),t(93,"ul",6)(94,"li"),n(95," Protein "),t(96,"span"),n(97),g(98,"displayIfAvailable"),r()()()()()),o&2&&(l(8),d(p(9,18,e.serving==null?null:e.serving.carbohydrate,"g")),l(5),d(p(14,21,e.serving==null?null:e.serving.fiber,"g")),l(5),d(p(19,24,e.serving==null?null:e.serving.sugar,"g")),l(5),d(p(24,27,e.serving==null?null:e.serving.added_sugar,"g")),l(6),d(p(30,30,e.serving==null?null:e.serving.sodium,"mg")),l(5),d(p(35,33,e.serving==null?null:e.serving.potassium,"mg")),l(5),d(p(40,36,e.serving==null?null:e.serving.calcium,"mg")),l(6),d(p(46,39,e.serving==null?null:e.serving.fat,"g")),l(5),d(p(51,42,e.serving==null?null:e.serving.saturated_fat,"g")),l(5),d(p(56,45,e.serving==null?null:e.serving.polyunsaturated_fat,"g")),l(5),d(p(61,48,e.serving==null?null:e.serving.monounsaturated_fat,"g")),l(5),d(p(66,51,e.serving==null?null:e.serving.trans_fat,"g")),l(5),d(p(71,54,e.serving==null?null:e.serving.cholesterol,"mg")),l(6),d(p(77,57,e.serving==null?null:e.serving.vitamin_a,"\u03BCg")),l(5),d(p(82,60,e.serving==null?null:e.serving.vitamin_c,"mg")),l(5),d(p(87,63,e.serving==null?null:e.serving.vitamin_d,"\u03BCg")),l(5),d(p(92,66,e.serving==null?null:e.serving.iron,"mg")),l(6),d(p(98,69,e.serving==null?null:e.serving.protein,"g")))},dependencies:[Fe],styles:['.nutritional-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.6rem;color:var(--text)}.nutritional-info[_ngcontent-%COMP%]   .nutrition-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;padding:1rem;flex:1;border-radius:.75rem;background-color:var(--default-lighten)}.nutritional-info[_ngcontent-%COMP%]   .nutrition-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:48%;padding:0;margin:0;list-style:none;height:fit-content;margin:.5rem 0;flex-shrink:1}.nutritional-info[_ngcontent-%COMP%]   .nutrition-container[_ngcontent-%COMP%]   ul.protein[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type, .nutritional-info[_ngcontent-%COMP%]   .nutrition-container[_ngcontent-%COMP%]   ul.carbs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type, .nutritional-info[_ngcontent-%COMP%]   .nutrition-container[_ngcontent-%COMP%]   ul.fat[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-of-type{color:var(--primary-alt);font-size:1.1rem}.nutritional-info[_ngcontent-%COMP%]   .nutrition-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:1rem 0;position:relative;color:var(--text);display:flex;justify-content:space-between;align-items:center;font-size:.8rem}.nutritional-info[_ngcontent-%COMP%]   .nutrition-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after{position:absolute;content:"";width:100%;height:1px;bottom:0;left:0;opacity:.5;background-color:var(--text)}@media (max-width: 768px){.nutrition-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:100%!important}}']});let a=i;return a})();function Ye(a,i){if(a&1&&O(0,"app-food-info",0)(1,"app-nutri-info",1),a&2){let m=S();_("food",m.food)("serving",m.serving)("nutrientsPercentage",m.nutrientsPercentage),l(),_("serving",m.serving)}}function Ue(a,i){a&1&&O(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"div",7)}var ze=(()=>{let i=class i{constructor(){this._searchService=N($),this.route=N(Z),this.loading=!0}ngOnInit(){this.route.paramMap.subscribe(c=>{let o=c.get("id");o&&this._searchService.getFoodById(o).subscribe(e=>{this.food=e;let s=e.servings?.serving,M=s?.find(u=>u.measurement_description=="g");M?this.serving=M:this.serving=s?.find(u=>u),this.calculateNutrientPercentages(),this.loading=!1})})}calculateNutrientPercentages(){if(this.food&&this.serving){let c=Number(this.serving?.protein),o=Number(this.serving?.carbohydrate),e=Number(this.serving?.fat),s=c+o+e;this.nutrientsPercentage={protein:parseFloat((c/s*100).toFixed(2)),carbs:parseFloat((o/s*100).toFixed(2)),fats:parseFloat((e/s*100).toFixed(2))}}}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=v({type:i,selectors:[["app-food"]],standalone:!0,features:[C],decls:2,vars:1,consts:[[3,"food","serving","nutrientsPercentage"],[3,"serving"],[1,"food-description","loading-container"],[1,"brand","loading-container"],[1,"item-container","loading-container"],[1,"button","loading-container"],[1,"nutri-info-title","loading-container"],[1,"nutri-info-container","loading-container"]],template:function(o,e){o&1&&w(0,Ye,2,4)(1,Ue,6,0),o&2&&I(0,e.loading?1:0)},dependencies:[ke,Ae],styles:[".food-description.loading-container[_ngcontent-%COMP%]{height:4rem;margin:2rem 0 1rem}.brand.loading-container[_ngcontent-%COMP%]{height:2rem}.item-container.loading-container[_ngcontent-%COMP%]{height:12rem;margin:2rem 0 1rem}.button.loading-container[_ngcontent-%COMP%]{height:3rem;width:15rem;margin:2rem 0 3rem auto}.nutri-info-title.loading-container[_ngcontent-%COMP%]{height:2rem;margin:2rem 0 1rem}.nutri-info-container.loading-container[_ngcontent-%COMP%]{height:40rem}"]});let a=i;return a})();var Ge=[{path:"",component:ze}],Be=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=k({type:i}),i.\u0275inj=D({imports:[j.forChild(Ge),j]});let a=i;return a})();var Tt=(()=>{let i=class i{};i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=k({type:i}),i.\u0275inj=D({imports:[E,Be]});let a=i;return a})();export{Tt as FoodModule};