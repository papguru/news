function addLink(){for(var e=window.getSelection(),n=document.createElement("div"),o=0;o<e.rangeCount;++o)n.appendChild(e.getRangeAt(o).cloneContents());var t=n.innerHTML+"<br/><br/>Read more:   <br/>"+window.location.href,d=document.createElement("div");d.style.position="absolute",d.style.left="-99999px",document.body.appendChild(d),d.innerHTML=t,e.selectAllChildren(d),window.setTimeout(function(){document.body.removeChild(d)},0)}document.oncopy=addLink;
function printDiv(lyrics) {
     var printContents = document.getElementById(printme).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}
