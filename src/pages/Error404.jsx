// import { useRouteError } from "react-router-dom";
// import Header from "../components/Header";
import { Link } from 'react-router-dom';
import Header from "../components/Header";

function Error404() {
    return (
        <div>
            <Header />
            <div className='error-page'>
                <h1 className="error-page__title">404</h1>
                <p className=" error-page__content">Oups! La page que vous avez demandez n'existe pas.</p>
                <Link className='error-page__link' to={`/`}>Retourner sur la page d'accueil</Link>
            </div>
        </div>

    );
};

export default Error404;

// function ErrorPage() {
//     const error = useRouteError();
//     console.error(error);

//     return (
//         <div id="error-page">
//             <Header />
//             <h1>404</h1>
//             <p>Oups! La page que vous avez demandez n'existe pas. </p>
//             <p>
//                 <i>{error.statusText || error.message}</i>
//             </p>
//             {/* <link rel="stylesheet" href="#" />Retourner sur la page d'accueil */}
//         </div>
//     );
// }



// export default ErrorPage;

