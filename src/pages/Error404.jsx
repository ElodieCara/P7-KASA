import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from '../components/Footer';

function Error404() {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <div className='error-page'>
                    <h1 className="error-page__title">404</h1>
                    <p className=" error-page__content">Oups! La page que vous avez demandez n'existe pas.</p>
                    <Link className='error-page__link' to={`/`}>Retourner sur la page d'accueil</Link>
                </div>
            </main>
            <Footer />
        </div>

    );
};

export default Error404;



