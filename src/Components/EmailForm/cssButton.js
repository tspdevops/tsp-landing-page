import { Button, withStyles } from "@material-ui/core";


export const CssButton = withStyles(theme=>({
  root: {
    backgroundColor: '#d8ed06',
    fontFamily: '"Binaria", sans-serif',
    borderRadius: "20px 0% ",
    width: 100,
    fontSize: 16,
    border:'2px solid',
    filter: 'drop-shadow( .1em .1em .25em #d8ed06)',
    textTransform: 'capitalize',
    '&:hover':{
      backgroundColor: '#F4F403',
      transform: 'scale(1.1,1.1)'
    },
    [theme.breakpoints.up('xl')]: {
      width: 200,
      height: 60,
      fontSize:20
    },
  },
  
}))(Button)

