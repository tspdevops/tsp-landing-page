import React from "react";
import { BrowserRouter as  Switch, Route } from "react-router-dom";
// ============Material UI imports==========
import {makeStyles} from '@material-ui/core/styles'
// ============= Pages ==============
import Home from './Pages/Home'
import NavBar from './Components/NavBar/navbarContainer'
import { CssBaseline } from "@material-ui/core";
import Fans from "./Pages/Fans";
import Collabs from "./Pages/Collabs";
import Partners from "./Pages/Partners";
import Market from "./Pages/Market";
import Tsp from "./Pages/Tsp";
import AboutUs from "./Pages/AboutUs";
import Faq from "./Pages/Faq";
import Wallet from "./Pages/Wallet";
// import NotFound from "./Pages/NotFound";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    backgroundColor:'#181818',
    height: '100vh',
}}));

export default function App() {
  const classes = useStyles();
  return(
    <div className={classes.container} >
      <CssBaseline/>
      <Switch>
          <NavBar/>
          <Route exact path='/' component={Home} />
          <Route exact path='/fans' component={Fans}/>
          <Route exact path='/collaborators' component={Collabs}/>
          <Route exact path='/partners' component={Partners}/>
          <Route exact path='/market' component={Market}/>
          <Route exact path='/tsp' component={Tsp}/>
          <Route exact path='/aboutus' component={AboutUs}/>
          <Route exact path='/faq' component={Faq}/>
          <Route exact path='/walletmanual' component={Wallet}/>
          {/* <Route path="/404" component={NotFound} />
          <Redirect to="/404" /> */}
      </Switch>
    </div>
  )
}
