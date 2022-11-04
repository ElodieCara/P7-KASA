import React from 'react';
// import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Collapse from '../components/Collapse';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import logements from '../ressources/logements.json';
import Rate from '../components/Rate';
import Footer from '../components/Footer';
// import Tags from '../components/Tags';

function ProductSheet() {
    const params = useParams();
    console.log(params)
    console.log(logements.find(logement => logement.id === params.id))

    const logement = logements.find(logement => logement.id === params.id)

    const equipement = logement.equipments
    let textEquipement = equipement.join('\n')

    const tags = logement.tags

    return (
        < div >
            <header>
                <Header />
                <Slideshow images={logement.pictures} />
            </header>
            <main className='container--main'>
                <section className='logement'>
                    <div className="logement__presentation">
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                        <div className="home-all-taglines">
                            {tags.map((tag) => {
                                return (
                                    <span className='tagline' key={`${tag}`} >
                                        {tag}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <article className='logement__block'>
                        <div className="logement__block__host">
                            <img src={logement.host.picture} alt="hôte" height={80} width={80} />
                            <span>{logement.host.name}</span>
                        </div>
                        <div className="logement__block__stars">
                            <Rate scoreValue={logement.rating} />
                        </div>
                    </article>
                </section>
                <section className="home-all-collapse--productsheet">
                    <Collapse label="Description">
                        <p>{logement.description}</p>
                    </Collapse>
                    <Collapse label="Equipements">
                        <p style={{ whiteSpace: "pre-wrap" }}>{textEquipement}</p>
                    </Collapse>
                </section>
            </main >
            <Footer />
        </div >
    );
};

export default ProductSheet;