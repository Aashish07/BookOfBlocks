import React from 'react'
import { makeStyles, Typography, Box } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons'
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    heading : {

    }
});

const Article = () => {
    const classes = useStyle();
  return (
    <Box>
        <Box className='tar'>
            <Link to="/update"><Edit className={classes.icon} color="primary"/></Link>
            <Delete className={classes.icon} color="error"/>
        </Box>
        <Typography className={classes.heading}>Title of the Blog</Typography>
        <Box className={classes.subHeading} >
            <Typography>Author : <span style={{fontWeight:600}}>What is Blockchain</span></Typography>
            <Typography style={{marginLeft:'auto'}}>12 Feb 2022</Typography>
        </Box>
        <Typography>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum eveniet, dolorum commodi quidem sint autem, porro et distinctio itaque est ex temporibus mollitia consequatur omnis quos maiores? Maxime, quam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores earum eveniet, dolorum commodi quidem sint autem, porro e</Typography>
    </Box>
  )
}

export default Article;