import React from 'react';
import '../../Assets/Fonts/BinariaFonts.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

//================Material UI Imports======================
import {makeStyles, Drawer, Button} from '@material-ui/core'

//===============Logo Imports===============
import {ReactComponent as HinchasLogo} from "../../Assets/Imgs/Logos/Svg/Hinchas.svg"
import { ReactComponent as ColaborarLogo} from "../../Assets/Imgs/Logos/Svg/Colaborar.svg"
import { ReactComponent as PartnersLogo } from "../../Assets/Imgs/Logos/Svg/Partners.svg"
import { ReactComponent as MarketLogo } from "../../Assets/Imgs/Logos/Svg/Market.svg"
import { ReactComponent as TspLogo } from "../../Assets/Imgs/Logos/Svg/Tsp.svg"
import { ReactComponent as AboutUsLogo } from "../../Assets/Imgs/Logos/Svg/aboutUs.svg"
import { ReactComponent as FaqLogo } from "../../Assets/Imgs/Logos/Svg/faq.svg"
//====================Translation Import===================
import {useTranslation} from "react-i18next";

const styles = makeStyles(theme=> ({
  drawer:{
    width: 100,
    overflow: 'auto',
    [theme.breakpoints.up('xl')]: {
      width:143
    }
  },
  drawer2:{
    width: 0
  },
  drawerPaper:{
    
    zIndex:1,
    top: 69,
    width: 100,
    background: '#181818',
    color: 'white',
    border:'none',
    filter:' drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.5))',
    [theme.breakpoints.up('xl')]: {
      top:111,
      width: 150,
      height: 'calc(100% - 111px)',
    },      
      height: 'calc(100% - 69px)',
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
    [theme.breakpoints.down('sm')]: {
      paddingTop:10,
      top:0,
      height:'100%'
    }, 
  },
  list: {
    marginTop:3,
    justifyContent:'center',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    width:'100%',
    opacity: '0.6',
    fontSize: '80%',
    textTransform: 'capitalize',
    fontFamily: '"Binaria", sans-serif',
    '&:hover': {
      opacity: '1',
      transform: 'scale(1.2 , 1.2)' ,
      filter: 'drop-shadow(.75em .75em 1em black)'
    },
    [theme.breakpoints.up('xl')]: {
      fontSize:20
    }
  },
  icon: {
    display:'flex',
    height: 40,
    [theme.breakpoints.down('sm')]: {
      height: 30
  },[theme.breakpoints.only('md')]: {
    height: 28
  },
  [theme.breakpoints.up('xl')]: {
    height:75
  }
  },

}))

export default function Box(props) {
    const [t] = useTranslation("global");
    const classes = styles();

    return (    
          <Drawer 
              className={props.hidden ? classes.drawer : classes.drawer2} 
              classes={{ paper: classes.drawerPaper}}
              anchor={props.side}
              variant={props.variant}
              open={props.open}
              onClose={props.onClose ? props.onClose : null} 
          >
{/* Fans Button (Hinchas) */}
              <Button  style={{outline:'none'}} >
              <Link className={classes.list} to='/fans' style={{textDecoration:'none', color:'white'}}>
              <HinchasLogo className={classes.icon} />
              {t("Burguer.Fans")}
              </Link>
            </Button>
{/* Collaborators Button (Colaboradores) */}
            <Button  style={{outline:'none'}} >
            <Link to='/collaborators' style={{textDecoration:'none', color:'white'}} className={classes.list}>
              <ColaborarLogo className={classes.icon} />
              {t("Burguer.Collaborators")}
              </Link>
            </Button>
{/* Partners Button (Auspiciantes) */}
            <Button  style={{outline:'none'}} >
            <Link className={classes.list}to='/partners' style={{textDecoration:'none', color:'white'}}>
              <PartnersLogo className={classes.icon} />
              {t("Burguer.Partners")}
              </Link>
            </Button>
{/* Market Button (Mercado) */}
            <Button  style={{outline:'none'}} >
            <Link className={classes.list} to='/market' style={{textDecoration:'none', color:'white'}}>
              <MarketLogo className={classes.icon} />
              {t("Burguer.Market")}
              </Link>
            </Button>
{/* Token Button */}
            <Button   style={{outline:'none'}} >
            <Link className={classes.list} to='/tsp' style={{textDecoration:'none', color:'white'}}>
              <TspLogo className={classes.icon}/>
              {t("Burguer.Token")}
              </Link>
            </Button>
{/* AboutUs Button (Nosotros) */}
            <Button  style={{outline:'none'}} >
            <Link className={classes.list} to='/aboutus' style={{textDecoration:'none', color:'white'}}>
              <AboutUsLogo className={classes.icon} />
              {t("Burguer.AboutUs")}
              </Link>
            </Button>
{/* FAQ Button (FAQ) */}
            <Button  style={{outline:'none'}}  >
            <Link className={classes.list}to='/faq' style={{textDecoration:'none', color:'white'}}>
              <FaqLogo className={classes.icon} />
              {t("Burguer.FAQ")}
            </Link>
            </Button>

          </Drawer> 

    );
}