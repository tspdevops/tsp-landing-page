import React from 'react'
import '../../Assets/Fonts/BinariaFonts.css'
//==============Material UI imports==============
import {Grid, makeStyles, Typography, Modal, Backdrop, Fade} from '@material-ui/core'
/*=========== Components =============*/
import StadiumTSP2 from '../../Assets/Imgs/ImagenesLT/StadiumImgLt.png';
import bgStadium from '../../Assets/Imgs/bgStadium.png'
import { CssButton } from '../EmailForm/cssButton';
import SignUp from '../../Pages/SignUp';
// ==============Translation imports============
import {useTranslation} from 'react-i18next';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
    height:'100vh',
    overflow: 'auto',
    [theme.breakpoints.up('xs')]: {
      backgroundRepeat: 'repeat',
      backgroundImage: `linear-gradient(0deg, #181818 20%, rgba(6, 50, 134, 0.5) 75%), url(${bgStadium})`, 
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
    },
    [theme.breakpoints.up('xl')]: {
      width:'100vw',
      overflowX:'hidden',
      overflowY:'hidden'
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
  title:{
    marginTop:50,
    fontFamily: '"Binaria", sans-serif',
    fontStyle:'italic',
    fontSize: 27,
    textAlign: 'center',
    color: '#D8ED06',
    marginBottom: 10,
    filter: 'drop-shadow(.1em .1em .05em black)',
    [theme.breakpoints.up('sm')]: {
      fontSize: 40
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 50
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 150
    }
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      justifyContent:'space-around',
      height:"70%",
    },
    alignItems: 'center', 
  },
  ts:{
    textAlign: 'center',
    transitionDelay: '3ms',
    transitionDuration: '1s',
    transitionProperty: 'transform filter',
    fontStyle: 'italic',
    animation: `$myEffect2 3500ms ${theme.transitions.easing.easeInOut}`,
    filter: 'drop-shadow(.35em .55em .25em black)',
  },
  ts1:{
    fontFamily: '"Binaria", sans-serif',
    color: 'white',
    lineHeight: 0.9,
    fontSize:60,
    [theme.breakpoints.up('xl')]: {
      fontSize: 100
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 80,
    }
  },
  ts2: {
    fontFamily: '"Binaria", sans-serif',
    color: '#D8ED06',
    fontSize: 40,
    [theme.breakpoints.up('xl')]: {
      fontSize: 80
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: 60,
    }
  },
  img:{
    animation: `$myEffect2 3500ms ${theme.transitions.easing.easeInOut}`
  },
  '@keyframes myEffect': {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)"
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)"
    }
  },
  '@keyframes myEffect2':{
    "0%":{
      opacity: 0,
    },
    "100%":{
      opacity: 1,
    }
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
const Page1 = ({setOpen, open}) => {
  const [t] = useTranslation('global');
  const classes = useStyles();


//*================ Modal Details Handlers ==========================
 const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};
  return (
    <div>
      <Grid container  className={classes.container}>
{/* TEXT */}
         <Grid item xs={12} sm={6} className={classes.text}>
              <Typography variant='body1' className={classes.title} >{t("Home.page1.title")} </Typography>
{/* LOGO */}
              <div className={classes.ts}>
              <Typography variant='h2' className={classes.ts1} >TOKEN</Typography>
              <Typography variant='h3' className={classes.ts2} >SPORT</Typography>
              </div>
{/* Button */}
<CssButton onClick={handleOpen} style={{outline:'none', margin:10}}> {t("Button.SignUp")}  </CssButton>
         </Grid>
{/* IMG Background */}
           <Grid item xs={12} sm={6} className={classes.img}>
           <img src={StadiumTSP2} alt="Stadium" width='100%'   />
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
            <SignUp setOpen={setOpen} page='Home.title' />
          </Grid>
        </Fade>
    </Modal>

    </div>
  )
}

export default Page1
