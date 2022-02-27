import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  component : {
    backgroundColor : '#031B34',
    // #031B34;'#040C18',
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
    <React.Fragment>
    {/* <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
      <Link to="/" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h5">BookOfBlocks</Typography></Link>
      <Link to="/BlockchainHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">What is Blockchain</Typography></Link>
      <Link to="/BitcoinHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Bitcoin</Typography></Link>
      <Link to="/CryptoHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Crypto</Typography></Link>
      <Link to="/NftHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">NFT</Typography></Link>
      <Link to="/TokenomicsHomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Tokenomics</Typography></Link>
      <Link to="/Web3HomePage" style={{textDecoration : 'none', color:'inherit'}}><Typography variant="h6">Web 3.0</Typography></Link>

      </Toolbar>
    </AppBar> */}
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div class="gpt3__navbar-links_container">
          <p><a href="/">BookOfBlocks</a></p>
          <p><a href="/BlockchainHomePage">What is Blockchain</a></p>
          <p><a href="/BitcoinHomePage">Bitcoin</a></p>
          <p><a href="/CryptoHomePage">Crypto</a></p>
          <p><a href="/NftHomePage">NFT</a></p>
          <p><a href="/TokenomicsHomePage">Tokenomics</a></p>
          <p><a href="/Web3HomePage">Web 3.0</a></p>
          </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Navbar