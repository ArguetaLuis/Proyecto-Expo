document.addEventListener('DOMContentLoaded', function(){
    const contenedorMenu=document.getElementById('menuContenedor');
    const menuHtml= generarMenuPages();

    contenedorMenu.innerHTML=menuHtml;
})

document.addEventListener('DOMContentLoaded', function(){
    const contenedorMenu=document.getElementById('footerContenedor');
    const menuHtml= generarFooterPages();

    contenedorMenu.innerHTML=menuHtml;
})