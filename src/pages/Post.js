import React, {useState} from 'react'

function AppB() {
    const [mensaje, setMensaje] = useState(false);
    const cambiarEstado = (val) => setMensaje(val)
return (
    <div className='AppB'>{
mensaje ? <p>ACTIVADO</p>: <p>DESACTIVADO</p>
    }
    <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-dark" onClick={()=>cambiarEstado(!mensaje)}>
        ACTIVAR</button>
        <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-dark" onClick={()=>cambiarEstado(!mensaje)}>
        DESACTIVAR</button>
    </div>
    </div>
    </div>
);

}

export default AppB