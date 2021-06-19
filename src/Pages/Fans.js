import React, {useState} from 'react';

//====================Material UI imports==================
import {Grid, makeStyles, Typography, Modal, Backdrop, Fade} from '@material-ui/core'
//=====================Components====================
import {CssButton} from '../Components/EmailForm/cssButton'
import SignUp from './SignUp';
// ================== IMG ===========================
import FansImg from '../Assets/Imgs/ImagenesLT/fansImgLt.png'
//=================Translations Imports================
import {useTranslation} from 'react-i18next';
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    width: '100%',
    color: 'white',
    overflowY:'auto',
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
  img:{ 
    width:'50%', 
    justifyContent: 'center', 
    alignItems: 'start',
    display: 'flex',
    objectFit:'none',
    [theme.breakpoints.only('sm')]: {
      marginTop:"20%",
    },
    [theme.breakpoints.up('md')]: {
      marginTop:"10%",
    },
    [theme.breakpoints.up('lg')]: {
      marginTop:"5%",
    },
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    textAlign:'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent:'space-around',
      height:'100%',
      paddingRight:20,
      marginTop:80
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
  subtitle2:{
    fontFamily: '"Noto Sans", sans-serif',
    opacity: 0.9,
    marginTop: 3,
    fontSize: 10,
    [theme.breakpoints.up('lg')]: {
      fontSize: 15
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 30
    },
  },
  modalCont:{
    display:'flex',
    flexDirection: 'column',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'auto',
    backdropFilter: 'blur(3px)',
    color:'white',
    opacity:0.9,
    textAlign:'center',
    height:'100%',
    
},
modal:{
  overflowY:'auto',
  background:'#333333',
  height:'60%',
  width:'50%',
  display:'flex',
  flexDirection:'column',
  alignItems:'center',
  padding:20,
  borderRadius:'10px',
  [theme.breakpoints.down('xs')]: {
    width:'90%',
    height:'70%', 
  },
}
}));

const Fans = () => {
  const [t] = useTranslation('global')
  const classes = useStyles()
//========React Hooks==============
  const [open, setOpen] = useState(false);

//*================ Modal Details Handlers ==========================
 const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

  return (
    <div className={classes.container}>
      <Grid container >
{/* IMG */}
        <Grid item xs={12} sm={6}  className={classes.img} >
          <img src={FansImg} alt='Fans' width='80%' height='' />
        </Grid>
{/* Text */}
        <Grid item xs={12} sm={6}  className={classes.text}>
          <Typography variant='body1' className={classes.title} >{t("Fans.title")}</Typography>
          <Typography variant='h6' className={classes.subtitle} >{t("Fans.subtitle")}</Typography>
          <br/>
          <Typography variant='subtitle2' className={classes.subtitle}>{t("Fans.text")}</Typography>
          <Typography variant='subtitle2' className={classes.subtitle}>{t("Fans.invitation")}</Typography>
{/* Button */}
          <CssButton onClick={handleOpen} style={{outline:'none', margin:10}}> {t("Button.SignUp")}  </CssButton>
{/* Disclaimer text */}
          <Typography variant='body2' className={classes.subtitle2} >{t("Fans.disclaimer")} </Typography>
        </Grid>
      </Grid>
{/* Modal */} 
<Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          onClose={handleClose}
          open={open}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{timeout: 500,}}
          className={classes.modalCont}
          >
        <Fade in={open}>
          <Grid item 
          className={classes.modal}
          >
            <SignUp setOpen={setOpen} page='Fans.title' />
          </Grid>
        </Fade>
    </Modal>

    </div>
  )
}

export default Fans
