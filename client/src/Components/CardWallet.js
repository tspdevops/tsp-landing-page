import React from "react";
// =========================Components=========================
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
  container: {
    width:300,
    height:'auto',
    borderRadius: 20,
    background:'#1c1c1c',
    display:'flex',
    justifyContent:'start',
    alignItems:'center',
    flexDirection:'column',
    marginBottom:30,
    padding:20,
    [theme.breakpoints.up('xl')]: {
      width:500
    },  
  },
  textCont:{
    display:'flex',
  },
  text: {
    color: "#D9DB23",
    fontFamily: '"Binaria", sans-serif',
    [theme.breakpoints.up('xl')]: {
      fontSize: 45
    },
  },
 img:{
   marginTop:20,
   backgroundSize:'cover',
   width:'250px',
   height:400
 },
 text2:{
    fontFamily: '"Noto Sans", sans-serif',
    [theme.breakpoints.up('xl')]: {
      fontSize: 25
    },
 }
}));

const CardWallet = ({ id, text, img }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid className={classes.textCont} >
        <Typography variant='h3' className={classes.text} >{id <11 ? `${id +"."}` : ""}</Typography>
        <Typography variant='subtitle1' className={classes.text2}>{text}</Typography>
      </Grid>
      <Grid 
        className={classes.img}
        style={{backgroundImage:`url(${img})`}}
      ></Grid>
    </div>
  );
};

export default CardWallet