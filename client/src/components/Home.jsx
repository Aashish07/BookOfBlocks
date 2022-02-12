import React from 'react'
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import a12 from '../constants/images/ai2.png';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    image : {
        background : `url(${a12})`,
        width : '100%',
        height : '100vh',
        // display : 'flex',
        // flexDirection : 'column',
        // justifyContent : 'left',
        '& :first-child': {
            fontSize : 66,
            color : '#81AFDD',
            lineHeight : 1
        },
        '& :last-child': {
            fontSize : 30,
            color : '#81AFDD'
        }
    },
    explore : {
        margin : 2,
        background : '#1B09CF',
        color : 'white',
        width : '15%'
    },
    link : {
        textDecoration : 'none',
        color : 'inherit'
    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <React.Fragment>
            <Box className={classes.image} style={{backgroundColor: '#040C18'}}>
                <Typography>Let's head to the basics of Blockchain</Typography>
                <Typography>Blockchain is what lies under the hood that will revolutionize how we interact over the Internet. With the boom rally of Bitcoin, It has simply been confused by millenials as Blockchain. But what comes first Bitcoin or Blockchain ? Why it is going to create a huge impact on our lives, how we operate ? How it operates ? Let's go and understand</Typography>
            </Box>
            <Link to="/BlockchainHomePage" className={classes.link}><Button variant="contained" className={classes.explore}>explore</Button></Link>
        </React.Fragment>
    )
}

export default Home;