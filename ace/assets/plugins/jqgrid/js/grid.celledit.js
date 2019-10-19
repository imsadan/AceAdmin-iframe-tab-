(function(a){if(typeof define==="function"&&define.amd){define(["jquery","./grid.base"],a)}else{a(jQuery)}}(function(a){a.jgrid.extend({editCell:function(d,c,b){return this.each(function(){var e=this,m,o,g,h,j=a(this).jqGrid("getStyleUI",e.p.styleUI+".common","highlight",true),k=a(this).jqGrid("getStyleUI",e.p.styleUI+".common","hover",true),l=a(this).jqGrid("getStyleUI",e.p.styleUI+".celledit","inputClass",true);if(!e.grid||e.p.cellEdit!==true){return}c=parseInt(c,10);e.p.selrow=e.rows[d].id;if(!e.p.knv){a(e).jqGrid("GridNav")}if(e.p.savedRow.length>0){if(b===true){if(d==e.p.iRow&&c==e.p.iCol){return}}a(e).jqGrid("saveCell",e.p.savedRow[0].id,e.p.savedRow[0].ic)}else{window.setTimeout(function(){a("#"+a.jgrid.jqID(e.p.knv)).attr("tabindex","-1").focus()},1)}h=e.p.colModel[c];m=h.name;if(m==="subgrid"||m==="cb"||m==="rn"){return}g=a("td:eq("+c+")",e.rows[d]);if(h.editable===true&&b===true&&!g.hasClass("not-editable-cell")&&(!a.isFunction(e.p.isCellEditable)||e.p.isCellEditable.call(e,m,d,c))){if(parseInt(e.p.iCol,10)>=0&&parseInt(e.p.iRow,10)>=0){a(e.rows[e.p.iRow]).removeClass("selected-row "+k).find("td:eq("+e.p.iCol+")").removeClass("edit-cell "+j)}a(g).addClass("edit-cell "+j);a(e.rows[d]).addClass("selected-row "+k);try{o=a.unformat.call(e,g,{rowId:e.rows[d].id,colModel:h},c)}catch(f){o=(h.edittype&&h.edittype==="textarea")?a(g).text():a(g).html()}if(e.p.autoencode){o=a.jgrid.htmlDecode(o)}if(!h.edittype){h.edittype="text"}e.p.savedRow.push({id:d,ic:c,name:m,v:o});if(o==="&nbsp;"||o==="&#160;"||(o.length===1&&o.charCodeAt(0)===160)){o=""}if(a.isFunction(e.p.formatCell)){var p=e.p.formatCell.call(e,e.rows[d].id,m,o,d,c);if(p!==undefined){o=p}}a(e).triggerHandler("jqGridBeforeEditCell",[e.rows[d].id,m,o,d,c]);if(a.isFunction(e.p.beforeEditCell)){e.p.beforeEditCell.call(e,e.rows[d].id,m,o,d,c)}var n=a.extend({},h.editoptions||{},{id:d+"_"+m,name:m,rowId:e.rows[d].id,oper:"edit"});var i=a.jgrid.createEl.call(e,h.edittype,n,o,true,a.extend({},a.jgrid.ajaxOptions,e.p.ajaxSelectOptions||{}));if(a.inArray(h.edittype,["text","textarea","password","select"])>-1){a(i).addClass(l)}a(g).html("").append(i).attr("tabindex","0");a.jgrid.bindEv.call(e,i,n);window.setTimeout(function(){a(i).focus()},1);a("input, select, textarea",g).bind("keydown",function(q){if(q.keyCode===27){if(a("input.hasDatepicker",g).length>0){if(a(".ui-datepicker").is(":hidden")){a(e).jqGrid("restoreCell",d,c)}else{a("input.hasDatepicker",g).datepicker("hide")}}else{a(e).jqGrid("restoreCell",d,c)}}if(q.keyCode===13&&!q.shiftKey){a(e).jqGrid("saveCell",d,c);return false}if(q.keyCode===9){if(!e.grid.hDiv.loading){if(q.shiftKey){a(e).jqGrid("prevCell",d,c)}else{a(e).jqGrid("nextCell",d,c)}}else{return false}}q.stopPropagation()});a(e).triggerHandler("jqGridAfterEditCell",[e.rows[d].id,m,o,d,c]);if(a.isFunction(e.p.afterEditCell)){e.p.afterEditCell.call(e,e.rows[d].id,m,o,d,c)}}else{if(parseInt(e.p.iCol,10)>=0&&parseInt(e.p.iRow,10)>=0){a(e.rows[e.p.iRow]).removeClass("selected-row "+k).find("td:eq("+e.p.iCol+")").removeClass("edit-cell "+j)}g.addClass("edit-cell "+j);a(e.rows[d]).addClass("selected-row "+k);o=g.html().replace(/\&#160\;/ig,"");a(e).triggerHandler("jqGridSelectCell",[e.rows[d].id,m,o,d,c]);if(a.isFunction(e.p.onSelectCell)){e.p.onSelectCell.call(e,e.rows[d].id,m,o,d,c)}}e.p.iCol=c;e.p.iRow=d})},saveCell:function(c,b){return this.each(function(){var d=this,n,m=a.jgrid.getRegional(this,"errors"),l=a.jgrid.getRegional(this,"edit");if(!d.grid||d.p.cellEdit!==true){return}if(d.p.savedRow.length>=1){n=0}else{n=null}if(n!==null){var h=a("td:eq("+b+")",d.rows[c]),A,B,i=d.p.colModel[b],q=i.name,r=a.jgrid.jqID(q),w=a(h).offset();switch(i.edittype){case"select":if(!i.editoptions.multiple){A=a("#"+c+"_"+r+" option:selected",d.rows[c]).val();B=a("#"+c+"_"+r+" option:selected",d.rows[c]).text()}else{var y=a("#"+c+"_"+r,d.rows[c]),z=[];A=a(y).val();if(A){A.join(",")}else{A=""}a("option:selected",y).each(function(e,p){z[e]=a(p).text()});B=z.join(",")}if(i.formatter){B=A}break;case"checkbox":var g=["Yes","No"];if(i.editoptions){g=i.editoptions.value.split(":")}A=a("#"+c+"_"+r,d.rows[c]).is(":checked")?g[0]:g[1];B=A;break;case"password":case"text":case"textarea":case"button":A=a("#"+c+"_"+r,d.rows[c]).val();B=A;break;case"custom":try{if(i.editoptions&&a.isFunction(i.editoptions.custom_value)){A=i.editoptions.custom_value.call(d,a(".customelement",h),"get");if(A===undefined){throw"e2"}else{B=A}}else{throw"e1"}}catch(k){if(k==="e1"){a.jgrid.info_dialog(m.errcap,"function 'custom_value' "+l.msg.nodefined,l.bClose,{styleUI:d.p.styleUI})}else{if(k==="e2"){a.jgrid.info_dialog(m.errcap,"function 'custom_value' "+l.msg.novalue,l.bClose,{styleUI:d.p.styleUI})}else{a.jgrid.info_dialog(m.errcap,k.message,l.bClose,{styleUI:d.p.styleUI})}}}break}if(B!==d.p.savedRow[n].v){var D=a(d).triggerHandler("jqGridBeforeSaveCell",[d.rows[c].id,q,A,c,b]);if(D){A=D;B=D}if(a.isFunction(d.p.beforeSaveCell)){var C=d.p.beforeSaveCell.call(d,d.rows[c].id,q,A,c,b);if(C){A=C;B=C}}var j=a.jgrid.checkValues.call(d,A,b),s=false;if(j[0]===true){var f=a(d).triggerHandler("jqGridBeforeSubmitCell",[d.rows[c].id,q,A,c,b])||{};if(a.isFunction(d.p.beforeSubmitCell)){f=d.p.beforeSubmitCell.call(d,d.rows[c].id,q,A,c,b);if(!f){f={}}}if(a("input.hasDatepicker",h).length>0){a("input.hasDatepicker",h).datepicker("hide")}if(d.p.cellsubmit==="remote"){if(d.p.cellurl){var x={};if(d.p.autoencode){A=a.jgrid.htmlEncode(A)}if(i.editoptions&&i.editoptions.NullIfEmpty&&A===""){A="null";s=true}x[q]=A;var o,t,u;u=d.p.prmNames;o=u.id;t=u.oper;x[o]=a.jgrid.stripPref(d.p.idPrefix,d.rows[c].id);x[t]=u.editoper;x=a.extend(f,x);a(d).jqGrid("progressBar",{method:"show",loadtype:d.p.loadui,htmlcontent:a.jgrid.getRegional(d,"defaults.savetext")});d.grid.hDiv.loading=true;a.ajax(a.extend({url:d.p.cellurl,data:a.isFunction(d.p.serializeCellData)?d.p.serializeCellData.call(d,x,q):x,type:"POST",complete:function(e,v){a(d).jqGrid("progressBar",{method:"hide",loadtype:d.p.loadui});d.grid.hDiv.loading=false;if(v==="success"){var p=a(d).triggerHandler("jqGridAfterSubmitCell",[d,e,x.id,q,A,c,b])||[true,""];if(p[0]===true&&a.isFunction(d.p.afterSubmitCell)){p=d.p.afterSubmitCell.call(d,e,x.id,q,A,c,b)}if(p[0]===true){if(s){A=""}a(h).empty();a(d).jqGrid("setCell",d.rows[c].id,b,B,false,false,true);a(h).addClass("dirty-cell");a(d.rows[c]).addClass("edited");a(d).triggerHandler("jqGridAfterSaveCell",[d.rows[c].id,q,A,c,b]);if(a.isFunction(d.p.afterSaveCell)){d.p.afterSaveCell.call(d,d.rows[c].id,q,A,c,b)}d.p.savedRow.splice(0,1)}else{a.jgrid.info_dialog(m.errcap,p[1],l.bClose,{styleUI:d.p.styleUI});if(d.p.restoreCellonFail){a(d).jqGrid("restoreCell",c,b)}}}},error:function(p,v,e){a("#lui_"+a.jgrid.jqID(d.p.id)).hide();d.grid.hDiv.loading=false;a(d).triggerHandler("jqGridErrorCell",[p,v,e]);if(a.isFunction(d.p.errorCell)){d.p.errorCell.call(d,p,v,e)}else{a.jgrid.info_dialog(m.errcap,p.status+" : "+p.statusText+"<br/>"+v,l.bClose,{styleUI:d.p.styleUI})}if(d.p.restoreCellonFail){a(d).jqGrid("restoreCell",c,b)}}},a.jgrid.ajaxOptions,d.p.ajaxCellOptions||{}))}else{try{a.jgrid.info_dialog(m.errcap,m.nourl,l.bClose,{styleUI:d.p.styleUI});if(d.p.restoreCellonFail){a(d).jqGrid("restoreCell",c,b)}}catch(k){}}}if(d.p.cellsubmit==="clientArray"){a(h).empty();a(d).jqGrid("setCell",d.rows[c].id,b,B,false,false,true);a(h).addClass("dirty-cell");a(d.rows[c]).addClass("edited");a(d).triggerHandler("jqGridAfterSaveCell",[d.rows[c].id,q,A,c,b]);if(a.isFunction(d.p.afterSaveCell)){d.p.afterSaveCell.call(d,d.rows[c].id,q,A,c,b)}d.p.savedRow.splice(0,1)}}else{try{window.setTimeout(function(){a.jgrid.info_dialog(m.errcap,A+" "+j[1],l.bClose,{styleUI:d.p.styleUI,top:w.top+40,left:w.left})},100);a(d).jqGrid("restoreCell",c,b)}catch(k){}}}else{a(d).jqGrid("restoreCell",c,b)}}window.setTimeout(function(){a("#"+a.jgrid.jqID(d.p.knv)).attr("tabindex","-1").focus()},0)})},restoreCell:function(c,b){return this.each(function(){var d=this,h;if(!d.grid||d.p.cellEdit!==true){return}if(d.p.savedRow.length>=1){h=0}else{h=null}if(h!==null){var f=a("td:eq("+b+")",d.rows[c]);if(a.isFunction(a.fn.datepicker)){try{a("input.hasDatepicker",f).datepicker("hide")}catch(g){}}a(f).empty().attr("tabindex","-1");a(d).jqGrid("setCell",d.rows[c].id,b,d.p.savedRow[h].v,false,false,true);a(d).triggerHandler("jqGridAfterRestoreCell",[d.rows[c].id,d.p.savedRow[h].v,c,b]);if(a.isFunction(d.p.afterRestoreCell)){d.p.afterRestoreCell.call(d,d.rows[c].id,d.p.savedRow[h].v,c,b)}d.p.savedRow.splice(0,1)}window.setTimeout(function(){a("#"+d.p.knv).attr("tabindex","-1").focus()},0)})},nextCell:function(c,b){return this.each(function(){var d=this,f=false,e;if(!d.grid||d.p.cellEdit!==true){return}for(e=b+1;e<d.p.colModel.length;e++){if(d.p.colModel[e].editable===true&&(!a.isFunction(d.p.isCellEditable)||d.p.isCellEditable.call(d,d.p.colModel[e].name,c,e))){f=e;break}}if(f!==false){a(d).jqGrid("editCell",c,f,true)}else{if(d.p.savedRow.length>0){a(d).jqGrid("saveCell",c,b)}}})},prevCell:function(c,b){return this.each(function(){var d=this,f=false,e;if(!d.grid||d.p.cellEdit!==true){return}for(e=b-1;e>=0;e--){if(d.p.colModel[e].editable===true&&(!a.isFunction(d.p.isCellEditable)||d.p.isCellEditable.call(d,d.p.colModel[e].name,c,e))){f=e;break}}if(f!==false){a(d).jqGrid("editCell",c,f,true)}else{if(d.p.savedRow.length>0){a(d).jqGrid("saveCell",c,b)}}})},GridNav:function(){return this.each(function(){var b=this;if(!b.grid||b.p.cellEdit!==true){return}b.p.knv=b.p.id+"_kn";var g=a("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+b.p.knv+"'></div></div>"),d,e;function f(k,j,r){if(r.substr(0,1)==="v"){var h=a(b.grid.bDiv)[0].clientHeight,q=a(b.grid.bDiv)[0].scrollTop,m=b.rows[k].offsetTop+b.rows[k].clientHeight,o=b.rows[k].offsetTop;if(r==="vd"){if(m>=h){a(b.grid.bDiv)[0].scrollTop=a(b.grid.bDiv)[0].scrollTop+b.rows[k].clientHeight}}if(r==="vu"){if(o<q){a(b.grid.bDiv)[0].scrollTop=a(b.grid.bDiv)[0].scrollTop-b.rows[k].clientHeight}}}if(r==="h"){var i=a(b.grid.bDiv)[0].clientWidth,p=a(b.grid.bDiv)[0].scrollLeft,l=b.rows[k].cells[j].offsetLeft+b.rows[k].cells[j].clientWidth,n=b.rows[k].cells[j].offsetLeft;if(l>=i+parseInt(p,10)){a(b.grid.bDiv)[0].scrollLeft=a(b.grid.bDiv)[0].scrollLeft+b.rows[k].cells[j].clientWidth}else{if(n<p){a(b.grid.bDiv)[0].scrollLeft=a(b.grid.bDiv)[0].scrollLeft-b.rows[k].cells[j].clientWidth}}}}function c(k,h){var l,j;if(h==="lft"){l=k+1;for(j=k;j>=0;j--){if(b.p.colModel[j].hidden!==true){l=j;break}}}if(h==="rgt"){l=k-1;for(j=k;j<b.p.colModel.length;j++){if(b.p.colModel[j].hidden!==true){l=j;break}}}return l}a(g).insertBefore(b.grid.cDiv);a("#"+b.p.knv).focus().keydown(function(h){e=h.keyCode;if(b.p.direction==="rtl"){if(e===37){e=39}else{if(e===39){e=37}}}switch(e){case 38:if(b.p.iRow-1>0){f(b.p.iRow-1,b.p.iCol,"vu");a(b).jqGrid("editCell",b.p.iRow-1,b.p.iCol,false)}break;case 40:if(b.p.iRow+1<=b.rows.length-1){f(b.p.iRow+1,b.p.iCol,"vd");a(b).jqGrid("editCell",b.p.iRow+1,b.p.iCol,false)}break;case 37:if(b.p.iCol-1>=0){d=c(b.p.iCol-1,"lft");f(b.p.iRow,d,"h");a(b).jqGrid("editCell",b.p.iRow,d,false)}break;case 39:if(b.p.iCol+1<=b.p.colModel.length-1){d=c(b.p.iCol+1,"rgt");f(b.p.iRow,d,"h");a(b).jqGrid("editCell",b.p.iRow,d,false)}break;case 13:if(parseInt(b.p.iCol,10)>=0&&parseInt(b.p.iRow,10)>=0){a(b).jqGrid("editCell",b.p.iRow,b.p.iCol,true)}break;default:return true}return false})})},getChangedCells:function(b){var c=[];if(!b){b="all"}this.each(function(){var d=this,e;if(!d.grid||d.p.cellEdit!==true){return}a(d.rows).each(function(f){var g={};if(a(this).hasClass("edited")){a("td",this).each(function(j){e=d.p.colModel[j].name;if(e!=="cb"&&e!=="subgrid"){if(b==="dirty"){if(a(this).hasClass("dirty-cell")){try{g[e]=a.unformat.call(d,this,{rowId:d.rows[f].id,colModel:d.p.colModel[j]},j)}catch(h){g[e]=a.jgrid.htmlDecode(a(this).html())}}}else{try{g[e]=a.unformat.call(d,this,{rowId:d.rows[f].id,colModel:d.p.colModel[j]},j)}catch(h){g[e]=a.jgrid.htmlDecode(a(this).html())}}}});g.id=this.id;c.push(g)}})});return c}})}));