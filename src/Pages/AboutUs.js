import React from 'react';
// ================== Components  ===================
import {Grid, makeStyles, Typography} from '@material-ui/core'
import CardBio from '../Components/CardBio';
import {bios} from "../Assets/bios";
// ====================Translations Imports===========
import { useTranslation } from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  AboutUs: {
    marginTop: 70,
    width: '100%',
    color: 'white',
    overflowY:'auto',
    overflowX:'hidden',
    padding:15,
    [theme.breakpoints.up('xl')]: {
      marginTop:110
    },
    '&::-webkit-scrollbar': {
      width: '0.4em',
      height:'0.4em'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px #181818'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#1C1C1C',
    },  
  },
  title:{
    marginTop: 5,
    fontFamily: '"Binaria", sans-serif',
    fontSize: 30,
    color: '#D8ED06',
    marginBottom: 10,
    [theme.breakpoints.up('sm')]: {
      fontSize: 50
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 70
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 150
    },
  },
}));



const AboutUs = () => {
  const [t] = useTranslation("global")
  const classes = useStyles()
  return (
    <div className={classes.AboutUs}>
      <Grid container>
    <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
      <Typography variant='body1' className={classes.title} > {t("About Us.title")}  </Typography>
    </Grid> 
      {bios && bios.map((p) => (
        <Grid item xs={12} sm={4} md={3} style={{ display:'flex', justifyContent:'center'}}>
        <CardBio name={p.name} rol={p.rol} img={p.img} connect={p.connect} />
      </Grid>
      ))}
      </Grid>
    </div>
  )
}

export default AboutUs