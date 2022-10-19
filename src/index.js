import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    // Route,
} from 'react-router-dom';

/*existing imports*/
import Home from './pages/Home'
import About from './pages/About'
import Error404 from './pages/Error404'
import ProductSheet from './pages/ProductSheet'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Styles from './styles/index'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/",
        element: <About />,
    },
    {
        path: "*",
        // element: <pages />,
        errorElement: <Error404 />,
    },
    {
        path: "/",
        element: <ProductSheet />,
    },
    // {
    //     path: "/",
    //     element: <Styles />,
    // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);


// ReactDOM.render(
//     <React.StrictMode>
//         <Router>
//             <Header />
//             <Switch>
//                 <Route exact path="/">
//                     <Home />
//                 </Route>
//                 <Route path="/survey/:questionNumber">
//                     <Survey />
//                 </Route>
//                 <Route path="/results">
//                     <Results />
//                 </Route>
//                 <Route path="/freelances">
//                     <Freelances />
//                 </Route>
//                 <Route>
//                     <Error />
//                 </Route>
//             </Switch>
//         </Router>
//     </React.StrictMode>,
//     document.getElementById('root')
// )