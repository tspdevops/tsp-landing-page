import React, { useState } from 'react';

//==============Material UI Components=================
import {makeStyles, Button, Fade, Modal, Backdrop, Grid} from '@material-ui/core'

//============Translation Import===============
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
  container:{
    color: 'white',
    display:'flex',
    textAlign:'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    background:'#333333',
    borderRadius: '10px ',
    fontFamily: '"Binaria", sans-serif',
    fontStyle: 'italic',
    width:150,
    height:150,
    marginTop:20,
  },
  button:{ 
    marginTop:10,
    outline:'none',
    fontFamily: '"Binaria", sans-serif',
    borderRadius: "25% 0% ",
    border:'2px solid',
    textTransform: 'capitalize',
    '&:hover':{
      transform: 'scale(1.1,1.1)',
    },
  },
  title:{
    fontSize:15
  },
  name:{
    fontSize: 25,
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
  },
  modal:{
    background:'#333333',
    height:'60%',
    width:'70%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:20,
    borderRadius:'10px',
    [theme.breakpoints.down('xs')]: {
      width:'90%',
    },
  }
}));

const Packs = (props)=>{
  const[t] = useTranslation("global");
  const classes = useStyles();
//========React Hooks==============
  const [open, setOpen] = useState(false);

//*================ Modal Details Handlers ==========================
 const handleOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};


  return(
    <div className={classes.container} 
    style={{boxShadow: `0px 2px 1px 3px ${props.color}`}}
    > 
    <div>
        <h4  className={classes.title} >{t("Packs.pack")}</h4>
        <h2  className={classes.name} style={{color: props.color, lineHeight: 0.4}}>{props.name}</h2>
    </div>
        <Button
        className={classes.button}
        style={{
          outline:'none',
          backgroundColor: props.color,
          filter: `drop-shadow( .1em .1em .25em  ${props.color})`,
        }}
        onClick={handleOpen}
        > {t("Packs.moreInfo")} </Button>


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
          style={{boxShadow: `0px 2px 1px 10px ${props.color}`}}
          >
            {props.name}
          </Grid>
        </Fade>
    </Modal>
    </div>
  )
}

export default Packs