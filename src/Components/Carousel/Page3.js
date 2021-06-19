import React from 'react'
import '../../Assets/Fonts/BinariaFonts.css'
//==============Material UI imports==============
import { Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
/*=========== Components =============*/
import DownloadTSP from "../../Assets/Imgs/g1.png";
import InteractTSP from "../../Assets/Imgs/g2.png";
import bgStadium2 from "../../Assets/Imgs/bgstadium2.png"
//=============Translation Import===============
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: { 
    marginTop: 70,
    height:'100vh',
    backgroundImage: `linear-gradient(-35deg, #181818 30%, rgba(6, 50, 134, 0.5) 100%), url(${bgStadium2})`,
    backgroundSize: 'cover',
    overflow: 'auto',
    width:'100vw',
    [theme.breakpoints.up('xl')]: {
      width:"100vw"
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
  imgCont:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-around',
    '& #text1':{
      top:150,
      left: 30
    },
    '& #text2':{
      bottom:40,
      right:30,
      textAlign:'end'
    },
    '& #img2':{
      position:'relative',
      top: -60,
    },
    [theme.breakpoints.only('xs')]:{
      flexDirection:'column',
      '& #img1':{
        top:20,
        position:'relative',
      },
      '& #img2':{
        position:'relative',
        top: -80,
      },
      '& #text1':{
        top:110,
      },
    },
    [theme.breakpoints.up('xl')]: {
      '& #img2':{
        position:'relative',
        right:"-40%"
      },
      
    }
  },
  img:{
    filter:' drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5))',
    width:'70%',
    animation: `$myEffect2 3500ms ${theme.transitions.easing.easeInOut}`,
    [theme.breakpoints.only('sm')]: {
      width:'40%',
    },
    [theme.breakpoints.up('md')]: {
      width:'30%',
    },
    [theme.breakpoints.up('xl')]: {
      width:'40%',
    },
  },
  subtitle:{
    position:'absolute',
    color:'#D8ED06',
    fontFamily: '"Binaria", sans-serif',
    width:235,
    fontSize:35,
    filter: 'drop-shadow(.1em .1em .05em black)',
    [theme.breakpoints.up('xl')]: {
      width: 250,
      fontSize:40
    },
    [theme.breakpoints.only('xs')]: {
      width: 150,
      fontSize:20,
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

const Page3 = () => {
  const [t] = useTranslation("global")
  const classes = useStyles();
  return (
    <Grid container  className={classes.container}>
      <div className={classes.imgCont}>
          <img src={DownloadTSP} alt="Download"   className={classes.img} id='img1' />
          <img src={InteractTSP} alt="Interact"   className={classes.img} id='img2' /> 
         <Typography variant='h6' className={classes.subtitle} id='text1' > {t("Home.page3.text1")} </Typography>
         <Typography variant='h6' className={classes.subtitle} id='text2' > {t("Home.page3.text2")} </Typography> 
      </div>
   </Grid>
)
}




export default Page3
