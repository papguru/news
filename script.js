function addLink(){for(var e=window.getSelection(),n=document.createElement("div"),o=0;o<e.rangeCount;++o)n.appendChild(e.getRangeAt(o).cloneContents());var t=n.innerHTML+"<br/><br/>Read more:   <br/>"+window.location.href,d=document.createElement("div");d.style.position="absolute",d.style.left="-99999px",document.body.appendChild(d),d.innerHTML=t,e.selectAllChildren(d),window.setTimeout(function(){document.body.removeChild(d)},0)}document.oncopy=addLink;

function codespeedy(){
var print_div = document.getElementById("printMe");
var print_area = window.open();
print_area.document.write(print_div.innerHTML);
print_area.document.close();
print_area.focus();
print_area.print();
print_area.close();
		}
