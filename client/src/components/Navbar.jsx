import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  component : {
    backgroundColor : '#040C18',
    color: 'white'
  },
  container : {
    justifyContent : 'left',
    fontSize : 30,
    '& > *':{
      padding : 20
    }
  }
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
      <Link to="/" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h5">BookOfBlocks</Typography></Link>
      <Link to="/BlockchainHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">What is Blockchain</Typography></Link>
      <Link to="/BitcoinHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Bitcoin</Typography></Link>
      <Link to="/CryptoHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Crypto</Typography></Link>
      <Link to="/NftHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">NFT</Typography></Link>
      <Link to="/TokenomicsHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Tokenomics</Typography></Link>
      <Link to="/Web3HomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Web 3.0</Typography></Link>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar