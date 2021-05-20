import React from 'react';
//=================Material UI imports==================
import {Grid, makeStyles, Typography} from '@material-ui/core';
//===================Components=========================
// import Packs from '../Components/packs';
//===================Translation import=================
import {useTranslation} from "react-i18next";
// ===============IMG===================
import TspLogo from '../Assets/Imgs/ImagenesLT/TokenLogoImgLt.png'
import WhatIsTsp from '../Assets/Imgs/ImagenesLT/whatsIsTsp.png'

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 80,
    width: '100%',
    color: 'white',
    overflow:'auto',
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
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'start',
    alignItems: 'center', 
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      justifyContent:'space-around',
      height:'100%',
      paddingRight:20,
      marginTop:80
    },
    [theme.breakpoints.only('sm')]: {
      justifyContent:'space-around',
      height:'100%',
      paddingRight:20,
      marginTop:50
    },
  },
  title:{
    marginTop: 10,
    fontFamily: '"Binaria", sans-serif',
    fontSize: 27,
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
  subtitle:{
    fontFamily: '"Noto Sans", sans-serif',
    padding: 20,
    paddingTop:0,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 40
    },

  },
  packs:{  
    display:'flex',
    justifyContent:'space-around',
    paddingTop:20,
    paddingBottom:20,
    [theme.breakpoints.only('xs')]: {
      flexDirection:'column',
      alignItems:'center',
    },
  },
  img:{ 
    width:'100%', 
    justifyContent: 'center', 
    alignItems: 'start',
    display: 'flex',
    marginBottom:10,
    [theme.breakpoints.only('sm')]: {
      marginTop:"20%",
    },
    [theme.breakpoints.up('md')]: {
      marginTop:"10%",
    },
  },
  img2:{
    [theme.breakpoints.up('sm')]: {
      width:'30%',
      position:'relative'
    },
    [theme.breakpoints.only('xs')]: {
      width:'40%'
    },
  },
  img3:{
    [theme.breakpoints.up('sm')]: {
      margin:-50,
      width:'60%'
    },
    [theme.breakpoints.only('xs')]: {
      width:'50%',
      margin:-20,
    },
  }
}));

const Tsp = () => {
  const [t] = useTranslation("global");
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>

{/* Img Token Logo */}
        <Grid item xs={12}  sm={6} className={classes.img} >
          <img src={TspLogo} alt='TSPlogo' className={classes.img2} />
          <img src={WhatIsTsp} alt='' className={classes.img3} />
        </Grid>
{/* Text */}
<Grid item xs={12} sm={6}  className={classes.text}>
          <Typography variant='h5' className={classes.title}> {t("Token.title")} </Typography>
          <Typography variant='subtitle2' className={classes.subtitle}> {t("Token.text-1")} </Typography>
          <Typography variant='subtitle2' className={classes.subtitle}>{t("Token.text-2")}</Typography>
          <Typography variant='subtitle2' className={classes.subtitle}>{t("Token.text-3")}</Typography>
  </Grid>
{/* Packs
        <Grid item xs={12} className={classes.packs}>
            <Packs name='Tribuna' color='#D7E81C'/>
            <Packs name='Platea' color='#E8E8E8'/>
            <Packs name='Palco' color='rgba(255,239,97,0.87)'/>
        </Grid> */}
      </Grid>
    </div>
  )
}

export default Tsp  