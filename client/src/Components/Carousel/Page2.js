import React from 'react'
import '../../Assets/Fonts/BinariaFonts.css'
//==============Material UI imports==============
import { Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
/*=========== IMG =============*/
import MakeYourTeam from "../../Assets/Imgs/ImagenesLT/WhatIsTokenSport.png";
import cel from "../../Assets/Imgs/ImagenesLT/OnceIdeal.png";
import bgStadium from '../../Assets/Imgs/bgStadium.png'
//=============Translation Import===============
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    textAlign:'center',
    height:'100vh',
    overflow: 'auto',
    [theme.breakpoints.up('xs')]: {
      overflow: 'cover',
      backgroundRepeat: 'repeat',
      backgroundImage: `linear-gradient(180deg, #181818 20%, rgba(216, 237, 6, 0.2) 95%), url(${bgStadium})`, 
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
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
    '& #cel':{
      [theme.breakpoints.down('xs')]: {
        marginBottom:50,
        marginLeft:-10
      },
      [theme.breakpoints.up('sm')]: {
        marginBottom:-80
      },
    },
    '& #thinking':{
      border:'none',
      [theme.breakpoints.down('xs')]: {
        position:'relative',
        bottom:-40,
      },
      [theme.breakpoints.up('sm')]: {
        marginLeft:40,
        marginBottom:-80
      },
    }
  },
  img:{
    width:'50%',
    [theme.breakpoints.up('sm')]: {
      width:'25%'
    },
    [theme.breakpoints.up('md')]: {
      width:'20%'
    },
    animation: `$myEffect2 3500ms ${theme.transitions.easing.easeInOut}`
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center', 
    color: 'white',
  },
  title:{
    marginTop:50,
    fontFamily: '"Binaria", sans-serif',
    fontSize: 27,
    textAlign: 'center',
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
    }
  },
  subtitle:{
    fontFamily: '"Binaria", sans-serif',
    fontSize:20,
    [theme.breakpoints.up('xl')]: {
      fontSize: 40
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 25
    }
  },
  '@keyframes myEffect2':{
    "0%":{
      opacity: 0,
    },
    "100%":{
      opacity: 1,
    }
  }
}));

const Page2 = () => {
  const [t] = useTranslation("global")
  const classes = useStyles();
  return (
    <Grid container  className={classes.container}>
{/* Text */}
    <Grid item xs={12}  className={classes.text}>
         <Typography variant='h4' className={classes.title} > {t("Home.page2.title")} </Typography>
         <Typography variant='subtitle' className={classes.subtitle} > {t("Home.page2.subtitle")} </Typography> 
    </Grid>
{/* Img */}   
    <Grid item xs={12}  >
      <img src={cel} alt="cel" className={classes.img} id="cel"/>
      <img src={MakeYourTeam} alt="thinking" className={classes.img} id='thinking' />
     </Grid>
   </Grid>
  )
}

export default Page2
