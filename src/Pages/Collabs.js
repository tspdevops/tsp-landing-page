import React from 'react';
//=======================Components====================
import {Grid, makeStyles, Typography} from '@material-ui/core'
import Form from '../Components/EmailForm/Form';
// =====================IMG====================
import CollabsImg from '../Assets/Imgs/ImagenesLT/DreamTeamImgLt.png'
//=====================Translation Import================
import {useTranslation} from "react-i18next";
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    width: '100%',
    color: 'white',
    overflow:'auto',
    [theme.breakpoints.down('xs')]: {
      overflow:'scroll',
    },
    paddingBottom:20,
    paddingRight:10,
    paddingLeft:5,
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
    [theme.breakpoints.up('sm')]: {
      marginLeft:-30,
      marginTop:"20%",
    },
    [theme.breakpoints.up('md')]: {
      marginTop:"10%",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop:"2%",
    },
    [theme.breakpoints.only('xs')]: {
      marginTop:-45,
      marginBottom:-35,
    },

  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    textAlign: 'center',
    paddingLeft:10,
    paddingRight:10,
    [theme.breakpoints.up('sm')]: {
      justifyContent:'space-around',
      height:'100%',
      marginTop:100
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

const Collabs = () => {
  const [t] = useTranslation('global')
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Grid container >
{/* IMG */}
        <Grid item xs={12} sm={6}  className={classes.img} >
          <img src={CollabsImg} alt='Collabs' width='80%' height='' />
        </Grid>
{/* Text */}
        <Grid item xs={12} sm={6}  className={classes.text}>
          <Typography variant='h6' className={classes.title} >{t("Collaborator.title")}</Typography>
          <Typography variant='body1' className={classes.subtitle}> {t("Collaborator.subtitle")} </Typography>
          <br/>
          <Typography variant='subtitle2' className={classes.subtitle}> {t("Collaborator.text")} </Typography>
{/* Form */}
          <Form page='Collaborator.title' style={{marginRight:10}} />
        </Grid>
      </Grid>
    </div>
  )
}

export default Collabs
