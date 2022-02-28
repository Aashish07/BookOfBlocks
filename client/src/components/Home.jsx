import React from 'react'
import { makeStyles, Box, Typography, Button } from '@material-ui/core';
import ai2 from '../constants/images/ai2.png';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    maindiv : {
        display: 'flex',
        flexDirection: 'row',
        paddingTop : 50,
        paddingLeft : 4,
        paddingRight : 6,
        backgroundColor : '#040C18',
    },
    header_content :{
        justify_content: 'center',
        align_items: 'flex-start',
        margin_right: 20,
        paddingTop: 300,
        color : '#81AFDD',
        lineHeight : 1
    },
    header_contentFirst : {
        fontweight: 400,
        fontsize: 60,
        lineheight: 28,
        margin_top: 11.5,
    },
    image : {
        width : '100%',
        height : '100vh',
        flex: 1,
        display: 'flex',
        justify_content: 'center',
        align_items: 'center'
    },
    explore : {
        margin : 2,
        background : '#1B09CF',
        color : 'white',
        width : '15%'
    },
    link : {
        textDecoration : 'none',
        color : 'inherit',
        paddingRight : 100
    }
})

const Home = () => {
    const classes = useStyle();
    return (
        <React.Fragment>
            <Box className={classes.maindiv}>
                <Box className={classes.header_content}>
                    <Typography variant="h1" className={classes.header_contentFirst}>Let&apos;s head to the basics of Blockchains</Typography>
                    <Typography variant="h5"className={classes.header_contentFirst}>Blockchain is what lies under the hood that will revolutionize how we interact over the Internet. With the boom rally of Bitcoin, It has simply been confused by millenials as Blockchain. But what comes first Bitcoin or Blockchain ? Why it is going to create a huge impact on our lives, how we operate ? How it operates ? Let&apos;s go and understand</Typography>
                    <Link to="/BlockchainHomePage" className={classes.link}><Button variant="contained" className={classes.explore}>explore</Button></Link>
                </Box>
                <Box className={classes.image}>
                    <img src={ai2} alt="blockchain"/>
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Home;