import React from 'react';
import { useParams } from "react-router-dom";
import Collapse from '../components/Collapse';
import Header from '../components/Header';
import Slideshow from '../components/Slideshow';
import logements from '../ressources/logements.json';
import Rate from '../components/Rate';
import Footer from '../components/Footer';


function ProductSheet() {
    const params = useParams();
    console.log(params)
    console.log(logements.find(logement => logement.id === params.id))

    const logement = logements.find(logement => logement.id === params.id)

    // const equipement = logement.equipments
    // let textEquipement = equipement.join('\n')
    // console.log(equipement) /* span ul ou map */

    // const tags = logement.tags

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
                            {logement.tags.map((tag) => {
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
                        {logement.equipments.map((texte, e) => {
                            return (
                                // <p style={{ whiteSpace: "pre-wrap" }}>{textEquipement}</p>
                                <p key={e}>{texte}</p>
                            )
                        })}
                    </Collapse>
                </section>
            </main >
            <Footer />
        </div >
    );
};

export default ProductSheet;