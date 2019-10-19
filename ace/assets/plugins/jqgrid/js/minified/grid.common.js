!function(b){"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jqModal","./jqDnR"],b):b(jQuery)}(function(b){b.extend(b.jgrid,{showModal:function(c){c.w.show()},closeModal:function(c){c.w.hide().attr("aria-hidden","true"),c.o&&c.o.remove()},hideModal:function(a,k){k=b.extend({jqm:!0,gb:"",removemodal:!1,formprop:!1,form:""},k||{});var l=k.gb&&"string"==typeof k.gb&&"#gbox_"===k.gb.substr(0,6)?b("#"+k.gb.substr(6))[0]:!1;if(k.onClose){var m=l?k.onClose.call(l,a):k.onClose(a);if("boolean"==typeof m&&!m){return}}if(k.formprop&&l&&k.form){var n=b(a)[0].style.height,o=b(a)[0].style.width;n.indexOf("px")>-1&&(n=parseFloat(n)),o.indexOf("px")>-1&&(o=parseFloat(o));var p,q;"edit"===k.form?(p="#"+b.jgrid.jqID("FrmGrid_"+k.gb.substr(6)),q="formProp"):"view"===k.form&&(p="#"+b.jgrid.jqID("ViewGrid_"+k.gb.substr(6)),q="viewProp"),b(l).data(q,{top:parseFloat(b(a).css("top")),left:parseFloat(b(a).css("left")),width:o,height:n,dataheight:b(p).height(),datawidth:b(p).width()})}if(b.fn.jqm&&k.jqm===!0){b(a).attr("aria-hidden","true").jqmHide()}else{if(""!==k.gb){try{b(".jqgrid-overlay:first",k.gb).hide()}catch(r){}}b(a).hide().attr("aria-hidden","true")}k.removemodal&&b(a).remove()},findPos:function(d){var e=0,f=0;if(d.offsetParent){do{e+=d.offsetLeft,f+=d.offsetTop}while(d=d.offsetParent)}return[e,f]},createModal:function(a,w,x,y,z,A,B){x=b.extend(!0,{},b.jgrid.jqModal||{},x);var C=this,D="rtl"===b(x.gbox).attr("dir")?!0:!1,E=b.jgrid.styleUI[x.styleUI||"jQueryUI"].modal,F=b.jgrid.styleUI[x.styleUI||"jQueryUI"].common,G=document.createElement("div");B=b.extend({},B||{}),G.className="ui-jqdialog "+E.modal,G.id=a.themodal;var H=document.createElement("div");H.className="ui-jqdialog-titlebar "+E.header,H.id=a.modalhead,b(H).append("<span class='ui-jqdialog-title'>"+x.caption+"</span>");var I=b("<a class='ui-jqdialog-titlebar-close "+F.cornerall+"'></a>").hover(function(){I.addClass(F.hover)},function(){I.removeClass(F.hover)}).append("<span class='"+F.icon_base+" "+E.icon_close+"'></span>");b(H).append(I),D?(G.dir="rtl",b(".ui-jqdialog-title",H).css("float","right"),b(".ui-jqdialog-titlebar-close",H).css("left","0.3em")):(G.dir="ltr",b(".ui-jqdialog-title",H).css("float","left"),b(".ui-jqdialog-titlebar-close",H).css("right","0.3em"));var J=document.createElement("div");b(J).addClass("ui-jqdialog-content "+E.content).attr("id",a.modalcontent),b(J).append(w),G.appendChild(J),b(G).prepend(H),A===!0?b("body").append(G):"string"==typeof A?b(A).append(G):b(G).insertBefore(y),b(G).css(B),void 0===x.jqModal&&(x.jqModal=!0);var K={};if(b.fn.jqm&&x.jqModal===!0){if(0===x.left&&0===x.top&&x.overlay){var L=[];L=b.jgrid.findPos(z),x.left=L[0]+4,x.top=L[1]+4}K.top=x.top+"px",K.left=x.left}else{(0!==x.left||0!==x.top)&&(K.left=x.left,K.top=x.top+"px")}if(b("a.ui-jqdialog-titlebar-close",H).click(function(){var d=b("#"+b.jgrid.jqID(a.themodal)).data("onClose")||x.onClose,f=b("#"+b.jgrid.jqID(a.themodal)).data("gbox")||x.gbox;return C.hideModal("#"+b.jgrid.jqID(a.themodal),{gb:f,jqm:x.jqModal,onClose:d,removemodal:x.removemodal||!1,formprop:!x.recreateForm||!1,form:x.form||""}),!1}),0!==x.width&&x.width||(x.width=300),0!==x.height&&x.height||(x.height=200),!x.zIndex){var M=b(y).parents("*[role=dialog]").filter(":first").css("z-index");M?x.zIndex=parseInt(M,10)+2:x.zIndex=950}var N=0;if(D&&K.left&&!A&&(N=b(x.gbox).width()-(isNaN(x.width)?0:parseInt(x.width,10))-8,K.left=parseInt(K.left,10)+parseInt(N,10)),K.left&&(K.left+="px"),b(G).css(b.extend({width:isNaN(x.width)?"auto":x.width+"px",height:isNaN(x.height)?"auto":x.height+"px",zIndex:x.zIndex,overflow:"hidden"},K)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":a.modalhead,"aria-hidden":"true"}),void 0===x.drag&&(x.drag=!0),void 0===x.resize&&(x.resize=!0),x.drag){if(b(H).css("cursor","move"),b.fn.tinyDraggable){b(G).tinyDraggable({handle:"#"+b.jgrid.jqID(H.id)})}else{try{b(G).draggable({handle:b("#"+b.jgrid.jqID(H.id))})}catch(O){}}}if(x.resize){if(b.fn.jqResize){b(G).append("<div class='jqResize "+E.resizable+" "+F.icon_base+" "+E.icon_resizable+"'></div>"),b("#"+b.jgrid.jqID(a.themodal)).jqResize(".jqResize",a.scrollelm?"#"+b.jgrid.jqID(a.scrollelm):!1)}else{try{b(G).resizable({handles:"se, sw",alsoResize:a.scrollelm?"#"+b.jgrid.jqID(a.scrollelm):!1})}catch(P){}}}x.closeOnEscape===!0&&b(G).keydown(function(d){if(27===d.which){var f=b("#"+b.jgrid.jqID(a.themodal)).data("onClose")||x.onClose;C.hideModal("#"+b.jgrid.jqID(a.themodal),{gb:x.gbox,jqm:x.jqModal,onClose:f,removemodal:x.removemodal||!1,formprop:!x.recreateForm||!1,form:x.form||""})}})},viewModal:function(a,e){if(e=b.extend({toTop:!0,overlay:10,modal:!1,overlayClass:"ui-widget-overlay",onShow:b.jgrid.showModal,onHide:b.jgrid.closeModal,gbox:"",jqm:!0,jqM:!0},e||{}),void 0===e.focusField&&(e.focusField=0),"number"==typeof e.focusField&&e.focusField>=0?e.focusField=parseInt(e.focusField,10):"boolean"!=typeof e.focusField||e.focusField?e.focusField=0:e.focusField=!1,b.fn.jqm&&e.jqm===!0){e.jqM?b(a).attr("aria-hidden","false").jqm(e).jqmShow():b(a).attr("aria-hidden","false").jqmShow()}else{if(""!==e.gbox&&(b(".jqgrid-overlay:first",e.gbox).show(),b(a).data("gbox",e.gbox)),b(a).show().attr("aria-hidden","false"),e.focusField>=0){try{b(":input:visible",a)[parseInt(e.focusField,10)].focus()}catch(f){}}}},info_dialog:function(a,r,s,t){var u={width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1000,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]};b.extend(!0,u,b.jgrid.jqModal||{},{caption:"<b>"+a+"</b>"},t||{});var v=u.jqModal,w=this,x=b.jgrid.styleUI[u.styleUI||"jQueryUI"].modal,y=b.jgrid.styleUI[u.styleUI||"jQueryUI"].common;b.fn.jqm&&!v&&(v=!1);var z,A="";if(u.buttons.length>0){for(z=0;z<u.buttons.length;z++){void 0===u.buttons[z].id&&(u.buttons[z].id="info_button_"+z),A+="<a id='"+u.buttons[z].id+"' class='fm-button "+y.button+"'>"+u.buttons[z].text+"</a>"}}var B=isNaN(u.dataheight)?u.dataheight:u.dataheight+"px",C="text-align:"+u.align+";",D="<div id='info_id'>";D+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+B+";"+C+"'>"+r+"</div>",D+=s?"<div class='"+x.header+"' style='text-align:"+u.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'><a id='closedialog' class='fm-button "+y.button+"'>"+s+"</a>"+A+"</div>":""!==A?"<div class='"+x.header+"' style='text-align:"+u.buttonalign+";padding-bottom:0.8em;padding-top:0.5em;background-image: none;border-width: 1px 0 0 0;'>"+A+"</div>":"",D+="</div>";try{"false"===b("#info_dialog").attr("aria-hidden")&&b.jgrid.hideModal("#info_dialog",{jqm:v}),b("#info_dialog").remove()}catch(E){}b.jgrid.createModal({themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",scrollelm:"infocnt"},D,u,"","",!0),A&&b.each(u.buttons,function(c){b("#"+b.jgrid.jqID(this.id),"#info_id").bind("click",function(){return u.buttons[c].onClick.call(b("#info_dialog")),!1})}),b("#closedialog","#info_id").click(function(){return w.hideModal("#info_dialog",{jqm:v,onClose:b("#info_dialog").data("onClose")||u.onClose,gb:b("#info_dialog").data("gbox")||u.gbox}),!1}),b(".fm-button","#info_dialog").hover(function(){b(this).addClass(y.hover)},function(){b(this).removeClass(y.hover)}),b.isFunction(u.beforeOpen)&&u.beforeOpen(),b.jgrid.viewModal("#info_dialog",{onHide:function(c){c.w.hide().remove(),c.o&&c.o.remove()},modal:u.modal,jqm:v}),b.isFunction(u.afterOpen)&&u.afterOpen();try{b("#info_dialog").focus()}catch(F){}},bindEv:function(a,e){var f=this;b.isFunction(e.dataInit)&&e.dataInit.call(f,a,e),e.dataEvents&&b.each(e.dataEvents,function(){void 0!==this.data?b(a).bind(this.type,this.data,this.fn):b(a).bind(this.type,this.fn)})},createEl:function(D,F,H,I,J){function K(f,g,h){var i=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","oper"];void 0!==h&&b.isArray(h)&&b.merge(i,h),b.each(g,function(e,j){-1===b.inArray(e,i)&&b(f).attr(e,j)}),g.hasOwnProperty("id")||b(f).attr("id",b.jgrid.randId())}var L="",M=this;switch(D){case"textarea":L=document.createElement("textarea"),I?F.cols||b(L).css({width:"98%"}):F.cols||(F.cols=20),F.rows||(F.rows=2),("&nbsp;"===H||"&#160;"===H||1===H.length&&160===H.charCodeAt(0))&&(H=""),L.value=H,K(L,F),b(L).attr({role:"textbox",multiline:"true"});break;case"checkbox":if(L=document.createElement("input"),L.type="checkbox",F.value){var N=F.value.split(":");H===N[0]&&(L.checked=!0,L.defaultChecked=!0),L.value=N[0],b(L).attr("offval",N[1])}else{var O=(H+"").toLowerCase();O.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==O?(L.checked=!0,L.defaultChecked=!0,L.value=H):L.value="on",b(L).attr("offval","off")}K(L,F,["value"]),b(L).attr("role","checkbox");break;case"select":L=document.createElement("select"),L.setAttribute("role","select");var P,Q=[];if(F.multiple===!0?(P=!0,L.multiple="multiple",b(L).attr("aria-multiselectable","true")):P=!1,null!=F.dataUrl){var R=null,S=F.postData||J.postData;try{R=F.rowId}catch(T){}M.p&&M.p.idPrefix&&(R=b.jgrid.stripPref(M.p.idPrefix,R)),b.ajax(b.extend({url:b.isFunction(F.dataUrl)?F.dataUrl.call(M,R,H,String(F.name)):F.dataUrl,type:"GET",dataType:"html",data:b.isFunction(S)?S.call(M,R,H,String(F.name)):S,context:{elem:L,options:F,vl:H},success:function(g){var i,n=[],o=this.elem,p=this.vl,q=b.extend({},this.options),r=q.multiple===!0,s=q.cacheUrlData===!0,t="",u=b.isFunction(q.buildSelect)?q.buildSelect.call(M,g):g;"string"==typeof u&&(u=b(b.trim(u)).html()),u&&(b(o).append(u),K(o,q,S?["postData"]:void 0),void 0===q.size&&(q.size=r?3:1),r?(n=p.split(","),n=b.map(n,function(c){return b.trim(c)})):n[0]=b.trim(p),setTimeout(function(){if(b("option",o).each(function(e){i=b(this).text(),p=b(this).val()||i,s&&(t+=(0!==e?";":"")+p+":"+i),0===e&&o.multiple&&(this.selected=!1),b(this).attr("role","option"),(b.inArray(b.trim(i),n)>-1||b.inArray(b.trim(p),n)>-1)&&(this.selected="selected")}),s){if("edit"===q.oper){b(M).jqGrid("setColProp",q.name,{editoptions:{buildSelect:null,dataUrl:null,value:t}})}else{if("search"===q.oper){b(M).jqGrid("setColProp",q.name,{searchoptions:{dataUrl:null,value:t}})}else{if("filter"===q.oper&&b("#fbox_"+M.p.id)[0].p){var c,d=b("#fbox_"+M.p.id)[0].p.columns;b.each(d,function(e){return c=this.index||this.name,q.name===c?(this.searchoptions.dataUrl=null,this.searchoptions.value=t,!1):void 0})}}}}b(M).triggerHandler("jqGridAddEditAfterSelectUrlComplete",[o])},0))}},J||{}))}else{if(F.value){var U;void 0===F.size&&(F.size=P?3:1),P&&(Q=H.split(","),Q=b.map(Q,function(c){return b.trim(c)})),"function"==typeof F.value&&(F.value=F.value());var V,W,X,Y,Z,aa,ab=void 0===F.separator?":":F.separator,ac=void 0===F.delimiter?";":F.delimiter;if("string"==typeof F.value){for(V=F.value.split(ac),U=0;U<V.length;U++){W=V[U].split(ab),W.length>2&&(W[1]=b.map(W,function(c,d){return d>0?c:void 0}).join(ab)),X=document.createElement("option"),X.setAttribute("role","option"),X.value=W[0],X.innerHTML=W[1],L.appendChild(X),P||b.trim(W[0])!==b.trim(H)&&b.trim(W[1])!==b.trim(H)||(X.selected="selected"),P&&(b.inArray(b.trim(W[1]),Q)>-1||b.inArray(b.trim(W[0]),Q)>-1)&&(X.selected="selected")}}else{if("[object Array]"===Object.prototype.toString.call(F.value)){for(Y=F.value,U=0;U<Y.length;U++){2===Y[U].length&&(Z=Y[U][0],aa=Y[U][1],X=document.createElement("option"),X.setAttribute("role","option"),X.value=Z,X.innerHTML=aa,L.appendChild(X),P||b.trim(Z)!==b.trim(H)&&b.trim(aa)!==b.trim(H)||(X.selected="selected"),P&&(b.inArray(b.trim(aa),Q)>-1||b.inArray(b.trim(Z),Q)>-1)&&(X.selected="selected"))}}else{if("object"==typeof F.value){Y=F.value;for(Z in Y){Y.hasOwnProperty(Z)&&(X=document.createElement("option"),X.setAttribute("role","option"),X.value=Z,X.innerHTML=Y[Z],L.appendChild(X),P||b.trim(Z)!==b.trim(H)&&b.trim(Y[Z])!==b.trim(H)||(X.selected="selected"),P&&(b.inArray(b.trim(Y[Z]),Q)>-1||b.inArray(b.trim(Z),Q)>-1)&&(X.selected="selected"))}}}}K(L,F,["value"])}}break;case"image":case"file":L=document.createElement("input"),L.type=D,K(L,F);break;case"custom":L=document.createElement("span");try{if(!b.isFunction(F.custom_element)){throw"e1"}var ad=F.custom_element.call(M,H,F);if(!ad){throw"e2"}ad=b(ad).addClass("customelement").attr({id:F.id,name:F.name}),b(L).empty().append(ad)}catch(T){var a=b.jgrid.getRegional(M,"errors"),E=b.jgrid.getRegional(M,"edit");"e1"===T?b.jgrid.info_dialog(a.errcap,"function 'custom_element' "+E.msg.nodefined,E.bClose,{styleUI:M.p.styleUI}):"e2"===T?b.jgrid.info_dialog(a.errcap,"function 'custom_element' "+E.msg.novalue,E.bClose,{styleUI:M.p.styleUI}):b.jgrid.info_dialog(a.errcap,"string"==typeof T?T:T.message,E.bClose,{styleUI:M.p.styleUI})}break;default:var G;G="button"===D?"button":"textbox",L=document.createElement("input"),L.type=D,L.value=H,K(L,F),"button"!==D&&(I?F.size||b(L).css({width:"96%"}):F.size||(F.size=20)),b(L).attr("role",G)}return L},checkDate:function(n,o){var p,q=function(c){return c%4!==0||c%100===0&&c%400!==0?28:29},r={};if(n=n.toLowerCase(),p=-1!==n.indexOf("/")?"/":-1!==n.indexOf("-")?"-":-1!==n.indexOf(".")?".":"/",n=n.split(p),o=o.split(p),3!==o.length){return !1}var s,t,u=-1,v=-1,w=-1;for(t=0;t<n.length;t++){var x=isNaN(o[t])?0:parseInt(o[t],10);r[n[t]]=x,s=n[t],-1!==s.indexOf("y")&&(u=t),-1!==s.indexOf("m")&&(w=t),-1!==s.indexOf("d")&&(v=t)}s="y"===n[u]||"yyyy"===n[u]?4:"yy"===n[u]?2:-1;var y,z=[0,31,29,31,30,31,30,31,31,30,31,30,31];return -1===u?!1:(y=r[n[u]].toString(),2===s&&1===y.length&&(s=1),y.length!==s||0===r[n[u]]&&"00"!==o[u]?!1:-1===w?!1:(y=r[n[w]].toString(),y.length<1||r[n[w]]<1||r[n[w]]>12?!1:-1===v?!1:(y=r[n[v]].toString(),y.length<1||r[n[v]]<1||r[n[v]]>31||2===r[n[w]]&&r[n[v]]>q(r[n[u]])||r[n[v]]>z[r[n[w]]]?!1:!0)))},isEmpty:function(c){return c.match(/^\s+$/)||""===c?!0:!1},checkTime:function(a){var e,f=/^(\d{1,2}):(\d{2})([apAP][Mm])?$/;if(!b.jgrid.isEmpty(a)){if(e=a.match(f),!e){return !1}if(e[3]){if(e[1]<1||e[1]>12){return !1}}else{if(e[1]>23){return !1}}if(e[2]>59){return !1}}return !0},checkValues:function(a,r,s,t){var u,v,w,x,y,z,A=this,B=A.p.colModel,C=b.jgrid.getRegional(this,"edit.msg");if(void 0===s){if("string"==typeof r){for(v=0,y=B.length;y>v;v++){if(B[v].name===r){u=B[v].editrules,r=v,null!=B[v].formoptions&&(w=B[v].formoptions.label);break}}}else{r>=0&&(u=B[r].editrules)}}else{u=s,w=void 0===t?"_":t}if(u){if(w||(w=null!=A.p.colNames?A.p.colNames[r]:B[r].label),u.required===!0&&b.jgrid.isEmpty(a)){return[!1,w+": "+C.required,""]}var D=u.required===!1?!1:!0;if(u.number===!0&&(D!==!1||!b.jgrid.isEmpty(a))&&isNaN(a)){return[!1,w+": "+C.number,""]}if(void 0!==u.minValue&&!isNaN(u.minValue)&&parseFloat(a)<parseFloat(u.minValue)){return[!1,w+": "+C.minValue+" "+u.minValue,""]}if(void 0!==u.maxValue&&!isNaN(u.maxValue)&&parseFloat(a)>parseFloat(u.maxValue)){return[!1,w+": "+C.maxValue+" "+u.maxValue,""]}var E;if(u.email===!0&&!(D===!1&&b.jgrid.isEmpty(a)||(E=/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,E.test(a)))){return[!1,w+": "+C.email,""]}if(u.integer===!0&&(D!==!1||!b.jgrid.isEmpty(a))){if(isNaN(a)){return[!1,w+": "+C.integer,""]}if(a%1!==0||-1!==a.indexOf(".")){return[!1,w+": "+C.integer,""]}}if(u.date===!0&&!(D===!1&&b.jgrid.isEmpty(a)||(B[r].formatoptions&&B[r].formatoptions.newformat?(x=B[r].formatoptions.newformat,z=b.jgrid.getRegional(A,"formatter.date.masks"),z&&z.hasOwnProperty(x)&&(x=z[x])):x=B[r].datefmt||"Y-m-d",b.jgrid.checkDate(x,a)))){return[!1,w+": "+C.date+" - "+x,""]}if(u.time===!0&&!(D===!1&&b.jgrid.isEmpty(a)||b.jgrid.checkTime(a))){return[!1,w+": "+C.date+" - hh:mm (am/pm)",""]}if(u.url===!0&&!(D===!1&&b.jgrid.isEmpty(a)||(E=/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i,E.test(a)))){return[!1,w+": "+C.url,""]}if(u.custom===!0&&(D!==!1||!b.jgrid.isEmpty(a))){if(b.isFunction(u.custom_func)){var F=u.custom_func.call(A,a,w,r);return b.isArray(F)?F:[!1,C.customarray,""]}return[!1,C.customfcheck,""]}}return[!0,"",""]}})});