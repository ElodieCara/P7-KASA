import React from 'react';
import Banner from '../components/Banner';
// import Card from '../components/Card';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

function Home() {
  return (
    <div>
      <header className='header'>
        <Logo />
        <Navigation />
      </header>
      <div className='body'>
        <Banner />
        {/* <Card /> */}
      </div>
    </div>
  );

};

export default Home;

// import React from 'react';
// import Banner from '../components/Banner';
// import Card from '../components/Cards';
// import Navigation from '../components/Navigation';

// const Home = () => {
//   return (
//     <div>
//       <Banner />
//       <Navigation />
//       <Card />
//     </div>
//   );
// };

// export default Home;

// // function Home() {
// //   return <div style={{
// //     width: '1440px',
// //     height: '1024px',
// //     Top: '-183px',
// //     left: '-543px',
// //     background: '#FFFFFF',
// //   }}>

// //   </div>
// // }

// // export default Home