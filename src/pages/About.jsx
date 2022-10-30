import React from 'react';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Header from '../components/Header';



function About() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main className='container__about'>
                <Banner />
                <div className="home-all-collapse">
                    <Collapse label="Fiabilité" />
                    <Collapse label="Respect">
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </p>
                    </Collapse>
                    <Collapse label="Service" />
                    <Collapse label="Responsabilité" />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default About;