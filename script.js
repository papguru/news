function addLink(){for(var e=window.getSelection(),n=document.createElement("div"),o=0;o<e.rangeCount;++o)n.appendChild(e.getRangeAt(o).cloneContents());var t=n.innerHTML+"<br/><br/>Read more:   <br/>"+window.location.href,d=document.createElement("div");d.style.position="absolute",d.style.left="-99999px",document.body.appendChild(d),d.innerHTML=t,e.selectAllChildren(d),window.setTimeout(function(){document.body.removeChild(d)},0)}document.oncopy=addLink;
var gAutoPrint=!0;function processPrint(){if(null!=document.getElementById){var n="<HTML>\n<HEAD>\n";if(null!=document.getElementsByTagName){var e=document.getElementsByTagName("head");e.length>0&&(n+=e[0].innerHTML)}n+="\n</HEAD>\n<BODY>\n";var t=document.getElementById("printMe");if(null==t)return void alert("Error, no contents.");n+=t.innerHTML,n+="\n</BODY>\n</HTML>";var r=window.open("","processPrint");r.document.open(),r.document.write(n),r.document.close(),gAutoPrint&&r.print()}else alert("Browser not supported.")}
