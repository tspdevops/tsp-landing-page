import React from 'react';
//====================Material UI imports==================
import {Grid, makeStyles, Typography} from '@material-ui/core'
import Link from '@material-ui/core/Link';
//=================Translations Imports================
import {useTranslation} from 'react-i18next';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    width: '100%',
    color: 'white',
    overflowY:'auto',
    display:'flex',
    justifyContent:'center',
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
    textAlign: 'center',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center'
  },
  title:{
    marginTop: 5,
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
    color: '#D8ED06',
    opacity:0.9,
    fontSize:25,
    fontFamily: '"Binaria", sans-serif',
    [theme.breakpoints.up('lg')]: {
      fontSize: 40
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 40
    },
  },
  subtitle1:{
    marginTop:10,
    fontFamily: '"Noto Sans", sans-serif',
    width:650,
    [theme.breakpoints.down('xs')]: {
      width:320,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 40,
      width:1200
    },
  }
}));

const Faq = () => {
  const [t] = useTranslation('global')
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Grid container >
{/* Text */}
        <Grid item xs={12} className={classes.text}>
          <Typography variant='body1' className={classes.title} >{t("FAQ.title")}</Typography>

          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question1")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer1")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question2")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer2")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question3")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer3")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question4")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer4")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question5")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer5")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question6")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer6")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question7")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer7")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question8")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer8")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.question9")}</Typography>
          <Typography variant='subtitle1' className={classes.subtitle1}>{t("FAQ.answer9")}</Typography>
          <br/>
          <Typography variant='h6' className={classes.subtitle} >{t("FAQ.ReachUs.message")}</Typography>
          <Link href={t("FAQ.ReachUs.Telegram")} color="inherit" >{t("FAQ.ReachUs.Telegram")}</Link>
          <br/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Faq
