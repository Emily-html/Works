const urlp=new URLSearchParams(window.location.search);
const olink=urlp.get('olink');
function f1(){
    document.getElementById("lin").href=olink;
}
function form(){
    document.getElementById('form1').style.display='block';
}