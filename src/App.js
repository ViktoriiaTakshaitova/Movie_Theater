import React, { Component } from 'react';
import './resources/styles.css';
import {Element} from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import Contact from './components/contact';
import TopButton from './components/backtop';

class App extends Component {
  render(){
    return (
      <div className="App" style={{height:"1500px",background:'cornflowerblue'}}>
      <Header/>

      <Element name="featured">
      <Featured/>
      </Element>

      <Element name="venuenfo">
      <VunueNfo/>
      </Element>

      <Element name="highlights">
      <Highlight/>
      </Element>

      <Element name="pricing">
      <Pricing/>
      </Element>

      <Element name="location">
      <Location/>
      </Element>

      <Element name="contact">
      <Contact/>
      </Element>

      <Element name="backtop">
      <TopButton/>
      </Element>
      <Footer/>
      
      </div>
    );
  }
};

export default App;











// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
