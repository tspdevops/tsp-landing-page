import React from 'react';
//=======================Components====================
import { Grid, makeStyles, Typography} from '@material-ui/core'
// import Packs from '../Components/packs';
import Huawei from "../Assets/Imgs/Aliados/HuaweiLogo.svg";
// import {ReactComponent as Bitsionarys} from "../Assets/Imgs/Aliados/BitsionarysLogo.svg";
// import {ReactComponent as CriptoLatinFest} from "../Assets/Imgs/Aliados/CriptoLatinFestLogo.svg";
// import {ReactComponent as TokenPartner} from "../Assets/Imgs/Aliados/TokenPartner.svg"
// ===============IMG=========================
import PartnersImg from '../Assets/Imgs/ImagenesLT/PartnersImgLt.png'
//===========================Translation Import=================
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    width: '100%',
    color: 'white',
    overflow:'auto',
    textAlign:'center',
    [theme.breakpoints.up('xl')]: {
      marginTop:110
    },
    [theme.breakpoints.up('md')]: {
      overflow:'hidden',
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
    width: '50%',
    justifyContent: 'center', 
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      width:'50%', 
      marginTop:-20
    },
    [theme.breakpoints.only('sm')]: {
      marginRight:-10,
      marginTop:"5%",
    },
    height: '50%',
    [theme.breakpoints.up('xl')]: {
      marginTop:-50
    }
  },
  text: {
    height:'100%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent:'space-around',
      height:'100%',
      paddingRight:20,
      marginTop:80
    },
  },
  title:{
    fontFamily: '"Binaria", sans-serif',
    fontSize: 30,
    color: '#D8ED06',
    textAlign:'center',
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
    margin: 5,
    fontSize: 16,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 40
    },
  },
  packs:{  
    height:'100%',
    display:'flex',
    justifyContent:'space-around',
    paddingTop:20,
    paddingBottom:20
  },
  iconCont:{
    display:"flex", alignItems:"center", margin:20,
    justifyContent:'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection:'column',
    },
  },
  icon:{
    display:'flex',
    width:150,
    [theme.breakpoints.only('xs')]: {
      width:100
    },
    [theme.breakpoints.up('sm')]: {
      width:100
    },
  }
}));

const Partners = () => {
  const [t] = useTranslation("global")
  const classes = useStyles()
  return (
    <div className={classes.container}>
    <Grid container >

{/* Img */}
<Grid item xs={12} sm={6}  className={classes.img} >
        <img src={PartnersImg} alt='Partners' className={classes.img} />
      </Grid>
{/* Text    */}
      <Grid item xs={12} sm={6}  className={classes.text}>        
        <Typography variant='h6' className={classes.title}> {t("Partners.title")} </Typography>        
        <Typography variant='body2' className={classes.subtitle} >{t("Partners.text")}</Typography>
        <Typography variant='body2' className={classes.subtitle} >{t("Partners.text2")}</Typography>
        <Typography variant='body2' className={classes.subtitle} >{t("Partners.text3")}</Typography>

       <div className={classes.iconCont}>
          <img src={Huawei} alt='Huawei' className={classes.icon}/>
       </div>
      </Grid>

{/*  Packs   */}
    {/* <Typography className={classes.subtitle}> Ya puedes adquirir paquetes de tokens TSP que podrán ser utilizados para comprar espacios publicitarios y acceder a estadísticas y contenidos exclusivos de Token Sport. </Typography> */}
     {/* <Grid item xs={12} className={classes.packs}>
            <Packs name={t('Packs.press')} color='rgba(172, 230, 255, 0.81)'/>
            <Packs name={t('Packs.sponsor')} color='#958EE6'/>
      </Grid> */}
    </Grid>


  </div>
  )
}

export default Partners
