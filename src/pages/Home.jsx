// import React from 'react';
import React from 'react';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Card from '../components/Card';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main className='container__home'>
        <Banner />
        <Card />
      </main>
      <Footer />
    </div>
  );
};

export default Home;



// function Home() {
//   const [houses, setHouses] = useState([])

//   useEffect(() => {
//     console.log(logements)
//     setHouses(logements)
//   }, [])

//   return (
//     <div>
//       <header>
//         <Header />
//       </header>
//       <main>
//         <Banner />
//         <div className='home-all-cards'>
//           {houses.map((house, id) => (
//             <div className="card" key={id}>
//               <Link className="card__link" to={`/logement/${house.id}`}>
//                 <Card cover={house.cover} title={house.title} />
//               </Link>
//             </div >
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }



// export default Home;

