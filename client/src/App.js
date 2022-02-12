import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import BlockchainHomePage from './components/BlockchainHomePage';
import BitcoinHomePage from './components/BitcoinHomePage';
import CryptoHomePage from './components/CryptoHomePage';
import NftHomePage from './components/NftHomePage';
import TokenomicsHomePage from './components/TokenomicsHomePage';
import Web3HomePage from './components/Web3HomePage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Box style={{marginTop: 72, width:'100%'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BlockchainHomePage" element={<BlockchainHomePage />} />
            <Route path="/BitcoinHomePage" element={<BitcoinHomePage />} />
            <Route path="/CryptoHomePage" element={<CryptoHomePage />} />
            <Route path="/NftHomePage" element={<NftHomePage />} />
            <Route path="/TokenomicsHomePage" element={<TokenomicsHomePage />} />
            <Route path="/Web3HomePage" element={<Web3HomePage />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
