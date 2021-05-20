import React from 'react';
//=======================Components====================
import {Grid, makeStyles, Typography} from '@material-ui/core'
import Form from '../Components/EmailForm/Form';
// ====================IMG=====================
import MarketImg from '../Assets/Imgs/ImagenesLT/marketImgLt.png'
//===============Translation Import===================
import  {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    width: '100%',
    color: 'white',
    overflow:'auto',
    paddingBottom:20,
    [theme.breakpoints.down('xs')]: {
      overflow:'scroll',
      paddingBottom:20,
    },
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
  img:{ 
    width:'100%', 
    justifyContent: 'center', 
    alignItems: 'start',
    display: 'flex',
    [theme.breakpoints.only('sm')]: {
      marginTop:"20%",
    },
    [theme.breakpoints.up('md')]: {
      marginTop:"10%",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop:"5%",
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'start',
    alignItems: 'center', 
    textAlign: 'center',
    paddingRight:5,
    [theme.breakpoints.up('sm')]: {
      justifyContent:'space-around',
      height:'100%',
      paddingRight:20,
      marginTop:80
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
    [theme.breakpoints.up('lg')]: {
      fontSize: 20
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 40
    },
  },
}));

const Market = () => {
  const [t] = useTranslation("global")
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Grid container >
{/* Img */}
        <Grid item xs={12} sm={6}  className={classes.img} >
          <img src={MarketImg} alt='Market' width='80%' height='' />
        </Grid>
{/* Text */}
        <Grid item xs={12} sm={6}  className={classes.text}>
          <Typography variant='h6' className={classes.title} > {t("Market.title")} </Typography>
          <Typography variant='body1' className={classes.subtitle} > {t("Market.text")} </Typography>
          <br/>
          <Typography variant='subtitle2' className={classes.subtitle}> {t("Market.subtitle")} </Typography>
          <br/>
          <Typography variant='subtitle2' className={classes.subtitle} style={{color: '#D8ED06'}}> {t("Market.tbc")} </Typography>
          <Typography variant='subtitle2' className={classes.subtitle} style={{opacity:0.5}} >{t("Market.cliffhanger")} </Typography>
          <Typography variant='subtitle2' className={classes.subtitle} >{t("Market.invitation")}</Typography>
{/* Form */}
          <Form page='Market.title'/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Market