import "./components/div-productos.js"
import "./components/div-usuarios.js"
import "./api/render.js"



var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('click',  ()=> {
  myInput.focus()
})


/* function openModal() {
    mymodal.classList.add('show');
    mymodal.style.display = 'block';
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    document.body.appendChild(backdrop);
  }

  function closeModal() {
    mymodal.classList.remove('show');
    mymodal.style.display = 'none';
    if (backdrop) {
      document.body.removeChild(backdrop);
    }
  }

  modal.addEventListener("click", openModal);
  cerrarmodalx.addEventListener("click", closeModal);
  cerrarmodal.addEventListener("click", closeModal);
 */
/* 
modal.addEventListener("click",()=>{

    mymodal.classList.add('show');
    mymodal.style.display = 'block';
    // Agregar una clase al fondo para que se oscurezca al abrir el modal
    var backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop fade show';
    document.body.appendChild(backdrop);
  });
 */