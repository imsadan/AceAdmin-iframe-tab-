!function(b){"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],b):b(jQuery)}(function(b){b.fn.jqFilter=function(a){if("string"==typeof a){var f=b.fn.jqFilter[a];if(!f){throw"jqFilter - No such method: "+a}var g=b.makeArray(arguments).slice(1);return f.apply(this,g)}var h=b.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,direction:"ltr"},b.jgrid.filter,a||{});return this.each(function(){if(!this.filter){this.p=h,(null===this.p.filter||void 0===this.p.filter)&&(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&b.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var e,l,m=this.p.columns.length,n=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=b.extend(!0,{},this.p.filter),m){for(e=0;m>e;e++){l=this.p.columns[e],l.stype?l.inputtype=l.stype:l.inputtype||(l.inputtype="text"),l.sorttype?l.searchtype=l.sorttype:l.searchtype||(l.searchtype="string"),void 0===l.hidden&&(l.hidden=!1),l.label||(l.label=l.name),l.index&&(l.name=l.index),l.hasOwnProperty("searchoptions")||(l.searchoptions={}),l.hasOwnProperty("searchrules")||(l.searchrules={})}var o=function(){return b("#"+b.jgrid.jqID(h.id))[0]||null},p=o(),q=b.jgrid.styleUI[p.p.styleUI||"jQueryUI"].filter,r=b.jgrid.styleUI[p.p.styleUI||"jQueryUI"].common;this.p.showQuery&&b(this).append("<table class='queryresult "+q.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var s=function(i,j){var k=[!0,""],t=o();if(b.isFunction(j.searchrules)){k=j.searchrules.call(t,i,j)}else{if(b.jgrid&&b.jgrid.checkValues){try{k=b.jgrid.checkValues.call(t,i,-1,j.searchrules,j.label)}catch(u){}}}k&&k.length&&k[0]===!1&&(h.error=!k[0],h.errmsg=k[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",b.isFunction(this.p.onChange)?this.p.onChange.call(this,this.p):!1},this.reDraw=function(){b("table.group:first",this).remove();var c=this.createTableForGroup(h.filter,null);b(this).append(c),b.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(i,j){var w,x=this,y=b("<table class='group "+q.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),z="left";"rtl"===this.p.direction&&(z="right",y.attr("dir","rtl")),null===j&&y.append("<tr class='error' style='display:none;'><th colspan='5' class='"+r.error+"' align='"+z+"'></th></tr>");var A=b("<tr></tr>");y.append(A);var B=b("<th colspan='5' align='"+z+"'></th>");if(A.append(B),this.p.ruleButtons===!0){var C=b("<select class='opsel "+q.srSelect+"'></select>");B.append(C);var D,E="";for(w=0;w<h.groupOps.length;w++){D=i.groupOp===x.p.groupOps[w].op?" selected='selected'":"",E+="<option value='"+x.p.groupOps[w].op+"'"+D+">"+x.p.groupOps[w].text+"</option>"}C.append(E).bind("change",function(){i.groupOp=b(C).val(),x.onchange()})}var F="<span></span>";if(this.p.groupButton&&(F=b("<input type='button' value='+ {}' title='Add subgroup' class='add-group "+r.button+"'/>"),F.bind("click",function(){return void 0===i.groups&&(i.groups=[]),i.groups.push({groupOp:h.groupOps[0].op,rules:[],groups:[]}),x.reDraw(),x.onchange(),!1})),B.append(F),this.p.ruleButtons===!0){var G,H=b("<input type='button' value='+' title='Add rule' class='add-rule ui-add "+r.button+"'/>");H.bind("click",function(){for(void 0===i.rules&&(i.rules=[]),w=0;w<x.p.columns.length;w++){var d=void 0===x.p.columns[w].search?!0:x.p.columns[w].search,k=x.p.columns[w].hidden===!0,t=x.p.columns[w].searchoptions.searchhidden===!0;if(t&&d||d&&!k){G=x.p.columns[w];break}}var u;return u=G.searchoptions.sopt?G.searchoptions.sopt:x.p.sopt?x.p.sopt:-1!==b.inArray(G.searchtype,x.p.strarr)?x.p.stropts:x.p.numopts,i.rules.push({field:G.name,op:u[0],data:""}),x.reDraw(),!1}),B.append(H)}if(null!==j){var I=b("<input type='button' value='-' title='Delete group' class='delete-group "+r.button+"'/>");B.append(I),I.bind("click",function(){for(w=0;w<j.groups.length;w++){if(j.groups[w]===i){j.groups.splice(w,1);break}}return x.reDraw(),x.onchange(),!1})}if(void 0!==i.groups){for(w=0;w<i.groups.length;w++){var J=b("<tr></tr>");y.append(J);var K=b("<td class='first'></td>");J.append(K);var L=b("<td colspan='4'></td>");L.append(this.createTableForGroup(i.groups[w],i)),J.append(L)}}if(void 0===i.groupOp&&(i.groupOp=x.p.groupOps[0].op),void 0!==i.rules){for(w=0;w<i.rules.length;w++){y.append(this.createTableRowForRule(i.rules[w],i))}}return y},this.createTableRowForRule=function(j,G){var I,L,M,N,O,P=this,Q=o(),R=b("<tr></tr>"),S="";R.append("<td class='first'></td>");var T=b("<td class='columns'></td>");R.append(T);var U,V=b("<select class='"+q.srSelect+"'></select>"),W=[];T.append(V),V.bind("change",function(){for(j.field=b(V).val(),M=b(this).parents("tr:first"),b(".data",M).empty(),I=0;I<P.p.columns.length;I++){if(P.p.columns[I].name===j.field){N=P.p.columns[I];break}}if(N){N.searchoptions.id=b.jgrid.randId(),N.searchoptions.name=j.field,N.searchoptions.oper="filter",n&&"text"===N.inputtype&&(N.searchoptions.size||(N.searchoptions.size=10));var d=b.jgrid.createEl.call(Q,N.inputtype,N.searchoptions,"",!0,P.p.ajaxSelectOptions||{},!0);b(d).addClass("input-elm "+q.srInput),L=N.searchoptions.sopt?N.searchoptions.sopt:P.p.sopt?P.p.sopt:-1!==b.inArray(N.searchtype,P.p.strarr)?P.p.stropts:P.p.numopts;var k="",t=0;for(W=[],b.each(P.p.ops,function(){W.push(this.oper)}),I=0;I<L.length;I++){U=b.inArray(L[I],W),-1!==U&&(0===t&&(j.op=P.p.ops[U].oper),k+="<option value='"+P.p.ops[U].oper+"'>"+P.p.ops[U].text+"</option>",t++)}if(b(".selectopts",M).empty().append(k),b(".selectopts",M)[0].selectedIndex=0,b.jgrid.msie&&b.jgrid.msiever()<9){var u=parseInt(b("select.selectopts",M)[0].offsetWidth,10)+1;b(".selectopts",M).width(u),b(".selectopts",M).css("width","auto")}b(".data",M).append(d),b.jgrid.bindEv.call(Q,d,N.searchoptions),b(".input-elm",M).bind("change",function(v){var w=v.target;j.data="SPAN"===w.nodeName.toUpperCase()&&N.searchoptions&&b.isFunction(N.searchoptions.custom_value)?N.searchoptions.custom_value.call(Q,b(w).children(".customelement:first"),"get"):w.value,P.onchange()}),setTimeout(function(){j.data=b(d).val(),P.onchange()},0)}});var X=0;for(I=0;I<P.p.columns.length;I++){var Y=void 0===P.p.columns[I].search?!0:P.p.columns[I].search,Z=P.p.columns[I].hidden===!0,aa=P.p.columns[I].searchoptions.searchhidden===!0;(aa&&Y||Y&&!Z)&&(O="",j.field===P.p.columns[I].name&&(O=" selected='selected'",X=I),S+="<option value='"+P.p.columns[I].name+"'"+O+">"+P.p.columns[I].label+"</option>")}V.append(S);var ab=b("<td class='operators'></td>");R.append(ab),N=h.columns[X],N.searchoptions.id=b.jgrid.randId(),n&&"text"===N.inputtype&&(N.searchoptions.size||(N.searchoptions.size=10)),N.searchoptions.name=j.field,N.searchoptions.oper="filter";var i=b.jgrid.createEl.call(Q,N.inputtype,N.searchoptions,j.data,!0,P.p.ajaxSelectOptions||{},!0);("nu"===j.op||"nn"===j.op)&&(b(i).attr("readonly","true"),b(i).attr("disabled","true"));var F=b("<select class='selectopts "+q.srSelect+"'></select>");for(ab.append(F),F.bind("change",function(){j.op=b(F).val(),M=b(this).parents("tr:first");var d=b(".input-elm",M)[0];"nu"===j.op||"nn"===j.op?(j.data="","SELECT"!==d.tagName.toUpperCase()&&(d.value=""),d.setAttribute("readonly","true"),d.setAttribute("disabled","true")):("SELECT"===d.tagName.toUpperCase()&&(j.data=d.value),d.removeAttribute("readonly"),d.removeAttribute("disabled")),P.onchange()}),L=N.searchoptions.sopt?N.searchoptions.sopt:P.p.sopt?P.p.sopt:-1!==b.inArray(N.searchtype,P.p.strarr)?P.p.stropts:P.p.numopts,S="",b.each(P.p.ops,function(){W.push(this.oper)}),I=0;I<L.length;I++){U=b.inArray(L[I],W),-1!==U&&(O=j.op===P.p.ops[U].oper?" selected='selected'":"",S+="<option value='"+P.p.ops[U].oper+"'"+O+">"+P.p.ops[U].text+"</option>")}F.append(S);var H=b("<td class='data'></td>");R.append(H),H.append(i),b.jgrid.bindEv.call(Q,i,N.searchoptions),b(i).addClass("input-elm "+q.srInput).bind("change",function(){j.data="custom"===N.inputtype?N.searchoptions.custom_value.call(Q,b(this).children(".customelement:first"),"get"):b(this).val(),P.onchange()});var J=b("<td></td>");if(R.append(J),this.p.ruleButtons===!0){var K=b("<input type='button' value='-' title='Delete rule' class='delete-rule ui-del "+r.button+"'/>");J.append(K),K.bind("click",function(){for(I=0;I<G.rules.length;I++){if(G.rules[I]===j){G.rules.splice(I,1);break}}return P.reDraw(),P.onchange(),!1})}return R},this.getStringForGroup=function(i){var j,k="(";if(void 0!==i.groups){for(j=0;j<i.groups.length;j++){k.length>1&&(k+=" "+i.groupOp+" ");try{k+=this.getStringForGroup(i.groups[j])}catch(t){alert(t)}}}if(void 0!==i.rules){try{for(j=0;j<i.rules.length;j++){k.length>1&&(k+=" "+i.groupOp+" "),k+=this.getStringForRule(i.rules[j])}}catch(u){alert(u)}}return k+=")","()"===k?"":k},this.getStringForRule=function(k){var t,u,v,w,x="",y="",z=["int","integer","float","number","currency"];for(t=0;t<this.p.ops.length;t++){if(this.p.ops[t].oper===k.op){x=this.p.operands.hasOwnProperty(k.op)?this.p.operands[k.op]:"",y=this.p.ops[t].oper;break}}for(t=0;t<this.p.columns.length;t++){if(this.p.columns[t].name===k.field){u=this.p.columns[t];break}}return void 0===u?"":(w=k.data,("bw"===y||"bn"===y)&&(w+="%"),("ew"===y||"en"===y)&&(w="%"+w),("cn"===y||"nc"===y)&&(w="%"+w+"%"),("in"===y||"ni"===y)&&(w=" ("+w+")"),h.errorcheck&&s(k.data,u),v=-1!==b.inArray(u.searchtype,z)||"nn"===y||"nu"===y?k.field+" "+x+" "+w:k.field+" "+x+' "'+w+'"')},this.resetFilter=function(){this.p.filter=b.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){b("th."+r.error,this).html(""),b("tr.error",this).hide()},this.showError=function(){b("th."+r.error,this).html(this.p.errmsg),b("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(h.filter)},this.toString=function(){function d(c){if(j.p.errorcheck){var k,t;for(k=0;k<j.p.columns.length;k++){if(j.p.columns[k].name===c.field){t=j.p.columns[k];break}}t&&s(c.data,t)}return c.op+"(item."+c.field+",'"+c.data+"')"}function i(k){var t,u="(";if(void 0!==k.groups){for(t=0;t<k.groups.length;t++){u.length>1&&(u+="OR"===k.groupOp?" || ":" && "),u+=i(k.groups[t])}}if(void 0!==k.rules){for(t=0;t<k.rules.length;t++){u.length>1&&(u+="OR"===k.groupOp?" || ":" && "),u+=d(k.rules[t])}}return u+=")","()"===u?"":u}var j=this;return i(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},b.extend(b.fn.jqFilter,{toSQLString:function(){var c="";return this.each(function(){c=this.toUserFriendlyString()}),c},filterData:function(){var c;return this.each(function(){c=this.p.filter}),c},getParameter:function(c){return void 0!==c&&this.p.hasOwnProperty(c)?this.p[c]:this.p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(a){"string"==typeof a&&(a=b.jgrid.parse(a)),this.each(function(){this.p.filter=a,this.reDraw(),this.onchange()})}}),b.jgrid.extend({filterToolbar:function(a){var d=b.jgrid.getRegional(this[0],"search");return a=b.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,searchurl:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^","in":"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#"}},d,a||{}),this.each(function(){var c=this;if(!c.p.filterToolbar){b(c).data("filterToolbar")||b(c).data("filterToolbar",a),c.p.force_regional&&(a=b.extend(a,d));var p,q,r,s=b.jgrid.styleUI[c.p.styleUI||"jQueryUI"].filter,t=b.jgrid.styleUI[c.p.styleUI||"jQueryUI"].common,u=b.jgrid.styleUI[c.p.styleUI||"jQueryUI"].base,v=function(){var o,A,B,C={},D=0,E={};b.each(c.p.colModel,function(){var e=b("#gs_"+c.p.idPrefix+b.jgrid.jqID(this.name),this.frozen===!0&&c.p.frozenColumns===!0?c.grid.fhDiv:c.grid.hDiv);if(A=this.index||this.name,B=a.searchOperators?e.parent().prev().children("a").attr("soper")||a.defaultSearch:this.searchoptions&&this.searchoptions.sopt?this.searchoptions.sopt[0]:"select"===this.stype?"eq":a.defaultSearch,o="custom"===this.stype&&b.isFunction(this.searchoptions.custom_value)&&e.length>0&&"SPAN"===e[0].nodeName.toUpperCase()?this.searchoptions.custom_value.call(c,e.children(".customelement:first"),"get"):e.val(),o||"nu"===B||"nn"===B){C[A]=o,E[A]=B,D++}else{try{delete c.p.postData[A]}catch(f){}}});var F=D>0?!0:!1;if(a.stringResult===!0||"local"===c.p.datatype||a.searchOperators===!0){var G='{"groupOp":"'+a.groupOp+'","rules":[',H=0;b.each(C,function(e,f){H>0&&(G+=","),G+='{"field":"'+e+'",',G+='"op":"'+E[e]+'",',f+="",G+='"data":"'+f.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',H++}),G+="]}",b.extend(c.p.postData,{filters:G}),b.each(["searchField","searchString","searchOper"],function(e,f){c.p.postData.hasOwnProperty(f)&&delete c.p.postData[f]})}else{b.extend(c.p.postData,C)}var I;c.p.searchurl&&(I=c.p.url,b(c).jqGrid("setGridParam",{url:c.p.searchurl}));var J="stop"===b(c).triggerHandler("jqGridToolbarBeforeSearch")?!0:!1;!J&&b.isFunction(a.beforeSearch)&&(J=a.beforeSearch.call(c)),J||b(c).jqGrid("setGridParam",{search:F}).trigger("reloadGrid",[{page:1}]),I&&b(c).jqGrid("setGridParam",{url:I}),b(c).triggerHandler("jqGridToolbarAfterSearch"),b.isFunction(a.afterSearch)&&a.afterSearch.call(c)},w=function(m){var n,o={},A=0;m="boolean"!=typeof m?!0:m,b.each(c.p.colModel,function(){var e,f=b("#gs_"+c.p.idPrefix+b.jgrid.jqID(this.name),this.frozen===!0&&c.p.frozenColumns===!0?c.grid.fhDiv:c.grid.hDiv);switch(this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(e=this.searchoptions.defaultValue),n=this.index||this.name,this.stype){case"select":if(f.find("option").each(function(h){return 0===h&&(this.selected=!0),b(this).val()===e?(this.selected=!0,!1):void 0}),void 0!==e){o[n]=e,A++}else{try{delete c.p.postData[n]}catch(g){}}break;case"text":if(f.val(e||""),void 0!==e){o[n]=e,A++}else{try{delete c.p.postData[n]}catch(j){}}break;case"custom":b.isFunction(this.searchoptions.custom_value)&&f.length>0&&"SPAN"===f[0].nodeName.toUpperCase()&&this.searchoptions.custom_value.call(c,f.children(".customelement:first"),"set",e||"")}});var B=A>0?!0:!1;if(c.p.resetsearch=!0,a.stringResult===!0||"local"===c.p.datatype){var C='{"groupOp":"'+a.groupOp+'","rules":[',D=0;b.each(o,function(e,f){D>0&&(C+=","),C+='{"field":"'+e+'",',C+='"op":"eq",',f+="",C+='"data":"'+f.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',D++}),C+="]}",b.extend(c.p.postData,{filters:C}),b.each(["searchField","searchString","searchOper"],function(e,f){c.p.postData.hasOwnProperty(f)&&delete c.p.postData[f]})}else{b.extend(c.p.postData,o)}var E;c.p.searchurl&&(E=c.p.url,b(c).jqGrid("setGridParam",{url:c.p.searchurl}));var F="stop"===b(c).triggerHandler("jqGridToolbarBeforeClear")?!0:!1;!F&&b.isFunction(a.beforeClear)&&(F=a.beforeClear.call(c)),F||m&&b(c).jqGrid("setGridParam",{search:B}).trigger("reloadGrid",[{page:1}]),E&&b(c).jqGrid("setGridParam",{url:E}),b(c).triggerHandler("jqGridToolbarAfterClear"),b.isFunction(a.afterClear)&&a.afterClear()},x=function(){var e=b("tr.ui-search-toolbar",c.grid.hDiv),f=c.p.frozenColumns===!0?b("tr.ui-search-toolbar",c.grid.fhDiv):!1;"none"===e.css("display")?(e.show(),f&&f.show()):(e.hide(),f&&f.hide())},y=function(h,i,k){b("#sopt_menu").remove(),i=parseInt(i,10),k=parseInt(k,10)+18;for(var A,B,C=b(".ui-jqgrid-view").css("font-size")||"11px",D='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+C+";left:"+i+"px;top:"+k+'px;">',E=b(h).attr("soper"),F=[],G=0,H=b(h).attr("colname"),I=c.p.colModel.length;I>G&&c.p.colModel[G].name!==H;){G++}var J=c.p.colModel[G],K=b.extend({},J.searchoptions);for(K.sopt||(K.sopt=[],K.sopt[0]="select"===J.stype?"eq":a.defaultSearch),b.each(a.odata,function(){F.push(this.oper)}),G=0;G<K.sopt.length;G++){B=b.inArray(K.sopt[G],F),-1!==B&&(A=E===a.odata[B].oper?t.highlight:"",D+='<li class="ui-menu-item '+A+'" role="presentation"><a class="'+t.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+a.odata[B].oper+'" oper="'+a.operands[a.odata[B].oper]+'"><table class="ui-common-table"><tr><td width="25px">'+a.operands[a.odata[B].oper]+"</td><td>"+a.odata[B].text+"</td></tr></table></a></li>")}D+="</ul>",b("body").append(D),b("#sopt_menu").addClass("ui-menu "+s.menu_widget),b("#sopt_menu > li > a").hover(function(){b(this).addClass(t.hover)},function(){b(this).removeClass(t.hover)}).click(function(){var j=b(this).attr("value"),l=b(this).attr("oper");if(b(c).triggerHandler("jqGridToolbarSelectOper",[j,l,h]),b("#sopt_menu").hide(),b(h).text(l).attr("soper",j),a.autosearch===!0){var m=b(h).parent().next().children()[0];(b(m).val()||"nu"===j||"nn"===j)&&v()}})},z=b("<tr class='ui-search-toolbar' role='row'></tr>");a.restoreFromFilters&&(r=c.p.postData.filters,r&&("string"==typeof r&&(r=b.jgrid.parse(r)),q=r.rules.length?r.rules:!1)),b.each(c.p.colModel,function(e){var f,h,j,k,o,A,B,C,D=this,E="",F="=",G=b("<th role='columnheader' class='"+u.headerBox+" ui-th-"+c.p.direction+"' id='gsh_"+c.p.id+"_"+D.name+"' ></th>"),H=b("<div></div>"),I=b("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(this.hidden===!0&&b(G).css("display","none"),this.search=this.search===!1?!1:!0,void 0===this.stype&&(this.stype="text"),f=b.extend({},this.searchoptions||{},{name:D.index||D.name,id:"gs_"+c.p.idPrefix+D.name,oper:"search"}),this.search){if(a.restoreFromFilters&&q){C=!1;for(var J=0;J<q.length;J++){if(q[J].field){var K=D.index||D.name;if(K===q[J].field){C=q[J];break}}}}if(a.searchOperators){for(h=f.sopt?f.sopt[0]:"select"===D.stype?"eq":a.defaultSearch,a.restoreFromFilters&&C&&(h=C.op),j=0;j<a.odata.length;j++){if(a.odata[j].oper===h){F=a.operands[h]||"";break}}k=null!=f.searchtitle?f.searchtitle:a.operandTitle,E="<a title='"+k+"' style='padding-right: 0.5em;' soper='"+h+"' class='soptclass' colname='"+this.name+"'>"+F+"</a>"}switch(b("td:eq(0)",I).attr("colindex",e).append(E),void 0===f.clearSearch&&(f.clearSearch=!0),f.clearSearch?(o=a.resetTitle||"Clear Search Value",b("td:eq(2)",I).append("<a title='"+o+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+a.resetIcon+"</a>")):b("td:eq(2)",I).hide(),this.surl&&(f.dataUrl=this.surl),A="",f.defaultValue&&(A=b.isFunction(f.defaultValue)?f.defaultValue.call(c):f.defaultValue),a.restoreFromFilters&&C&&(A=C.data),B=b.jgrid.createEl.call(c,this.stype,f,A,!1,b.extend({},b.jgrid.ajaxOptions,c.p.ajaxSelectOptions||{})),b(B).addClass(s.srInput),b("td:eq(1)",I).append(B),b(H).append(I),null==f.dataEvents&&(f.dataEvents=[]),this.stype){case"select":a.autosearch===!0&&f.dataEvents.push({type:"change",fn:function(){return v(),!1}});break;case"text":a.autosearch===!0&&(a.searchOnEnter?f.dataEvents.push({type:"keypress",fn:function(g){var i=g.charCode||g.keyCode||0;return 13===i?(v(),!1):this}}):f.dataEvents.push({type:"keydown",fn:function(g){var i=g.which;switch(i){case 13:return !1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:p&&clearTimeout(p),p=setTimeout(function(){v()},a.autosearchDelay)}}}))}b.jgrid.bindEv.call(c,B,f)}b(G).append(H),b(z).append(G),a.searchOperators||b("td:eq(0)",I).hide()}),b("table thead",c.grid.hDiv).append(z),a.searchOperators&&(b(".soptclass",z).click(function(f){var g=b(this).offset(),h=g.left,i=g.top;y(this,h,i),f.stopPropagation()}),b("body").on("click",function(e){"soptclass"!==e.target.className&&b("#sopt_menu").hide()})),b(".clearsearchclass",z).click(function(){var h=b(this).parents("tr:first"),i=parseInt(b("td.ui-search-oper",h).attr("colindex"),10),j=b.extend({},c.p.colModel[i].searchoptions||{}),k=j.defaultValue?j.defaultValue:"";"select"===c.p.colModel[i].stype?k?b("td.ui-search-input select",h).val(k):b("td.ui-search-input select",h)[0].selectedIndex=0:b("td.ui-search-input input",h).val(k),a.autosearch===!0&&v()}),this.p.filterToolbar=!0,this.triggerToolbar=v,this.clearToolbar=w,this.toggleToolbar=x}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,b(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},searchGrid:function(a){var d=b.jgrid.getRegional(this[0],"search");return a=b.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE","in":"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"}},d,a||{}),this.each(function(){function z(e){D=b(A).triggerHandler("jqGridFilterBeforeShow",[e]),void 0===D&&(D=!0),D&&b.isFunction(a.beforeShowSearch)&&(D=a.beforeShowSearch.call(A,e)),D&&(b.jgrid.viewModal("#"+b.jgrid.jqID(F.themodal),{gbox:"#gbox_"+b.jgrid.jqID(C),jqm:a.jqModal,modal:a.modal,overlay:a.overlay,toTop:a.toTop}),b(A).triggerHandler("jqGridFilterAfterShow",[e]),b.isFunction(a.afterShowSearch)&&a.afterShowSearch.call(A,e))}var A=this;if(A.grid){var B,C="fbox_"+A.p.id,D=!0,E=!0,F={themodal:"searchmod"+C,modalhead:"searchhd"+C,modalcontent:"searchcnt"+C,scrollelm:C},G=A.p.postData[a.sFilter],H=b.jgrid.styleUI[A.p.styleUI||"jQueryUI"].filter,I=b.jgrid.styleUI[A.p.styleUI||"jQueryUI"].common;if(a.styleUI=A.p.styleUI,"string"==typeof G&&(G=b.jgrid.parse(G)),a.recreateFilter===!0&&b("#"+b.jgrid.jqID(F.themodal)).remove(),void 0!==b("#"+b.jgrid.jqID(F.themodal))[0]){z(b("#fbox_"+b.jgrid.jqID(A.p.id)))}else{var J=b("<div><div id='"+C+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+b.jgrid.jqID(A.p.id)),K="left",L="";"rtl"===A.p.direction&&(K="right",L=" style='text-align:left'",J.attr("dir","rtl"));var M,N,O=b.extend([],A.p.colModel),P="<a id='"+C+"_search' class='fm-button "+I.button+" fm-button-icon-right ui-search'><span class='"+I.icon_base+" "+H.icon_search+"'></span>"+a.Find+"</a>",Q="<a id='"+C+"_reset' class='fm-button "+I.button+" fm-button-icon-left ui-reset'><span class='"+I.icon_base+" "+H.icon_reset+"'></span>"+a.Reset+"</a>",R="",S="",T=!1,U=-1;if(a.showQuery&&(R="<a id='"+C+"_query' class='fm-button "+I.button+" fm-button-icon-left'><span class='"+I.icon_base+" "+H.icon_query+"'></span>Query</a>"),a.columns.length?(O=a.columns,U=0,M=O[0].index||O[0].name):b.each(O,function(g,h){if(h.label||(h.label=A.p.colNames[g]),!T){var i=void 0===h.search?!0:h.search,j=h.hidden===!0,k=h.searchoptions&&h.searchoptions.searchhidden===!0;(k&&i||i&&!j)&&(T=!0,M=h.index||h.name,U=g)}}),!G&&M||a.multipleSearch===!1){var V="eq";U>=0&&O[U].searchoptions&&O[U].searchoptions.sopt?V=O[U].searchoptions.sopt[0]:a.sopt&&a.sopt.length&&(V=a.sopt[0]),G={groupOp:"AND",rules:[{field:M,op:V,data:""}]}}T=!1,a.tmplNames&&a.tmplNames.length&&(T=!0,S="<tr><td class='ui-search-label'>"+a.tmplLabel+"</td>",S+="<td><select class='ui-template "+H.srSelect+"'>",S+="<option value='default'>Default</option>",b.each(a.tmplNames,function(c,e){S+="<option value='"+c+"'>"+e+"</option>"}),S+="</select></td></tr>"),N="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+C+"_2'><tbody><tr><td colspan='2'><hr class='"+I.content+"' style='margin:1px'/></td></tr>"+S+"<tr><td class='EditButton' style='text-align:"+K+"'>"+Q+"</td><td class='EditButton' "+L+">"+R+P+"</td></tr></tbody></table>",C=b.jgrid.jqID(C),b("#"+C).jqFilter({columns:O,sortStrategy:a.sortStrategy,filter:a.loadDefaults?G:null,showQuery:a.showQuery,errorcheck:a.errorcheck,sopt:a.sopt,groupButton:a.multipleGroup,ruleButtons:a.multipleSearch,afterRedraw:a.afterRedraw,ops:a.odata,operands:a.operands,ajaxSelectOptions:A.p.ajaxSelectOptions,groupOps:a.groupOps,onChange:function(){this.p.showQuery&&b(".query",this).html(this.toUserFriendlyString()),b.isFunction(a.afterChange)&&a.afterChange.call(A,b("#"+C),a)},direction:A.p.direction,id:A.p.id}),J.append(N),T&&a.tmplFilters&&a.tmplFilters.length&&b(".ui-template",J).bind("change",function(){var e=b(this).val();return"default"===e?b("#"+C).jqFilter("addFilter",G):b("#"+C).jqFilter("addFilter",a.tmplFilters[parseInt(e,10)]),!1}),a.multipleGroup===!0&&(a.multipleSearch=!0),b(A).triggerHandler("jqGridFilterInitialize",[b("#"+C)]),b.isFunction(a.onInitializeSearch)&&a.onInitializeSearch.call(A,b("#"+C)),a.gbox="#gbox_"+C,a.layer?b.jgrid.createModal(F,J,a,"#gview_"+b.jgrid.jqID(A.p.id),b("#gbox_"+b.jgrid.jqID(A.p.id))[0],"#"+b.jgrid.jqID(a.layer),{position:"relative"}):b.jgrid.createModal(F,J,a,"#gview_"+b.jgrid.jqID(A.p.id),b("#gbox_"+b.jgrid.jqID(A.p.id))[0]),(a.searchOnEnter||a.closeOnEscape)&&b("#"+b.jgrid.jqID(F.themodal)).keydown(function(e){var f=b(e.target);return !a.searchOnEnter||13!==e.which||f.hasClass("add-group")||f.hasClass("add-rule")||f.hasClass("delete-group")||f.hasClass("delete-rule")||f.hasClass("fm-button")&&f.is("[id$=_query]")?a.closeOnEscape&&27===e.which?(b("#"+b.jgrid.jqID(F.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void 0:(b("#"+C+"_search").click(),!1)}),R&&b("#"+C+"_query").bind("click",function(){return b(".queryresult",J).toggle(),!1}),void 0===a.stringResult&&(a.stringResult=a.multipleSearch),b("#"+C+"_search").bind("click",function(){var e,f,h={};if(B=b("#"+C),B.find(".input-elm:focus").change(),f=B.jqFilter("filterData"),a.errorcheck&&(B[0].hideError(),a.showQuery||B.jqFilter("toSQLString"),B[0].p.error)){return B[0].showError(),!1}if(a.stringResult){try{e=JSON.stringify(f)}catch(i){}"string"==typeof e&&(h[a.sFilter]=e,b.each([a.sField,a.sValue,a.sOper],function(){h[this]=""}))}else{a.multipleSearch?(h[a.sFilter]=f,b.each([a.sField,a.sValue,a.sOper],function(){h[this]=""})):(h[a.sField]=f.rules[0].field,h[a.sValue]=f.rules[0].data,h[a.sOper]=f.rules[0].op,h[a.sFilter]="")}return A.p.search=!0,b.extend(A.p.postData,h),E=b(A).triggerHandler("jqGridFilterSearch"),void 0===E&&(E=!0),E&&b.isFunction(a.onSearch)&&(E=a.onSearch.call(A,A.p.filters)),E!==!1&&b(A).trigger("reloadGrid",[{page:1}]),a.closeAfterSearch&&b.jgrid.hideModal("#"+b.jgrid.jqID(F.themodal),{gb:"#gbox_"+b.jgrid.jqID(A.p.id),jqm:a.jqModal,onClose:a.onClose}),!1}),b("#"+C+"_reset").bind("click",function(){var f={},g=b("#"+C);return A.p.search=!1,A.p.resetsearch=!0,a.multipleSearch===!1?f[a.sField]=f[a.sValue]=f[a.sOper]="":f[a.sFilter]="",g[0].resetFilter(),T&&b(".ui-template",J).val("default"),b.extend(A.p.postData,f),E=b(A).triggerHandler("jqGridFilterReset"),void 0===E&&(E=!0),E&&b.isFunction(a.onReset)&&(E=a.onReset.call(A)),E!==!1&&b(A).trigger("reloadGrid",[{page:1}]),a.closeAfterReset&&b.jgrid.hideModal("#"+b.jgrid.jqID(F.themodal),{gb:"#gbox_"+b.jgrid.jqID(A.p.id),jqm:a.jqModal,onClose:a.onClose}),!1}),z(b("#"+C)),b(".fm-button:not(."+I.disabled+")",J).hover(function(){b(this).addClass(I.hover)},function(){b(this).removeClass(I.hover)})}}})}})});