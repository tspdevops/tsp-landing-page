import React from "react";
// ===============Components============================
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import imgBioTSP from "../Assets/Imgs/Logos/Token-Sport-Bg-Logo-1.png"
const useStyles = makeStyles((theme)=>({
  container: {
    borderRadius: 20,
    width: 220,
    height: 370,
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(216,237,6,0.05)",
    textAlign:'center',
    color: "#FFFFFF",
    margin:5,
    // marginBottom:10,
    [theme.breakpoints.up('sm')]: {
      "&:hover": {
        boxShadow:'2px 2px 2.5em black'
      },
    },
    [theme.breakpoints.up('xl')]: {
      width: 350,
      height: 500,
      fontSize: 25
    },
  },
  circle: {
    height: 160,
    width: 160,
    borderRadius: "50%",
    background: "#181818",
    backgroundSize: "cover",
    [theme.breakpoints.up('xl')]: {
      height: 200,
      width: 200,
    },
  },
  name: {
    color: "#D9DB23",
    fontFamily: '"Binaria", sans-serif',
    [theme.breakpoints.up('xl')]: {
      fontSize: 30
    },
  },
  bio: {
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1,1.1)"
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 30
    },
  },
  rol:{
    fontFamily: '"Binaria", sans-serif',
    [theme.breakpoints.up('xl')]: {
      fontSize: 25
    },
  }
}));

const CardBio = ({ name, rol, img, connect }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
{/* IMG */}
      <div
        className={classes.circle}
        style={{ backgroundImage: `url(${imgBioTSP})` }}
      ></div>
{/* Nombre y apellido */}
      <Typography variant="h6" className={classes.name}>
        {name}
      </Typography>
{/* Rol que desempeña */}
      <Typography variant="body1" className={classes.rol} >{rol}</Typography>
{/* Redes (LinkedIn) */}
      {/* <Typography
        variant="body2"
        className={classes.bio}
        onClick={() => {
          window.open(connect, "_blank")
        }}
      >
        LinkedIn
      </Typography>  */}
    </div>
  );
};

export default CardBio