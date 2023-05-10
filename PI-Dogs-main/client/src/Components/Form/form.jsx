import React, { useState } from 'react';

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [age, setAge] = useState('');
    const [mensaje, setMensaje] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        // Enviar datos del formulario a un servidor
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
            </label><br /><br />
            <label>
                Age:
                <input type="age" value={age} onChange={e => setAge(e.target.value)} />
            </label><br /><br />
            <label>
                Mensaje:
                <textarea value={mensaje} onChange={e => setMensaje(e.target.value)} />
            </label><br /><br />
            <input type="submit" value="Enviar" />
        </form>
    );
}

export default Formulario;

// import React from 'react';
// import Formulario from './Formulario';

// function App() {
//   return (
//     <div>
//       <h1>Formulario de contacto</h1>
//       <Formulario />
//     </div>
//   );
// }

// export default App; 