import React, {useState} from 'react';
import '../Assets/Fonts/BinariaFonts.css';
//==============Material UI imports==============
import {makeStyles} from '@material-ui/core/styles';
/*=========== Components =============*/
import Carousel from 'react-material-ui-carousel';
import Page1 from '../Components/Carousel/Page1';
import Page2 from '../Components/Carousel/Page2';
import Page3 from '../Components/Carousel/Page3';
import Page4 from '../Components/Carousel/Page4';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100vw',
    background: '#181818',
    overflow:'hidden',
    [theme.breakpoints.up('xl')]: {
    width:'100%'
    }
  },
}));

export default function Home(){
  const classes = useStyles();
    //========React Hooks==============
    const [open, setOpen] = useState(false);
  return(
    <div className={classes.container}>
      <Carousel
        autoPlay={!open}
        indicators={true}
        timeout={300}
        swipe={true}
        interval={10000}
        stopAutoPlayOnHover={false}
      >
        <Page1 setOpen={setOpen} open={open} /> 
        <Page2/>
        <Page3/>
        <Page4/>
      </Carousel>
      
     </div>
  )
  }
  

  