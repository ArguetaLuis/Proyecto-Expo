const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  
  header.addEventListener('click', () => {
    content.classList.toggle('show');
  });
});

const selectOpcion= document.getElementById("selectorLicencias");

const PreciolicenciaSencilla =100;
const PreciolicenciaPremium =450;

const selectorLicencias = document.getElementById('selectorLicencia');
const descripcionLicencia= document.getElementById('descripcion');
const comprarBtn = document.getElementById('comprarBtn');
let precioLicencia = document.getElementById('precio');

selectorLicencias.addEventListener('change',function(){
  if (selectorLicencias.value === 'sencilla' ){
    descripcionLicencia.textContent = 'Licencia Sencilla: Acceso a funciones básicas.';
    precioLicencia.textContent = `$${PreciolicenciaSencilla}`;
  }
  else if (selectorLicencias.value === 'premium'){
    descripcionLicencia.textContent = 'Licencia Premium: Acceso completo a todas las características y soporte prioritario.';
    precioLicencia.textContent = `$${PreciolicenciaPremium}`;
  } 
  else {
    descripcionLicencia.textContent = 'selecione una Licencia';
    precioLicencia.textContent = `$`;
  }
});

comprarBtn.addEventListener('click', function(){
  Swal.fire({
    icon: 'question',
    title: 'Confirmar Compra',
    Text: '¿Estás seguro de comprar la licencia?',
    showCancelButton: true,
    confirmButtonText: 'Sí, Comprar',
    cancelButtonText: 'Cancelar',
  }).then((result)=>{
    if(result.isConfirmed){
      Swal.fire('¡Licencia comprada exitosamente!','','success');
    }
  });
});