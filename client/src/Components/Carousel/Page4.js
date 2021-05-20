import React from 'react'
import '../../Assets/Fonts/BinariaFonts.css'
//==============Material UI imports==============
import { Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
/*=========== Components =============*/
import EarnTsp from "../../Assets/Imgs/g3.png";
import bgStadium2 from "../../Assets/Imgs/bgstadium2.png"
//=============Translation Import===============
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    height:'100vh',
    width:'100vw',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundImage: `linear-gradient(-130deg, #181818 15%, rgba(6, 50, 134, 0.5) 100%), url(${bgStadium2})`,
    backgroundSize: 'cover',
    overflow: 'auto',
    [theme.breakpoints.up('xl')]: {
      width:'100vw',
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
  subtitle:{
    textAlign:'center',
    position:'absolute',
    color:'#D8ED06',
    fontFamily: '"Binaria", sans-serif',
    width:435,
    fontSize:35,
    top:120,
    filter: 'drop-shadow(.1em .1em .05em black)',
    [theme.breakpoints.up('xl')]: {
      width: 650,
      fontSize:40
    },
    [theme.breakpoints.only('xs')]: {
      width: 320,
      fontSize:20,
    },
  },
  img:{
    filter:' drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5))',
    width:'100%',
    animation: `$myEffect2 3500ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.up('sm')]: {
      width:'50%',
     },
     [theme.breakpoints.up('md')]: {
      width:'45%',
     },
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

const Page4 = () => {
  const [t] = useTranslation("global")
  const classes = useStyles();
  return (
    <Grid container  className={classes.container}>
      <img src={EarnTsp} alt='' className={classes.img}/>
      <Typography variant='h6' className={classes.subtitle} > {t("Home.page4")} </Typography>
   </Grid>
  )
}

export default Page4
