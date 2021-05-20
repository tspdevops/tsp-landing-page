import React from 'react'
//=======================Components====================
import {Grid, makeStyles, Typography} from '@material-ui/core'
import CardWallet from '../Components/CardWallet';
//===============Translation Import===================
import  {useTranslation} from "react-i18next";
// ===============IMGS===================
import wm1 from "../Assets/Imgs/walletManual/wm1.jpg";
import wm2 from "../Assets/Imgs/walletManual/wm2.jpg";
import wm3 from "../Assets/Imgs/walletManual/wm3.png";
import wm4 from "../Assets/Imgs/walletManual/wm4.png";
import wm5 from "../Assets/Imgs/walletManual/wm5.png";
import wm6 from "../Assets/Imgs/walletManual/wm6.png";
import wm7 from "../Assets/Imgs/walletManual/wm7.png";
import wm8 from "../Assets/Imgs/walletManual/wm8.png";
import wm9 from "../Assets/Imgs/walletManual/wm9.png";
import wm10 from "../Assets/Imgs/walletManual/wm10.png";
import w1 from "../Assets/Imgs/walletManual/1.png";
import w2 from "../Assets/Imgs/walletManual/2.png";
import w3 from "../Assets/Imgs/walletManual/3.png";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 80,
    width: '100%',
    color: 'white',
    overflowY:'auto',
    overflowX:'hidden',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
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
    // backgroundImage: `url(${w3})`, 
    // backgroundSize: 'contain',
    // backgroundRepeat: 'no-repeat',

  },
  text: {
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    textAlign:'start',
    marginLeft:10,
    marginBottom:20,
  },
  title:{
    margin: 5,
    fontFamily: '"Binaria", sans-serif',
    fontSize: 27,
    color: '#D8ED06',
    textAlign:'center',
    marginBottom: 10,
    [theme.breakpoints.up('sm')]: {
      fontSize: 37
    },
    [theme.breakpoints.up('xl')]: {
      fontSize:87
    }
  },
  subtitle1:{
    marginTop:10,
    fontFamily: '"Noto Sans", sans-serif',
    width:650,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      width:320,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize:30,
      width:1300
    }
  },
  text2:{
    color: "#D9DB23",
    fontFamily: '"Binaria", sans-serif',
    [theme.breakpoints.up('xl')]: {
      fontSize: 25
    },
  },
  important:{
    width:"40%",
    height:'auto',
    border:'2px solid #D8ED06',
    borderRadius:20,
    display:"flex",
    justifyContent: "start",
    margin:30,
    padding:20,
    flexDirection:'column',
    [theme.breakpoints.only('xs')]: {
      width:"90%",
      margin:10,
      marginLeft:15
    },
  }
}));




const Wallet = () => {
  const [t] = useTranslation("global");
  const classes = useStyles();
const steps=[{
  text:`${t("Wallet.1")}`,
  img: `${wm1}`
},{
  text:`${t("Wallet.2")}`,
  img: `${wm2}`
},{
  text:`${t("Wallet.3")}`,
  img: `${wm3}`
},{
  text:`${t("Wallet.4")}`,
  img: `${wm4}`
},{
  text:`${t("Wallet.5")}`,
  img: `${wm5}`
},{
  text:`${t("Wallet.6")}`,
  img: `${wm6}`
},{
  text:`${t("Wallet.7")}`,
  img: `${wm7}`
},{
  text:`${t("Wallet.8")}`,
  img: `${wm8}`
},{
  text:`${t("Wallet.9")}`,
  img: `${wm9}`
},{
  text:`${t("Wallet.10")}`,
  img: `${wm10}`
},{
  text:`${t("Wallet.w1.awr")}`,
  img: `${w1}`,
  qtion: `${t("Wallet.w1.qtion")}`
},{
  text:`${t("Wallet.w2.awr")}`,
  img: `${w2}`,
  qtion: `${t("Wallet.w2.qtion")}`
},{
  text:`${t("Wallet.w3.awr")}`,
  img: `${w3}`,
  qtion:`${t("Wallet.w3.qtion")}`
},
]
  return (
    <div className={classes.container} >
 <Grid container>
   <Grid item xs={12} className={classes.text}>
      <Typography variant='body1' className={classes.title} > {t("Wallet.title")}  </Typography>
   </Grid>
  <Grid item xs={12} className={classes.text} >
    <Typography variant='subtitle1' className={classes.subtitle1}>{t("Wallet.info")}</Typography>
    <Typography variant='subtitle2' className={classes.subtitle1}>{t("Wallet.info2")}</Typography>
    <Typography variant='subtitle2' className={classes.subtitle1}>{t("Wallet.info3")}</Typography>
   </Grid>
        { steps.map((p,id)=>(
      <Grid item xs={12} sm={6} md={4} style={{display:'flex', justifyContent:'center', alignItems:'start', }}>
          {id+1>10?
          <Grid item xs={12} className={classes.text} >
            <Typography variant='body2' className={classes.title}  style={{borderBottom:'2px solid #D8ED06'}} > {p.qtion} </Typography>
         </Grid>
          : "" }      
          <CardWallet text={p.text} img={p.img} id={id+1}/> 
      </Grid>
        ))}
        <Grid item xs={12}className={classes.important} >
          <Typography variant='body1' style={{color:'#D8ED06'}} > {t("Wallet.contact")} </Typography>
          <Typography variant='body2'  > {t("Wallet.imp")}  </Typography>
          <Typography variant='body2'  > {t("Wallet.advise")} </Typography>
        </Grid>
  </Grid>
    </div>
  )
}

export default Wallet
