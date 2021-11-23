import React, {useState} from 'react';
import PropTypes from 'prop-types';



const Formulario = ({busqueda, guardarbusqueda, guardarConsultar}) => {
    
    // state error
    const [error, guardarError] = useState(false);

    // destruction ciudad , pais
    const {ciudad, pais} = busqueda;

    // funcion que coloca los elementos en el state
    const handleChange = e => {
        // actualizar el state
        guardarbusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    /// Submit
    const handleSubmit = e => {
        e.preventDefault();

        // validar
        if(ciudad.trim() === '' || pais.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarConsultar(true);


    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error? <p className="red darken-4 error">Todos los campos son obligatorios</p> : null}
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

<div className="input-field col s12">
    <select
     name="pais"
     id="pais"
     value={pais}
     onChange={handleChange}>
        <option value="">-- Seleccione un país --</option>
        <option value="US">Estados Unidos</option>
        <option value="MX">México</option>
        <option value="AR">Argentina</option>
        <option value="CO">Colombia</option>
        <option value="CR">Costa Rica</option>
        <option value="ES">España</option>
        <option value="PE">Perú</option>
    </select>
    <label htmlFor="pais">País: </label>

</div>
        <div className="input-field col s12">
            <button
            type="submit"
            className="waves-effect waves-light btn-large btn-block yellow accent-4 col s12"
            >Buscar Clima</button>
        </div>
        </form>

    );
}

Formulario.propTypes = {
    busqueda : PropTypes.object.isRequired,
    guardarbusqueda : PropTypes.func.isRequired,
    guardarConsultar : PropTypes.func.isRequired
}
export default Formulario;