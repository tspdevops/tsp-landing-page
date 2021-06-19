import React, {useState} from 'react'
//=============Material UI imports===============
import {makeStyles, Hidden} from '@material-ui/core'
//===============Components======================
import NavBar from './navBar'
import Box from './box'


const styles = makeStyles(theme => ({
  root: {
    // marginRight: 10
  },
}))

const Container = () => {
  const classes = styles()
  const [open, setOpen] = useState(false)

  const onOpen = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <NavBar onOpen={onOpen} />
      <Hidden smDown>
        <Box variant="permanent" open={open} onClose={onOpen} side={'left'} hidden={true} />
      </Hidden>
      <Hidden mdUp>
        <Box variant="temporary" open={open} onClose={onOpen} side={'left'} hidden={false} docked={false} />
      </Hidden>
    </div>
  )
}

export default Container