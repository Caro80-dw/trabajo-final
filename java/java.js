const cambiarF=document.getElementById('cambiarF');
const body=document.body;


body.classList.add('tema-claro');

cambiarF.addEventListener('click',function(){
let icono=cambiarF.querySelector('i');
if (body.classList.contains('tema-claro')){
  body.classList.remove('tema-claro');
  body.classList.add('tema-oscuro');
  icono.className="bi bi-sun";
  cambiarF.innerHTML='<i class="bi bi-sun"></i>';
}else{
    body.classList.remove('tema-oscuro');
    body.classList.add('tema-claro');
    icono.className="bi bi-moon-stars-fill"
    cambiarF.innerHTM='<i class="bi bi-moon-stars-fill"></i>'
}});
/*

let btn=document.getElementById('boton-menu');
let menu=document.getElementById('menu');

cambiarF.addEventListener('click', function(){
menu.classList.toggle('menu');
menu.classList.toggle
let lista=document.querySelectorAll('ul');  //Agrega todas las etiquetas  del ul

})*/

let boton=document.getElementById('boton-menu');
let menu=document.getElementById('menu');
let menuItem=document.getElementById('menu-item');
let submenu=document.getElementById('submenu');

boton.addEventListener('click',function(){
menu.classList.toggle('menu');
menu.classList.toggle('quitar');

})

menuItem.addEventListener('mouseenter',function(){
submenu.classList.toggle('menu');

});

menuItem.addEventListener('mouseleave',function(){
submenu.classList.add('menu');


});

const formulario=document.getElementById('mi-formulario');
const nombre=document.getElementById('nombre');
const error=document.getElementById('error');

formulario.addEventListener('submit',function(evento){
    evento.preventDefault();
    if(nombre.value===''){
        error.innerText="Por favor ingrese un nombre";

    }
    else{
        error.innerText='Sus datos fueron enviados'
    }
});