import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import logements from '../ressources/logements.json';


function ProductSheet() {
    const params = useParams();
    console.log(params)
    console.log(logements.find(logement => logement.id === params.id))

    const logement = logements.find(logement => logement.id === params.id)

    return (
        < div >
            <Header />
            <Slideshow images={logement.pictures} />

        </div >
    );
};

export default ProductSheet;