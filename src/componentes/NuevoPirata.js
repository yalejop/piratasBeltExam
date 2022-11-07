import React, {useState} from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const NuevoPirata = () => {
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [tesoros, setTesoros] = useState(0);
    const [frase, setFrase] = useState("");
    const [posicion, setPosicion] = useState("");
    const [pierna, setPierna] = useState(true);
    const [parche, setParche] = useState(true);
    const [garfio, setGarfio] = useState(true);

    const [errors, setErrors] = useState({});

    const history = useHistory();

    const guardarPirata = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/piratas", {
            nombre,
            imagen,
            tesoros,
            frase, 
            posicion,
            pierna,
            parche,
            garfio
                })
            .then(res => history.push("/"))
            .catch(err => setErrors(err.response.data.errors))
    }


    return(
        <div className="container bg-warning">
            <div className="row mt-5">
                <div className="col">
                    <h1>Nuevo Pirata</h1>
                </div>
                <div className="col ml-5">
                    <Link to="/" className="btn btn-primary">Crew Board</Link>
                </div>
            </div>
            <form onSubmit={guardarPirata} className=".bg-light.bg-gradient">
                <div className="row mt-4">
                    <div className="col-6">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" value={nombre} onChange={e => setNombre(e.target.value)} className="form-control" />
                            {errors.nombre ? <span className="text-danger"> {errors.nombre.message}</span> :null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="imagen">URL de Imagen:</label>
                            <input type="text" id="imagen" name="imagen" value={imagen} onChange={e => setImagen(e.target.value)} className="form-control" />
                            {errors.imagen ? <span className="text-danger"> {errors.imagen.message}</span> :null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="tesoros"># of Treasure Chests:</label>
                            <input type="number" id="tesoros" name="tesoros" value={tesoros} onChange={e => setTesoros(e.target.value)} className="form-control" />
                            {errors.tesoros ? <span className="text-danger"> {errors.tesoros.message}</span> :null}
                        </div>
                        <div className="form-group">
                            <label htmlFor="frase">Pirate Catch Phrases:</label>
                            <input type="text" id="frase" name="frase" value={frase} onChange={e => setFrase(e.target.value)} className="form-control" />
                            {errors.frase ? <span className="text-danger"> {errors.frase.message}</span> :null}
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group pl-4">
                        <label className="mr-2">Search for:</label>
                            <select className="form-select mr-4" onChange={(e) => setPosicion(e.target.value)}>
                                <option value="">---Seleccione una opción: ---</option>
                                <option value="captain">Captain</option>
                                <option value="first-mate">First Mate</option>
                                <option value="quarter-master">Quarter Master</option>
                                <option value="boatswain">Boatswain</option>
                                <option value="powder-monkey">Powder Monkey</option>
                            </select>
                            {errors.posicion ? <span className="text-danger mb"> {errors.posicion.message}</span> :null}
                        </div>
                        <div className="form-group pl-5">
                            <input type="checkbox" className="form-check-input" id="pierna" name="pierna" checked={pierna} onChange={e => setPierna(e.target.checked)}/>
                            <label className="form-check-label" htmlFor="pierna">
                                Peg Leg
                            </label>
                        </div>
                        <div className="form-group pl-5">
                            <input type="checkbox" className="form-check-input" id="parche" name="parche" checked={parche} onChange={e => setParche(e.target.checked)}/>
                            <label className="form-check-label" htmlFor="parche">
                                Eye Patch
                            </label>
                        </div>
                        <div className="form-group pl-5">
                            <input type="checkbox" className="form-check-input" id="garfio" name="garfio" checked={garfio} onChange={e => setGarfio(e.target.checked)}/>
                            <label className="form-check-label" htmlFor="garfio">
                                Hook Hand
                            </label>
                        </div>
                        <input type="submit" className="btn btn-success ml-4 mt-5" value="Add Pirate" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NuevoPirata;