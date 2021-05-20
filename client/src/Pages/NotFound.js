import React from 'react'
// ==================Components====================
import { Typography, makeStyles } from '@material-ui/core'
import { CssButton } from '../Components/EmailForm/cssButton';
//=================Translations Imports================
import {useTranslation} from 'react-i18next';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    width: '100%',
    color: 'white',
    overflowY:'auto',
    display:"flex",
    justifyContent:"center",
  },
  text: {
    marginTop:'15%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title:{
    fontFamily: '"Binaria", sans-serif',
    color: '#D8ED06',
    fontSize: 50,
    [theme.breakpoints.up('sm')]: {
      fontSize: 70
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 100
    }
  },
  subtitle:{
    fontFamily: '"Binaria", sans-serif',
    [theme.breakpoints.up('xl')]: {
      fontSize: 30
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const [t] = useTranslation("global");
  const history = useHistory();
  return (
    <div className={classes.container} >
      <div className={classes.text}>
      <Typography className={classes.title} >{t("404.error")}</Typography>
      <Typography className={classes.subtitle} > {t("404.text")} </Typography>
      <CssButton onClick={()=> history.push(`/`)} style={{outline:'none', margin:40, width:'40%'}}> {t("404.button")}  </CssButton>
      </div>
    </div>
  )
}

export default NotFound
