import "./components/div-productos.js"
import "./components/div-usuarios.js"
import "./api/render.js"


const modal = document.querySelector("#modal");
const mymodal = document.querySelector("#mymodal");

function openModal() {
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