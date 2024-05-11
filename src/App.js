import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Nav';
import Footer from  './components/Footer';
import Main from './components/main';
import 'App.css';

function App() {
  return (
    <ChakraProvider>
    <React.Fragment>
      <Router>
        <Navbar/>
        <Main />
        <Footer/>
      </Router>
    </React.Fragment>
    </ChakraProvider>
  );
}

export default App;
