import React, {useEffect, useState } from "react";
import {Link,useParams} from 'react-router-dom';
import axios from 'axios';

const Pirata = () => {
    const {id} = useParams();
    const [piratas, setPiratas] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/piratas/"+id)
            .then(res => {
                setPiratas(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    return(
        <div className="container bg-warning p-3">
            <div className="row ml-5">
                <h1 className="justify-content-center">{piratas.nombre}</h1>
            </div>
            <div className="justify-content 
            
            row">
                <div className="col-md-6">
                    <img src={piratas.imagen} alt="pirata" className="img-fluid"/>
                    <p className="fs-1 w-50">{piratas.frase}</p>
                </div>
                <div className="col-md-6 card">
                    <h1>About</h1>
                    <p>Position: {piratas.posicion}</p>
                    <p>Treasures : {piratas.tesoros}</p>
                    <p>Peg Leg: {piratas.pierna ? <span className="bi bi-check text-success">YES</span> : <span className="bi bi-x text-danger">NO</span>}</p>
                    <p>Eye Patch: {piratas.parche ? <span className="bi bi-check text-success">YES</span> : <span className="bi bi-x text-danger">NO</span>}</p>
                    <p>Hook Hand: {piratas.gancho ? <span className="bi bi-check text-success">YES</span> : <span className="bi bi-x text-danger">NO</span>}</p>
                </div>
            </div>
            <Link to="/" className="btn btn-success">Crew Board</Link>
        </div>
    )

}

export default Pirata;
