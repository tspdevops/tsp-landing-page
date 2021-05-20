import React from 'react';
import {Link} from 'react-router-dom';
//============== Material UI imports ====================
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton, Hidden} from '@material-ui/core';
//=============Logo import================
import {ReactComponent as LogoTS} from '../../Assets/Imgs/Logos/Svg/TSP-LOGO_WEB.svg';
import {ReactComponent as BurguerMenu} from '../../Assets/Imgs/Logos/Svg/burguer.svg';
import LanguageComponent from './languageComponent';
import {ReactComponent as Wallet} from "../../Assets/Imgs/Logos/Svg/Wallet.svg"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, 
  },
  menuButton: {
    // borderRight: '2px solid #545454',
    borderRadius: 1,
  },
  navbar:{
    justifyContent: 'center',
    height:70,
    background: '#181818',
    filter:' drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    paddingRight: 15,
    [theme.breakpoints.up('xl')]: {
      height:110
    }
  },
  burguer: {
    marginLeft: 5,
    marginRight: 5,
    
  },
  nb:{
    paddingRight:'0',
    justifyContent: 'space-between',
  },
  logoTs:{
    height:45,
    '&:hover':{
      transform: 'scale(1.1,1.1)',
      filter: 'drop-shadow(.75em .75em 1em black)',
    },
    [theme.breakpoints.up('xl')]: {
      height:110
    }
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar variant="dense" className={classes.nb} >
          <Hidden only={['md', 'lg', 'xl']}>
          <IconButton 
            style={{outline:'none'}}
            edge="start" 
            className={classes.menuButton} 
            color="inherit" 
            aria-label="menu" 
            onClick={() => { props.onOpen()} }>
              <BurguerMenu className={classes.burguer} />
          </IconButton>
          </Hidden>
            <Link to='/'>
              <LogoTS  className={classes.logoTs} />
            </Link>
            <div style={{display:'flex', alignItems:'center'}}> 
{/* Wallet Manual */}
                <Link className={classes.list}to='/walletmanual' style={{textDecoration:'none', color:'white'}}>
                  <Wallet/>
                </Link>
                <LanguageComponent />
            </div>
            </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </div>
  );
}


