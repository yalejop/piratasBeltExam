import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const TodosPiratas = () => {

    const [piratas, setPiratas] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas")
            .then(res => setPiratas(res.data))
            .catch(err => console.log(err));
    }, [])

    const borrarPirata = (id) => {
        axios.delete("http://localhost:8000/api/piratas/"+id)
            .then(res => {
                //Actualizar la lista de autores por medio de filter
                let nuevaLista = piratas.filter(pirata => pirata._id !== id);
                setPiratas(nuevaLista);
            })
    }


    return (
        <div className="container bg-warning">
            <div className="row">
                <div className="col-6">
                    <h1>Pirate Crew</h1>
                </div>
                <div className="col-6">
                    <Link to="/new" className="btn btn-success mt-2">Add Pirate</Link>
                </div>
            </div>
            <div>
                {
                    piratas.map((pirata, index) => (
                        <div className="card mb-3" style={{maxWidth: "1000px"}}>
                            <div className="row g-0" key={index}>
                                <div className="col-md-6">
                                    <img src={pirata.imagen} alt="pirata" className="img-fluid rounded-start"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <h1 className="card-title">{pirata.nombre}</h1>
                                        <Link className="btn btn-primary m-4" to={`/pirata/${pirata._id}`}>View Pirate</Link>
                                        <button className="btn btn-danger" onClick={() => borrarPirata(pirata._id)}>Walk the Plank</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodosPiratas;