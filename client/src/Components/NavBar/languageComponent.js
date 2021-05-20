import React from "react";
import { withStyles}from "@material-ui/core/styles";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import {ReactComponent as LanguageIcon} from "../../Assets/Imgs/Logos/Svg/language.svg"; 
import {useTranslation} from "react-i18next";
const StyledMenu = withStyles({
  paper: {
    background: '#1C1C1C',
    color: 'white',
  },
})((props) => (
  <Menu
    {...props}
  />
));


export default function LanguageComponent() {
  const [t, i18n] = useTranslation('global')
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleOnClick = (l)=>{
    
    i18n.changeLanguage(l);
    sessionStorage.setItem('lang',l);
  }
  return (
      <div>
        <IconButton
          onClick={handleMenu}
          style={{outline:'none'}}
        >
          <LanguageIcon />
        </IconButton>
        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => handleOnClick("es")}>Español</MenuItem>
          <MenuItem onClick={() => handleOnClick("en")}>English</MenuItem>
          {/* <MenuItem onClick={() => handleOnClick("fr")}>Français</MenuItem> */}
        </StyledMenu>
        </div>
  );
}
