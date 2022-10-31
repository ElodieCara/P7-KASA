import React from 'react';
import { useParams } from "react-router-dom";
import Collapse from '../components/Collapse';
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
            <header>
                <Header />
                <Slideshow images={logement.pictures} />
            </header>
            <main>
                <section>
                    <div className="container__presentation-logement">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                        <div className="tagline">
                            <li></li>
                            <li></li>
                            <li></li>
                        </div>
                        <div className="star">
                            <i></i><i></i><i></i><i></i><i></i>
                        </div>
                    </div>
                </section>
                <section className="home-all-collapse--productsheet">
                    <Collapse label="Description">
                        <p>Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants.
                            Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo
                            et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied). </p>
                    </Collapse>
                    <Collapse label="Equipements">
                        <p>Climatisation <br />
                            Wi-Fi <br />
                            Cuisine <br />
                            Espace de travail <br />
                            Fer à repasser <br />
                            Sèche-cheveux <br />
                            Cintres </p>
                    </Collapse>
                </section>
            </main >

        </div >
    );
};

export default ProductSheet;