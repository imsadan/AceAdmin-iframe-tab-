(function(a){if(typeof define==="function"&&define.amd){define(["jquery","../grid.base"],a)}else{a(jQuery)}}(function(a){a.jgrid=a.jgrid||{};if(!a.jgrid.hasOwnProperty("regional")){a.jgrid.regional=[]}a.jgrid.regional.en={defaults:{recordtext:"Shfaq {0} - {1}/{2}",emptyrecords:"Nuk ka rreshta për të shfaqur",loadtext:"Duke u ngarkuar...",savetext:"Duke ruajtur...",pgtext:"Faqja {0}/{1}",pgfirst:"Faqja e parë",pglast:"Faqja e fundit",pgnext:"Faqja tjetër",pgprev:"Faqja mëparshme",pgrecs:"Rreshta për faqe",showhide:"Shpalos ose mbyll tabelën",pagerCaption:"Tabela::Kruskoti i faqes",pageText:"Faqja:",recordPage:"Rreshta për faqe",nomorerecs:"Nuk ka rreshta të tjerë...",scrollPullup:"Tërhiq për lart për të tjerë...",scrollPulldown:"Tërqiq për poshtë për rifreskim...",scrollRefresh:"Lësho për rifreskim..."},search:{caption:"Kërko...",Find:"Gjej",Reset:"Pastro",odata:[{oper:"eq",text:"baraz"},{oper:"ne",text:"jo baraz"},{oper:"lt",text:"me e vogel"},{oper:"le",text:"me e vogel ose baraz"},{oper:"gt",text:"me e madhe"},{oper:"ge",text:"me e madhe ose baraz"},{oper:"bw",text:"fillon me"},{oper:"bn",text:"nuk fillon me"},{oper:"in",text:"brenda"},{oper:"ni",text:"jo brenda"},{oper:"ew",text:"mbaron me"},{oper:"en",text:"nuk mbaron me"},{oper:"cn",text:"permban"},{oper:"nc",text:"nuk permban"},{oper:"nu",text:"eshte bosh"},{oper:"nn",text:"nuk eshte bosh"}],groupOps:[{op:"AND",text:"te gjithe"},{op:"OR",text:"cfaredo"}],operandTitle:"Kliko per te zgjedhur veprimin.",resetTitle:"Fshi vlerat e kerkimit"},edit:{addCaption:"Shto rresht",editCaption:"Fshi rresht",bSubmit:"Vendos",bCancel:"Anullo",bClose:"Mbyll",saveData:"Te dhenat jane ndryshuar! Deshironi ti ruani ndryshimet?",bYes:"Po",bNo:"Jo",bExit:"Anullo",msg:{required:"Kjo fushe eshte e detyrueshme",number:"Ju lutem, vendosni nje numer te vlefshem",minValue:"vlera duhet te jete me e madhe ose e njejte me ",maxValue:"vlera duhet te jete me e vogel ose e njejte me",email:"nuk eshte adrese poste elektronike e vlefshme",integer:"Ju lutem, vendosni nje numer te plote te vlefshem",date:"Ju lutem, vendosni nje date te vlefshme",url:"nuk eshte URL e vlefshme. Nevojitet prefiksi ('http://' ose 'https://')",nodefined:" nuk eshte percaktuar!",novalue:" vlera si pergjigje eshte e detyreshme!",customarray:"Funksioni i personalizuar duhet te ktheje nje array!",customfcheck:"unksioni i personalizuar duhet te egzistoje ne rast kontrolli te personalizuar!"}},view:{caption:"Shfaq Rreshtin",bClose:"Mbyll"},del:{caption:"Fshi",msg:"Deshironi te fshini rreshtin/rreshtat e zgjedhur?",bSubmit:"Fshi",bCancel:"Anullo"},nav:{edittext:"",edittitle:"Modifiko rreshtin e zgjedhur",addtext:"",addtitle:"Shto rresht te ri",deltext:"",deltitle:"Fshi rreshtin e zgjedhur",searchtext:"",searchtitle:"Gjej rreshtat",refreshtext:"",refreshtitle:"Ringarko listen",alertcap:"Paralajmerim",alerttext:"Ju lutem, zgjidh nje rresht",viewtext:"",viewtitle:"Shfaq rreshtin e zgjedhur",savetext:"",savetitle:"Ruaj rreshtin",canceltext:"",canceltitle:"Anullo modifikim rreshti",selectcaption:"Veprime..."},col:{caption:"Zgjidh kolona",bSubmit:"Ok",bCancel:"Anullo"},errors:{errcap:"Gabim",nourl:"Nuk eshte percaktuar asnje URL",norecords:"Nuk ka rreshta per perpunim",model:"Gjatesia e emrit te kolones <> modeli i kolones!"},formatter:{integer:{thousandsSeparator:",",defaultValue:"0"},number:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,defaultValue:"0.00"},currency:{decimalSeparator:".",thousandsSeparator:",",decimalPlaces:2,prefix:"",suffix:"",defaultValue:"0.00"},date:{dayNames:["Dje","Hën","Mar","Mër","Enj","Pre","Sht","Djelë","Hënë","Martë","Mërkurë","Enjte","Premte","Shtunë"],monthNames:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj","Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"],AmPm:["am","pm","AM","PM"],S:function(b){return b<11||b>13?["st","nd","rd","th"][Math.min((b-1)%10,3)]:"th"},srcformat:"Y-m-d",newformat:"n/j/Y",parseRe:/[#%\\\/:_;.,\t\s-]/,masks:{ISO8601Long:"Y-m-d H:i:s",ISO8601Short:"Y-m-d",ShortDate:"n/j/Y",LongDate:"l, F d, Y",FullDateTime:"l, F d, Y g:i:s A",MonthDay:"F d",ShortTime:"g:i A",LongTime:"g:i:s A",SortableDateTime:"Y-m-d\\TH:i:s",UniversalSortableDateTime:"Y-m-d H:i:sO",YearMonth:"F, Y"},reformatAfterEdit:false,userLocalTime:false},baseLinkUrl:"",showAction:"",target:"",checkbox:{disabled:true},idName:"id"}}}));